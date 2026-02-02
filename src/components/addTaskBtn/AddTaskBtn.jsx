import React from "react";
import "./AddTaskBtn.scss";
import { useModalStore } from "../stores/useModalStore";
import AddTask from "../../assets/icon-add-task-mobile.svg?react";

export default function AddTaskBtn() {
  const modalOpen = useModalStore((state) => state.toggleModalOpen);

  return (
    <button className="content__add-btn" onClick={() => modalOpen("ADD__TASK")}>
      <span className="text">+ Add New Task</span>
      <span className="icon">
        <AddTask />
      </span>
    </button>
  );
}
