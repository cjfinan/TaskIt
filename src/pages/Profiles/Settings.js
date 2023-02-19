import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Settings = () => {

const history = useHistory();

const handleUsername = () => {
  history.push("/profiles/:id/edit/username");
};

const handlePassword = () => {
  history.push("/profiles/:id/edit/password");
};
  return (
    <Container>
      <Row>
        <Col>
          <h1>Settings</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Button onClick={handleUsername}>Edit Username</Button>
          </Row>
          <Row>
            <Button onClick={handlePassword}>Edit Password</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
