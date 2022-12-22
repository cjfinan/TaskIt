import { Col, Container, Row } from "react-bootstrap";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Container fluid>
        <Row>
          <Col xs={3} className={styles.col}>
            <NavBar />
          </Col>
          <Switch>
            <Col xs={8}>
              <Route exact path="/" render={() => <h1>Home</h1>} />
              <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
              <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
            </Col>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
