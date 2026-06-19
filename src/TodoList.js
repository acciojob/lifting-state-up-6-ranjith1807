import React from 'react';
import './App.css';

// Child component: receives `todos` (data) and `handleComplete` (function)
// from the parent via props. It does NOT own the todos state itself —
// it only reads it and calls the parent's function to request a change.
function TodoList({ todos, handleComplete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <span className="todo-text">{todo.text}</span>

          {/* Conditional rendering: only show the button if not completed */}
          {todo.completed ? (
            <span className="status-badge">Completed</span>
          ) : (
            <button
              className="complete-btn"
              onClick={() => handleComplete(todo.id)}
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;