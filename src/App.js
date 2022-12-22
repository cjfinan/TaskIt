import { Col, Container, Row } from "react-bootstrap";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <Container className={styles.Main}>
        <Row>
          <Col xs={6}>
            <NavBar />
          </Col>
          <Col xs={6}>
            <h1>Home</h1>
            <h1>Sign in</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
