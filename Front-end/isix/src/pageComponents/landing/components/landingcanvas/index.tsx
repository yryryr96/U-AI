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
        {/* <CharacterScene position={[60, -40, 0]} width={200} height={200} gifUrl='/resources/policepanda3.gif' /> */}
        {/* <CharacterScene position={[-100, -37, 0]} width={240} height={240} gifUrl='/resources/teacherpanda2.gif' /> */}
        <Effects />
      </Canvas>
      {isLoading ? <Loading /> : <StartForm />}
    </>
    
  );
};

export default LandingCanvas;
