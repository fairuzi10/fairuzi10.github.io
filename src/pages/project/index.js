import React from 'react'
import Link from 'gatsby-link'
import Reg from '../../components/reg'
import Helmet from 'react-helmet'

const IndexPage = ({ pathContext }) => {
  const { group, index, pageCount } = pathContext

  return (
    <Reg>
      <Helmet
        title='Project'
        meta={[
          { name: 'description', content: 'Berbagai proyek yang telah saya kerjakan.' },
        ]}
      />
      <h1><Link  to='/project/oskp/' className="black-link">
        OSKP
      </Link></h1>
      <div>Kumpulan slide yang dapat digunakan untuk belajar Olimpiade Sains Nasional (OSN) Komputer/Informatika</div>
      <hr className="my-4"/>
    </Reg>
  )
}
export default IndexPage