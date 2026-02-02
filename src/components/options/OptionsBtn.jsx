import React from "react";
import Elipsis from "../../assets/icon-vertical-ellipsis.svg?react";
import { useOptionsStore } from "../stores/useOptionsStore";
import Options from "./Options";

export default function OptionsBtn() {
  const toggleOptions = useOptionsStore((state) => state.toggleOptions);
  const { optionsState } = useOptionsStore();
  return (
    <div className="options__container">
      <button className="options__btn" onClick={toggleOptions}>
        <Elipsis />
        {optionsState && <Options />}
      </button>
    </div>
  );
}
