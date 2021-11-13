import React from "react";
import { useState } from "react";

const TaskItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("Task Item evaluated by REact");

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <div className='task-items'>
      <h2>{title}</h2>
    </div>
  );
};

export default TaskItem;
