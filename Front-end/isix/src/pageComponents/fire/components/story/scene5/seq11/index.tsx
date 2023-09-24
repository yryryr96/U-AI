import CamComponent from "@/commonComponents/story/camComponent"
import { useEffect, useState, useRef } from "react"
import { BorderHeight, BorderWidth, StyledBorders, StyledLine, StyledQuizBox, StyledStoryCam, StyledTimer } from "../../Story.styled"
import Image from "next/image"
import { customAxios } from "@/api/api";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Seq11: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = '어디로 가야 할까요?'
  const [timer, setTimer] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      console.log(response.data); 
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimer(3);
    }, 5000);

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
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <Image src='/resources/text_elevator2.png' width={400} height={150} alt="elevator"/>
        </StyledQuizBox>
      </StyledStoryCam>
    </>
  )
}

export default Seq11
