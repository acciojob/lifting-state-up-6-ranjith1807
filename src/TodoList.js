import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <span>{todo.completed ? " Completed" : " Not Completed"}</span>

          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;