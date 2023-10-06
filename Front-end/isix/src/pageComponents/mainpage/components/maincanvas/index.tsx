"use client"

import { useRoute } from 'wouter'
import { Canvas, extend } from '@react-three/fiber'
import { geometry } from 'maath'
import BackgroundImage from './backgroundimage'
import ThemeImage from './themeimage'
import Frame from './frame'
import Rig from './rig'
import { useEffect, useState } from 'react'
import Loading from '@/commonComponents/loading'
import Cover from '@/commonComponents/cover'
import { StyledMainThemeContainer, StyledMainThemePaper } from './MainCanvas.styled'
import TutorialButton from './tutorialButton'
import HomeButton from '@/commonComponents/story/homeButtonComponent'
import AudioPlayer from '@/commonComponents/story/audioComponent'

extend(geometry)

export const MainCanvas = () => {
  const [match, params] = useRoute('/theme/:id')
  const audioUrl : string = "/resources/bgmFile/동물농장2.mp3"

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
          {!params && <ThemeImage scale={0.27} url='/resources/images/fireTheme2.svg' args={[20, 20]} position={[-.8,0,0]} />}
        </Frame>
        <Frame name={2} id="2" bg="#d1d1ca" position={[-.2, .5, 0]} >
          {!params && <ThemeImage scale={0.27} url='/resources/images/classroom_panda2.jpg' args={[28, 20]} position={[.8,-.2,0]} />}
        </Frame>
        <Frame name={3} id="3" bg="#d1d1ca" position={[5, .5, 0]} >
          {!params && <ThemeImage scale={0.35} url='/resources/images/police_office_panda2.png' args={[28, 20]} position={[.4,.4,0]} />}
        </Frame>
        <Rig />
      </Canvas>
      {params && params.id === '1' &&
        <StyledMainThemeContainer>
          <StyledMainThemePaper>
            <Cover />
          </StyledMainThemePaper>
        </StyledMainThemeContainer>
      }
      {params && params.id === '2' &&
        <HomeButton />
      }
      {params && params.id === '3' &&
        <HomeButton />
      }
      {isLoading ? <Loading /> : <AudioPlayer file={audioUrl} auto={true} />}
    </>
  )
}