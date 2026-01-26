import React, { useEffect, useState } from "react";
import Cross from "../../../assets/icon-cross.svg?react";
import { userBoardStore } from "../../stores/useBoardStore";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export default function EditBoardPopup() {
  const { selectedBoardId, boards } = userBoardStore();
  const [currnetColumns, setCurrentColumns] = useState([]);

  const dataList = boards.find((b) => b.name === selectedBoardId);

  const GetColumns = async () => {
    try {
      const boardRef = doc(db, "Boards", selectedBoardId);
      const boardSnap = await getDoc(boardRef);
      const boardData = boardSnap.data();
      setCurrentColumns(boardData.columns);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  useEffect(() => {
    GetColumns();
  }, []);

  function handleSubtaskChange(index, value) {
    setCurrentColumns((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        name: value,
      };
      return updated;
    });
  }

  const saveChanges = async () => {
    try {
      const boardRef = doc(db, "Boards", selectedBoardId);
      await updateDoc(boardRef, {
        columns: currnetColumns,
      });
    } catch (error) {
      console.error("Error saving board:", error);
    }
  };

  return (
    <form
      className="overlay__container"
      onSubmit={(e) => {
        e.preventDefault();
        saveChanges();
      }}
    >
      <div className="overlay__header">
        <h3>Edit Board</h3>
      </div>
      <label className="overlay__label" htmlFor="addTitle">
        Board Name
      </label>
      <input
        type="text"
        name="addTitle"
        id="addTitle"
        placeholder="e.g. Web Design"
        className="overlay__input"
        value={selectedBoardId}
      />{" "}
      <label className="overlay__label" htmlFor="subTasks">
        Columns
      </label>
      {currnetColumns?.map((column, index) => (
        <div>
          <ul className="subTasks">
            <li className="subTask" key={index}>
              <input
                id="subtask-1"
                type="text"
                placeholder="e.g. Make coffee"
                className="subTask__input"
                value={column.name}
                onChange={(e) => handleSubtaskChange(index, e.target.value)}
              />
              <button
                type="button"
                className="subTask__button"
                onClick={() =>
                  setCurrentColumns((prev) =>
                    prev.filter((_, i) => i !== index),
                  )
                }
              >
                <Cross />
              </button>
            </li>
          </ul>
        </div>
      ))}
      <button
        className="overlay__button-column"
        onClick={() =>
          setCurrentColumns((prev) => [...prev, { name: "", tasks: [] }])
        }
      >
        + Add New Column
      </button>
      <button className="overlay__button" type="submit">
        Save Changes
      </button>
    </form>
  );
}
