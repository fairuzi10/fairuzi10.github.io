import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { StretchContainer } from '../components/stretch'
import globalStyles from './global-styes'

const FullPage = styled.div({
  minHeight: '100vh',
  height: '1px'
})

const Layout = ({ children }) => {
  useEffect(() => {
    const loadingStyle = document.getElementById('loading-style')
    const loadingBody = document.getElementById('loading-body')
    if (loadingStyle) loadingStyle.remove()
    if (loadingBody) loadingBody.remove()
  }, [])
  return (
    <FullPage>
      <Helmet
        title="Fairuzi10"
        htmlAttributes={{
          lang: 'id'
        }}
        meta={[
          {
            name: 'google-site-verification',
            content: 'uu3IRN8Av5aq9r0lEKhIJjoLFIi1T8TFKymt0f-68bk'
          }
        ]}
      />
      <Global styles={globalStyles} />
      <StretchContainer>
        <Navbar />
        {children}
        <Footer />
      </StretchContainer>
    </FullPage>
  )
}

export default Layout
