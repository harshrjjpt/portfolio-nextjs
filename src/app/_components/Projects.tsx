"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.scss";
import { HomePageContainer } from "./ui/Container/Container.styled";
import { Title } from "./ui/Title/Title.styled";
import HeaderTitle from "./HeaderTitle";
import Project from "./Project";

function Projects() {
  const [viewState, setViewState] = useState(false);
  const contactRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setViewState(true);
            console.log("haha1");
          }
        });
      },
      { threshold: 0.5 } // Intersection threshold to trigger state change
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={contactRef}
      className={styles.projectsContainer}
    >
      <HeaderTitle title={["UNLEASH YOUR", "IMAGINATION"]} />
      {/* <div className={`${styles.homePageShadows} ${styles.productShadowTop}`}></div>
      <div className={`${styles.homePageShadows} ${styles.productShadowBottom}`}></div> */}
      <div className={styles.projectsSubContainer}>
        <div className={styles.projectWrapper}>
          <Project
            image="https://i.ibb.co/QpDDh7W/Screenshot-from-2024-04-27-01-20-17.png"
            name="PIKKA COLOR"
          ></Project>
          <Project
            image="https://i.ibb.co/27V120K/substreams-Visualizer.png"
            name="SUBSTREAM VISUALIZER"
          ></Project>
        </div>
        <div className={styles.projectWrapper}>
          <Project
            image="https://i.ibb.co/vZjkkqy/Screenshot-from-2024-04-27-01-27-00.png"
            name="CRYPTZZ TRADING"
          ></Project>
          <Project
            image="https://www.radiustheme.com/wp-content/uploads/2021/07/Pizzon.jpg"
            name="PIZZA APP"
          ></Project>
        </div>
      </div>
    </div>
  );
}

export default Projects;
