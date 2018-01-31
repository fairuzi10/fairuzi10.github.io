import React from 'react'
import Reg from '../components/reg'
import Comment from 'react-disqus-comments'
import {
  Row,
  Col,
} from 'reactstrap'

import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-okaidia.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Reg>
      { post.frontmatter.date }
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <div className="text-justify" dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <Comment
        identifier={ post.fields.slug }
        url="http://fairuzi10.github.io/blog{ post.fields.slug }"
        shortname="fairuzi10-github-io"
      />
    </Reg>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
      fields {
        slug
      }
    }
  }
`