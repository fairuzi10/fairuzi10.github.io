import React from 'react';
import Reg from '../components/reg'
import Comment from 'react-disqus-comments'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-okaidia.css';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Reg>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <div className="my-3">
        Posted on { post.frontmatter.date }
      </div>
      <hr />
      <Comment
        identifier={ post.fields.slug }
        url="http://fairuzi10.github.io/blog{ post.fields.slug }"
        shortname="fairuzi10-github-io"
      />
    </Reg>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        slug
      }
    }
  }
`;