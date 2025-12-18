import React from "react";
import Cross from "../../../assets/icon-cross.svg?react";

export default function AddTaskPopup() {
  return (
    <form className="overlay__container">
      <h3>Add New Task</h3>
      <label htmlFor="addTitle">Title</label>
      <input
        type="text"
        name="addTitle"
        id="addTitle"
        placeholder="e.g. Take coffee break"
      />
      <label htmlFor="addTitle">Description</label>
      <textarea
        type="text"
        name="addTitle"
        id="addTitle"
        placeholder="e.g. It’s always good to take a break. This 15 minute break will 
        recharge the batteries a little."
      />
      <label htmlFor="subTasks">Subtasks</label>
      <ul>
        <li>
          <label className="sr-only" htmlFor="subtask-1"></label>
          <input id="subtask-1" type="text" placeholder="e.g. Make coffee" />
          <button type="button" className="subTask__button">
            <Cross />
          </button>
        </li>

        <li>
          <label className="sr-only" htmlFor="subtask-2"></label>
          <input
            id="subtask-2"
            type="text"
            placeholder="e.g. Drink coffee & smile"
          />
          <button type="button" className="subTask__button">
            <Cross />
          </button>
        </li>
      </ul>
    </form>
  );
}
