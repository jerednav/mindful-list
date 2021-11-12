import React from "react";
import "./TaskForm.css";
import { useState } from "react";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const taskData = {
      title: enteredTitle,
    };

    props.onSaveTaskData(taskData);
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-task-title'>
        <input
          type='text'
          placeholder='Enter task'
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className='new-task-action'>
        <button type='submit'>Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
