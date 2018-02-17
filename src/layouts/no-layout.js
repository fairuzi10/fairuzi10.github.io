import React from 'react'
import Helmet from 'react-helmet'

export default ({ children }) => (
  <div>
    <Helmet
      link={[
          { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css'},
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Arvo'},
      ]}
    />
    { children() }
  </div>
)