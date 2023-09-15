'use client'

import { Canvas } from '@react-three/fiber'
import Scene from './scene'
import Effects from './effects'
import CharacterScene from '../gifscene';

const LandingCanvas = () => {
  return (
    <Canvas orthographic camera={{ zoom: 5, position: [0, 0, 200], far: 300, near: 50 }}>
      <Scene />
      <CharacterScene position={[90, 70, 0]} width={600} height={600} gifUrl='/resources/policepanda2.gif' />
      <CharacterScene position={[-200, 80, 0]} width={700} height={700} gifUrl='/resources/teacherpanda2.gif' />
      <Effects />
    </Canvas>
  );
};

export default LandingCanvas;
