import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import Helmet from 'react-helmet'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { StretchContainer } from '../components/stretch'
import globalStyles from './global-styes'

const FullPage = styled.div({
  minHeight: '100vh',
  height: '1px'
})

const Layout = ({ children }) => {
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
