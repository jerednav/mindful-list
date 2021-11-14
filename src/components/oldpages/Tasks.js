import React from "react";
import "./Tasks.css";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  const filteredCompletedTasks = props.items.filter((task) => {
    return task.completed === props.completed;
  });

  return (
    <div className='tasks'>
      {props.items.map((task) => (
        <TaskItem
          title={task.title}
          key={task.id}
          onChangeFilter={filteredCompletedTasks}
        />
      ))}
    </div>
  );
};

export default Tasks;
