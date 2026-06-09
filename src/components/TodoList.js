import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>
            {todo.text}
          </span>
          
          {/* CONDITIONAL RENDERING: Button only exists if the todo is NOT completed */}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;