import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <div>
    <h2 style={{paddingLeft:'40px'}}>Child Component</h2>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleComplete(todo.id)}>
            Complete
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default TodoList;
