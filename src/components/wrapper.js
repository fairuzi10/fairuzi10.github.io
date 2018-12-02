import React from 'react'
import Layout from './layout.js'
import {
  Row,
  Col,
  Container,
} from 'reactstrap'
import {
  Stretch,
} from '../components/stretch'

export default ({ children, single, mid }) => {
  if (mid) single = true;
  const ColProps = single? { md: '10', lg: '9', xl: '8'}: {}
  return (
    <Layout>
      <Stretch className={ mid? 'd-flex align-items-center text-center': '' }>
        <Container>
          <Row className='justify-content-center'>
            <Col {...ColProps}>
              { children }
            </Col>
          </Row>
        </Container>
      </Stretch>
    </Layout>
  )
}
