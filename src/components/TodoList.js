import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Use a standard list with no extra indentation for straight alignment */}
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '5px' }}>
            {todo.text}
            {/* 
                This condition is critical: 
                The button must ONLY render if todo.completed is false.
            */}
            {!todo.completed && (
              <button 
                onClick={() => handleComplete(todo.id)}
                style={{ marginLeft: '10px' }}
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