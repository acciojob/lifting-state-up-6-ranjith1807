import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  // Parent component owns the source of truth: the todos array
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React basics', completed: false },
    { id: 2, text: 'Understand lifting state up', completed: false },
    { id: 3, text: 'Build a todo app', completed: false },
    { id: 4, text: 'Practice prop drilling', completed: true },
  ]);

  // This function updates the todos state.
  // Passed down to the child so it can trigger updates in the parent
  // ("lifting state up").
  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;