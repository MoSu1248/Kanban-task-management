import React from "react";
import "./Overlays.scss";
import AddTaskPopup from "./popups/AddTaskPopup";

export default function Overlays() {
  return (
    <div className="overlay">
      <AddTaskPopup />
    </div>
  );
}
