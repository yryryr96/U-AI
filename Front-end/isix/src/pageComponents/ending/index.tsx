import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { EndingText, ImageGrid, ImageWrapper } from './Ending.Styled';
import useImageUrlState from '@/stores/capture/useImageUrlState';
import Modal from './components/modal';

const Ending = () => {
  const { imageUrls } = useImageUrlState();
  const [modalOpen,setModalOpen] = useState(false);
  const [selectedImage,setSelectedImage] = useState('');

  const handleOpenImage =(imageUrl:string)=>{
    setSelectedImage(imageUrl);
    setModalOpen(true);
  }

  const handleCloseImage=()=>{
      setModalOpen(false);
  }

  const handleDownloadImage = async (imageUrl: string) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.download = 'screenshot.png';
    aTag.click();

    setTimeout(() => window.URL.revokeObjectURL(url), 0);
  };

  return (
    <>
      <EndingText>사진을 클릭하면 크게 볼 수 있어요</EndingText>
      <ImageGrid>
        {/* imageUrls 배열을 map 함수를 사용하여 각각의 이미지 요소로 변환 */}
        { imageUrls.map((url:string) =>
          <ImageWrapper key={url}>
            <Image src={url} alt='screenshot' onClick={() => handleOpenImage(url)} width={384} height={216} />
          </ImageWrapper>
        )}
      </ImageGrid>

      <Modal
        isOpen={modalOpen} onClose={handleCloseImage} imageUrl={selectedImage} onDownload={handleDownloadImage}/>
    </>
  )
}

export default Ending
