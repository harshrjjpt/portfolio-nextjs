import React from "react";
import styles from "./HeaderTitle.module.scss";

interface HeaderTitleProps {
  title: string[]
} 
function HeaderTitle({title}:HeaderTitleProps ) {
  return (
    <div className={styles.letsWorkContainer}>
      <div className={styles.perspectiveTextContainer}>
        <div className={styles.perspectiveTextSubContainer}>
          <h2 className={styles.text1}>{title[0]}</h2>
        </div>
      </div>
      <h1 className={styles.text2}>{title[1]}</h1>
    </div>
  );
}

export default HeaderTitle;
