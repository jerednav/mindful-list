import NewTask from "./components/pages/NewTask";
import Navbar from "./components/layout/Navbar";
import Tasks from "./components/pages/Tasks";

function App() {
  const tasks = [
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

  const addTaskHandler = (task) => {
    console.log("In app.js");
    console.log(task);
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
