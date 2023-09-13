import * as THREE from 'three'
import { Plane, useAspect, useTexture } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import FliesEffect from '../flieseffect'
import '../layermaterial'

const Scene = () => {
  const bgUrl = '/resources/landing.jpg'
  const groundUrl = '/resources/ground.png'
  const pandaUrl = '/resources/panda.png'
  const leaves1Url = '/resources/leaves1.png'
  const leaves2Url = '/resources/leaves2.png'
  const scaleN = useAspect(1600, 1000, 1.05)
  const scaleW = useAspect(2200, 1000, 1.05)
  const textures = useTexture([bgUrl, groundUrl, pandaUrl, leaves1Url, leaves2Url])
  const group = useRef()
  const layersRef = useRef([])
  const [movement] = useState(() => new THREE.Vector3())
  const [temp] = useState(() => new THREE.Vector3())
  const layers = [
    { texture: textures[0], z: 28, scale: scaleW },
    { texture: textures[1], z: 29, scale: scaleW },
    { texture: textures[2], z: 30, factor: -0.10, scaleFactor: 0.5, scale: scaleN },
    { texture: textures[3], factor: 0.03, scaleFactor: 1, z: 40, wiggle: 0.6, scale: scaleW },
    { texture: textures[4], factor: 0.04, scaleFactor: 1, z: 49, wiggle: 1, scale: scaleW },
  ]

  useFrame((state, delta) => {
    movement.lerp(temp.set(state.mouse.x, state.mouse.y * 0.2, 0), 0.2)
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.mouse.y * 10, 0.2)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x / 10, state.mouse.y / 20, 0.2)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.x / 2, 0.2)
    layersRef.current[3].uniforms.time.value = layersRef.current[4].uniforms.time.value += delta
  }, 1)

  return (
    <group ref={group}>
      <FliesEffect count={100} radius={80} colors={['white']} />
      {layers.map(({ onClick = null,scale, texture, ref, factor = 0, scaleFactor = 1, wiggle = 0, z }, i) => (
        <Plane onClick={onClick} scale={scale} args={[1, 1, wiggle ? 10 : 1, wiggle ? 10 : 1]} position-z={z} key={i} ref={ref}>
          <layerMaterial movement={movement} textr={texture} factor={factor} ref={(el) => (layersRef.current[i] = el)} wiggle={wiggle} scale={scaleFactor} />
        </Plane>
      ))}
    </group>
  )
};

export default Scene;
