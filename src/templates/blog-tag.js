import Card from '@/components/card'
import { graphql } from 'gatsby'
import React from 'react'

import Pagination from '../components/pagination'
import Wrapper from '../components/wrapper'
import { FilterTag, Post } from './blog-list'
import { blogTagUrl } from 'utils/urls'

const Page = ({ data, pageContext }) => {
  const edges = data.filteredPostList.edges
  const postList = edges.map(({ node }) => (
    <Post node={node} key={node.fields.slug} />
  ))
  const { page, pageCount, tag } = pageContext

  return (
    <Wrapper single>
      <FilterTag.Component tagList={data.allPostList.tagList} active={tag} />
      <Card className="mb-3">{postList}</Card>
      <div className="d-flex justify-content-center">
        <Pagination
          index={page}
          pageCount={pageCount}
          urlBuilder={blogTagUrl(tag)}
        />
      </div>
    </Wrapper>
  )
}

export const query = graphql`
  query blogTagQuery($skip: Int!, $limit: Int!, $tag: String!) {
    filteredPostList: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
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
    allPostList: allMarkdownRemark {
      tagList: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default Page
