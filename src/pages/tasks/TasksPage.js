import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Button, Container } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom';
import styles from "../../styles/TasksPage.module.css";

import { axiosReq } from '../../api/axiosDefaults';
import Task from './Task';

const TasksPage = ({ filter }) => {
  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  const history = useHistory()
  const [status, setStatus] = useState("");
  const {pathname} = useLocation()

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/?${filter}&${status}`);
        setTasks(data);
        setHasLoaded(true);
        console.log(`Data: ${data}`);
        console.log(data);
        console.log(`Filter: ${filter}`);
        console.log(`Status: ${status}`)
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
  }, [filter, status, pathname]);

  const handleCreate = (()=>{
    history.push('/tasks/create')
    })

  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <Card className={styles.GreenCard}>
            <Card.Title>Tasks ToDo</Card.Title>
            <Card.Body className="text-center mt-4">0</Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card className={styles.GreenCard}>
            <Card.Title>Tasks In Progress</Card.Title>
            <Card.Body className="text-center mt-4">0</Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card className={styles.GreenCard}>
            <Card.Title>Tasks Completed</Card.Title>
            <Card.Body className="text-center mt-4">0</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <h3 className={styles.heading}>Tasks</h3>
        </Col>
        <Col xs={4}>
          <Button onClick={handleCreate} className={styles.btnCreate}>
            Create Task
          </Button>
        </Col>
      </Row>
      <Row>
        <hr></hr>
      </Row>
      <Row>
        <Col xs={2}>
          <Button
            onClick={(event) => setStatus(event.target.value)}
            value="status=to_do"
            className={styles.btnStatus}
          >
            To Do
          </Button>
        </Col>
        <Col xs={2}>
          <Button
            onClick={(event) => setStatus(event.target.value)}
            value="status=in_progress"
            className={styles.btnStatus}
          >
            In Progress
          </Button>
        </Col>
        <Col xs={2}>
          <Button
            onClick={(event) => setStatus(event.target.value)}
            value="status=completed"
            className={styles.btnStatus}
          >
            Completed
          </Button>
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