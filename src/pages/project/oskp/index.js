import React from 'react'
import Link from 'gatsby-link'
import Reg from '../../../components/reg'
import Comment from 'react-disqus-comments'
import Helmet from 'react-helmet'

export default ({ data }) => (
  <Reg>
    <Helmet
      title='OSKP'
      meta={[
        { name: 'description', content: 'Kumpulan slide yang dapat digunakan untuk \
belajar Olimpiade Sains Nasional (OSN) Komputer/Informatika' },
      ]}
    />
    <h1>OSKP</h1>
    <div className="text-justify">
      Berikut ini slide materi Olimpiade Komputer tingkat kabupaten/kota dan provinsi yang 
      telah saya buat. Semoga slide ini dapat membantu dalam mempelajari materi yang diujikan 
      dalam OSN komputer/informatika tingkat kota maupun provinsi.
    </div>
    <br />
    <Link to='dynamic-programming/'>Dynamic Programming</Link><br />
    <Link to='persamaan-linear-diophantine/'>Persamaan Linear Diophantine</Link><br />
    <hr />
    <Comment
      identifier='oskp'
      url="http://fairuzi10.github.io/oskp"
      shortname="fairuzi10-github-io"
    />
  </Reg>
)