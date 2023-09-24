import CamComponent from "@/commonComponents/story/camComponent"
import { useEffect, useState } from "react"
import { BorderHeight, BorderWidth, StyledBorders, StyledLine, StyledQuizBox, StyledStoryCam, StyledTimer } from "../../Story.styled"
import Image from "next/image";

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
          <Image src='/resources/text_teacher2.png' width={400} height={150} alt="teacher"/>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <Image src='/resources/text_119_2.png' width={400} height={150} alt="119"/>
        </StyledQuizBox>
      </StyledStoryCam>
    </>
  )
}

export default Seq24
