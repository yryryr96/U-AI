"use client"

import React from 'react'
import { StyledStoryContainer } from './Story.styled'
import ImageComponent from './imageComponent'
import CamComponent from './camComponent'
import DualComponent from './dualComponent'
import TextComponent from './textComponent'

const Story = () => {
  return (
    <StyledStoryContainer>
      <div>
        {/* <ImageComponent/> */}
        <DualComponent/>
        <TextComponent/>
      </div>
    </StyledStoryContainer>
  )
}

export default Story