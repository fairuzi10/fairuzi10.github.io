import React from 'react'
import {
  Col,
  Container,
} from 'reactstrap'
import {
  Stretch,
} from '../components/stretch'

export default ({ children }) => (
  // d-flex is a little hack because <Row> makes a bug
  <Stretch className="d-flex justify-content-center align-items-center text-center">
    <Col md="10" lg="8">
      <Container>
        { children }
      </Container>
    </Col>
  </Stretch>
)