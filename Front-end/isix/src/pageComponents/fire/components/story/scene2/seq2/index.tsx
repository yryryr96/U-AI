import CamComponent from "@/commonComponents/story/camComponent"
import { useEffect, useState } from "react"
import { StyledQuizBox, StyledStoryCam, StyledTimer, StyledLine, StyledBorders, BorderHeight, BorderWidth } from "../../Story.styled"
import Image from "next/image"

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Seq2: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  // const text: string = '이것은 무엇일까요?'
  const [timer, setTimer] = useState<number>(0);

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
          <Image src='/resources/text_fire2.png' width={400} height={150} alt="fire"/>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <Image src='/resources/text_water2.png' width={400} height={150} alt="water"/>
        </StyledQuizBox>
      </StyledStoryCam>
    </>
  )
}

export default Seq2
