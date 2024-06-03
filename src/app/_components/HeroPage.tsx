import React from "react";
import styles from "./HeroPage.module.scss";
import { HomePageContainer } from "./ui/Container/Container.styled";
import DynamicText from "./ui/DynamicText/DynamicText";
import Orb3d from "./ui/Orb3d/Orb3d";
import Orb3dAndroid from "./ui/Orb3d/Orb3dAndroid";

function HeroPage() {
  // const isAndroid = () => {
  //   return /Android/i.test(navigator.userAgent);
  // };
  // const isAndroidDevice = isAndroid();

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
              With advanced frontend development expertise and a strong interest in blockchain, I handle the full tech
              spectrum, from developing complex user interfaces and applications to building and integrating robust
              backend systems.
            </p>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div>
          {/* <Orb3d /> */}
          {/* {isAndroidDevice ? <Orb3dAndroid /> : <Orb3d />} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
