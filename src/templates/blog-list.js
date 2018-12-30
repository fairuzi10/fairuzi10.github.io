import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Pagination from '../components/pagination'
import Wrapper from '../components/wrapper'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

export const Post = ({ node }) => {
  const { date, title, description, tags } = node.frontmatter
  const tagsText = tags.map(tag => (
    <Link to={`/blog/tag/${tag}/`} key={tag} className='mx-1'>#{tag} </Link>
  ))
  const thumbnail = node.frontmatter.thumbnail ?
    node.frontmatter.thumbnail.childImageSharp.fluid :
    ''

  return (
    <div key={node.id}>
      <div>{date}</div>
      <h2>
        <Link  to={ `/blog${node.fields.slug}` } className="black-link">
          {title}
        </Link>
      </h2>
      { thumbnail &&
        <div className="py-4 text-center row">
          <div className="col-12 col-md-8 offset-md-2">
            <Link  to={ `/blog${node.fields.slug}` }>
              <Img fluid={thumbnail}></Img>
            </Link>
          </div>
        </div> }
      <div>{description}</div>
      {/* <div className="row py-3">
        <div className="col-3">
          { thumbnail &&
            <div className="text-center">
              <Link  to={ `/blog${node.fields.slug}` }>
                <Img fluid={thumbnail}></Img>
              </Link>
            </div> }
        </div>
        <div className="col-9">{description}</div>
      </div> */}
      {tagsText}
      <hr className="my-4"/>
    </div>
  )
}

const IndexPage = ({ data, pageContext }) => {
  const edges = data.allMarkdownRemark.edges
  const postList = edges.map(({ node }) => <Post node={node} key={node.fields.slug}/>);
  const { page, pageCount } = pageContext

  return (
    <Wrapper single>
      <Helmet
        title='Blog'
        meta={[
          { name: 'description', content: 'Kumpulan cerita milik Muhammad Fairuzi Teguh tentang olimpiade\
  komputer, Universitas Indonesia, dan lain sebagainya.' },
        ]}
      />
      {postList}
      <div className="d-flex justify-content-center">
        <Pagination index={page} pageCount={pageCount} />
      </div>
    </Wrapper>
  )
}

export const query = graphql`
query blogListQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
  ) {
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

export default IndexPage
