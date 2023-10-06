"use client"

import { StyledCoverBox, StyledCoverContainer } from './Cover.styled'
import CoverImageComponent from './components/coverImage'
import CoverContenstComponent from './components/coverContents'
import HomeButton from '../story/homeButtonComponent';

const Cover = () => {

  return (
    <StyledCoverContainer>
      <StyledCoverBox>
        <CoverImageComponent/>
      </StyledCoverBox>
      <StyledCoverBox>
          <CoverContenstComponent/>
      </StyledCoverBox>
      <HomeButton/>
    </StyledCoverContainer>
  )
}

export default Cover