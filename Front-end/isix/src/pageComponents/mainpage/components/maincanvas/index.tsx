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
      <Frame name={1} id="1" bg="#e4cdac" position={[-8.3, 0, 0]} >
      {params
        ?
        <ThemeImage scale={0.35} url='/resources/theme1.jpg' args={[18, 22]} position={[-1.6, 2, 0]} />
        :
        <ThemeImage scale={0.25} url='/resources/fireTheme2.svg' args={[20, 22]} position={[0,0,0]} />}
      </Frame>
      <Frame name={2} id="2" position={[-2.7, 1, 0]} bg="" >
      </Frame>
      <Frame name={3} id="3" bg="#d1d1ca" position={[7, 1, 0]} >
      </Frame>
      <Rig />
    </Canvas>
  )
}