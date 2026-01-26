import React from "react";
import "./options.scss";
import { useModalStore } from "../stores/useModalStore";
export default function Options() {
  const modalOpen = useModalStore((state) => state.toggleModalOpen);

  return (
    <div className="options">
      <ul>
        <li>
          <button
            onClick={() =>
              modalOpen("DELETE__BOARD", {
                // boardId: board.name,
              })
            }
          >
            Delete Board
          </button>
        </li>
      </ul>
    </div>
  );
}
