import React from 'react'
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from '../../components/context/CurrentUserContext';

const Task = (props) => {
    const {
      id,
      owner,
      profile_id,
      title,
      description,
      start_date,
      end_date,
      update_at,
      status,
      priority,
      taskPage,
      TaskPage,
      board,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

  return (
    <Card>
      {title && <Card.Title>{title}</Card.Title>}
      {description && <Card.Body>{description}</Card.Body>}
      <Row>
        {start_date && <Col>{start_date}</Col>}
        {end_date && <Col>{end_date}</Col>}
      </Row>
      <Row>
        {status && <Col>{status}</Col>}
      </Row>
      <Row>
        {priority && <Col>{priority}</Col>}
      </Row>
      <Row>
        {board && <Col>{board}</Col>}
      </Row>
    </Card>
  );
}

export default Task