import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import TodoList from "./components/TodoList";
import styled from "styled-components";
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContainer>
      <Header></Header>
      <TodoForm setTodos={setTodos}></TodoForm>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </TodoContainer>
  );
}

export default App;

const TodoContainer = styled.div`
  width: 500px;
  margin: auto;
  height: 100vh;
  background-color: #1a1a40;
  display: flex;
  flex-direction: column;
  align-items: center; /* Dikey hizalamayı ortalar */
  padding: 30px;
`;
