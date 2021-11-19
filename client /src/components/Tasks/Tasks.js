import React, { useState }from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import  { Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const Tasks = () => {
  const auth = useSelector(state => state.auth)
  const [task, setTask] = useState({
    name: "",
    isComplete: false
  })

  if (!auth._id) return <Navigate to='/signin' />

  return (
    <>
      <AddTask task={task} setTask={setTask}/>
      <TaskList task={task} setTask={setTask} />
    </>
  );
};

export default Tasks;
