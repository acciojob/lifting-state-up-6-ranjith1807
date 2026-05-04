import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  // Initialize state with an array of objects
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false }
  ]);

  // Function to update completion state
 const handleComplete = (id) => {
    // We MUST return a NEW array via .map() so React detects the change
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass todos and handleComplete as props */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;