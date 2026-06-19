import React from 'react';
import './App.css';

function TodoList({ todos, handleComplete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          data-testid={`todo-item-${todo.id}`}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <span className="todo-text">{todo.text}</span>

          {todo.completed ? (
            <span className="status-badge" data-testid={`status-${todo.id}`}>
              Completed
            </span>
          ) : (
            <button
              className="complete-btn"
              data-testid={`complete-btn-${todo.id}`}
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