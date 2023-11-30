import { useState } from "react";
import styled from "styled-components";

export default function TodoForm({ setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmitTodo(e) {
    e.preventDefault();
    if (todo !== "") {
      setTodos((prevTodos) => {
        return [...prevTodos, { id: crypto.randomUUID(), todo, done: false }];
      });
      setTodo("");
    }
  }
  return (
    <Form onSubmit={handleSubmitTodo}>
      <label htmlFor="todoinput"></label>
      <Input
        type="text"
        id="todoinput"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="What is the task today"
      />
      <Button type="submit">Add Task</Button>
    </Form>
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
`;

const Form = styled.form`
  margin-bottom: 30px;
`;
