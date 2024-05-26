import React from "react";
import styles from "./HeroPage.module.scss";
import { HomePageContainer } from "./ui/Container/Container.styled";
import DynamicText from "./ui/DynamicText/DynamicText";
import Orb3d from "./ui/Orb3d/Orb3d";

function HeroPage() {
  return (
    <div className={styles.heroMainPageContainer}>   
    <div className={styles.heroPageContainer}>
      {/* <div className={`${styles.homePageShadows} ${styles.productShadowTop}`}></div>
      <div className={`${styles.homePageShadows} ${styles.productShadowBottom}`}></div> */}
      <div className={styles.leftSide}>
        <div className={styles.title}>
          {/* <h1>HI THERE! 👋</h1> */}
          <div className={styles.subTextContainer}>
            <h1>IM A</h1>
            <DynamicText />
          </div>
          <h1>DEVELOPER👨‍💻</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis a
          </p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div>
          <Orb3d />
        </div>
      </div>
    </div>
    </div>
  );
}

export default HeroPage;
