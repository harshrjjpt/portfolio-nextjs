import React from "react";
import styles from "./Experience.module.scss";
import { HomePageContainer } from "./ui/Container/Container.styled";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ScienceIcon from '@mui/icons-material/Science';
function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.titleContainer}>
        <h1>2+</h1>
        <h3>Years Experience in Field</h3>
      </div>
      <div className={styles.boxContainer}>
        <div className={`${styles.box} ${styles.box1}`}>
          <CodeIcon />
          <h1>Coding & Programming</h1>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <DesignServicesIcon />
          <h1>Designing</h1>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <ScienceIcon />
          <h1>Research and Developing</h1>
        </div>
      </div>
    </div>
  );
}

export default Experience;
