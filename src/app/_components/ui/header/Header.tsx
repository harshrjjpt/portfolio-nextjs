"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

function Header() {
  const [isTablet, setIsTablet] = useState(false);
  // Move the function outside of the useEffect
  function checkIsTablet() {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileOrTabletUserAgent = /android|ipad|iphone|ipod|tablet|playbook|silk|kindle/.test(userAgent);
      const isMobileOrTabletScreenSize = window.innerWidth <= 900;

      setIsTablet(isMobileOrTabletUserAgent || isMobileOrTabletScreenSize);
    }
  }

  useEffect(() => {
    // Run the check when the component mounts
    checkIsTablet();

    // Optionally, add a resize event listener
    window.addEventListener("resize", checkIsTablet);
    return () => window.removeEventListener("resize", checkIsTablet);
  }, []);

  return (
    <div className={styles.headerContainer}>
      <ul className={styles.menuList}>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={1500} href="#home">
          {" "}
          <li>HOME</li>
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={1500} href="#about">
          {" "}
          <li>ABOUT</li>
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={1500} href="#projects">
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
          <li>{`${isTablet}`}</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
