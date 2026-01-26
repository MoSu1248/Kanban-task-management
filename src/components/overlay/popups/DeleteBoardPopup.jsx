import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { userBoardStore } from "../../stores/useBoardStore";
import { useModalStore } from "../../stores/useModalStore";
export default function DeleteBoardPopup() {
  const { selectedBoardId } = userBoardStore();
  const closeModal = useModalStore((state) => state.toggleModalClose);

  const deleteBoard = async (selectedBoardId) => {
    try {
      await deleteDoc(doc(db, "Boards", selectedBoardId));
    } catch (error) {
      console.error("Error deleting board:", error);
    }
  };

  function handleDelete() {
    deleteBoard(selectedBoardId);
    closeModal();
  }

  const message = `Are you sure you want to delete the board ${selectedBoardId}? This action
        will remove all columns and tasks and cannot be reversed.`;

  return (
    <form className="overlay__container" onSubmit={(e) => e.preventDefault()}>
      <h3 className="overlay__delete-header">Delete this board?</h3>
      <p className="overlay__delete-text">{message}</p>
      <div className="overlay__delete-btns">
        <button
          className="overlay__button-delete"
          type="submit"
          onClick={() => handleDelete()}
        >
          Delete
        </button>
        <button className="overlay__button-cancel" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </form>
  );
}
