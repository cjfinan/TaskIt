import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/GhostWhite.png";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "./context/CurrentUserContext";
import axios from "axios";
const NavBar = () => {
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/')
      setCurrentUser(null)
    }catch (err){
      console.log(err)
    }
  }
  const currentUser = useCurrentUser()
  const loggedInIcons = (
    <>
      <NavLink to="/" className={styles.NavLink}>
        <img src={currentUser?.profile_id}/>
         {currentUser?.username}
      </NavLink>
      <NavLink to="/" className={styles.NavLink}>
        <i className="fa-solid fa-list"></i> Tasks
      </NavLink>
      <NavLink to="/" className={styles.NavLink}>
        <i className="fa-solid fa-chalkboard"></i> Boards
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink to="/" className={styles.NavLink}>
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
          {currentUser ? loggedInIcons : loggedOutIcons}
        </Nav>
      </Col>
    </Row>
  );
};

export default NavBar;
