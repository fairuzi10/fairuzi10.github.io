import Card from '@/components/card'
import { DiscussionEmbed } from 'disqus-react'
import Link from 'gatsby-link'
import React from 'react'
import Helmet from 'react-helmet'

import Wrapper from '../../../components/wrapper'
import { projectUrl } from '../../../utils/urls'

export const metaData = {
  name: 'OSKP',
  url: projectUrl('oskp'),
  description:
    'Kumpulan slide yang dapat digunakan untuk belajar Olimpiade Sains Nasional (OSN) Komputer/Informatika.'
}

export default () => {
  const disqusConfig = {
    url: 'http://fairuzi10.github.io/project/oskp/',
    identifier: 'project/oskp/',
    title: 'Project OSKP'
  }

  return (
    <Wrapper single>
      <Helmet
        title="OSKP"
        meta={[
          {
            name: 'description',
            content: `Kumpulan slide yang dapat digunakan untuk belajar Olimpiade Sains Nasional (OSN) Komputer/Informatika`
          }
        ]}
      />
      <Card>
        <h1>OSKP</h1>
        <div className="text-justify">
          Berikut ini slide materi Olimpiade Komputer tingkat kabupaten/kota dan
          provinsi yang telah saya buat. Semoga slide ini dapat membantu dalam
          mempelajari materi yang diujikan dalam OSN komputer/informatika
          tingkat kota maupun provinsi.
        </div>
        <br />
        <Link to="/project/oskp/dynamic-programming/">Dynamic Programming</Link>
        <br />
        <Link to="/project/oskp/persamaan-linear-diophantine/">
          Persamaan Linear Diophantine
        </Link>
        <br />
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
