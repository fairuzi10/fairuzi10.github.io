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
  height: '1px',
  paddingTop: '100px'
})

const Layout = ({ children }) => {
  return (
    <FullPage>
      <Helmet
        htmlAttributes={{
          lang: 'id'
        }}
      >
        <title>Fairuzi10</title>
        <meta name="og:title" content="Fairuzi10" />
        <meta
          name="description"
          content="Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita mengenai hidup seperti perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika."
        />
        <meta
          name="description"
          content="Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita mengenai hidup seperti perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika."
        />
        <meta
          name="og:description"
          content="Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita mengenai hidup seperti perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika."
        />
        <meta name="og:image" content={require('@/favicon.png')} />
        <meta
          name="google-site-verification"
          content="uu3IRN8Av5aq9r0lEKhIJjoLFIi1T8TFKymt0f-68bk"
        />
      </Helmet>
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
