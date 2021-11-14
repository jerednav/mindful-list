import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const taskData = {
      title: enteredTitle,
      completed: false,
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
    </form>
  );
};

export default TaskForm;
