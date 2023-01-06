import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import Task from './Task';

const TaskPage = () => {
    const { id } = useParams();
    const [task, setTask] = useState({results: []})

    useEffect(()=>{
        const handleMount = async () => {
            try{
                const [{ data: task}] = await Promise.all([
                    axiosReq.get(`/tasks/${id}`),
                ])
                setTask({result: [task] })
                console.log(task)
            } catch (err) {
                console.log(err)
            }
        }
        handleMount()
    }, [id])
  return (
    <Task/>
  );
}

export default TaskPage