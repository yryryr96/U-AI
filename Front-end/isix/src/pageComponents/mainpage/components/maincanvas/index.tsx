"use client"

import { useRoute } from 'wouter'
import { Canvas, extend } from '@react-three/fiber'
import { geometry } from 'maath'
import BackgroundImage from './backgroundimage'
import ThemeImage from './themeimage'
import Frame from './frame'
import Rig from './rig'
import CharacterScene from './gifscene'
import { useEffect, useState } from 'react'
import Loading from '@/commonComponents/loading'
import Cover from '@/commonComponents/cover'
import { StyledMainThemeContainer, StyledMainThemePaper } from './MainCanvas.styled'
import TutorialButton from './tutorialButton'

extend(geometry)

export const MainCanvas = () => {
  const [match, params] = useRoute('/theme/:id')

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {!isLoading ? <TutorialButton /> : null}
      
      <Canvas style={isLoading ? {visibility: "hidden"} : {visibility:"visible"}} camera={{ fov: 6.7, position: [0, 0, 100] }} eventPrefix="client" gl={{alpha: true}}>
        <BackgroundImage />
        {/* {!match && <CharacterScene position={[1.6, 4.5, -1]} width={1000} height={1000} gifUrl='/resources/teacherpanda2.gif' />} */}
        <Frame name={1} id="1" bg="#e4cdac" position={[-5.4, .5, 0]} >
        {!params && <ThemeImage scale={0.27} url='/resources/fireTheme2.svg' args={[20, 22]} position={[-.6,0,0]} />}
        </Frame>
        <Frame name={2} id="2" bg="#d1d1ca" position={[-.2, .5, 0]} >
        </Frame>
        <Frame name={3} id="3" bg="#d1d1ca" position={[5, .5, 0]} >
        </Frame>
        <Rig />
      </Canvas>
      {params &&
        <StyledMainThemeContainer>
          <StyledMainThemePaper>
            <Cover />
          </StyledMainThemePaper>
        </StyledMainThemeContainer>
      }
      {isLoading && <Loading />}
    </>
  )
}