import React from 'react'
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefaults';
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

    const handleDelete = async () => {
      try {
        axiosRes.delete(`/tasks/${id}/`);
        history.goBack();
      } catch (err) {
        console.log(err);
      }
    };

    const handleEdit = () => {
      history.push(`/tasks/${id}/edit`);
    };

  return (
    <Card>
      <Row>
        <Col>{title && <Card.Title>{title}</Card.Title>}</Col>
      </Row>
      <Row>
        {description && <Col> {description}</Col>}
        {status && <Col>{status}</Col>}
        {priority && <Col>{priority}</Col>}
        {board && <Col>{board}</Col>}
        {start_date && <Col>{start_date}</Col>}
        {end_date && <Col>{end_date}</Col>}
        {is_owner && (
          <Col>
            <i className="fas fa-edit" onClick={handleEdit}></i>
            <i className="fas fa-trash-alt" onClick={handleDelete}></i>
          </Col>
        )}
      </Row>
    </Card>
  );
}

export default Task