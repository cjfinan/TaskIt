import React from 'react'
import { Col, Row, Card, Button, Container } from 'react-bootstrap'

const TasksPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <Card>
            <Card.Title>Tasks ToDo</Card.Title>
            <Card.Body className="text-center">0</Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Title>Tasks In Progress</Card.Title>
            <Card.Body className="text-center">0</Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Title>Tasks Completed</Card.Title>
            <Card.Body className="text-center">0</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <h3>Tasks</h3>
        </Col>
        <Col xs={4}>
          <Button>Create Task</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
          <p>ToDo</p>
        </Col>
        <Col xs={2}>
          <p>In Progress</p>
        </Col>
        <Col xs={2}>
          <p>Completed</p>
        </Col>
      </Row>
      <Row>
        <hr></hr>
      </Row>
    </Container>
  );
};

export default TasksPage