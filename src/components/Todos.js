import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoStyles = {
    width: "20%",
    margin: "0 auto",
    marginTop: "5rem",
  };

  if (todos.length === 0) {
    return (
      <div>
        <h1 style={todoStyles}>
          Surely you've got something to do! you must have the best life ever!!
        </h1>
      </div>
    );
  } else {
    return (
      <div style={todoStyles}>
        {todos.map((todo, index) => {
          return (
            <div>
              <li key={index}>{todo}</li>
              {
                <button
                  key={`button: ${index}`}
                  onClick={(e) => {
                    deleteTodo(index);
                  }}
                >
                  Delete
                </button>
              }
            </div>
          );
        })}
      </div>
    );
  }
};

export default Todos;
