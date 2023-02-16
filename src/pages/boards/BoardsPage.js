import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import Board from "./Board";
import { Link } from "react-router-dom";
import BoardPage from './BoardPage';


const BoardsPage = ({filter}) => {
  const [boards, setBoards] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  const history = useHistory();
  const { pathname } = useLocation();

  const handleCreate = () => {
    history.push("/boards/create");
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/boards/?${filter}`);
        setBoards(data);
        setHasLoaded(true);
        console.log("DATA", data);
        console.log(`Filter: ${filter}`);
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
  }, [filter, pathname]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Button onClick={handleCreate}> Create Board </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {boards.results.map((board) => (
            <>
              <Board key={board.id} {...board} setBoards={setBoards} />
              <Link to={"/boards/" + board.id}>View board</Link>
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default BoardsPage