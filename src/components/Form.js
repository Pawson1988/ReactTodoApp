import React from "react";

const Form = ({ todoInput, inputField, handleChange, deleteTodo}) => {

    const formStyles = {
        width: "20%",
        margin: "0 auto",
        marginTop: "5rem"
    }

    return (
        <form onSubmit={todoInput} style={formStyles}>
            <input value={inputField} onChange={handleChange} id="todo" name="todo" type="text" placeholder="Todo"></input>
            <button type="submit">Add Todo</button>
            <button onClick={deleteTodo}>Delete Last Todo</button>
        </form>
    )
}

export default Form;