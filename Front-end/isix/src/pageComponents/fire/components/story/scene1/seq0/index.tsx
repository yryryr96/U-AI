import CamComponent from "@/commonComponents/story/camComponent"
import { BorderHeight, BorderWidth, StyledBorders, StyledCamText, StyledCaptureBox, StyledStoryCam } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent";
import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import useImageUrlState from "@/stores/capture/useImageUrlState";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Seq0: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = `다같이 소방관 판다와 함께
    화재 안전에 대해 배워볼까요?`
  const audioUrl: string = '/resources/audioFile/seq0.mp3'

  // 화면 캡쳐 후 url 저장
  const captureRef = useRef<HTMLDivElement | null>(null);
  const { addImageUrl } = useImageUrlState();

  const handleCapture = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imageUrl = canvas.toDataURL('image/png');
  
      addImageUrl(imageUrl);
      console.log('캡쳐 완료');
    }
  };

useEffect(() => {
  const timer = setTimeout(() => {
    handleCapture();
  }, 2000);

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
      <AudioPlayer file={audioUrl} />
    </StyledCaptureBox>
  )
}

export default Seq0