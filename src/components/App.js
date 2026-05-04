import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  // Initialize state with the specific items from your image
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false }
  ]);

  // handleComplete function to update the state
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Passing state and handler to child */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;