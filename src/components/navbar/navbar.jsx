import "./navbar.scss";
import Nav from "../nav/Nav";
import NavToggle from "../navToggle/NavToggleHide";
import ThemeToggler from "../themeToggle/ThemeToggler";
import { useNavTogglerStore } from "../stores/useNavTogglerStore";
import * as motion from "motion/react-client";
import { useState } from "react";
import { userBoardStore } from "../stores/useBoardStore";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const navDisplay = useNavTogglerStore((state) => state.navDisplay);
  const { boards } = userBoardStore();

  return (
    <motion.div className={navDisplay ? `navbar` : `navbar navbar__hidden`}>
      <h3 className="navbar__heading">ALL BOARDS ({boards.length})</h3>
      <Nav />
      <ThemeToggler />
      <NavToggle showNav={showNav} />
    </motion.div>
  );
}
