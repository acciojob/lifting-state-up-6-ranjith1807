import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {/* 
               CRITICAL: The button must only render if 'completed' is false.
               This ensures the button is deleted from the DOM after clicking.
            */}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>
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