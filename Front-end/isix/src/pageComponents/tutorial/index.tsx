'use client'
import React, {useState} from 'react'
import ImageComponent from "@/commonComponents/story/imageComponent";
import { StyledContainer,StyledPaperContainer,StyledTutorialContainer } from "./Tutorial.styled";
import OX from './components/ox';
const Tutorial = () => {
  const [state,setState] = useState<number>(0);

  return (
    <>
      <StyledContainer>
        <StyledPaperContainer>
            <OX />
        </StyledPaperContainer>
      </StyledContainer>
    </>
  );
};

export default Tutorial;
