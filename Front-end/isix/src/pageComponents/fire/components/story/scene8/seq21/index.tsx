import CamComponent from "@/commonComponents/story/camComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { useEffect, useState } from "react"
import { StyledQuizBox, StyledSpan, StyledStoryCam, StyledTimer } from "../../Story.styled"

const Seq21 = () => {
  const text: string = '누구일까요?'
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
        <CamComponent />
        <StyledQuizBox>
          <p>소방관</p>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <p>경찰관</p>
        </StyledQuizBox>
      </StyledStoryCam>
    </>
  )
}

export default Seq21
