import React from 'react'
import Link from 'gatsby-link'
import Pagination from '../components/pagination'
import Reg from '../components/reg'
 
const IndexPage = ({ pathContext }) => {
  const { group, index, pageCount } = pathContext

  return (
    <Reg>
      {group.map(({ node }) => (
        <div key={node.id}>
          <div>{node.frontmatter.date}</div>
          <h1><Link  to={ `/blog${node.fields.slug}` } className="black-link">
            {node.frontmatter.title}
          </Link></h1>
          <div>{node.excerpt}</div>
          <hr className="my-4"/>
        </div>
      ))}
      <div className="d-flex justify-content-center">
        <Pagination index={index} pageCount={pageCount} />
      </div>
    </Reg>
  )
}
export default IndexPage