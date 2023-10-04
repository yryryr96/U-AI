import { BorderHeight, BorderWidth, StyledBorders, StyledCamImg, StyledCamText, StyledCaptureBox, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent";
import Image from "next/image"
import { socketAxios } from "@/api/api";
import { useEffect, useRef, useState } from "react"
import html2canvas from "html2canvas";
import useFireState from "@/stores/fire/useFireState";
import useImageUrlState from "@/stores/capture/useImageUrlState";
import HomeButton from "@/commonComponents/story/homeButtonComponent";
import { MOTION_URL } from "@/config";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Seq15: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = '판다를 따라 입을 막고 몸을 숙여주세요'
  const audioUrl: string = '/resources/audioFile/seq15.mp3'
  const [audioUrl2, setAudioUrl2] = useState<string>('')

  // 화면 캡쳐 후 url 저장
  const captureRef = useRef<HTMLDivElement | null>(null);
  const { updateImageUrl, imageUrls } = useImageUrlState();

  const handleCapture = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imageUrl = canvas.toDataURL('image/png');
  
      const action = imageUrls.length < 3 ? 'add' : 'update';
      updateImageUrl(imageUrl, action, 2);
      console.log('캡쳐 완료');
    }
  };
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      handleCapture();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  // zustand
  const { state, setState } = useFireState();
  // motion
  const motionEvent = async () => {
    const sessionId = localStorage.getItem('socketId')
    const data = {
      sessionId: sessionId,
      eventName: 'evacuatefire',
      numChild: 4, // 처음에 입력받은 값 넣기
      limit: 10 // 시간 초
    };

    try {
      if (MOTION_URL) {
        const response = await socketAxios.post(MOTION_URL, data);
        if (response.data.result === 1) {
          setState(state + 1)
        } else {
          setAudioUrl2('/resources/audioFile/incorrect.mp3');
          motionEvent();
        }
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    motionEvent();
  }, [])

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
        <StyledCamImg>
          <Image src='/resources/images/foldpandaTest.webp' width={400} height={280} alt="smoke"/>
        </StyledCamImg>
      </StyledStoryCam>
      <AudioPlayer file={audioUrl} />
      {audioUrl2 && <AudioPlayer style={{visible: 'none'}} file={audioUrl2} />}
      <HomeButton />
    </StyledCaptureBox>
  )
}

export default Seq15