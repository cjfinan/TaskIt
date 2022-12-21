import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  return (
    <Container className="m-0">
      <Row>
        <Nav className="min-vh-100 bg-dark flex-column">
          <Nav.Item className="mt-5">
            <Nav.Link href="" className="mt-5">
              <i className="fa-solid fa-list"></i> Tasks
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" className="mt-5">
              <i className="fa-solid fa-chalkboard"></i>Boards
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" className="mt-5">
              <i className="fa-solid fa-user"></i>Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" className="mt-5 flex">
              Logout
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" className="flex">
              <i className="fa-solid fa-gear"></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
    </Container>
  );
}

export default NavBar;
