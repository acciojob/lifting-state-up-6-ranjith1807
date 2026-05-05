import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a React app", completed: false },
    { text: "Deploy the React app", completed: false }
  ]);

  // Using 'index' ensures it works even if objects don't have IDs
  const handleComplete = (targetIndex) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) =>
        index === targetIndex ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;