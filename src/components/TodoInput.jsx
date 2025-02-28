import { useState } from "react";

export const TodoInput = ({ handleAddTodo }) => {
  const [input, setInput] = useState("");
  return (
    <div className="input-container">
      <input
      value={input}
        placeholder="Add task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="fa fa-solid fa-plus"
        onClick={() => {
          if(!input) return ;
          handleAddTodo(input)
          setInput("")
        }}
      ></button>
    </div>
  );
};
