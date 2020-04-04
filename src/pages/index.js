import Button from '@/components/button'
import DarkLink from '@/components/dark-link'
import SectionDivider from '@/components/section-divider'
import Wrapper from '@/components/wrapper'
import { blogListUrl } from '@/utils/urls.js'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import React from 'react'
import { Card } from '../components/card'
import { blogTagUrl } from '../utils/urls.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const Post = ({ node }) => {
  const { date, title, description, tags } = node.frontmatter
  const tagsText = tags.map(tag => (
    <Link to={blogTagUrl(tag)} key={tag} className="mx-1">
      #{tag}{' '}
    </Link>
  ))

  return (
    <div key={node.id}>
      <div>{date}</div>
      <h4 className="mt-2">
        <DarkLink to={node.fields.slug}>{title}</DarkLink>
      </h4>
      <div className="mb-2">{description}</div>
      {tagsText}
      <SectionDivider />
    </div>
  )
}

export default ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges
  const postList = postEdges.map(({ node }) => (
    <Post node={node} key={node.fields.slug} />
  ))

  return (
    <Wrapper>
      <div className="row no-gutters">
        <div className="col-12 col-md-8 offset-md-2">
          <Card className="my-3 mx-0 mx-lg-3">
            <h1 className="text-center">Fairuzi10</h1>
            <h6 className="text-center">
              <i>I explain with words and memes</i>
            </h6>
          </Card>
          <div className="py-3 px-lg-3">
            <Card>
              <h4 className="text-center">
                <DarkLink to="/blog/">Latest Blog</DarkLink>
              </h4>
              <SectionDivider />
              {postList}
              <div className="d-flex justify-content-center">
                <div className="col-12 col-md-8">
                  <Link
                    to={blogListUrl(1)}
                    className="text-decoration-none d-block"
                  >
                    <Button block size="lg">
                      Lihat Selengkapnya
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>{' '}
      </div>
    </Wrapper>
  )
}

export const query = graphql`
  query blogHomepageQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            tags
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
