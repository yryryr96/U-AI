'use client'

import { Canvas } from '@react-three/fiber'
import Scene from './scene'
import Effects from './effects'
import CharacterScene from './gifscene';
import StartForm from '../startform';
import Loading from '@/commonComponents/loading';
import { useEffect, useState } from 'react';

const LandingCanvas = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <Canvas style={isLoading ? {visibility: "hidden"} : {visibility:"visible"}} orthographic camera={{ zoom: 5, position: [0, 0, 200], far: 300, near: 50 }}>
        <Scene />
        <CharacterScene position={[90, 70, 0]} width={600} height={600} gifUrl='/resources/policepanda3.gif' />
        <CharacterScene position={[-200, 80, 0]} width={700} height={700} gifUrl='/resources/teacherpanda2.gif' />
        <Effects />
      </Canvas>
      {isLoading ? <Loading /> : <StartForm />}
    </>
    
  );
};

export default LandingCanvas;
