import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2 style={{paddingLeft:'20px'}}>Child Component</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px'}}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            {todo.text}
            {/* Logic: Button only exists if completed is false */}
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