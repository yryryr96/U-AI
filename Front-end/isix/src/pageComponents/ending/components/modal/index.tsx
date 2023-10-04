import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;

const ModalContent = styled.div`
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

const DownloadButton = styled(Image)`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   
    /* 기본 상태에서는 투명하게 */
    opacity: 0;

    &:hover{
      pointer-events: auto;
    }
`

const ModalText = styled.p`
  width: auto;
  height: 10%;
  font-size: ${props => props.theme.fontSizes.xlarge};
  font-weight: bold;
  text-align: center;
  white-space: pre-line;
  margin: 1% 2% 1% 0;
`

const ModalButtons = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 15px;
`

interface ModalProps {
   isOpen : boolean,
   onClose : () => void,
   imageUrl:string,
   onDownload : (imageUrl:string) => Promise<void>
}

const Modal : React.FC<ModalProps> = ({isOpen, onClose, imageUrl, onDownload}) => {
   if(!isOpen) return null;

   const handleDownloadClick = async (e: React.MouseEvent) => {
      e.stopPropagation();
      await onDownload(imageUrl);
   }

   return (
     <ModalBackground onClick={onClose}>
        <ModalContent >
            {/* <DownloadButton className="download-button" src='/resources/storyButton/downloadbutton.png' alt='download' width={90} height={80} onClick={handleDownloadClick} /> */}
            <ModalButtons>
               <ModalText>다운로드 버튼을 클릭하면 사진을 저장할 수 있어요</ModalText>
               <Image src='/resources/storyButton/downloadbutton.png' alt='download' width={60} height={50} onClick={handleDownloadClick}/>
            </ModalButtons>
            <Image src={imageUrl} alt='screenshot' width={1047} height={589} />
            {/* <DownloadButton onClick={handleDownloadClick}> Download </DownloadButton> */}
        </ModalContent>
     </ModalBackground>
   )
}

export default Modal
