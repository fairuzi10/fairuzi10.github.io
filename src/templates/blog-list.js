import React from 'react'
import Link from 'gatsby-link'
import Pagination from '../components/pagination'
import Reg from '../components/reg'
import { Row } from 'reactstrap'
import {
  StretchContainer,
  Stretch
} from '../components/stretch'
 
const IndexPage = ({ pathContext }) => {
  const { group, index, pageCount } = pathContext

  return (
    <Reg>
      <StretchContainer>
        <Stretch className="text-left">
          {group.map(({ node }) => (
            <div key={node.id}>
              <div>{node.frontmatter.date}</div>
              <h1><Link  to={ `/blog${node.fields.slug}` } className="blog-link">
                {node.frontmatter.title}
              </Link></h1>
              <div>{node.excerpt}</div>
              <hr className="my-4"/>
            </div>
          ))}
        </Stretch>
        <Row className="justify-content-center">
          <Pagination index={index} pageCount={pageCount} />
        </Row>
      </StretchContainer>
    </Reg>
  )
}
export default IndexPage