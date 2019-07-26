import React from 'react'
import Wrapper from '../../../../components/wrapper'
import { DiscussionEmbed } from 'disqus-react'
import Helmet from 'react-helmet'
import Card from '@/components/card'

export default () => {
  const disqusConfig = {
    url:
      'http://fairuzi10.github.io/project/oskp/persamaan-linear-diophantine/',
    identifier: 'project/oskp/persamaan-linear-diophantine/',
    title: 'Project OSKP Persamaan Linear Diophantine'
  }

  return (
    <Wrapper single>
      <Helmet>
        <title>Persamaan Linear Diophantine</title>
        <meta name="og:title" content="Persamaan Linear Diophantine" />
        <meta
          name="description"
          content="Belajar persamaan linear diophantine OSN Komputer/Informatika"
        />
        <meta
          name="og:description"
          content="Belajar persamaan linear diophantine OSN Komputer/Informatika"
        />
      </Helmet>
      <Card>
        <h1>Persamaan Linear Diophantine</h1>
        <div className="text-justify">
          Sebelum mempelajari persamaan linear diophantine, Anda diharapkan
          telah mempelajari operator div dan mod terlebih dahulu.
        </div>
        <br />
        <iframe
          title="Persamaan Linear Diophantine"
          frameBorder="0"
          src="https://drive.google.com/file/d/1PHjhflT1l5FvNNK9ejS_SZ6BrS1bTgkK/preview"
          width="100%"
          height="550"
        />
        <hr />
      </Card>
      <Card>
        <DiscussionEmbed
          shortname="fairuzi10-github-io"
          config={disqusConfig}
        />
      </Card>
    </Wrapper>
  )
}
