import CamComponent from "@/commonComponents/story/camComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { useEffect, useState } from "react"
import { StyledQuizBox, StyledStoryCam, StyledSpan, StyledTimer } from "../../Story.styled"
import Image from "next/image"

const Seq2 = () => {
  const text: string = '이것은 무엇일까요?'
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
          <Image src='/resources/fire_icon.png' width={100} height={100} alt="fire_icon"/>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <Image src='/resources/water_icon.png' width={100} height={100} alt="water_icon"/>
        </StyledQuizBox>
      </StyledSpan>
      <StyledStoryCam>
        <CamComponent />
      </StyledStoryCam>
    </>
  )
}

export default Seq2
