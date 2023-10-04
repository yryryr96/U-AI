import styled, { css } from "styled-components";

export const StyledMainThemeContainer = styled.div`
    position: fixed;
    display : flex;
    background: url('/resources/background/backGround2.jpg') no-repeat center;
    background-size : cover;
    align-items : center;
    justify-content: center;
    top: 0;
    left: 0;
    height : 100vh;
    width : 100vw ;
    z-index: 0;
`
export const StyledMainThemePaper = styled.div`
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
