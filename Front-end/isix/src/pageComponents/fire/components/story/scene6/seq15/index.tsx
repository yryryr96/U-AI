import { BorderHeight, BorderWidth, StyledBorders, StyledCamImg, StyledCamText, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent";
import Image from "next/image"
import { customAxios } from "@/api/api";
import { useEffect, useRef, useState } from "react"
import html2canvas from "html2canvas";
import { useEffect, useState } from "react"
import useFireState from "@/stores/fire/useFireState";

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
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  // zustand
  const { state, setState } = useFireState();
  // motion
  // const motionEvent = async () => {
  //   const url = "api/events/motion";
  //   const sessionId = localStorage.getItem('socketId')
  //   const data = {
  //     sessionId: sessionId,
  //     eventName: 'evacuatefire',
  //     numChild: 4, // 처음에 입력받은 값 넣기
  //     limit: 10 // 시간 초
  //   };

  //   try {
  //     const response = await customAxios.post(url, data);
  //     if (response.data.result === 1) {
  //       setState(state + 1)
  //     } else {
  //       setAudioUrl2('/resources/audioFile/incorrect.mp3');
  //       motionEvent();
  //     }
  //   } catch (error) {
  //     console.error('error', error);
  //   }
  // };

  // useEffect(() => {
  //   motionEvent();
  // }, [])

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
        <StyledCamImg>
          <Image src='/resources/foldPanda.gif' width={400} height={300} alt="smoke"/>
        </StyledCamImg>
      </StyledStoryCam>
      <AudioPlayer file={audioUrl} />
      {audioUrl2 && <AudioPlayer style={{visible: 'none'}} file={audioUrl2} />}
    </div>
  )
}

export default Seq15