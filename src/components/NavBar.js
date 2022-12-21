import React from "react";
import { Container, Nav, NavbarBrand, NavLink, Row } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/GhostWhite.png";
const NavBar = () => {
  const loggedInIcons = (
    <>
      <NavLink href="" className={styles.NavLink}>
        <i className="fa-solid fa-list"></i> Profil
      </NavLink>
      <NavLink href="" className={styles.NavLink}>
        <i className="fa-solid fa-list"></i> Tasks
      </NavLink>
      <NavLink href="" className={styles.NavLink}>
        <i className="fa-solid fa-chalkboard"></i> Boards
      </NavLink>
      <NavLink href="" className={styles.NavLink}>
        <i className="fa-solid fa-user"></i> Profile
      </NavLink>
      <NavLink href="" className={styles.NavLink}>
        Logout
      </NavLink>
      <NavLink href="" className={styles.NavLink}>
        <i className="fa-solid fa-gear"></i>
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink className={styles.NavLink}>
        <i className="fas fa-sign-in-alt"></i>
        <span className="d-none d-sm-inline">Sign in</span>
      </NavLink>
      <NavLink className={styles.NavLink}>
        <i className="fas fa-user-plus"></i>
        <span className="d-none d-sm-inline">Sign up</span>
      </NavLink>
    </>
  );
  return (
    <Container className="m-0">
      <Row>
        <Nav className={styles.Sidebar}>
          <NavLink>
            <img src={logo} alt="logo" height="45" className={styles.logo} />
          </NavLink>
          {loggedOutIcons}
        </Nav>
      </Row>
    </Container>
  );
};

export default NavBar;
