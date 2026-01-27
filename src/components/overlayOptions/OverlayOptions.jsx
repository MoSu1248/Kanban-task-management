import React from "react";
import "./OverlayOptions.scss";
import { useModalStore } from "../stores/useModalStore";

export default function OverlayOptions({ task, columnId }) {
  const modalOpen = useModalStore((state) => state.toggleModalOpen);

  return (
    <div className="options overlay__options">
      <ul className="options__list">
        <li className="option__item">
          <button
            onClick={() =>
              modalOpen("EDIT__TASK", {
                task: task,
                columnId: columnId,
              })
            }
            className="option__btn"
          >
            Edit Task
          </button>
        </li>
        <li className="option__item">
          <button
            onClick={() =>
              modalOpen("DELETE__TASK", {
                task: task,
                columnId,
              })
            }
            className="option__btn delete__btn"
          >
            Delete Task
          </button>
        </li>
      </ul>
    </div>
  );
}
