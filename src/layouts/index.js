import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styled from 'styled-components'
import {
  StretchContainer,
} from '../components/stretch'
import './index.css'

const FullPage = styled.div`
  min-height: 100vh;
  height: 1px;
`

const TemplateWrapper = ({ children }) => (
  <FullPage>
    <Helmet
      title='Fairuzi10'
      meta={[
        { name: 'description', content: 'Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita\
mengenai hidup terutama pemgrograman kompetitif/OSN' },
        { name: 'keywords', content: 'Muhammad Fairuzi Teguh OSN komputer informatika cerita meme proyek\
belajar CP pemrograman kompetitif competitive programming' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Arvo'},
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.css'}
      ]}
    />
    <StretchContainer>
      <Navbar/>
      { children() }
      <Footer/>
    </StretchContainer>
  </FullPage>
)

export default TemplateWrapper
