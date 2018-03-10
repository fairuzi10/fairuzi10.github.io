import React from 'react'
import Reg from '../../../../components/reg'
import Comment from 'react-disqus-comments'
import Helmet from 'react-helmet'

export default ({ data }) => (
  <Reg>
    <Helmet
      title='Persamaan Linear Diophantine'
      meta={[
        { name: 'description', content: 'Belajar persamaan linear diophantine OSN Komputer/Informatika' },
      ]}
    />
    <h1>Persamaan Linear Diophantine</h1>
    <div className="text-justify">
      Sebelum mempelajari persamaan linear diophantine, Anda diharapkan telah mempelajari
      operator div dan mod terlebih dahulu.
    </div>
    <br />
    <iframe frameBorder="0" src="https://drive.google.com/file/d/1PHjhflT1l5FvNNK9ejS_SZ6BrS1bTgkK/preview" width="100%" height="600"></iframe>
    <hr />
    <Comment
      identifier='persamaan-linear-diophantine'
      url="http://fairuzi10.github.io/project/oskp/persamaan-linear-diophantine/"
      shortname="fairuzi10-github-io"
    />
  </Reg>
)