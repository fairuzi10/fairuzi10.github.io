import Card from '@/components/card'
import DarkLink, { DarkA } from '@/components/dark-link'
import Wrapper from '@/components/wrapper'
import { URL } from '@/settings'
import { projectUrl } from '@/utils/urls'
import React from 'react'
import Helmet from 'react-helmet'

import { metaData as oskpMetaData } from './oskp'
import { metaData as savedMessagesMetaData } from './saved-messages'

const jadwalSiakMetaData = {
  name: 'Jadwal SIAK',
  url: URL + projectUrl('jadwal-siak'), // force external URL
  description: 'Atur jadwalmu dan jadilah pemenang SIAK War!'
}

export const projectsMetaData = [
  jadwalSiakMetaData,
  savedMessagesMetaData,
  oskpMetaData
]

const IndexPage = () => {
  const projectList = projectsMetaData.map(metaData => (
    <div key={metaData.url}>
      <h2>
        <DarkLink to={metaData.url}>{metaData.name}</DarkLink>
      </h2>
      <div>{metaData.description}</div>
      <hr className="my-4" />
    </div>
  ))
  return (
    <Wrapper single>
      <Helmet
        title="Project"
        meta={[
          {
            name: 'description',
            content: 'Berbagai proyek yang telah saya kerjakan.'
          }
        ]}
      />
      <Card>{projectList}</Card>
    </Wrapper>
  )
}
export default IndexPage
