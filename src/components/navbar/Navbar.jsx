import "./navbar.scss";
import Nav from "../nav/Nav";
import NavToggle from "../navToggle/NavToggleHide";
import ThemeToggler from "../themeToggle/ThemeToggler";
import { useNavTogglerStore } from "../stores/useNavTogglerStore";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const navDisplay = useNavTogglerStore((state) => state.navDisplay);

  return (
    <motion.div className={navDisplay ? `navbar` : `navbar navbar__hidden`}>
      <h3 className="navbar__heading">ALL BOARDS (3)</h3>
      <Nav />
      <ThemeToggler />
      <NavToggle showNav={showNav} />
    </motion.div>
  );
}
