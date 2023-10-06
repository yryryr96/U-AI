import CamComponent from "@/commonComponents/story/camComponent"
import { useEffect, useState, useRef } from "react"
import { StyledLeft, StyledRight, BorderHeight, BorderWidth, StyledBorders, StyledLine, StyledQuizBox, StyledStoryCam, StyledTimer } from "../../Story.styled"
import Image from "next/image"
import { socketAxios } from "@/api/api";
import AudioPlayer from "@/commonComponents/story/audioComponent";
import html2canvas from "html2canvas";
import useFireState from "@/stores/fire/useFireState";
import { OX_API_URL } from "@/config"

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Seq11: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = '어디로 가야 할까요?'
  const [timer, setTimer] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>('')
  const [left, setLeft] = useState<number>(0);
  const [right, setRight] = useState<number>(0);


  // zustand
  const { state, setState } = useFireState();
  
  // OX
  const oxEvent = async () => {
    const sessionId = localStorage.getItem('socketId')
    const data = {
      sessionId: sessionId,
      numChild: 1, // 처음에 입력받은 값 넣기
    };

    try {
      if (OX_API_URL) {
        const response = await socketAxios.post(OX_API_URL, data);
        if (response.data.result === 1) {
          setLeft(response.data.left)
          setRight(response.data.right)
          if (timer === 0) {
            if (response.data.left > response.data.right) {
              setTimeout(() => {
                  setState(state + 1);
              }, 500);
            } else {
              setAudioUrl('/resources/audioFile/incorrect.mp3');
              setTimer(10)
            }
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
          <Image src='/resources/assets/text_stair2.png' width={330} height={130} alt="stair"/>
          <StyledLeft>{left}</StyledLeft>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <StyledRight>{right}</StyledRight>
          <Image src='/resources/assets/text_elevator2.png' width={330} height={130} alt="elevator"/>
        </StyledQuizBox>
      </StyledStoryCam>
      {audioUrl && <AudioPlayer file={audioUrl} />}
    </>
  )
}

export default Seq11
