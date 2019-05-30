import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { graphql } from 'gatsby'
import Wrapper from '../../components/wrapper'
import { blogTagUrl } from '../../utils/urls';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
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
      <Helmet title='label' />
      <div>
        <h2>Daftar Label</h2>
        { tagList }
      </div>
    </Wrapper>
  )
};

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
export default TagsPage
