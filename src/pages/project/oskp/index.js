import React from 'react'
import Link from 'gatsby-link'
import Wrapper from '../../../components/wrapper'
import Comment from 'react-disqus-comments'
import Helmet from 'react-helmet'

export default ({ data }) => (
  <Wrapper single>
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
      url="https://fairuzi10.github.io/project/oskp/"
      shortname="fairuzi10-github-io"
    />
  </Wrapper>
)
