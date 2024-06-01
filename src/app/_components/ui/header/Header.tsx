"use client";
import React from "react";
import styles from "./Header.module.scss";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <ul className={styles.menuList}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
          href="#home"
        >
          {" "}
          <li>HOME</li>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
          href="#about"
        >
          {" "}
          <li>ABOUT</li>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
          href="#projects"
        >
          {" "}
          <li>PROJECTS</li>
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
          href="#experience"
        >
          {" "}
          <li>EXPERIENCE</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
