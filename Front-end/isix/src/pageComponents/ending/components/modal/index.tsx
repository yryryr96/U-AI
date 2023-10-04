import Image from 'next/image';
import React from 'react';
import { DownloadImage, ModalBackground, ModalButtons, ModalContent, ModalText } from '../../Ending.Styled';

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
            <ModalButtons>
               <ModalText>다운로드 버튼을 클릭하면 사진을 저장할 수 있어요</ModalText>
               <DownloadImage src='/resources/storyButton/downloadbutton.png' alt='download' width={70} height={60} onClick={handleDownloadClick}/>
            </ModalButtons>
            <Image src={imageUrl} alt='screenshot' width={1047} height={589} />
        </ModalContent>
     </ModalBackground>
   )
}

export default Modal
