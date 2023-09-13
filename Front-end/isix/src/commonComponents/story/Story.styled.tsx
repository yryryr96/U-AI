import styled, { css } from "styled-components";

const StyledStoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledStoryImage = styled.div`
  width: 600px;
  height: 300px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`

const StyledStoryText = styled.div`
  width: 600px;
  height: 100px;
  border: solid 1px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { StyledStoryContainer, StyledStoryImage, StyledStoryText }