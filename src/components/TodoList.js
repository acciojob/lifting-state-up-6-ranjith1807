import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid={`todo-${todo.id}`}>
            {todo.text}

            {/* Button only appears if NOT completed */}
            {!todo.completed && (
              <button
                data-testid={`complete-${todo.id}`}
                onClick={() => handleComplete(todo.id)}
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
