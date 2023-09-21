import styled, { css } from "styled-components";

const StyledStoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  height : 40vh;  
  width : 70vw;
`

const StyledStoryShow = styled(StyledStoryContainer)`
  height : auto;  
  width : auto;
`

const StyledStoryCam = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 3vh; */
  height : 85vh;
  width : 80vw;
`

const StyledStoryText = styled.div`
  width: auto;
  height: auto;
  font-size: 2.3rem;
  font-weight: bold;
  text-align: center;
  white-space: pre-line;
  margin-top: 5vh;
`

const StyledStoryDual = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  max-width : 1000px;
  max-height : 400px;
  display: flex;

  @media (max-width: 1200px) {
    max-width: 600px;
    max-height: 300px;
  }

  @media (max-width: 800px) {
    max-width: 400px;
    max-height: 200px;
   }

   & > div:first-child {
     flex:4;
     /* background-color: gray; */
   }
   
   & > div:last-child {
     flex:6;
   }
`

const StyledStoryImage = styled.img`
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

const StyledQuizBox = styled.div`
  position: absolute;
  top: 0;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  z-index: 1;
  font-size: 2.5rem;
  font-weight: bold;
`

const StyledCamText = styled.div`
  position: absolute;
  z-index: 1;
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  background-color: black;
  color: white;
  width : 80vw;
  height: auto;
`

const StyledTimer = styled.div`
  font-size: 10rem;
  font-weight: bold;
  color: red;
  z-index: 2;
  position: absolute;
  width: 100px;
  text-align: center;
`

const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`

const StyledLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 2vw;
  height: 85vh;
  background-image: url('resources/line.png');
  background-size: cover;
  z-index: 1;
`

export { StyledLine, StyledCamText, StyledSpan, StyledStoryCam, StyledTimer, StyledStoryContainer, StyledStoryText, StyledStoryShow, StyledStoryDual, StyledStoryImage, StyledQuizBox }