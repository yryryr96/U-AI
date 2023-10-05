import CamComponent from "@/commonComponents/story/camComponent"
import { BorderHeight, BorderWidth, StyledBorders, StyledCamText, StyledCaptureBox, StyledStoryCam } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent";
import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import useImageUrlState from "@/stores/capture/useImageUrlState";
import HomeButton from "@/commonComponents/story/homeButtonComponent";
import CamSelect from "@/commonComponents/story/camSelectComponent";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
  devices : any;
  setDeviceId : any;
}

const Seq0: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm, devices, setDeviceId }) => {
  const text: string = `다같이 소방관 판다와 함께
    화재 안전에 대해 배워볼까요?`
  const audioUrl: string = '/resources/audioFile/seq0.mp3'

  // 화면 캡쳐 후 url 저장
  const captureRef = useRef<HTMLDivElement | null>(null);
  const { updateImageUrl, imageUrls } = useImageUrlState();

  const handleCapture = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imageUrl = canvas.toDataURL('image/png');
  
      // 배열 비어있으면 추가, 한 개 있으면 마지막 값 변경
      const action = imageUrls.length == 0 ? 'add' : 'update';
      updateImageUrl(imageUrl, action, 0);
      console.log('캡쳐 완료');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCapture();
    }, 5000);

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
      
      <StyledCamText>{text}
      <CamSelect devices={devices} setDeviceId={setDeviceId}/>
      </StyledCamText>     
      
      <StyledStoryCam>
        <CamComponent videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />
      </StyledStoryCam>
      <AudioPlayer file={audioUrl} />
      <HomeButton/>
    </StyledCaptureBox>
  )
}

export default Seq0