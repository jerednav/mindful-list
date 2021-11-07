import React from "react";

const NewTaskForm = () => {
  return (
    <form>
      <div class='newTaskContainer'>
        <div class='newTaskForm'>
          <label>Title</label>
          <input type='text' />
        </div>
        <div class='taskInput'>
          <label>Tags</label>
          <input type='text' />
        </div>
        <div class='taskInput'>
          <label>Write task here</label>
          <input type='text' />
        </div>
      </div>
      <div class='addNewExpense'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default NewTaskForm;
