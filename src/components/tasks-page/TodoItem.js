import React from 'react';
import { TrashSimple } from "phosphor-react";
import './TodoItem.css';

export default function TodoItem({ todo, handleStatus, handleDelete }) {
    const convertUTC = (input_date) => {
        var options = { weekday: 'long', month: 'short', day: 'numeric' };
        var date = new Date(input_date);
        return date.toLocaleDateString("en-US", options);
    }

    const displayDate = (input) => {
        if (!input) return;
        return `Done by ${convertUTC(input)}`;
    }

    const displayUser = (input) => {
        if (!input) return;
        return input;
    }

    return (
      <div /*key={todo.id}*/ className="todo-item">
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            e.preventDefault();
            handleStatus(todo);
            console.log("clicked");
          }}
        />
        <div className="todo-content-container">
          <p className="todo-content">{todo.content}</p>
          <p className="todo-date">{displayDate(todo.date)}</p>
        </div>
        <div className="assignee-container">
            <p className="todo-username">
                {displayUser(todo.userid.name)}
            </p>
        </div>
        <button className="btn-delete-todo" onClick={(e) => handleDelete(todo)}>
            <TrashSimple size={22} color="#ffffff" />
        </button>
      </div>
    );
}
