import React from 'react'
import Wrapper from '../components/wrapper'
import Comment from 'react-disqus-comments'
import Helmet from 'react-helmet'

import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-okaidia.css'

export default ({ data }) => {
  const post = data.markdownRemark
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
      <Comment
        identifier={ post.fields.slug }
        url="http://fairuzi10.github.io/blog{ post.fields.slug }"
        shortname="fairuzi10-github-io"
      />
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
