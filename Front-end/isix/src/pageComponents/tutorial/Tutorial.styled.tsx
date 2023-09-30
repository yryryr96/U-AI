import styled, { css } from "styled-components";

export const StyledTutorialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4vh;
  height : 55vh;  
  width : 85vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`
export const StyledContainer = styled.div`
    position: relative;
    display : flex;
    background: url('./resources/tutorial_back.svg') no-repeat center;
    background-size : cover;
    align-items : center;
    justify-content: center;
    height : 100vh;
    width : 100vw ;
    z-index: -2;
`

export const StyledPaperContainer = styled.div`
  position: relative;
  height : 80vh;
  width : 75vw;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('./resources/backPaper.jpg');
    background-repeat: no-repeat;
    background-position:center; 
    background-size : cover; 
    border-radius : 20px;
    opacity:.95;
    z-index: -1; // 원하는 투명도로 조정하세요.
}
`;

export const StyledLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 1vw;
  height: 60vh;
  background-image: url('resources/line2.png');
  background-size: cover;
  z-index: -1;
`