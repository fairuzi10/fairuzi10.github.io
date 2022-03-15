import Button from '@/components/button'
import DarkLink from '@/components/dark-link'
import SectionDivider from '@/components/section-divider'
import Wrapper from '@/components/wrapper'
import { blogListUrl } from '@/utils/urls.js'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import React from 'react'

import { Card } from '../components/card'
import { Title } from '../templates/blog-list'
import { HoverableImage } from '../components/HoverableImage'
import { blogTagUrl, blogUrl } from '../utils/urls.js'
import SuggestionForm from '../components/suggestion-form'

export const Post = ({ node }) => {
  const { date, title, description, tags } = node.frontmatter
  const tagsText = tags.map(tag => (
    <Link to={blogTagUrl(tag)(1)} key={tag} className="mx-1">
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
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-md-3">
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

export default ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges
  const postList = postEdges.map(({ node }) => (
    <Post node={node} key={node.fields.slug} />
  ))

  return (
    <Wrapper>
      <div className="row no-gutters py-3">
        <div className="col-12 col-lg-8">
          <div className="mx-3">
            <Card className="mb-3">
              <h1 className="text-center">Fairuzi10</h1>
              <h6 className="text-center">
                <i>I explain with words and memes</i>
              </h6>
            </Card>
            <div>
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
          </div>
        </div>
        <div className="col-12 col-lg-4 mt-5 mt-lg-0">
          <SuggestionForm />
        </div>
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
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            tags
            description
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
  }
`
