import styled, { css } from "styled-components";

const StyledFirst = styled.div`
  position:relative;
  width: 100%;
  height: 550px;
  min-width: 1000px;
`
const StyledFirstBox = styled.div`

  width: 100%;
  height: 100%;
    
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  .textbox {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 16px;
    width: 500px;
  }
`;


export { StyledFirst, StyledFirstBox };
