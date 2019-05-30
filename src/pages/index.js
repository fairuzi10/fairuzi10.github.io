import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';
import Helmet from 'react-helmet';
import { Col, Row } from 'reactstrap';

import { BlackLink, Card, SectionDivider } from '../components/utils.js';
import Wrapper from '../components/wrapper.js';
import { projectsMetaData } from './project/index.js';
import { blogUrl } from '../utils/urls.js';

const Post = ({ node }) => {
  const { date, title, description, tags } = node.frontmatter
  const tagsText = tags.map(tag => (
    <Link to={`/blog/tag/${tag}/`} key={tag} className='mx-1'>#{tag} </Link>
  ))

  return (
    <div key={node.id}>
      <div>{date}</div>
      <h4>
        <BlackLink to={blogUrl(node.fields.slug)}>
          {title}
        </BlackLink>
      </h4>
      <div><small>{ description }</small></div>
      {tagsText}
      <SectionDivider/>
    </div>
  )
}

export default ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges
  const postList = postEdges.map(({ node }) => <Post node={node} key={node.fields.slug}/>);

  const projectList = projectsMetaData.map(metaData => (
    <div key={metaData.url}>
      <h4><BlackLink to={metaData.url}>{metaData.name}</BlackLink></h4>
      <div><small>{metaData.description}</small></div>
      <SectionDivider/>
    </div>
  ))

  return (
    <Wrapper>
      <Helmet
        meta={[
          { name: 'description', content: 'Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita\
  mengenai hidup seperti kehidupan perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika.' },
        ]}
      />
      <Card>
        <h1 className="text-center">Selamat Datang di Website Fairuzi10</h1>
        <SectionDivider/>
      </Card>
      <Row>
        <Col xs="12" lg="7">
          <Card>
            <BlackLink to='/blog/'><h4 className='text-center'>Latest Blogs</h4></BlackLink>
            <SectionDivider/>
            { postList }
          </Card>
        </Col>
        <Col xs="12" lg="5">
          <Card>
            <BlackLink to='/project/'>
              <h4 className="text-center">Cool Projects</h4>
              <SectionDivider/>
            </BlackLink>
            { projectList }
          </Card>
        </Col>
      </Row>
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
