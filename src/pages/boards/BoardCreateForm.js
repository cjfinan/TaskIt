import React, { useState } from 'react'
import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';

const BoardCreateForm = () => {
  const [errors, setErrors] = useState({});
  const [boardData, setBoardData] = useState({
    title: "",
    description: "",
  });
  const { title, description} = boardData;

  const history = useHistory();

  const handleChange = (event) => {
    setBoardData({
      ...boardData,
      [event.target.name]: event.target.value,
    });
    console.log(setBoardData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    try {
      const { data } = await axiosReq.post("/boards/", formData);
      history.push(`/boards/${data.id}`);
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
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={10}>
          <Card>{textFields}</Card>
          <Button type="submit">Create</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BoardCreateForm;