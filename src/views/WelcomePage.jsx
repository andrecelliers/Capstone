import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Navigation from '../components/Common/Navigation'

function WelcomePage() {

  return (
    <Container fluid>
      <Row>
          <Navigation />
      </Row>
      <Row>
          <div>Welcome Banner</div>
      </Row>
      <Row>
          <div>History Content</div>
      </Row>
      <Row>
          <div>Challenge Button</div>
      </Row>
      <Row>
          <div>Explanation COntent</div>
      </Row>
      <Row>
          <div>Footer</div>
      </Row>
    </Container>
  )
}

export default WelcomePage
