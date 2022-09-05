import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { useTodoLayerValue } from "./context/TodoContext";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import "./App.css"
export default function App() {
  const [{ todos }, dispact] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content) return;
    const newTodo={
      id: "#"+Math.floor(Math.random()*4562),
      content,
      isComplete:false,
    };
    dispact({
      type:"ADD_TODO",
      payload:newTodo,
    })
    setContent('');
    alertify.success(newTodo.content+" başarıyla eklendi");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <button className="todo-button">Ekle</button>
      </form>
      <TodoList todos={todos}/>
    </div>
  );
}
