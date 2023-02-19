import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/GhostWhite.png";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "./context/CurrentUserContext";
import axios from "axios";
import { Avatar } from "./Avatar";
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
        <Avatar src={currentUser?.profile_image} height={40} />
      </NavLink>
      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.Navlink}
      >
        <span className="d-none d-md-inline">{currentUser?.username}</span>
      </NavLink>
      <NavLink to="/tasks/" className={styles.NavLink}>
        <i className="fa-solid fa-list"></i>
        <span className="d-none d-md-inline">Tasks</span>
      </NavLink>
      <NavLink to="/boards/" className={styles.NavLink}>
        <i className="fa-solid fa-chalkboard"></i>
        <span className="d-none d-md-inline">Boards</span>
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>
        <span className="d-none d-md-inline">Sign out</span>
      </NavLink>
      <NavLink to="/settings" className={styles.NavLink}>
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
        <span className="d-none d-md-inline">Home</span>
      </NavLink>
      <NavLink
        to="/signin"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-sign-in-alt"></i>
        <span className="d-none d-md-inline">Sign in</span>
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>
        <span className="d-none d-md-inline">Sign up</span>
      </NavLink>
    </>
  );
  return (
    <Row>
      <Col
        className={styles.Col}
      >
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
