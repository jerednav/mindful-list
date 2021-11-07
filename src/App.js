import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [tasks, setTasks] = useState();

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
