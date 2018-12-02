import React from 'react'
import Wrapper from '../components/wrapper'
import { DiscussionEmbed } from 'disqus-react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-okaidia.css'

export default ({ data }) => {
  const post = data.markdownRemark
  const disqusConfig = {
    url: 'http://fairuzi10.github.io/blog' + post.fields.slug,
    identifier: 'blog' + post.fields.slug,
    title: post.frontmatter.title,
  }
  return (
    <Wrapper single>
      <Helmet
        title={post.frontmatter.title}
        meta={[
          { name: 'description', content: post.frontmatter.description },
        ]}
      />
      { post.frontmatter.date }
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} className="blog-post" />
      <hr />
      <DiscussionEmbed shortname="fairuzi10-github-io" config={disqusConfig} />
    </Wrapper>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
      }
      fields {
        slug
      }
    }
  }
`
