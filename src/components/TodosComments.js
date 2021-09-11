import React, { useState } from "react";

const TodosComments = () => {
  const [comment, setComment] = useState("No Comment");
  const [inputField, setInputField] = useState("");
  const [warning, setWarning] = useState("");

  function onSubmitComment(e) {
    setComment(inputField);
    setInputField("");
    setWarning("");
    e.preventDefault();
  }

  function handleChange(e) {
    setInputField(e.target.value);
    setWarning("This comment will completely override your previous comment");
  }

  return (
    <div>
      <p>{comment}</p>
      <p style={{ color: "red"}}>{warning}</p>
      <form onSubmit={onSubmitComment}>
        <input onChange={handleChange} value={inputField} name="commentInput" type="text"></input>
        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default TodosComments;
