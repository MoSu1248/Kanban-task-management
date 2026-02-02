import React, { useState } from "react";
import "./Header.scss";
import Logo_light from "../../assets/logo-dark.svg?react";
import Logo_dark from "../../assets/logo-light.svg?react";
import * as motion from "motion/react-client";
import { useThemeStore } from "../stores/useThemeStore";
import AddTaskBtn from "../addTaskBtn/AddTaskBtn";
import OptionsBtn from "../options/OptionsBtn";
import MobileLogo from "../../assets/logo-mobile.svg?react";
import { useEffect } from "react";
import MobileNavContainer from "../mobileNav/MobileNavContainer";

export default function HeaderTemp() {
  const theme = useThemeStore((state) => state.theme);

  const [viewportWidth, setViewportWidth] = useState();
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className="header"
      initial={{ y: `-100%` }}
      animate={{ y: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="logo__container">
        {viewportWidth < 768 ? (
          <MobileLogo />
        ) : theme === "dark" ? (
          <Logo_dark />
        ) : (
          <Logo_light />
        )}
      </div>
      <div className="content__container">
        <h1 className="content__heading">Platform Launch</h1>

        {viewportWidth < 768 && <MobileNavContainer />}
        <AddTaskBtn />
        <OptionsBtn />
      </div>
    </motion.div>
  );
}
