import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./layout.scss";
import { useNavTogglerStore } from "../stores/useNavTogglerStore";
import NavToggleShow from "../navToggle/NavToggleShow";
import Overlays from "../overlay/Overlays";
import Options from "../options/Options";
import { useOptionsStore } from "../stores/useOptionsStore";

export default function Layout({ children }) {
  const navDisplay = useNavTogglerStore((state) => state.navDisplay);
  const { optionsState } = useOptionsStore();
  return (
    <div className={navDisplay ? `app-layout` : `app-layout app-layout-hidden`}>
      <NavToggleShow />
      <Header />
      <Navbar />
      <Overlays />
      {optionsState && <Options />}
      <main className="content">{children}</main>
    </div>
  );
}
