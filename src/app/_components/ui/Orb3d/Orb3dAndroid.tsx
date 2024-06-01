"use client";
import React, { Suspense, useMemo, useCallback } from "react";
import Orb from "./../../../../../public/Orb";
import { Canvas, useThree, ThreeEvent } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { WebGLRenderer } from "three";
import styles from "./Orb3d.module.scss";

// Define the type for the onCreated callback parameter
type OnCreatedProps = {
  gl: WebGLRenderer;
};

function Orb3dAndroid() {
  const updatePixelRatio = useCallback(({ gl }: OnCreatedProps) => {
    const dpr = Math.min(window.devicePixelRatio, 2);
    gl.setPixelRatio(dpr);
  }, []);

  const memoizedEnv = useMemo(() => <Environment preset="sunset" resolution={256} />, []);

  return (
    <Canvas className={styles.canvas} onCreated={updatePixelRatio}>
      <ambientLight intensity={1.0} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Suspense fallback={<div>Loading...</div>}>
        <Orb />
      </Suspense>
      {memoizedEnv}
      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.4}
        width={10}
        height={10}
        blur={1.5}
        far={10}
      />
    </Canvas>
  );
}

export default Orb3dAndroid;
