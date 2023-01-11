import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Board from "./Board";

const BoardsPage = () => {
  const history = useHistory();
  const handleCreate = () => {
    history.push("/boards/create");
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Button onClick={handleCreate}> Create Board </Button>
        </Col>
        <Board />
      </Row>
    </Container>
  );
};

export default BoardsPage