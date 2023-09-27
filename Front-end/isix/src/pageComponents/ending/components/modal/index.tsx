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
`;

const DownloadButton = styled.button`
   /* Button styles here */
`;

interface ModalProps {
   isOpen : boolean,
   onClose : () => void,
   imageUrl:string,
   onDownload : (imageUrl:string) => Promise<void>
}

const Modal : React.FC<ModalProps> = ({isOpen,onClose,imageUrl,onDownload}) => {
 if(!isOpen) return null;

 const handleDownloadClick = async (e: React.MouseEvent) => {
     e.stopPropagation();
     await onDownload(imageUrl);
 }

 return (
     <ModalBackground >
        <ModalContent onClick={onClose}>
           <Image src={imageUrl} alt='screenshot' width={960} height={540} onClick={onClose}/>
           <DownloadButton onClick={handleDownloadClick}> Download </DownloadButton>
        </ModalContent>
     </ModalBackground>
 )
}

export default Modal
