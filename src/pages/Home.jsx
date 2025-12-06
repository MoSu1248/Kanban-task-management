import React from "react";
import "./Home.scss";
import Empty from "../components/Empty/Empty";
import { userBoardStore } from "../components/Stores/useBoardStore";
import data from "../data/data.json";

export default function Home() {
  const { selectedBoardId } = userBoardStore();
  const dataBoards = data.boards;

  const dataList = dataBoards.find((b) => b.name === selectedBoardId);
  if (!dataList) return <Empty />;

  return (
    <div className="column__container">
      {dataList?.columns?.map((column, index) => (
        <div className="column">
          <h3 className="column__heading">
            <div className="column__heading-color"></div>
            {column.name} ({column.tasks.length})
          </h3>
          <ul key={index}>
            {column.tasks.map((task, i) => {
              const completedCount =
                task.subtasks?.filter((st) => st.isCompleted).length || 0;
              const totalCount = task.subtasks?.length || 0;

              return (
                <li key={i}>
                  {task.title}
                  <span className="subtasks">
                    ({completedCount} of {totalCount} subtasks completed)
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <button className="column__add-btn">+ New Column</button>
    </div>
  );
}
