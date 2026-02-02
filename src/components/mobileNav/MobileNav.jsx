import React from "react";
import Nav from "../nav/Nav";
import ThemeToggler from "../themeToggle/ThemeToggler";
import { motion } from "motion/react";

export default function MobileNav() {
  return (
    <motion.div
      className="test"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className="nav__container"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <Nav />
        <ThemeToggler />
      </motion.div>
    </motion.div>
  );
}
