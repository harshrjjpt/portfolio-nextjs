"use client";
import React from "react";
import styles from "./Header.module.scss";

import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Container } from "../Container/Container.styled";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <ul className={styles.menuList}>
        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href="#home"
        >
          {" "}
          <li>HOME</li>
        </Link>
        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href="#about"
        >
          {" "}
          <li>ABOUT</li>
        </Link>
        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href="#projects"
        >
          {" "}
          <li>PROJECTS</li>
        </Link>
        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href="#experience"
        >
          {" "}
          <li>EXPERIENCE</li>
        </Link>
      </ul>

      {/* <div className={styles.rightSide}>
        <ul>
          <li>
            <XIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
          <li>
            <GitHubIcon />
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Header;
