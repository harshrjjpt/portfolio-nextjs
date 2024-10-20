/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 orb.gltf 
Author: tamminen (https://sketchfab.com/tamminen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/color-orb-4d5882be5eaa4214aa394ae96563f14e
Title: Color orb
*/
'use client'

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/orb.gltf')
  console.log(materials)
  const { actions, names } = useAnimations(animations, group)
  console.log(names)

  useEffect(()=> {
    actions[names[0]].reset().fadeIn(0.1).play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Icosphere_0">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material} />
              </group>
              <group name="Cube008_1">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.material_0} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/orb.gltf')
