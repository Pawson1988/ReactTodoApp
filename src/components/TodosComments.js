import React, { useState } from "react";

const TodosComments = () => {
  const [comment, setComment] = useState("No Comment");

  function onSubmitComment(e) {
    setComment(e.target.commentInput.value);
    e.preventDefault();
  }

  return (
    <div>
      <p>{comment}</p>
      <form onSubmit={onSubmitComment}>
        <input name="commentInput" type="text"></input>
        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default TodosComments;
