import React from "react";
import styled from "styled-components";
import TodosComments from "./TodosComments";

const StyledDiv = styled.div`
  padding: 40px;
  width: 20%;
  margin: 20px auto;
  margintop: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  box-shadow: 1px 1px 1px black;

  :hover {
    background: lightblue;
  }
`;

const StyledList = styled.li`
  font-weight: 700;
  list-style: none;
`;

const Todos = ({ todos, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <StyledDiv>
        <h1 style={{ fontWeight: 700 }}>
          Surely you've got something to do! you must have the best life ever!!
        </h1>
      </StyledDiv>
    );
  } else {
    return (
      <div>
        {todos.map((todo, index) => {
          return (
            <StyledDiv>
              <StyledList key={index}>{todo}</StyledList>
              <TodosComments />
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
            </StyledDiv>
          );
        })}
      </div>
    );
  }
};

export default Todos;
