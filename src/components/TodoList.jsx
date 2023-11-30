import Todo from "./Todo";

export default function TodoList({ todos, setTodos }) {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ol>
  );
}
