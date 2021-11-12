import "./NewTask.css";
import TaskForm from "./TaskForm";

function NewTask(props) {
  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };
    props.onAddTask(taskData);
  };

  return (
    <div className='new-task'>
      <TaskForm onSaveTaskData={saveTaskDataHandler} />
    </div>
  );
}

export default NewTask;
