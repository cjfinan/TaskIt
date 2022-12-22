import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/GhostWhite.png";
import { NavLink } from "react-router-dom";
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
      <NavLink
        to="/"
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-home"></i>
        <span className="d-none d-sm-inline">Home</span>
      </NavLink>
      <NavLink
        to="/signin"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-sign-in-alt"></i>
        <span className="d-none d-sm-inline">Sign in</span>
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>
        <span className="d-none d-sm-inline">Sign up</span>
      </NavLink>
    </>
  );
  return (
    <Row>
      <Col xs={8} className={styles.Col}>
        <Nav className={styles.Sidebar}>
          <NavLink to="/">
            <img src={logo} alt="logo" height="45" className={styles.logo} />
          </NavLink>
          {loggedOutIcons}
        </Nav>
      </Col>
    </Row>
  );
};

export default NavBar;
