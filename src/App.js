import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [tasks, setTasks] = useState();

  return (
    <div className='container'>
      <Header />
    </div>
  );
}

export default App;
