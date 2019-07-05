import DarkLink from '@/components/dark-link'
import Button from '@/components/button'
import { Card } from '@/components/card'
import SectionDivider from '@/components/section-divider'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import React from 'react'
import Helmet from 'react-helmet'

import Wrapper from '../components/wrapper.js'
import { blogListUrl, blogUrl } from '../utils/urls.js'
import { projectsMetaData } from './project/index.js'

const Post = ({ node }) => {
  const { date, title, description, tags } = node.frontmatter
  const tagsText = tags.map(tag => (
    <Link to={`/blog/tag/${tag}/`} key={tag} className="mx-1">
      #{tag}{' '}
    </Link>
  ))

  return (
    <div key={node.id}>
      <div>{date}</div>
      <h4>
        <DarkLink to={blogUrl(node.fields.slug)}>{title}</DarkLink>
      </h4>
      <div>
        <small>{description}</small>
      </div>
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

  const projectList = projectsMetaData.map(metaData => (
    <div key={metaData.url}>
      <h4>
        <DarkLink to={metaData.url}>{metaData.name}</DarkLink>
      </h4>
      <div>
        <small>{metaData.description}</small>
      </div>
      <SectionDivider />
    </div>
  ))

  return (
    <Wrapper>
      <Helmet
        meta={[
          {
            name: 'description',
            content:
              'Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita mengenai hidup seperti kehidupan perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika.'
          }
        ]}
      />
      <Card>
        <h1 className="text-center">Fairuzi10</h1>
        <h6 className="text-center">
          <i>I explain with words and memes</i>
        </h6>
      </Card>
      <div className="row">
        <div className="col-12 col-lg-7">
          <Card>
            <DarkLink to="/blog/">
              <h4 className="text-center">Latest Blogs</h4>
            </DarkLink>
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
        </div>{' '}
        <div className="col-12 col-lg-5">
          <Card>
            <h4 className="text-center">
              <DarkLink to="/project/">Cool Projects</DarkLink>
            </h4>
            <SectionDivider />
            {projectList}
          </Card>
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
