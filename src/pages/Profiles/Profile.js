import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col>Image</Col>
      </Row>
      <Row>
        <Col>username</Col>
      </Row>
      <Row>
        <Col>Bio</Col>
      </Row>
    </Container>
  );
}

export default Profile