import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import Board from './Board';
import Task from "../tasks/Task";

const BoardPage = ({filter}) => {
  const { id } = useParams();
  console.log(id);
  const [board, setBoard] = useState({ results: [] });
  const [task, setTask] = useState({ results: [] });
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: board }] = await Promise.all([
          axiosReq.get(`/boards/${id}`),
        ]);
        setBoard({ results: [board] });
        console.log("Board:", board);
        console.log("BOARD ID:", board.id)
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: task }] = await Promise.all([
          axiosReq.get(`/tasks/${filter}`),
        ]);
        setTask({ results: [task] });
        console.log(task);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [filter]);

   useEffect(() => {
     setFilteredTasks(task.results.filter((task) => task.board.id === board.id));
   }, [id]);

   
  return (
    <Container>
      <Row>
        <Board {...board.results[0]} setPosts={setBoard} BoardPage />
      </Row>
      <Row>
        <Col>
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} setTasks={setTask} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default BoardPage