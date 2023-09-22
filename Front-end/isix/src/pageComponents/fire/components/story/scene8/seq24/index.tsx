import CamComponent from "@/commonComponents/story/camComponent"
import { useEffect, useState } from "react"
import { StyledLine, StyledQuizBox, StyledStoryCam, StyledTimer } from "../../Story.styled"

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Seq24: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = '어디에 전화를 걸어야 할까요?'
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimer(3);
    }, 2000);

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
      <StyledStoryCam>
        <CamComponent videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />
        <StyledLine />
        <StyledQuizBox>
          <span>부모님</span>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <span>119</span>
        </StyledQuizBox>
      </StyledStoryCam>
    </>
  )
}

export default Seq24
