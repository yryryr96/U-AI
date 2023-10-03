import AudioPlayer from "@/commonComponents/story/audioComponent";
import { BorderHeight, BorderWidth, StyledBorders, StyledCamImg, StyledCamText, StyledCaptureBox, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"
import Image from "next/image";
import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import useImageUrlState from "@/stores/capture/useImageUrlState";
import HomeButton from "@/commonComponents/story/homeButtonComponent";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Final2: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = `판다 친구들과 함께 사진 찍어볼까요?`
  const audioUrl: string = '/resources/audioFile/final2.mp3'

  // 화면 캡쳐 후 url 저장
  const captureRef = useRef<HTMLDivElement | null>(null);
  const { updateImageUrl, imageUrls } = useImageUrlState();

  const handleCapture = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imageUrl = canvas.toDataURL('image/png');
  
      const action = imageUrls.length < 4 ? 'add' : 'update';
      updateImageUrl(imageUrl, action);
      console.log('캡쳐 완료');
    }
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      handleCapture();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (  
    <StyledCaptureBox className="cap" ref={captureRef}>
      <StyledBorders>
        <BorderHeight />
        <BorderHeight />
      </StyledBorders>
      <StyledBorders>
        <BorderWidth />
        <BorderWidth />
      </StyledBorders>

      <StyledCamText>{text}</StyledCamText>
      <StyledStoryCam>
        <CamComponent videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />
      </StyledStoryCam>
      <StyledCamImg>
        <Image src='/resources/firefighterpanda.svg' width={400} height={450} alt="firefighter"  style={{ marginTop: '14rem' }}/>
        <Image src='/resources/teacherpanda.svg' width={400} height={450} alt="teacher"  style={{ marginTop: '12rem' }}/>
      </StyledCamImg>
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </StyledCaptureBox>
  )
}

export default Final2
