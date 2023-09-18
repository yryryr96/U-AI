import styled, { css } from "styled-components";

const StyledStoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

const StyledStoryShow = styled(StyledStoryContainer)`
  width: 1000px;
  height: 400px;
  border: solid 1px;
`

const StyledStoryText = styled.div`
  width: 1000px;
  height: auto;
  font-size: 36px;
  text-align: center;
  white-space: pre-line;
`

const StyledStoryDual = styled(StyledStoryContainer)`
  width: 450px;
  height: 350px;
  margin: 10px;
  background-color: gray;
`

const StyledStoryImage = styled.img`
  width: 1000px;
  height: 400px;
`

export { StyledStoryContainer, StyledStoryText, StyledStoryShow, StyledStoryDual, StyledStoryImage }