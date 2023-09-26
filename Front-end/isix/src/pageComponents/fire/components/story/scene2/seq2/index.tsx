import CamComponent from "@/commonComponents/story/camComponent"
import { useEffect, useRef, useState } from "react"
import { StyledRight, StyledLeft, StyledQuizBox, StyledStoryCam, StyledTimer, StyledLine, StyledBorders, BorderHeight, BorderWidth } from "../../Story.styled"
import Image from "next/image"
import { customAxios } from "@/api/api"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import html2canvas from "html2canvas"

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
  setState: (arg0: any) => void;
}

const Seq2: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm, setState }) => {
  const [timer, setTimer] = useState<number>(-1);
  const [audioUrl, setAudioUrl] = useState<string>('')
  const [left, setLeft] = useState<number>(0);
  const [right, setRight] = useState<number>(0);


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


  // OX
  const oxEvent = async () => {
    const url = "api/events/ox";
    const sessionId = localStorage.getItem('socketId')
    const data = {
      sessionId: sessionId,
      numChild: 1, // 처음에 입력받은 값 넣기
    };

    try {
      const response = await customAxios.post(url, data);
      if (response.data.result === 1) {
        setLeft(response.data.left)
        setRight(response.data.right)
        if (timer === 0) {
          if (response.data.left > response.data.right) {
            setState((prev:number) => prev + 1)
          } else {
            setAudioUrl('/resources/audioFile/incorrect.mp3');
            setTimer(10)
          }
        }
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimer(10);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  
  useEffect(() => {
    if (0 <= timer) {
      const intervalId = setInterval(async() => {
        setTimer((prevTimer) => prevTimer - 1);
        await oxEvent();
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer]);


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

      <StyledStoryCam>
        <CamComponent videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />
        <StyledLine />
        <StyledQuizBox>
          <Image src='/resources/text_fire2.png' width={400} height={150} alt="fire" />
          <StyledLeft>{left}</StyledLeft>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <StyledRight>{right}</StyledRight>
          <Image src='/resources/text_water2.png' width={400} height={150} alt="water"/>
        </StyledQuizBox>
      </StyledStoryCam>
      {audioUrl && <AudioPlayer file={audioUrl} />}
    </div>
  )
}

export default Seq2
