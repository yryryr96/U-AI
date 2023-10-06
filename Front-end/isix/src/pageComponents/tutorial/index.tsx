'use client'
import React, {useState} from 'react'
import { StyledButtonContainer,StyledContainer,StyledPaperContainer,StyledTitleContainer,StyledText} from "./Tutorial.styled";
import OX from './components/ox';
import Sound from './components/sound';
import OCR from './components/ocr';
import HomeButton from '@/commonComponents/story/homeButtonComponent';
import "@/styles/fire/style.css";
import Motion from './components/motion';

const Tutorial = () => {
  const [state,setState] = useState<number>(0);

  const incrementState = () => {
    if (state < 3) {
      setState(state + 1);
      console.log("증가")
    }
  };

  const decrementState = () => {
    if (state > 0) {
      setState(state - 1);
    }
  };

  const textByState = () => {
    switch (state) {
      case 0:
        return "퀴즈";
      case 1:
        return "외치기";
      case 2:
        return "따라하기";
      case 3:
        return "정답 쓰기"
      default:
        return "";
    }
  };
  console.log(state,"스테이트")
  return (
    <>
      <HomeButton/>
      <StyledContainer>   
        <StyledTitleContainer>
          <StyledText marginTop="15vh">
            {textByState()}
          </StyledText>
          {/* text 부분 추후에 state로 관리 */}
        </StyledTitleContainer>

        {state !== 0 ? <StyledButtonContainer onClick={decrementState} src='/resources/storyButton/leftmovebutton.png' getLeft='5vw' />
        : null}
        
        {state !== 3 ? <StyledButtonContainer onClick={incrementState} src='/resources/storyButton/rightmovebutton.png' getLeft='89vw'/>
        : null}
        
        <StyledPaperContainer>
          {state === 0 && <OX />}
          {state === 1 && <Sound />}
          {state === 2 && <Motion/>}
          {state === 3 && <OCR />}
        </StyledPaperContainer>
      </StyledContainer>
    </>
  );
};

export default Tutorial;
