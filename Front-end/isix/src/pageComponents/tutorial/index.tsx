'use client'
import React, {useState} from 'react'
import ImageComponent from "@/commonComponents/story/imageComponent";
import { StyledContainer,StyledPaperContainer,StyledTitleContainer,StyledText} from "./Tutorial.styled";
import OX from './components/ox';
const Tutorial = () => {
  const [state,setState] = useState<number>(0);

  return (
    <>
      <StyledContainer>
        <StyledTitleContainer>
          <StyledText>
            OX퀴즈 
          </StyledText>
          {/* text 부분 추후에 state로 관리 */}
        </StyledTitleContainer>
        <StyledPaperContainer>
            <OX />
        </StyledPaperContainer>
      </StyledContainer>
    </>
  );
};

export default Tutorial;
