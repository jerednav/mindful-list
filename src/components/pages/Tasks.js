import React from "react";
import "./Tasks.css";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  return (
    <div className='tasks'>
      <TaskItem title={props.items[0].title} />
      <TaskItem title={props.items[1].title} />
      <TaskItem title={props.items[2].title} />
    </div>
  );
};

export default Tasks;
