import React from "react";

const TaskFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className='tasks-filter'>
      <div className='expenses-filter-control'>
        <label>Filter by completion</label>
        <select value={props.completed} onChange={dropdownChangeHandler}>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;
