import CamComponent from "@/commonComponents/story/camComponent"
import { BorderHeight, BorderWidth, StyledBorders, StyledCamText, StyledStoryCam } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent";
import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";

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

  // 화면 캡쳐 후 url 로컬에 저장
  const captureRef = useRef<HTMLDivElement | null>(null);

  const handleCapture = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imageUrl = canvas.toDataURL('image/png');
  
      // screenshots 배열 가져오기. 없으면 빈 배열로 초기화
      let screenshots = JSON.parse(localStorage.getItem('screenshots') || '[]');
  
      // 새 imageUrl 추가
      screenshots.push(imageUrl);
  
      // localStorage에 저장
      localStorage.setItem('screenshots', JSON.stringify(screenshots));
  
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
    <div className="cap" ref={captureRef} style={{ position: 'fixed', left: 0, top: 0, height: '100%', width: '100%', overflow: 'hidden'}}>
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
    </div>
  )
}

export default Seq0