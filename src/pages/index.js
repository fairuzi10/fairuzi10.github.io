import React from 'react'
import Link from 'gatsby-link'
import {
  Button,
} from 'reactstrap'
import Mid from '../components/mid.js'

export default () => (
  <Mid>
    <h1>Selamat Datang di Website Fairuzi10</h1>
    <h5 className="my-4">Website ini merupakan kumpulan dari cerita-cerita saya yang nirfaedah, 
      tutorial karena saya pelupa, dan proyek-proyek yang tentunya tidak berguna.</h5>
    <Link to='/blog'><Button color="primary" className='m-2'>Blog</Button></Link>
    <Link to='/project'><Button color="primary" className='m-2'>Project</Button></Link>
  </Mid> 
)
