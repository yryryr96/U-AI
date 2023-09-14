import styled, { css } from "styled-components";

const StyledStoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledStoryShow = styled.div`
  width: 1000px;
  height: 400px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

const StyledStoryText = styled.div`
  width: 1000px;
  height: 200px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledStoryDual = styled.div`
  width: 450px;
  height: 350px;
  margin: 10px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { StyledStoryContainer, StyledStoryText, StyledStoryShow, StyledStoryDual }