"use client"

import React from 'react'
import { StyledCoverBox, StyledCoverContainer } from './Cover.styled'
import CoverImageComponent from './components/coverImage'
import CoverContenstComponent from './components/coverContents'
import CoverButtonComponent from './components/coverContents/coverButton'

const Cover = () => {
  return (
    <StyledCoverContainer>
      <StyledCoverBox>
        <CoverImageComponent/>
      </StyledCoverBox>
      <StyledCoverBox>
        <CoverContenstComponent/>
      </StyledCoverBox>
    </StyledCoverContainer>
  )
}

export default Cover