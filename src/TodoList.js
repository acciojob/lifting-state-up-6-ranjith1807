import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Child Component: Todo List</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: '400px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '10px',
              backgroundColor: todo.isCompleted ? '#e6ffe6' : '#fff',
            }}
          >
            <span
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
                color: todo.isCompleted ? '#888' : '#000',
              }}
            >
              {todo.text}
            </span>

            {/* Conditional rendering: Added data-testid for the test environment */}
            {!todo.isCompleted && (
              <button
                data-testid={`complete-btn-${todo.id}`}
                onClick={() => handleComplete(todo.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                }}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
