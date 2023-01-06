import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const textFields = (
  <div>
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" name="title" value="title"></Form.Control>
    </Form.Group>

    <Form.Group>
      <Form.Label>Description</Form.Label>
      <Form.Control
        type="text"
        name="description"
        value="description"
      ></Form.Control>
    </Form.Group>
  </div>
);

const dateFields = (
  <div>
    <Form.Group>
      <Form.Label>Start Date</Form.Label>
      <Form.Control
        type="date"
        name="startDate"
        value="startDate"
      ></Form.Control>
    </Form.Group>

      <Form.Group>
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          name="endDate"
          value="endDate"
        ></Form.Control>
      </Form.Group>
    
  </div>
);

const dropDownFields = (
  <div>
    <Form.Group>
      <Form.Label>Status</Form.Label>
      <Form.Control as="select">
        <option>ToDo</option>
        <option>In Progress</option>
        <option>Completed</option>
      </Form.Control>
    </Form.Group>

    <Form.Group>
      <Form.Label>Priority</Form.Label>
      <Form.Control as="select">
        <option>Normal</option>
        <option>Low</option>
        <option>High</option>
      </Form.Control>
    </Form.Group>
  </div>
);

const TaskCreateForm = () => {
  return (
    <Form>
      <Row>
        <Col md={10}>
          <Card>
            {textFields}
            {dateFields}
            {dropDownFields}
          </Card>
          <Button>Create</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskCreateForm