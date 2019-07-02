import Card from '@/components/card'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Helmet from 'react-helmet'

import Wrapper from '../components/wrapper.js'

const shuffle = array => {
  array = array.slice()
  let counter = array.length

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)
    counter--
    const temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array
}

const MemePage = ({
  data: {
    allFile: { edges }
  }
}) => {
  const memes = shuffle(edges)
  const images = memes.map(nodeObject => {
    const img = nodeObject.node.childImageSharp.fluid
    const path = nodeObject.node.relativePath
    const postUrl = '/blog/' + path.slice(0, path.indexOf('/')) + '/'
    return (
      <div className="py-4" key={path}>
        <Link to={postUrl}>
          <Img fluid={img} />
        </Link>
      </div>
    )
  })
  const evenImages = images.filter((el, idx) => idx % 2 === 0)
  const oddImages = images.filter((el, idx) => idx % 2 === 1)
  return (
    <Wrapper>
      <Helmet
        meta={[
          {
            name: 'description',
            content: 'Kumpulan meme yang ada pada blog ini.'
          }
        ]}
      />
      <Card>
        <h5 className="text-center">
          Klik gambar untuk membaca pos dan mendapatkan konteksnya :)
        </h5>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">{evenImages}</div>{' '}
          <div className="col-12 col-lg-6">{oddImages}</div>
        </div>
      </Card>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/meme//" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`

export default MemePage
