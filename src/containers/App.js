import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Todos from "../components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputField, setInputField] = useState();
  const [errorMsg, setErrorMsg] = useState();

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
    const newTodo = e.target.todo.value;
    e.preventDefault();
    if (newTodo !== "") {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputField("");
      setErrorMsg("");
    } else {
      setErrorMsg("Your todo can't be blank! come on! use your head!");
    }
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
          errorMsg={errorMsg}
        />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </div>
    );
  }
}

export default App;
