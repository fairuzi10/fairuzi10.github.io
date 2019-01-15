const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const uniq = require('lodash/uniq');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/blog/`,
  })

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges
      createBlogPost(createPage, graphql, posts)
      createBlogList(createPage, graphql, posts)
      createTagPages(createPage, graphql, posts)
      resolve();
    })
  });
}

const createBlogPost = (createPage, graphql, posts) => {
  posts.forEach(({ node }) => {
    createPage({
      path: 'blog' + node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
        tags: node.frontmatter.tags || [], // bug, sometimes tags is null in hot reload.
      },
    })
  })
}
const createBlogList = (createPage, graphql, posts) => {
  const postsPerPage = 7
  const pageCount = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: pageCount }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        page: i + 1,
        pageCount,
      },
    })
  })
}

const createTagPages = (createPage, graphql, posts) => {
  const tags = posts.reduce((acc, edge) =>
    edge.node.frontmatter.tags ?
      acc.concat(edge.node.frontmatter.tags) :
      acc
    , [])
  const uniqueTags = uniq(tags)

  uniqueTags.forEach((tag, i) => {
    graphql(`
      {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              tags: { in: ["${tag}"] }
            }
          }
        ) {
          totalCount
        }
      }
    `).then(({ data }) => {
      const postsCount = data.allMarkdownRemark.totalCount
      const postsPerPage = 7
      const pageCount = Math.ceil(postsCount / postsPerPage)
      Array.from({ length: pageCount }).forEach((_, i) => {
        createPage({
          path: `blog/tag/${tag}/`,
          component: path.resolve("./src/templates/blog-tag.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            page: i + 1,
            pageCount,
            tag
          },
        })
      })
    })
  })
}
