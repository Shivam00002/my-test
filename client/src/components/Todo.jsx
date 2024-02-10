import React, { useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    setTodos((prevTodo) => [...prevTodo, text]);
    setText("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="w-[500px] h-fit mx-auto">
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        placeholder="Enter Something"
      />
      <button onClick={handleAddTodo}>Add</button>

      {todos?.map((el, index) => {
        return (
          <li key={index}>
            {el}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};
