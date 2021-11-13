import React from "react";

const TaskItem = (props) => {
  return (
    <div className='task-items'>
      <h2>{props.title}</h2>
    </div>
  );
};

export default TaskItem;
