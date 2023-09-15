"use client"

import { useRoute } from 'wouter'
import { Canvas, extend } from '@react-three/fiber'
import { Gltf } from '@react-three/drei'
import { geometry } from 'maath'
import BackgroundImage from './backgroundimage'
import ThemeImage from './themeimage'
import Frame from './frame'
import Rig from './rig'

extend(geometry)

export const MainCanvas = () => {
  const [, params] = useRoute('/theme/:id')
  return (
    <Canvas camera={{ fov: 6.7, position: [0, 0, 100] }} eventPrefix="client" gl={{alpha: true}}>
      <BackgroundImage />
      <Frame name={1} id="1" bg="#e4cdac" position={[-2.6, -2.6, 0]} >
      {params
        ?
        <ThemeImage scale={0.35} url='/resources/fireTheme2.svg' args={[18, 22]} position={[-1.6, 2, 0]} />
        :
        <ThemeImage scale={0.25} url='/resources/fireTheme2.svg' args={[20, 22]} position={[0,0,0]} />}
      </Frame>
      <Frame name={2} id="2" position={[1.4, -2.6, 0]} bg="" >
        <Gltf src="fiesta_tea-transformed.glb" position={[0, -2, -3]} />
      </Frame>
      <Frame name={3} id="3" bg="#d1d1ca" position={[5.4, -2.6, 0]} >
        <Gltf src="still_life_based_on_heathers_artwork-transformed.glb" scale={2} position={[0, -0.8, -4]} />
      </Frame>
      <Rig />
    </Canvas>
  )
}