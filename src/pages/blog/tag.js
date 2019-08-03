import Card from '@/components/card'
import Wrapper from '@/components/wrapper'
import { blogTagUrl } from '@/utils/urls'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import React from 'react'
import Helmet from 'react-helmet'

const TagsPage = ({
  data: {
    allMdx: { group }
  }
}) => {
  const tagList = group.map(tag => (
    <h6 key={tag.fieldValue}>
      <Link to={blogTagUrl(tag.fieldValue)}>
        {`${tag.fieldValue} (${tag.totalCount})`}
      </Link>
    </h6>
  ))

  return (
    <Wrapper single>
      <Helmet title="label" />
      <Card className="mb-3">
        <h2>Daftar Label</h2>
      </Card>
      <Card>{tagList}</Card>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query TagsQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
export default TagsPage
