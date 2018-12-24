import React from 'react'
import Helmet from 'react-helmet'
import Wrapper from '../components/wrapper.js'
import { graphql, Link } from 'gatsby'
import {
  Row,
  Col,
} from 'reactstrap'

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
    const src = nodeObject.node.childImageSharp.fluid.src
    const path = nodeObject.node.relativePath
    const postUrl = '/blog/' + path.slice(0, path.indexOf('/')) + '/'
    return (
      <Link to={postUrl} key={src}>
        <img className="img-fluid p-3" src={src}></img>
      </Link>
    )
  })
  const evenImages = images.filter((el, idx) => idx%2 == 0)
  const oddImages = images.filter((el, idx) => idx%2 == 1)
  return (
    <Wrapper>
      <Helmet
        meta={[
          { name: 'description', content: 'Kumpulan meme yang ada pada blog ini.' },
        ]}
      />
      <h5 className="text-center">Klik gambar untuk membaca pos dan mendapatkan konteksnya :)</h5>
      <Row className="justify-content-center">
        <Col className="text-center" xs="12" md="6">{evenImages}</Col>
        <Col className="text-center" xs="12" md="6">{oddImages}</Col>
      </Row>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  {
    allFile(filter:{absolutePath:{regex:"/meme\//"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth:500) {
              src
            }
          }
          relativePath
        }
      }
    }
  }
`

export default MemePage
