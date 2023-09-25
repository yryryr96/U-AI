import CamComponent from "@/commonComponents/story/camComponent"
import { useEffect, useState } from "react"
import { BorderHeight, BorderWidth, StyledBorders, StyledLine, StyledQuizBox, StyledStoryCam, StyledTimer } from "../../Story.styled"
import Image from "next/image";
import { customAxios } from "@/api/api";
import AudioPlayer from "@/commonComponents/story/audioComponent";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
  setState: (arg0: any) => void;
}

const Seq21: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm, setState }) => {
  const text: string = '누구일까요?'
  const [timer, setTimer] = useState<number>(-1);
  const [audioUrl, setAudioUrl] = useState<string>('')

  // OX
  const oxEvent = async () => {
    console.log('실행')
    const url = "api/events/ox";
    const sessionId = localStorage.getItem('socketId')
    const data = {
      sessionId: sessionId,
      numChild: 1, // 처음에 입력받은 값 넣기
    };

    try {
      const response = await customAxios.post(url, data);
      console.log(response.data)
      if (response.data.result === 1) {
        if (response.data.left > response.data.right) {
          setState((prev:number) => prev + 1)
        } else {
          setAudioUrl('/resources/audioFile/incorrect.mp3');
          setTimer(10)
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
          <Image src='/resources/text_firefighter2.png' width={400} height={150} alt="firefighter"/>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <Image src='/resources/text_police2.png' width={400} height={150} alt="police"/>
        </StyledQuizBox>
      </StyledStoryCam>
      {audioUrl && <AudioPlayer file={audioUrl} />}
    </>
  )
}

export default Seq21
