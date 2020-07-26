import Card from '@/components/card'
import { graphql } from 'gatsby'
import React from 'react'
import Gallery from 'react-grid-gallery'
import Helmet from 'react-helmet'

import Wrapper from '../components/wrapper.js'
import styled from '@emotion/styled'

const GalleryCard = styled(Card)`
  overflow: auto;
  padding: 2rem;
`

const MemePage = ({
  data: {
    allFile: { edges: memes }
  }
}) => {
  const imageUrlList = memes.map(nodeObject => ({
    src: nodeObject.node.full.fluid.src,
    thumbnail: nodeObject.node.thumbnail.fluid.src,
    thumbnailWidth: nodeObject.node.thumbnail.fluid.presentationWidth,
    thumbnailHeight: nodeObject.node.thumbnail.fluid.presentationHeight
  }))
  return (
    <Wrapper>
      <Helmet>
        <title>Meme</title>
        <meta name="og:title" content="Meme" />
        <meta
          name="description"
          content="Kumpulan meme yang ada pada blog ini"
        />
        <meta
          name="og:description"
          content="Kumpulan meme yang ada pada blog ini"
        />
      </Helmet>
      <GalleryCard>
        <h4 className="text-center mb-3">Kumpulan meme yang ada di blog ini</h4>
        <Gallery
          images={imageUrlList}
          enableImageSelection={false}
          backdropClosesModal
        />
      </GalleryCard>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/meme//" } }) {
      edges {
        node {
          full: childImageSharp {
            fluid {
              src
            }
          }
          thumbnail: childImageSharp {
            fluid(maxWidth: 300) {
              src
              presentationWidth
              presentationHeight
            }
          }
          relativePath
        }
      }
    }
  }
`

export default MemePage
