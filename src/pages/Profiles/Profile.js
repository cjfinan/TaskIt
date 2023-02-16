import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { Avatar } from '../../components/Avatar';
import { useCurrentUser } from '../../components/context/CurrentUserContext';

const Profile = () => {
  const currentUser = useCurrentUser();
  const history = useHistory();
  const { id } = useParams();

  const handleEdit = () => {
    history.push(`/profiles/${id}/edit`);
  };

  return (
    <Container>
      <Card className="align-items-center mt-2">
        <Row>
          <Col>
            <Avatar src={currentUser?.profile_image} height={100} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>{currentUser?.username}</h1>
          </Col>
        </Row>
        <Row>
          <Col>{currentUser?.desription} Add you bio!</Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={handleEdit}>Edit Profile</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Profile