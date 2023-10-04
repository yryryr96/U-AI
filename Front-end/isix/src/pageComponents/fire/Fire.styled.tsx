'use client'
import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
    position: relative;
    display : flex;
    background: url('/resources/background/backGround2.jpg') no-repeat center;
    background-size : cover;
    align-items : center;
    justify-content: center;
    height : 100vh;
    width : 100vw ;
    z-index: -2;
`

export const StyledPaperContainer = styled.div`
  position: relative;
  height : 85vh;
  width : 85vw;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/resources/background/backPaper.jpg');
    background-repeat: no-repeat;
    background-position:center; 
    background-size : cover; 
    border-radius : 20px;
    opacity:.95;
    z-index: -1; // 원하는 투명도로 조정하세요.
}
`;

