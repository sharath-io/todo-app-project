import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([{ id: 1, input: "Hello! Add your first todo!", complete: true }])
    
  const [tab, setTab] = useState("All");

  const handleAddTodo = (newTodo) =>
    setTodos((todos) => [
      ...todos,
      { id: todos.length + 1, input: newTodo, complete: false },
    ]);

  const handleEditTodo = (todoId) =>
    setTodos((todos) =>
      todos.map((task) =>
        task.id === todoId ? { ...task, complete: true } : task
      )
    );

  const handleDeleteTodo = (todoId) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));

  const handleSetTab = (tab) => setTab(tab)

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} handleSetTab={handleSetTab} />
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        tab={tab}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
