import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Button, Container } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom';
import styles from "../../styles/TasksPage.module.css";

import { axiosReq } from '../../api/axiosDefaults';
import Task from './Task';

const TasksPage = ({ filter }) => {
  const [tasks, setTasks] = useState({ results: [] });
  const [toDoTasks, setToDoTasks] = useState([])
  const [inProgressTasks, setInProgressTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const history = useHistory();
  const [status, setStatus] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([])

  useEffect(() => {
    setToDoTasks(tasks.results.filter((task) => task.status === "to_do"));
    setInProgressTasks(tasks.results.filter((task) => task.status === "in_progress"));
    setCompletedTasks(tasks.results.filter((task) => task.status === "completed"));
    setFilteredTasks(tasks.results);
  }, [tasks]);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/?${filter}`);
        setTasks(data);
        setHasLoaded(true);
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
  }, [filter]);

  useEffect(()=>{
    setFilteredTasks(tasks.results.filter((task) => task.status === status ))
  },[status])

  const handleCreate = () => {
    history.push("/tasks/create");
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4}>
          <Card className={styles.GreenCard}>
            <Card.Title>Tasks ToDo</Card.Title>
            <Card.Body className="text-center mt-4">
              {toDoTasks?.length}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className={styles.GreenCard}>
            <Card.Title>Tasks In Progress</Card.Title>
            <Card.Body className="text-center mt-4">
              {inProgressTasks?.length}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className={styles.GreenCard}>
            <Card.Title>Tasks Completed</Card.Title>
            <Card.Body className="text-center mt-4">
              {completedTasks?.length}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <h3 className={styles.heading}>Tasks</h3>
        </Col>
        <Col xs={4} className="my-auto text-center">
          <Button onClick={handleCreate} className={styles.btnCreate}>
            Create Task
          </Button>
        </Col>
      </Row>
      <Row>
        <hr></hr>
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <Button
            onClick={(event) => setStatus(event.target.value)}
            value="to_do"
            className={styles.btnStatus}
          >
            To Do
          </Button>
        </Col>
        <Col xs={12} md={3}>
          <Button
            onClick={(event) => setStatus(event.target.value)}
            value="in_progress"
            className={styles.btnStatus}
          >
            In Progress
          </Button>
        </Col>
        <Col xs={12} md={3}>
          <Button
            onClick={(event) => setStatus(event.target.value)}
            value="completed"
            className={styles.btnStatus}
          >
            Completed
          </Button>
        </Col>
      </Row>
      <Row>
        <hr></hr>
        <Col>
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} setTasks={setTasks} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default TasksPage