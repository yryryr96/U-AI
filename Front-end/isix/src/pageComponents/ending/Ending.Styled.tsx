import Image from "next/image";
import styled, { css } from "styled-components";

// 그리드 스타일
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 10px;
  position: relative;
  width: 100%;
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

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color:white;
  padding :1em;

  // hover시에 다운로드 버튼 보이게
  &:hover {
    .download-button {
      opacity: 1;
    }
  }
`;

export const ModalText = styled.p`
  width: auto;
  height: 10%;
  font-size: ${props => props.theme.fontSizes.xlarge};
  font-weight: bold;
  text-align: center;
  white-space: pre-line;
  margin: 1% 2% 1% 0;
`

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`

export const DownloadImage = styled(Image)`
  cursor: pointer;
`;