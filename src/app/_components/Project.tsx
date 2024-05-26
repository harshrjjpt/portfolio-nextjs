'use client'
import React from "react";
import styles from "./Project.module.scss";
import { Parallax } from "react-parallax";

interface ProjectProps {
  name: string;
  image: string;
}
function Project({ name, image }: ProjectProps) {
  return (
    <Parallax
    bgImage={image}
    bgImageAlt="background"
    strength={+180} // Adjust strength for desired parallax effect
    className={styles.projectContainer}
  >
      <div className={styles.gradient}></div>
      <div className={styles.imageContainer}>
        {/* <img
          src={image}
          alt=""
        /> */}
      </div>
      <h3 className={styles.projectTitle}>{name}</h3>
      </Parallax>
  );
}

export default Project;
