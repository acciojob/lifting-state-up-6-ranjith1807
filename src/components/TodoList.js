import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <div style={{ paddingLeft: '20px' }}>
      <h2>Child Component</h2>
      <ul style={{padding:'10px'}}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
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