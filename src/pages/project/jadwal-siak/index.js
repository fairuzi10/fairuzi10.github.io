import Helmet from 'react-helmet'
import React from 'react'
import Vue from 'vue'

export default () => {
  // don't place it outside of the function because window is not defined in webpack (server side)
  window.Vue = Vue
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Susun jadwal SIAK-mu di sini dan pastikan kamulah juaranya.' },
        ]}
        script={[
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js' },
          { src: '/jadwal-siak/dist/jadwal-siak.min.js' },
        ]}
      />
      <jadwal-siak></jadwal-siak>
    </div>
  )
}
