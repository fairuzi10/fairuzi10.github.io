import React from 'react'
import Layout from './layout.js'
import { Stretch } from '../components/stretch'

/**
 * Single means one page only contains 1 column.
 * Mid means one page only contains 1 column and should be positioned in the center
 */
export default ({ children, single, mid }) => {
  if (mid) single = true
  const colProps = single ? 'col-md-10 col-lg-9 col-xl-8' : ''
  return (
    <Layout>
      <Stretch className={mid ? 'd-flex align-items-center text-center' : ''}>
        <div className="container">
          <div className="row no-gutters justify-content-center">
            <div className={`col ${colProps}`}>{children}</div>
          </div>
        </div>
      </Stretch>
    </Layout>
  )
}
