import React from 'react'
import Link from 'gatsby-link'
import Pagination from '../components/pagination'
import Reg from '../components/reg'
import Helmet from 'react-helmet'

const IndexPage = ({ pathContext }) => {
  const { group, index, pageCount } = pathContext

  return (
    <Reg>
      <Helmet
        title='Fairuzi10 | Blog'
        meta={[
          { name: 'description', content: 'Kumpulan cerita milik Muhammad Fairuzi Teguh tentang olimpiade\
  komputer, Universitas Indonesia, dan lain sebagainya.' },
        ]}
      />
      {group.map(({ node }) => (
        <div key={node.id}>
          <div>{node.frontmatter.date}</div>
          <h1><Link  to={ `/blog${node.fields.slug}` } className="black-link">
            {node.frontmatter.title}
          </Link></h1>
          <div>{node.frontmatter.description}</div>
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