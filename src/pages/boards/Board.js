import React from 'react'
import { Card, Col, Row} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from '../../components/context/CurrentUserContext';

const Board = (props) => {
    const {
        id,
        owner,
        profile_id,
        title,
        description,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();
  return (
    <Card>
      <Row>
        <Col>{title && <Card.Title>{title}</Card.Title>}</Col>
        <Row>{description && <Col> {description}</Col>}</Row>
      </Row>
    </Card>
  );
}

export default Board