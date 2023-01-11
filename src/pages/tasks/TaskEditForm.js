import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap'
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory, useParams } from "react-router-dom";

const TaskEditForm = () => {

    const [errors, setErrors] = useState({});
    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        status: "",
        priority: "",
      });
    const { title, description, status, priority, start_date, end_date } = taskData;

    const history = useHistory();
    const { id } = useParams()

    useEffect(()=>{
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/tasks/${id}/`);
                const {title, description, status, priority, is_owner, start_date, end_date} = data
                is_owner? setTaskData({ title, description, status, priority, start_date, end_date }) : history.push("/");
            } catch (err) {
                console.log(err)
            }
        }
        handleMount()
    }, [history, id])

    const handleChange = (event) => {
        setTaskData({
        ...taskData,
        [event.target.name]: event.target.value,
        });
        console.log(setTaskData)
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("status", status);
      formData.append("priority", priority);
      formData.append("start_date", start_date);
      formData.append("end_date", end_date);
      try {
        await axiosReq.put(`/tasks/${id}/`, formData);
        history.push(`/tasks/${id}`);
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

    const dropDownFields = (
      <div>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            name="status"
            value={status}
          >
            <option>to_do</option>
            <option>in_progress</option>
            <option>completed</option>
          </Form.Control>
        </Form.Group>
        {errors?.status?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            value={priority}
            name="priority"
          >
            <option>2</option>
            <option>1</option>
            <option>3</option>
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
            {dropDownFields}
          </Card>
          <Button type="submit">Save</Button>
        </Col>
      </Row>
    </Form>
  );
}
export default TaskEditForm