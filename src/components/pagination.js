import React from 'react'
import Link from 'gatsby-link'
import { Pagination, PaginationItem } from 'reactstrap'

export default ({ index, pageCount }) => {
  let page = []
  for (var i = Math.max(1, index - 2); i <= Math.min(index + 2, pageCount); i++)
    page.push(i)
  return (
    <Pagination>
      <PaginationItem disabled={index === 1}>
        <Link
          to={`/blog${index - 1 > 1 ? `/${index - 1}` : ''}`}
          className="page-link"
        >
          «
        </Link>
      </PaginationItem>
      {page.map(val => (
        <PaginationItem key={val} disabled={val === index}>
          <Link to={`/blog${val > 1 ? `/${val}` : ''}`} className="page-link">
            {val}
          </Link>
        </PaginationItem>
      ))}
      <PaginationItem disabled={index === pageCount}>
        <Link to={`/blog/${index + 1}`} className="page-link">
          »
        </Link>
      </PaginationItem>
    </Pagination>
  )
}
