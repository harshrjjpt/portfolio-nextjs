"use client";
import React, { Suspense } from "react";
import Orb from "./../../../../../public/Orb";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import styles from "./Orb3d.module.scss";

function Orb3d() {
  return (
    <Canvas className={styles.canvas}>
      <ambientLight intensity={2} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Orb />
      </Suspense>
      <Environment preset="lobby" />
    </Canvas>
  );
}

export default Orb3d;
