"use client"

import React from 'react'
import { StyledCoverBox, StyledCoverContainer } from './Cover.styled'
import CoverImageComponent from './components/coverImage'
import CoverContenstComponent from './components/coverContents'

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