import React from "react";
import clsx from "clsx";
import alertify from 'alertifyjs';
import {
  AiFillCloseSquare,
  AiFillEdit,
  AiFillCheckCircle,
} from "react-icons/ai";
import { useTodoLayerValue } from "../context/TodoContext";
export default function Todo({ todo }) {
  const [{}, dispatch] = useTodoLayerValue();

  const removeTodo = (todoId) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: todoId,
    });
  };
  const completeTodo = (todoId) => {
    
    dispatch({
      type: "COMPLETE_TODO",
      payload: todoId,
    });
    
  };
  const todoStyle = clsx({
    ["todo-row"]: todo,
    ["completed"]: todo.isCompleted,
  });
  return (
    <div className={todoStyle}>
      <div>{todo.content}</div>
      <div className="todo-icons">
        <AiFillCheckCircle
          onClick={() => completeTodo(todo.id)}
          className="todo-icon"
        />
        <AiFillCloseSquare
          className="todo-icon"
          onClick={() => removeTodo(todo.id)}
        />
        
      </div>
    </div>
  );
}
