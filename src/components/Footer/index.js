import React from "react"
import {Container, Row, Col} from "react-bootstrap"

import Card from "../UI/Card"

const Footer = () => {
  return (
    <Card>
      <Container>
        <Row>
          <Col xs={6} md={6} lg={6}>
            <span>Questions </span>
            <h3>1.239.765</h3>
          </Col>
          <Col xs={6} md={6} lg={6}>
            <span>Answers </span>
            <h3> 4.138.374</h3>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default Footer
