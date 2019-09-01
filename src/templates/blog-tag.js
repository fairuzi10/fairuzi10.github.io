import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Wrapper from '../components/wrapper'
import Pagination from '../components/pagination'
import { Post } from './blog-list'
import Card from '@/components/card'

const Page = ({ data, pageContext }) => {
  const edges = data.allMarkdownRemark.edges
  const postList = edges.map(({ node }) => (
    <Post node={node} key={node.fields.slug} />
  ))
  const { page, pageCount, tag } = pageContext
  const postCount = data.allMarkdownRemark.totalCount

  return (
    <Wrapper single>
      <Card className="mb-3">
        <h4>
          {postCount} pos dilabeli dengan #{tag}
        </h4>
        <h6>
          Lihat <Link to="/blog/tag/">semua label</Link>
        </h6>
      </Card>
      <Card className="mb-3">{postList}</Card>
      <div className="d-flex justify-content-center">
        <Pagination index={page} pageCount={pageCount} />
      </div>
    </Wrapper>
  )
}

export const query = graphql`
  query blogTagQuery($skip: Int!, $limit: Int!, $tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            description
            tags
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Page
