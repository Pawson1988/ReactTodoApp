import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Todos from "../components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputField, setInputField] = useState();

  useEffect(() => {
    const initialTodos = ["Do Homework", "Plan Classes", "Do the Hoovering"];
    setTodos(initialTodos);
  }, []);

  function deleteTodo(index) {
    const newTodos = todos;
    newTodos.splice(index, 1);
    setTodos([...newTodos]);
  }

  function handleChange(e) {
    setInputField(e.target.value);
  }

  function todoInput(e) {
    setTodos((prevTodos) => [...prevTodos, e.target.todo.value]);
    setInputField("");
    e.preventDefault();
  }

  if (todos === undefined) {
    return (
      <div>
        <h1>Loading.......</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Form
          todoInput={todoInput}
          inputField={inputField}
          handleChange={handleChange}
        />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </div>
    );
  }
}

export default App;
