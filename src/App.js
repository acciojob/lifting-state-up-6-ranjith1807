import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  // Initialize the todos state with mock data
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Basics', isCompleted: false },
    { id: 2, text: 'Master Lifting State Up', isCompleted: false },
    { id: 3, text: 'Build a Todo App', isCompleted: true },
  ]);

  // Function to update the completion state of a specific todo
  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Parent Component: Todo Manager</h1>
      {/* Pass state and handler function down as props */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
