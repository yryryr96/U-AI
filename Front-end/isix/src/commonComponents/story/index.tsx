"use client"

import React from 'react'
import { StyledStoryContainer } from './Story.styled'
import ImageComponent from './imageComponent'
import TextComponent from './textComponent'

const Story = () => {
  return (
    <StyledStoryContainer>
      <div>
        <ImageComponent/>
        <TextComponent/>
      </div>
    </StyledStoryContainer>
  )
}

export default Story