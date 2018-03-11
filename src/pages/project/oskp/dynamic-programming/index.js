import React from 'react'
import Wrapper from '../../../../components/wrapper'
import Comment from 'react-disqus-comments'
import Helmet from 'react-helmet'

export default ({ data }) => (
  <Wrapper single>
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
    <iframe frameBorder="0" src="https://drive.google.com/file/d/1VRDV6y-IBvsks6FVN544nQ1y4mDghgiu/preview" width="100%" height="550"></iframe>
    <hr />
    <Comment
      identifier='dynamic-programming'
      url="http://fairuzi10.github.io/project/oskp/dynamic-programming/"
      shortname="fairuzi10-github-io"
    />
  </Wrapper>
)