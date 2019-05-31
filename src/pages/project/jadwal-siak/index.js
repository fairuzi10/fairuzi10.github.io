import Helmet from 'react-helmet'
import React from 'react'
import Vue from 'vue'
import { projectUrl } from '../../../utils/urls';

export const metaData = {
  name: 'Jadwal SIAK',
  url: projectUrl('jadwal-siak'),
  description: 'Atur jadwalmu dan jadilah pemenang SIAK War!',
}

// hacky trick to overcome the Helmet lazy refresh problem.
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV == 'development') {
  window.Vue = Vue
}

export default () => {
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Susun jadwal SIAK-mu di sini dan pastikan kamulah juaranya.' },
        ]}
        script={[
          { src: 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js' },
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js' },
          { src: '/jadwal-siak/dist/jadwal-siak.min.js' },
        ]}
      />
      <jadwal-siak></jadwal-siak>
    </div>
  )
}
