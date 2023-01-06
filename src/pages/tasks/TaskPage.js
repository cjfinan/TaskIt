import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const TaskPage = () => {
  return (
    <Col>
      <Card>
        Title
        <Card.Body>Description</Card.Body>
        <Row>
          <Col>Start Date</Col>
          <Col>End Date</Col>
        </Row>
        <Row>
          <Col>Status</Col>
        </Row>
        <Row>
          <Col>Priority</Col>
        </Row>
        <Row>
          <Col>Board</Col>
        </Row>
      </Card>
    </Col>
  );
}

export default TaskPage