import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Wrapper from '../components/wrapper.js'
import { graphql, Link } from 'gatsby'
import {
  Row,
  Col,
} from 'reactstrap'
import { Card } from '../components/utils.js';

const shuffle = (array) => {
  array = array.slice()
  let counter = array.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

const MemePage = ({
  data: {
    allFile: { edges },
  },
}) => {
  const memes = shuffle(edges)
  const images = memes.map((nodeObject) => {
    const img = nodeObject.node.childImageSharp.fluid
    const path = nodeObject.node.relativePath
    const postUrl = '/blog/' + path.slice(0, path.indexOf('/')) + '/'
    return (
      <div className="py-4" key={path}>
        <Link to={postUrl}>
          <Img fluid={img}></Img>
        </Link>
      </div>
    )
  })
  const evenImages = images.filter((el, idx) => idx%2 === 0)
  const oddImages = images.filter((el, idx) => idx%2 === 1)
  return (
    <Wrapper>
      <Helmet
        meta={[
          { name: 'description', content: 'Kumpulan meme yang ada pada blog ini.' },
        ]}
      />
      <Card>
        <h5 className="text-center">Klik gambar untuk membaca pos dan mendapatkan konteksnya :)</h5>
        <Row className="justify-content-center">
          <Col className="text-center" xs="12" md="6">{evenImages}</Col>
          <Col className="text-center" xs="12" md="6">{oddImages}</Col>
        </Row>
      </Card>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  {
    allFile(filter:{absolutePath:{regex:"/meme\//"}}) {
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
