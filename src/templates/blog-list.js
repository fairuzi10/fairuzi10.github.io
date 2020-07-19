import Card from '@/components/card'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import React from 'react'
import Helmet from 'react-helmet'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

import { LinkButton } from '../components/button'
import { HoverableImage } from '../components/HoverableImage'
import Pagination from '../components/pagination'
import Wrapper from '../components/wrapper'
import { blogTagUrl, blogUrl } from '../utils/urls'
import { COLOR } from 'styles/theme'

export const Title = styled(LinkButton)`
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  padding: 8px 16px 8px 64px;
  border-radius: 16px;
  margin-left: -64px;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Post = ({ node }) => {
  const { date, title, description, tags } = node.frontmatter
  const tagsText = tags.map(tag => (
    <Link to={blogTagUrl(tag)} key={tag} className="mx-1">
      #{tag}{' '}
    </Link>
  ))
  const thumbnail = node.frontmatter.thumbnail
    ? node.frontmatter.thumbnail.childImageSharp.fluid
    : ''

  return (
    <div key={node.id}>
      <div>
        {date} · {`${node.timeToRead} min read`}
      </div>
      <div>
        <Title to={blogUrl(node.fields.slug)}>{title}</Title>
      </div>
      {thumbnail && (
        <div className="text-center row">
          <div className="col-12 col-md-8 offset-md-2">
            <Link to={blogUrl(node.fields.slug)}>
              <HoverableImage fluid={thumbnail} />
            </Link>
          </div>
        </div>
      )}
      <div>{description}</div>
      {tagsText}
      <hr className="my-4" />
    </div>
  )
}

export const FilterTag = {}
FilterTag.DropdownToggle = styled(DropdownToggle)`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  font-size: 1.1rem;
  padding: 0.5rem 1rem 0.5rem 3rem;
  background: ${COLOR.gradGreenBlue};
  border: none;
  text-align: right;
  color: ${COLOR.dark} !important;
  transition: all 0.15s ease-in-out;
  font-weight: bold;
  :hover {
    opacity: 0.9;
  }
  :focus {
    box-shadow: none !important;
  }
`
FilterTag.Menu = styled(DropdownMenu)`
  outline: none !important;
`
FilterTag.Item = styled(DropdownItem)`
  color: ${COLOR.dark} !important;
  :focus {
    outline: none;
  }
  :hover,
  :active,
  &.active {
    background: ${COLOR.gradGreenBlue};
  }
`
FilterTag.Link = styled(Link)`
  :hover {
    text-decoration: none;
  }
`
FilterTag.Component = ({ tagList, active }) => {
  return (
    <div className="d-flex justify-content-end mb-3">
      <UncontrolledDropdown setActiveFromChild>
        <FilterTag.DropdownToggle caret>
          {active ? active : 'Filter Tag'}
        </FilterTag.DropdownToggle>
        <FilterTag.Menu right>
          {tagList.map(tag => (
            <FilterTag.Link to={blogTagUrl(tag.fieldValue)}>
              <FilterTag.Item
                key={tag.fieldValue}
                active={tag.fieldValue === active}
              >
                {tag.fieldValue}
              </FilterTag.Item>
            </FilterTag.Link>
          ))}
        </FilterTag.Menu>
      </UncontrolledDropdown>
    </div>
  )
}

const IndexPage = ({ data, pageContext }) => {
  const edges = data.filteredPostList.edges
  const postList = edges.map(({ node }) => (
    <Post node={node} key={node.fields.slug} />
  ))
  const { page, pageCount } = pageContext

  return (
    <Wrapper single>
      <Helmet>
        <title>Blog</title>
        <meta name="og:title" content="Blog" />
        <meta
          name="description"
          content="Kumpulan cerita tentang olimpiade komputer, Universitas Indonesia, dan Software Engineering"
        />
        <meta
          name="og:description"
          content="Kumpulan cerita tentang olimpiade komputer, Universitas Indonesia, dan Software Engineering"
        />
      </Helmet>
      <FilterTag.Component tagList={data.allPostList.tagList} />
      <Card>{postList}</Card>
      <div className="d-flex justify-content-center mt-4">
        <Pagination index={page} pageCount={pageCount} />
      </div>
    </Wrapper>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    filteredPostList: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      tagList: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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
                fluid(quality: 90) {
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

export default IndexPage
