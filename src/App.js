import { Col, Container, Row } from "react-bootstrap";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults'
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import TaskCreateForm from "./pages/tasks/TaskCreateForm";
import TaskPage from "./pages/tasks/TaskPage";
import TasksPage from "./pages/tasks/TasksPage";

function App() {
  return (
    <div className={styles.App}>
      <Container fluid>
        <Row>
          <Col xs={2} md={3} className={styles.col}>
            <NavBar />
          </Col>
          <Switch>
            <Col xs={8}>
              <Route exact path="/" render={() => <h1>Home</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/tasks/" render={() => <TasksPage />} />
              <Route exact path="/tasks/:id" render={() => <TaskPage />} />
              {/* <Route
                exact
                path="/tasks/create"
                render={() => <TaskCreateForm />}
              /> */}
            </Col>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
