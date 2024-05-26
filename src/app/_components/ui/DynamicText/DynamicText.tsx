import React from "react";
import styles from "./DynamicText.module.scss";

function DynamicText() {
  return (
    <div className={styles.dynamicTextContainer}>
      <ul className={styles.dynamicText}>
        <li>
          <span>FRONTEND</span>
        </li>
        <li>
          <span>BACKEND</span>
        </li>
        <li>
          <span>FULLSTACK</span>
        </li>
        <li>
          <span>BLOCKCHAIN</span>
        </li>
      </ul>
    </div>
  );
}

export default DynamicText;
