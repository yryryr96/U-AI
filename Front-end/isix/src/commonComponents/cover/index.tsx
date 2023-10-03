"use client"

import { StyledCoverBox, StyledCoverContainer } from './Cover.styled'
import CoverImageComponent from './components/coverImage'
import CoverContenstComponent from './components/coverContents'
import HomeButton from '../story/homeButtonComponent';

interface CoverProps {
  setState: (arg0: any) => void;
}

const Cover: React.FC<CoverProps> = ({ setState }) => {

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