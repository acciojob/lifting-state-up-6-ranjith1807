import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text} 
            
            {/* Renders the button ONLY if completed is false */}
            {!todo.completed && (
              <button 
                style={{ marginLeft: "10px" }}
                onClick={() => handleComplete(index)}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;