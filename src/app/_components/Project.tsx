"use client";
import React from "react";
import styles from "./Project.module.scss";
import { Parallax } from "react-parallax";

interface ProjectProps {
  name: string;
  image: string;
  link: string;
}
function Project({ name, image, link }: ProjectProps) {
  return (
    <Parallax
      bgImage={image}
      bgImageAlt="background"
      strength={+180}
      className={styles.projectContainer}
    >
      <div className={styles.gradient}></div>
      <div className={styles.imageContainer}></div>
      <a href={link} target="_blank">
        <h3 className={styles.projectTitle}>{name}</h3>
      </a>
    </Parallax>
  );
}

export default Project;
