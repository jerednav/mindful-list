import { useState } from "react";
import NewTask from "./components/pages/NewTask";
import Navbar from "./components/layout/Navbar";
import Tasks from "./components/pages/Tasks";

const DUMMY_TASKS = [
  {
    id: "e1",
    title: "Pick up dog food",
    completed: false,
  },
  {
    id: "e2",
    title: "Do Laundry",
    completed: true,
  },
  {
    id: "e3",
    title: "Buy groceries",
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <div>
      <Navbar />
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={tasks} />
    </div>
  );
}

export default App;
