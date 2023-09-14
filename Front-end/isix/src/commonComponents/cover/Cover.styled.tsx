import styled, { css } from "styled-components";

const StyledCoverContainer = styled.div`
  display: flex;
`

const StyledCoverImage = styled.img`
  width: 300px;
  height: 300px;
  border: solid 1px;
`

const StyledCoverContents = styled.div`
  border: solid 1px;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
`

const StyledCoverTitle = styled.div`
  border: solid 1px;
  text-align: center;
  margin: 10px 3px 10px;
`

const StyledCoverText = styled.div`
  border: solid 1px;
  text-align: center;
  margin: 10px 3px 10px;
`

const StyledCoverButton = styled.div`
  border: solid 1px;
  display: flex;
  justify-content: center;
  margin: 10px 3px 10px;
`

export { StyledCoverContainer, StyledCoverImage, StyledCoverContents, StyledCoverTitle, StyledCoverText, StyledCoverButton };