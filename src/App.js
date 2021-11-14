import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Take Ace for a walk",
    "Take the trash out",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <>
      <h1>Mindful List</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={addTodo}>Submit</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
