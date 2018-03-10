import React from 'react'
import Reg from '../../../../components/reg'
import Comment from 'react-disqus-comments'
import Helmet from 'react-helmet'
import file from './dynamic-programming.pdf'

export default ({ data }) => (
  <Reg>
    <Helmet
      title='Dynamic Programming'
      meta={[
        { name: 'description', content: 'Belajar dynamic programming OSN Komputer/Informatika' },
      ]}
    />
    <h1>Dynamic Programming</h1>
    <div className="text-justify">
      Dynamic Programming merupakan salah satu materi yang unik terdapat dalam informatika 
      (saya belum pernah menemukan materi ini di matematika). Untuk memahami konsep dynamic programming,
      diperlukan pemahaman tentang kombinatorika. Slide ini adalah studi kasus untuk permasalahan 
      dynamic-programming yang sering muncul pada OSK maupun OSP. Sebelumnya, kamu disarankan untuk membaca 
      slide <a href="https://training.ia-toki.org/training/curriculums/1/courses/11/chapters/55/lessons/23/">dynamic programming di TLX</a> terlebih dahulu.
    </div>
    <br />
    <iframe frameBorder="0" src={ file + "#zoom=150"} scrolling="auto" width="100%" height="600" marginwidth="50"></iframe>
    <hr />
    <Comment
      identifier='dynamic-programming'
      url="http://fairuzi10.github.io/oskp/dynamic-programming"
      shortname="fairuzi10-github-io"
    />
  </Reg>
)