import React, { useState }from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const Tasks = () => {
  const [task, setTask] = useState({
    name: "",
    isComplete: false
  })

  return (
    <>
      <AddTask task={task} setTask={setTask}/>
      <TaskList task={task} setTask={setTask} />
    </>
  );
};

export default Tasks;
