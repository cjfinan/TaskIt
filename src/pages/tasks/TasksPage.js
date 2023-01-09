import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Button, Container } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom';

import { axiosReq } from '../../api/axiosDefaults';
import Task from './Task';

const TasksPage = ({ filter }) => {
  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  const history = useHistory()
  const [query, setQuery] = useState("");
  const {pathname} = useLocation

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/?${filter}`);
        setTasks(data);
        setHasLoaded(true);
        console.log(data);
        console.log(filter);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTasks();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  const handleCreate = (()=>{
    history.push('/tasks/create')
    })

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
          <Button onClick={handleCreate}>Create Task</Button>
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
        <Col>
          {tasks.results.map((task) => (
            <Task key={task.id} {...task} setTasks={setTasks} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default TasksPage