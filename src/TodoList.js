import React from 'react';

function TodoList(props) {
  const { todos, handleComplete } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {!todo.completed && (
            <button
              className="complete-btn"
              onClick={() => handleComplete(todo.id)}
            >
              Complete
            </button>
          )}
          {todo.completed && <span> ✅ Completed</span>}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;