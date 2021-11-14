import { useState } from "react";

const TaskItem = (props) => {
  const [checked, setChecked] = useState(false);

  const completedTask = (props) => {
    setChecked(true);
    props.onChangeFilter(true);
  };

  return (
    <div className='tasks'>
      <div className='task-item'>
        <input type='checkbox' value={checked} onChange={completedTask} />
      </div>
      <div className='task-item'>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default TaskItem;
