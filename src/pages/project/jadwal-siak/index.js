import React from 'react';
import Helmet from 'react-helmet';

import { projectUrl } from '../../../utils/urls';

export const metaData = {
  name: 'Jadwal SIAK',
  url: projectUrl('jadwal-siak'),
  description: 'Atur jadwalmu dan jadilah pemenang SIAK War!',
}

export default () => {
  // A black magic to load script in order
  const loadAsync = (u, c) => {
    var d = document, t = 'script',
      o = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
    o.src = u;
    if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
    s.parentNode.insertBefore(o, s);
  }

  if (typeof document !== 'undefined') {
    const vueCdn = 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js'
    const webCompCdn = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js'
    const jadwalSiakJs = '/jadwal-siak/dist/jadwal-siak.min.js'
    loadAsync(vueCdn, () => loadAsync(jadwalSiakJs))
    loadAsync(webCompCdn)
  }

  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Susun jadwal SIAK-mu di sini dan pastikan kamulah juaranya.' },
        ]}
        link={[
          // need to import it here to escape shadow dom
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-reboot.min.css'}
        ]}
      />
      <jadwal-siak></jadwal-siak>
    </div>
  )
}
