import React, { useState } from "react";
import Form from "../components/Form";
import Todos from "../components/Todos";
import "./App.css";

function App() {
  const initialTodos = ["Do Homework", "Plan Classes", "Do the Hoovering"];

  const [todos, setTodos] = useState(initialTodos);
  const [inputField, setInputField] = useState();

  function handleChange(e){
    setInputField(e.target.value)
  }

  function todoInput(e) {
    setTodos((prevTodos) => [...prevTodos, e.target.todo.value]);
    setInputField("");
    e.preventDefault();
  }

  console.log(todos);
  return (
    <div>
      <Form todoInput={todoInput} inputField={inputField} handleChange={handleChange}/>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
