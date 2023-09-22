import styled, { css } from "styled-components";

export const StyledStoryContainer = styled.div`
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

export const StyledStoryCam = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height : 100vh;
  width : 100vw;
`

export const StyledCamText = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: ${props => props.theme.fontSizes.xxxlarge};
  font-weight: bold;
  text-align: center;
  background-color: black;
  color: white;
  width : 100vw;
  height: auto;
`

export const StyledCamImg = styled.div`
  position: absolute;
  top: 3.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  z-index: 1;
`

export const StyledStoryText = styled.div`
  width: auto;
  height: auto;
  font-size: ${props => props.theme.fontSizes.xxlarge};
  font-weight: bold;
  text-align: center;
  white-space: pre-line;
  margin-top: 2vh;
`

export const StyledStoryImage = styled.img`
  height : 100%;  
  width : auto;
  max-width : 800px;
  max-height : 400px;

  @media (max-width: 1200px) {
    max-width: 600px;
    max-height: 300px;
  }

  @media (max-width: 800px) {
    max-width: 400px;
    max-height: 200px;
   }
`

export const StyledQuizBox = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  z-index: 1;
  font-size: 4rem; 
  color: white; 
  font-weight: bold; 
  padding: 1rem 1rem;
`

export const StyledTimer = styled.div`
  font-size: 10rem;
  font-weight: bold;
  color: red;
  z-index: 2;
  position: absolute;
  width: 100px;
  text-align: center;
`

export const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin-top: 3vh;
`

export const StyledLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 2vw;
  height: 100vh;
  background-image: url('resources/line2.png');
  background-size: cover;
  z-index: 2;
`