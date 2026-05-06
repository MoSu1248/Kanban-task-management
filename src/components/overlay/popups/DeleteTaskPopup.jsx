import React, { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { userBoardStore } from "../../stores/useBoardStore";
import { useModalStore } from "../../stores/useModalStore";

export default function DeleteTaskPopup({ payload }) {
  const { task, columnId } = payload;
  const { selectedBoardId } = userBoardStore();
  const [current, setCurrent] = useState();
  const closeModal = useModalStore((state) => state.toggleModalClose);

  const message = ` Are you sure you want to delete the ‘${task.title}’ task and its
        subtasks? This action cannot be reversed.`;

  const handleSubmit = async () => {
    try {
      const boardRef = doc(db, "Boards", selectedBoardId);
      const boardSnap = await getDoc(boardRef);
      const boardData = boardSnap.data();

      const updatedColumns = boardData.columns.map((column) => {
        if (column.name === columnId) {
          const updatedTasks = column.tasks.filter(
            (taskItem) => taskItem.title !== task.title,
          );

          return {
            ...column,
            tasks: updatedTasks,
          };
        }

        return column;
      });

      await updateDoc(boardRef, { columns: updatedColumns });
      closeModal();
      console.log("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <form className="overlay__container" onSubmit={(e) => e.preventDefault()}>
      <h3 className="overlay__delete-header overlay__header">
        Delete this task?
      </h3>
      <p className="overlay__delete-text">{message}</p>
      <div className="overlay__delete-btns">
        <button
          className="overlay__button-delete"
          onClick={() => handleSubmit()}
        >
          Delete
        </button>
        <button className="overlay__button-cancel">Cancel</button>
      </div>
    </form>
  );
}
