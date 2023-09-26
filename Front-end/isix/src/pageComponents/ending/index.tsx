import React, { useEffect, useState } from 'react'
import { StyledEndingContainer, StyledEnding, StyledEndingPhotos } from './Ending.Styled'
import Photos from './components/photos'
import Image from 'next/image'
import styled from 'styled-components';

// 스타일이 적용된 컴포넌트 생성
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 10px;
  position: relative;
  /* top: 3vh;
  left: 3vw; */
  width: 100%;
  /* height: 100%; */
  height: 85%;
`;

const ImageWrapper = styled.div`
    display:flex; 
    justify-content:center; 
    align-items:center; 
`;

const EndingText = styled.p`
  width: auto;
  height: 10%;
  font-size: ${props => props.theme.fontSizes.xxlarge};
  font-weight: bold;
  text-align: center;
  white-space: pre-line;
  margin-top: 2%;
`

const Ending = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleDownloadImage = (imageUrl: string) => {
    const aTag = document.createElement('a');
    aTag.href = imageUrl;
    aTag.download = 'screenshot.png';
    aTag.click();
  };

  useEffect(() => {
    // localStorage에서 screenshots 키의 값을 가져와 배열로 파싱
    const screenshots = JSON.parse(localStorage.getItem('screenshots') || '[]');
    
    // state 업데이트
    setImageUrls(screenshots);
  }, [])

  return (
    <>
      <EndingText>사진을 클릭하면 다운로드할 수 있어요</EndingText>
      <ImageGrid>
        {/* imageUrls 배열을 map 함수를 사용하여 각각의 이미지 요소로 변환 */}
        { imageUrls.map((url:string) =>
          <ImageWrapper key={url}>
            <Image src={url} alt='screenshot' onClick={() => handleDownloadImage(url)} width={384} height={216} />
          </ImageWrapper>
        )}
      </ImageGrid>
    </>
  )
}

export default Ending
