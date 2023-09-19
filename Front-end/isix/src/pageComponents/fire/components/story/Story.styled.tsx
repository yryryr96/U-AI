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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3vh;
`

const StyledStoryText = styled.div`
  width: auto;
  height: auto;
  font-size: 2.3rem;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin-top: 1rem;
  font-size: 3rem;
  font-weight: bold;
`

const StyledTimer = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: darkblue;
  z-index: 1;
  position: relative;
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

export { StyledSpan, StyledStoryCam, StyledTimer, StyledStoryContainer, StyledStoryText, StyledStoryShow, StyledStoryDual, StyledStoryImage, StyledQuizBox }