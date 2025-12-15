import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./layout.scss";
import { useNavTogglerStore } from "../stories/useNavTogglerStore";
import NavToggleShow from "../navToggle/NavToggleShow";

export default function Layout({ children }) {
  const navDisplay = useNavTogglerStore((state) => state.navDisplay);

  return (
    <div className={navDisplay ? `app-layout` : `app-layout app-layout-hidden`}>
      <NavToggleShow />
      <Header />
      <Navbar />
      <main className="content">{children}</main>
    </div>
  );
}
