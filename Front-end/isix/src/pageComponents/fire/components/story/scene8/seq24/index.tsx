import CamComponent from "@/commonComponents/story/camComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { useEffect, useState } from "react"
import { StyledQuizBox, StyledSpan, StyledStoryCam, StyledTimer } from "../../Story.styled"

const Seq24 = () => {
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
      <TextComponent text={text} />
      <StyledSpan>
        <StyledQuizBox>
          <p>부모님</p>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <p>119</p>
        </StyledQuizBox>
      </StyledSpan>
      <StyledStoryCam>
        <CamComponent />
      </StyledStoryCam>
    </>
  )
}

export default Seq24
