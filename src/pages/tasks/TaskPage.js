import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { DropdownMenu } from "../../components/DropdownMenu";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../components/context/CurrentUserContext";
import styles from "../../styles/TaskPage.module.css";

const TaskPage = (props) => {
  const { owner } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleDelete = async () => {
    try {
      axiosRes.delete(`/tasks/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };
  const { id } = useParams();
  const [task, setTask] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: task }] = await Promise.all([
          axiosReq.get(`/tasks/${id}`),
        ]);
        setTask({ results: [task] });
        console.log(task);
        console.log(task.title);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);
  return (
    <Card className={`mt-4 ${styles.TaskCard}`}>
      <Row>
        <Col xs={8} className="mt-3">
          <Card.Title>{task.results[0] && task.results[0].title}</Card.Title>
          {task.results[0] && task.results[0].description}
        </Col>

        <Col xs={4} className={`${styles.StatusCol}`}>
          <Row className="">
            <p className={`mt-4 ${styles.SubHeading}`}>Status</p>
            <p className="mt-4">{task.results[0] && task.results[0].status}</p>
            {task.results[0] && task.results[0].is_owner ? (
              <DropdownMenu
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ) : (
              ""
            )}
          </Row>
          <Row>
            <p className={styles.SubHeading}>Priority</p>
            <p>{task.results[0] && task.results[0].priority}</p>
          </Row>
          <Row>
            <p className={styles.SubHeading}>End date</p>
            <p>{task.results[0] && task.results[0].end_date}</p>
          </Row>
          <Row>
            <p className={styles.SubHeading}>Board</p>
            <p>{task.results[0] && task.results[0].Board}</p>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default TaskPage;
