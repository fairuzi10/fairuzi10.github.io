const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const createPaginatedPages = require('gatsby-paginate');
const uniq = require('lodash/uniq');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                description
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges;
      createPaginatedPages({
        edges: posts,
        createPage: createPage,
        pageTemplate: "src/templates/blog-list.js",
        pageLength: 7, // This is optional and defaults to 10 if not used
        pathPrefix: "blog", // This is optional and defaults to an empty string if not used
      })

      posts.forEach(({ node }) => {
        createPage({
          path: 'blog' + node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })

      let tags = [];
      posts.forEach(edge => {
        tags = tags.concat(edge.node.frontmatter.tags)
      })
      tags = uniq(tags)

      tags.forEach(tag => {
        graphql(`
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: ["${tag}"] } } }
          ) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "DD MMMM YYYY")
                  description
                  tags
                }
                fields {
                  slug
                }
              }
            }
          }
        }`).then(result => {
          createPaginatedPages({
            edges: result.data.allMarkdownRemark.edges,
            createPage: createPage,
            pageTemplate: "src/templates/blog-tag.js",
            pageLength: 7, // This is optional and defaults to 10 if not used
            pathPrefix: `blog/tag/${tag}/`, // This is optional and defaults to an empty string if not used
            context: {
              tag,
              totalCount: result.data.allMarkdownRemark.totalCount,
            },
          })
        })
      })

      resolve();
    })
  });
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/cv/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = "no-layout";

      // Update the page.
      createPage(page);
    }

    resolve();
  });
};
