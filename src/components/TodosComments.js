import React, { useState } from "react";

const TodosComments = () => {
  const [comment, setComment] = useState("No Comment");
  const [inputField, setInputField] = useState("");

  function onSubmitComment(e) {
    setComment(e.target.commentInput.value);
    setInputField("");
    e.preventDefault();
  }

  function handleChange(e) {
    setInputField(e.target.value);
  }

  return (
    <div>
      <p>{comment}</p>
      <form onSubmit={onSubmitComment}>
        <input onChange={handleChange} value={inputField} name="commentInput" type="text"></input>
        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default TodosComments;
