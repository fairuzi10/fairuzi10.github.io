import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-okaidia.css'

import { Global } from '@emotion/core'
import { DiscussionEmbed } from 'disqus-react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Helmet from 'react-helmet'

import Card from '../components/card'
import DarkLink from '../components/dark-link'
import SectionDivider from '../components/section-divider'
import Wrapper from '../components/wrapper'
import blogStyles from '../styles/blog'
import { blogTagUrl, blogUrl } from '../utils/urls'
import settings from '../settings'

export default ({ data }) => {
  const post = data.post
  const { title, description, date, tags, thumbnail } = post.frontmatter
  const disqusConfig = {
    url: `${settings.siteMetadata.siteUrl}/blog${post.fields.slug}`,
    identifier: `/blog${post.fields.slug}`,
    title: post.frontmatter.title
  }

  const tagsText = tags.map(tag => (
    <Link to={blogTagUrl(tag)} key={tag} className="mx-1">
      #{tag}{' '}
    </Link>
  ))
  const relatedPost = data.relatedPost.edges.map(nodeObject => {
    const node = nodeObject.node
    const { title, description } = node.frontmatter
    return (
      <div className="col-md-6 pt-3" key={node.id}>
        <strong>
          <DarkLink to={blogUrl(node.fields.slug)}>{title}</DarkLink>
        </strong>
        <br />
        {description}
      </div>
    )
  })

  return (
    <Wrapper single>
      <Helmet>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={thumbnail.publicURL} />
      </Helmet>
      <Card className="mb-3">
        <Global styles={blogStyles} />
        {date}
        <SectionDivider />
        <h1>{title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
        <SectionDivider />
        {tagsText}
        <SectionDivider />
        <div>
          <strong>
            <span className="black-link">Related Post:</span>
          </strong>
          <br />
          <div className="row">{relatedPost}</div>
        </div>
        <SectionDivider />
      </Card>
      <Card>
        <DiscussionEmbed
          shortname="fairuzi10-github-io"
          config={disqusConfig}
        />
      </Card>
    </Wrapper>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!, $tags: [String]!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        tags
        thumbnail {
          publicURL
        }
      }
      fields {
        slug
      }
    }
    relatedPost: allMdx(
      limit: 2
      sort: { fields: [frontmatter___weight], order: DESC }
      filter: {
        frontmatter: { tags: { in: $tags } }
        fields: { slug: { ne: $slug } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
