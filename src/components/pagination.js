import Link from 'gatsby-link'
import React from 'react'
import { Pagination, PaginationItem } from 'reactstrap'

export default ({ index, pageCount, urlBuilder }) => {
  let page = []
  for (var i = Math.max(1, index - 2); i <= Math.min(index + 2, pageCount); i++)
    page.push(i)
  return (
    <Pagination>
      <PaginationItem disabled={index === 1}>
        <Link to={urlBuilder(index - 1)} className="page-link">
          «
        </Link>
      </PaginationItem>
      {page.map(val => (
        <PaginationItem key={val} disabled={val === index}>
          <Link to={urlBuilder(val)} className="page-link">
            {val}
          </Link>
        </PaginationItem>
      ))}
      <PaginationItem disabled={index === pageCount}>
        <Link to={urlBuilder(index + 1)} className="page-link">
          »
        </Link>
      </PaginationItem>
    </Pagination>
  )
}
