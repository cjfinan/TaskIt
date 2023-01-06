import React, { useState } from 'react'
import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap'
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from "react-router-dom";

const TaskCreateForm = () => {

    const [errors, setErrors] = useState({});
    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "",
        priority: "",
      });
    const { title, description, start_date, end_date, status, priority } = taskData;

    const history = useHistory();

    const handleChange = (event) => {
        setTaskData({
        ...taskData,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("start_date", start_date);
      formData.append("end_date", end_date);
      formData.append("status", status);
      formData.append("priority", priority);
      try {
        const { data } = await axiosReq.post("/tasks/", formData);
        history.push(`/tasks/${data.id}`);
      } catch (err) {
        console.log(err);
        if (err.response?.data !== 401) {
          setErrors(err.response?.data);
        }
      }
    };

    const textFields = (
      <div>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {errors?.description?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
      </div>
    );

    const dateFields = (
      <div>
        <Form.Group>
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="date"
            name="start_date"
            value={start_date}
          ></Form.Control>
        </Form.Group>
        {errors?.start_date?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>End Date</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="date"
            name="end_date"
            value={end_date}
          ></Form.Control>
        </Form.Group>
        {errors?.end_date?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
      </div>
    );

    const dropDownFields = (
      <div>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} value={status} name={status}>
            <option>ToDo</option>
            <option>In Progress</option>
            <option>Completed</option>
          </Form.Control>
        </Form.Group>
        {errors?.status?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Priority</Form.Label>
          <Form.Control as="select" onChange={handleChange} value={priority} name={priority}>
            <option>Normal</option>
            <option>Low</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
        {errors?.priority?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
      </div>
    );
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={10}>
          <Card>
            {textFields}
            {dateFields}
            {dropDownFields}
          </Card>
          <Button type="submit">Create</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskCreateForm