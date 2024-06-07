"use client";
import React, { useEffect, useState } from "react";
import styles from "./HeroPage.module.scss";
import DynamicText from "./ui/DynamicText/DynamicText";
import Orb3d from "./ui/Orb3d/Orb3d";

function HeroPage() {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const checkIsAndroid = () => {
      if (typeof navigator !== "undefined") {
        setIsAndroid(/Android/i.test(navigator.userAgent));
      }
    };
    checkIsAndroid();
  }, []);

  console.log(isAndroid)

  return (
    <div className={`${styles.heroMainPageContainer} ${isAndroid && styles.android}`}>
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
          {!isAndroid ? (
            <div className={styles.orbContainer}>
              <Orb3d />
            </div>
          ) : (
            <div className={styles.shadowContainer}>
              <img
                src="/shadow.png"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
