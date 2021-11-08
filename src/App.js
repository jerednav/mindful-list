import { useState } from "react";
import NewTask from "./components/pages/NewTask";
import Navbar from "./components/layout/Navbar";

function App() {
  const [tasks, setTasks] = useState();

  return (
    <div>
      <Navbar />
      <NewTask />
    </div>
  );
}

export default App;
