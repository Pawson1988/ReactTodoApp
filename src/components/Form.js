
import React from "react";

const Form = ({ todoInput, inputField, handleChange, errorMsg }) => {

  const formStyles = {
    width: "20%",
    margin: "0 auto",
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "4rem"
  };
  

  return (
    <div>
      <form onSubmit={todoInput} style={formStyles}>
        <input
          value={inputField}
          onChange={handleChange}
          id="todo"
          name="todo"
          type="text"
          placeholder="Todo"
        ></input>
        <h2>{errorMsg}</h2>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Form;
