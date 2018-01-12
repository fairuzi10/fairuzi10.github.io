import React from 'react'
import {
  Col,
  Container,
} from 'reactstrap'
import {
  Stretch,
} from '../components/stretch'

export default ({ children }) => (
  <Stretch className='d-flex justify-content-center'>
    <Col md="10" lg="8">
      <Container>
        { children }
      </Container>
    </Col>
  </Stretch>
)