import React from "react";
import "./Tasks.css";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  return (
    <div className='tasks'>
      {props.items.map((task) => (
        <TaskItem title={task.title} />
      ))}
    </div>
  );
};

export default Tasks;
