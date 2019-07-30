import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import { projectUrl } from '../utils/urls'
import Card from './card'
import SectionDivider from './section-divider'
import DarkLink from './dark-link'

export const Featured = props => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      file(
        sourceInstanceName: { eq: "assets" }
        relativePath: { eq: "poster-siak.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Card {...props}>
      <h4 className="text-center">Featured</h4>
      <SectionDivider />
      <DarkLink to={projectUrl('jadwal-siak-war')}>
        <Img fluid={data.file.childImageSharp.fluid} className="m-3" />
      </DarkLink>
    </Card>
  )
}

export default Featured
