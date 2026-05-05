import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {/* The magic line: The button ONLY exists if completed is false */}
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