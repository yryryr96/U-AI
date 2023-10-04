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
    background: url('/resources/background/tutorial_back.svg') no-repeat center;
    background-size : cover;
    align-items : center;
    justify-content: center;
    height : 100vh;
    width : 100vw ;
    z-index: -2;
`

export const StyledTitleContainer = styled.div`
    display : flex;
    position : fixed;
    align-items : center;
    justify-content : center;
    background-image: url('/resources/assets/panda_sign1.png'); 
    background-size: 100% 100%;
    height : 40vh;
    width : 20vw ;
    margin-top : -70vh;
    
`

export const StyledPaperContainer = styled.div`
  position: relative;
  height : 80vh;
  width : 75vw;
  margin-top : 10vh;

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

export const StyledLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 1vw;
  height: 65vh;
  background-image: url('/resources/assets/line2.png');
  background-size: cover;
  z-index: -1;
`

export const StyledTextContainer = styled.div.attrs<{getLeft?: string}>(props => ({
  style: {
    left: props.getLeft || '50vw',
  },
}))`
  display : flex;
  align-items : flex-start;
  justify-content : center;
  position: fixed;
  background-image: url('/resources/assets/panda_sign2.png'); 
  background-size: 100% 100%;
  width: 17vw;
  height: 25vh;
  margin-top : -13vh;
  
  z-index: 1;
`;

export const StyledText = styled.label<{ marginTop?: string }>`
  font-size: 3.5rem;
  font-weight: bold;
  margin-top: ${(props) => props.marginTop || '15.5vh'};
`;

export const StyledButtonContainer = styled.div.attrs<{ getLeft?: string, src?: string }>(props => ({
  style: {
    left: props.getLeft || '50vw',
  },
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top : 6vh;
  position: fixed;
  width: 8vw;
  background-size: 100% 100%;
  background-image: url(${props => props.src}); 
  height: 16vh;
  z-index : 2;

`;