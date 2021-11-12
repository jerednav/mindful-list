import React from "react";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  return (
    <div>
      <TaskItem title={props.items[0].title} />
      <TaskItem title={props.items[1].title} />
      <TaskItem title={props.items[2].title} />
    </div>
  );
};

export default Tasks;
