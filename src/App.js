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
import { useCurrentUser } from "./components/context/CurrentUserContext";
import TaskEditForm from "./pages/tasks/TaskEditForm";
import BoardsPage from "./pages/boards/BoardsPage";
import BoardPage from "./pages/boards/BoardPage";
import BoardCreateForm from "./pages/boards/BoardCreateForm";
import Profile from "./pages/Profiles/Profile";
import ProfileEditForm from "./pages/Profiles/ProfileEditForm";
import ProfilePasswordForm from "./pages/Profiles/ProfilePasswordForm";

function App() {
  const currentUser = useCurrentUser()
  const profile_id = currentUser?.profile_id || "";
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
              <Route
                exact
                path="/tasks/"
                render={() => (
                  <TasksPage filter={`owner__profile=${profile_id}`} />
                )}
              />
              <Route exact path="/tasks/:id" render={() => <TaskPage />} />
              <Route
                exact
                path="/tasks/:id/edit"
                render={() => <TaskEditForm />}
              />
              <Route
                exact
                path="/tasks/create"
                render={() => <TaskCreateForm />}
              />
              <Route
                exact
                path="/boards/"
                render={() => (
                  <BoardsPage filter={`owner__profile=${profile_id}`} />
                )}
              />
              <Route
                exact
                path="/boards/:id"
                render={() => (
                  <BoardPage filter={`owner__profile=${profile_id}`} />
                )}
              />
              <Route
                exact
                path="/boards/create"
                render={() => <BoardCreateForm />}
              />
              <Route exact path="/profiles/:id" render={() => <Profile />} />
              <Route
                exact
                path="/profiles/:id/edit"
                render={() => <ProfileEditForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit/password"
                render={() => <ProfilePasswordForm />}
              />
            </Col>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
