import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // Initializing state with an array of objects
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Master Lifting State Up', completed: false },
    { id: 3, text: 'Pass Cypress Tests', completed: false }
  ]);

  // Function to toggle the completion status
  const handleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  return (
    <div>
      <h1>Todo App</h1>
      {/* Passing state and the update function down as props */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;