import CamComponent from "@/commonComponents/story/camComponent"
import { useEffect, useState, useRef } from "react"
import { StyledLeft, StyledRight, BorderHeight, BorderWidth, StyledBorders, StyledLine, StyledQuizBox, StyledStoryCam, StyledTimer } from "../../Story.styled"
import Image from "next/image"
import { customAxios } from "@/api/api";
import AudioPlayer from "@/commonComponents/story/audioComponent";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
  setState: (arg0: any) => void;
}

const Seq11: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm, setState }) => {
  const text: string = '어디로 가야 할까요?'
  const [timer, setTimer] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>('')
  const [left, setLeft] = useState<number>(0);
  const [right, setRight] = useState<number>(0);
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

  useEffect(() => {
    if (0 < timer) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
    
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      oxEvent();
    }
  }, [timer]);

  return (
    <>
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
          <Image src='/resources/text_stair2.png' width={400} height={150} alt="stair"/>
          <StyledLeft>{left}</StyledLeft>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <StyledRight>{right}</StyledRight>
          <Image src='/resources/text_elevator2.png' width={400} height={150} alt="elevator"/>
        </StyledQuizBox>
      </StyledStoryCam>
      {audioUrl && <AudioPlayer file={audioUrl} />}
    </>
  )
}

export default Seq11
