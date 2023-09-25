import styled, { css } from "styled-components";

export const StyledCoverContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledCoverBox = styled(StyledCoverContainer)`
  height: 85vh;
  width: 42.5vw;
`

export const StyledCoverImage = styled.img`
  width: 80%;
  height: 80%;
`

export const StyledCoverContents = styled.div`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: auto;
`

export const StyledCoverTitle = styled.div`
  /* font-size: ${props => props.theme.fontSizes.xxlarge}; */
  font-size: 2.5rem;
  text-align: center;
  margin: 10px 3px 40px;
`

export const StyledCoverText = styled.div`
  text-align: center;
  margin: 10px 3px 10px;
  line-height:1.3;

  h2 {
    /* font-size: ${props => props.theme.fontSizes.xxxlarge}; */
    font-size: 3.2rem;
  }

  p {
    /* font-size: ${props => props.theme.fontSizes.xxlarge}; */
    font-size: 2.5rem;
  }

`
