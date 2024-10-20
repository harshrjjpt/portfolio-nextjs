"use client";
import React, { useState, useEffect } from "react";
import styles from "./Parallax.module.scss";
import { Parallax } from "react-parallax";

interface ParallaxComponentProps {
  image: string;
  quote: string;
}

function ParallaxComponent({ quote, image }: ParallaxComponentProps) {
  const [strength, setStrength] = useState(-100);

  useEffect(() => {
    const updateStrength = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setStrength(-20);
      }
      //  else if (width < 1200) {
      //   setStrength(-70);
      // } else {
      //   setStrength(-300);
      // }
    };

    // Set initial strength value
    updateStrength();

    // Update strength value on window resize
    window.addEventListener("resize", updateStrength);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateStrength);
  }, []);

  return (
    <Parallax
      bgImage={image}
      bgImageAlt="background"
      strength={strength}
      className={styles.parallaxEffectImage}
    >
      <div className={styles.parallaxContent}>
        {quote === "one" && (
          <div className={styles.quote1}>
            <h1>THERE IS NO</h1>
            <h1>LIMIT</h1>
          </div>
        )}
        {quote === "two" && (
          <div className={styles.quote2}>
            <h1>LEARN</h1>
            <h1>BUILD</h1>
            <h1>DEPLOY</h1>
          </div>
        )}
      </div>
    </Parallax>
  );
}

export default ParallaxComponent;
