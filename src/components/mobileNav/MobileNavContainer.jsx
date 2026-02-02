import React, { useState } from "react";
import DropdwBtnUp from "../../assets/icon-chevron-up.svg?react";
import DropdwBtnDown from "../../assets/icon-chevron-down.svg?react";
import MobileNav from "./MobileNav";
import "./MobileNav.scss";
import { useMobileNavStore } from "../stores/useMobileNavStore";

export default function MobileNavContainer() {
  const [dropState, setDropState] = useState(false);

  const navDisplay = useMobileNavStore((state) => state.navDisplay);

  function toggler() {
    setDropState(!dropState);
  }

  return (
    <div className="mobileDrop__wrapper">
      {!dropState ? (
        <button onClick={() => toggler()} className="mobileNav__btn">
          <DropdwBtnDown />
        </button>
      ) : (
        <button onClick={() => toggler()} className="mobileNav__btn">
          <DropdwBtnUp />
        </button>
      )}
      {dropState && <MobileNav />}
    </div>
  );
}
