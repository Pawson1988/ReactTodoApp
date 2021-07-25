import React from "react";

const Todos = ({ todos }) => {
  const todoStyles = {
    width: "20%",
    margin: "0 auto",
    marginTop: "5rem",
  };

  return (
    <div style={todoStyles}>
      {todos &&
        todos.map((todo) => {
          return <li>{todo}</li>;
        })}
    </div>
  );
};

export default Todos;
