import { useEffect, useState } from "react"
import { StyledStoryCam, StyledTimer, StyledQuizBox, StyledCamText } from "../../Story.styled"
import OcrComponent from "@/commonComponents/story/ocrComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent"

const Repeat3 = () => {
  const text: string = '불을 끄고 사람을 구해주는 분들은 누구일까요?'
  const audioUrl: string = '/resources/audioFile/repeat3.mp3'
  
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
      <StyledCamText>{text}</StyledCamText>
      <StyledStoryCam>
        <OcrComponent />
        <StyledQuizBox>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
        </StyledQuizBox>
      </StyledStoryCam>
      <AudioPlayer file={audioUrl} />
    </>
  )
}

export default Repeat3
