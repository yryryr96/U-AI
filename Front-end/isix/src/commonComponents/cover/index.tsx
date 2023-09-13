"use client"

import React from 'react'
import { StyledCoverContainer } from './Cover.styled'
import CoverImageComponent from './components/coverImage'
import CoverContenstComponent from './components/coverContents'

const Cover = () => {
  return (
    <StyledCoverContainer>
      <CoverImageComponent/>
      <CoverContenstComponent/>
    </StyledCoverContainer>
  )
}

export default Cover