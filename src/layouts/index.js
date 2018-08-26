import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styled from 'react-emotion'
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
        { name: 'google-site-verification', content: 'uu3IRN8Av5aq9r0lEKhIJjoLFIi1T8TFKymt0f-68bk' },
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
