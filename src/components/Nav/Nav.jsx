import React, { useEffect } from "react";
import "./Nav.scss";
import Board from "../../assets/icon-board.svg?react";
import data from "../../data/data.json";
import { userBoardStore } from "../Stores/useBoardStore";
export default function Nav() {
  const dataBoards = data.boards;
  const { selectedBoardId, setSelectedBoardId } = userBoardStore();

  return (
    <ul className="list">
      {dataBoards.map((item, index) => (
        <li
          className={
            selectedBoardId === item.name ? `list__item active` : `list__item`
          }
          key={index}
          onClick={() => {
            setSelectedBoardId(item.name);
          }}
        >
          <Board />
          {item.name}
        </li>
      ))}
      <li className="list__item list__create">
        <Board />+ Create New Board
      </li>
    </ul>
  );
}
