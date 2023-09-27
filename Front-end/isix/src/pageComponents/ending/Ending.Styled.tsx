import styled, { css } from "styled-components";

// 그리드 스타일
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 10px;
  position: relative;
  /* top: 3vh;
  left: 3vw; */
  width: 100%;
  /* height: 100%; */
  height: 85%;
`;

export const ImageWrapper = styled.div`
    display:flex; 
    justify-content:center; 
    align-items:center; 
`;

export const EndingText = styled.p`
  width: auto;
  height: 10%;
  font-size: ${props => props.theme.fontSizes.xxlarge};
  font-weight: bold;
  text-align: center;
  white-space: pre-line;
  margin-top: 2%;
`