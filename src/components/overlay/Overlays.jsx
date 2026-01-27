import React from "react";
import "./Overlays.scss";
import AddTaskPopup from "./popups/AddTaskPopup";
import AddBoardPopup from "./popups/AddBoardPopup";
import EditBoardPopup from "./popups/EditBoardPopup";
import DeleteBoardPopup from "./popups/DeleteBoardPopup";
import DeleteTaskPopup from "./popups/DeleteTaskPopup";
import EditTaskPopup from "./popups/EditTaskPopup";
import ViewTaskPopup from "./popups/ViewTaskPopup";
import { useModalStore } from "../stores/useModalStore";
import Cross from "../../assets/icon-cross.svg?react";
import { useOverlayOptionsStore } from "../stores/useOverlayOptionsStore";

export default function Overlays() {
  const modalOpen = useModalStore((state) => state.modalState);
  const closeModal = useModalStore((state) => state.toggleModalClose);
  const { modalType, payload } = useModalStore();
  const closeOptions = useOverlayOptionsStore((state) => state.closeOptions);

  const modalComponent = {
    ADD__TASK: AddTaskPopup,
    ADD__BOARD: AddBoardPopup,
    DELETE__BOARD: DeleteBoardPopup,
    DELETE__TASK: DeleteTaskPopup,
    EDIT__BOARD: EditBoardPopup,
    EDIT__TASK: EditTaskPopup,
    VIEW__TASK: ViewTaskPopup,
  };
  const ModalComponent = modalComponent[modalType];

  function onClose() {
    closeModal();
    closeOptions();
  }

  return (
    <>
      {modalOpen && (
        <div className="overlay">
          <div className="overlay__wrapper">
            <button
              type="button"
              className="close-btn"
              onClick={() => onClose()}
            >
              <Cross />
            </button>
            {ModalComponent ? <ModalComponent payload={payload} /> : null}
          </div>
        </div>
      )}
    </>
  );
}
