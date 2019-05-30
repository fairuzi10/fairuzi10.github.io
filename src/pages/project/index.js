import React from 'react';
import Helmet from 'react-helmet';

import { BlackLink, Card } from '../../components/utils';
import Wrapper from '../../components/wrapper';
import { metaData as oskpMetaData } from './oskp';
import { metaData as savedMessagesMetaData } from './saved-messages';

export const projectsMetaData = [
  savedMessagesMetaData,
  oskpMetaData,
]

const IndexPage = () => {
  const projectList = projectsMetaData.map(metaData => (
    <div key={metaData.url}>
      <h2><BlackLink to={metaData.url}>{metaData.name}</BlackLink></h2>
      <div>{metaData.description}</div>
      <hr className="my-4"></hr>
    </div>
  ))
  return (
    <Wrapper single>
      <Helmet
        title='Project'
        meta={[
          { name: 'description', content: 'Berbagai proyek yang telah saya kerjakan.' },
        ]}
      />
      <Card>
        { projectList }
      </Card>
    </Wrapper>
  )
}
export default IndexPage
