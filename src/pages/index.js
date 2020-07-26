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
import { blogTagUrl } from '../utils/urls.js'

const Post = ({ node }) => {
  const { date, title, description, tags } = node.frontmatter
  const tagsText = tags.map(tag => (
    <Link to={blogTagUrl(tag)(1)} key={tag} className="mx-1">
      #{tag}{' '}
    </Link>
  ))

  return (
    <div key={node.id}>
      <div>
        {date} · {`${node.timeToRead} min read`}
      </div>
      <div>
        <Title to={node.fields.slug}>{title}</Title>
      </div>
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
          <Card className="bg-grad-green-blue mx-3">
            <form
              method="POST"
              action="https://getform.io/f/7d498883-1801-4258-acb1-9d58cebf7eac"
            >
              <h4>Kotak Saran</h4>
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Nama (opsional)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="suggestion">Saran</label>
                <textarea
                  className="form-control"
                  id="suggestion"
                  name="suggestion"
                  placeholder="Saran konten, penyuntingan, atau apa pun"
                  rows="4"
                />
              </div>
              <button type="submit" className="d-block ml-auto btn btn-light">
                Kirim
              </button>
            </form>
          </Card>
        </div>
      </div>
      {/* <Helmet>
        <script src="https://kwes.io/js/kwes.js"></script>
      </Helmet> */}
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
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
