"use client";
import React, { useEffect, useState } from "react";
import styles from "./EntryAbout.module.scss";
import Marquee from "react-fast-marquee";
import MarqueeComponent from "./ui/marquee/Marquee";
interface AboutProps {}

export default function EntryAbout({}: AboutProps) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      // Change the scroll position threshold as needed
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <section className={`${styles.aboutSection} ${scrolling ? styles.scrollBackground : ""}`}>
      <div className={styles.left}>
        <h1 className={styles.heroHeading}>
          <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>
            More than 2 years of experience.
          </span>{" "}
        </h1>
        <p>
          Bringing over 2.5 years of hands-on experience in frontend and blockchain tech. Passionate about learning and
          tackling new challenges to create innovative digital solutions.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.skillsContainer}>
          <div className={styles.marquee}>
            <MarqueeComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
