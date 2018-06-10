import React from 'react'
import {
    Row,
    Col,
    Container,
  } from 'reactstrap'

export default ({ children }) => (
    <Container>
        <Row className="justify-content-center">
            <Col xs='9' md='6'>
                { children }
            </Col>
        </Row>
    </Container>
)