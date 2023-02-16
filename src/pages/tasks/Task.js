import React from 'react'
import { Card, Col, Row } from "react-bootstrap";
import { DropdownMenu } from '../../components/DropdownMenu';
import { useHistory } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../components/context/CurrentUserContext';
import styles from '../../styles/Task.module.css'

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
    <Card
      className={`justify-content-center ${styles.TaskCard}`}
    >
      <Row>
        <Col>{title && <Card.Title>{title}</Card.Title>}</Col>
        {status && <Col>{status}</Col>}
        {priority && <Col>{priority}</Col>}
        {board && <Col>{board}</Col>}
        {end_date && <Col>{end_date}</Col>}
        {is_owner && (
          <Col>
            <DropdownMenu handleEdit={handleEdit} handleDelete={handleDelete} />
          </Col>
        )}
      </Row>
    </Card>
  );
}

export default Task