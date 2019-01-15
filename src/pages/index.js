import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {
  Button,
} from 'reactstrap'
import Wrapper from '../components/wrapper.js'

export default () => (
  <Wrapper mid>
    <Helmet
      meta={[
        { name: 'description', content: 'Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita\
mengenai hidup seperti kehidupan perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika.' },
      ]}
    />
    <h1>Selamat Datang di Website Fairuzi10</h1>
    <h5 className="my-4">Website ini merupakan kumpulan dari cerita-cerita 
    saya yang nirfaedah, tutorial karena saya pelupa, dan proyek-proyek yang tentunya tidak berguna.</h5>
    <Link to='/blog/'><Button color="primary" className='m-2'>Blog</Button></Link>
    <Link to='/project/'><Button color="primary" className='m-2'>Project</Button></Link>
    <Link to='/meme/'><Button color="primary" className='m-2'>Meme</Button></Link>
  </Wrapper>
)
