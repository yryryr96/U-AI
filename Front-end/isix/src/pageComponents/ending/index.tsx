"use client"

import React from 'react'
import { StyledEndingContainer, StyledEnding, StyledEndingPhotos } from './Ending.Styled'
import Photos from './components/photos'
import TextComponent from '@/commonComponents/story/textComponent'

const Ending = () => {
  return (
    <div>
      Ending
      <StyledEndingContainer>
      <StyledEnding>
        <StyledEndingPhotos>
          <Photos/>
        </StyledEndingPhotos>
        <StyledEndingPhotos>
          <Photos/>
        </StyledEndingPhotos>
      </StyledEnding>
      <StyledEnding>
        <StyledEndingPhotos>
          <Photos/>
        </StyledEndingPhotos>
        <StyledEndingPhotos>
          <Photos/>
        </StyledEndingPhotos>
      </StyledEnding>
      </StyledEndingContainer>
      <TextComponent/>

    </div>
  )
}

export default Ending