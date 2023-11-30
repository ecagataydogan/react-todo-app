import { useState } from "react";
import styled from "styled-components";

export default function Todo({ todo, setTodos }) {
  const [edittedTodo, setEdittedTodo] = useState(todo.todo);
  const [editing, setIsEditing] = useState(false);
  function handleDeleteTodo(todoId) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }
  return (
    <StyledTodoList>
      <Input
        value={edittedTodo}
        disabled={!editing}
        onChange={(e) => setEdittedTodo(e.target.value)}
      />
      <Button onClick={() => setIsEditing(!editing)}>
        {editing ? "Save" : "Edit"}
      </Button>
      <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
    </StyledTodoList>
  );
}

const Button = styled.button`
  background-color: #8758ff;
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  margin-left: 10px;
  color: white;
`;

const Input = styled.input`
  width: 200px;
  padding: 5px;
  margin: 5px;
  font-size: 16px;
  text-align: center;
`;

const StyledTodoList = styled.li`
  list-style-type: none;
`;
