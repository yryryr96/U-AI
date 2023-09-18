"use client"

import React, { useEffect, useState } from 'react'
import { StyledStoryContainer } from './Story.styled'
import ImageComponent from './imageComponent'
import CamComponent from './camComponent'
import DualComponent from './dualComponent'
import TextComponent from './textComponent'
import RecordComponent from './recordComponent'

const Story = () => {
  const [nowState, setNowState] = useState<string>('start');

  useEffect(() => {
    if (nowState === 'start') {
      setTimeout(() => {
        setNowState('quiz')
      }, 3000)
    } else if (nowState === 'quiz') {
      setTimeout(() => {
        setNowState('')
      }, 8000)
    }
  }, [nowState])

  
  return (
    <StyledStoryContainer>
      <div>
        { nowState === 'start' ? <>
          <ImageComponent src='./resources/fire.png'/>
          <br />
          <TextComponent text={`이것은 우리를 따뜻하게 해주고, 밝게 비춰주기도 하지만 \n
          정말 위험하기도 하답니다. 이것은 무엇일까요?`}/> 
        </>
        : nowState === 'quiz' ? <>
          <TextComponent text='이것은 무엇일까요?'/>
          <CamComponent/>
        </> 
        : <>
          <ImageComponent src='./resources/fire.png'/>
          <TextComponent text='맞아요. 이것은 불입니다!'/>
        </>}
      </div>
    </StyledStoryContainer>
  )
}

export default Story