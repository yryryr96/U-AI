import CamComponent from "@/commonComponents/story/camComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { useEffect, useState } from "react"
import { StyledQuizBox, StyledSpan, StyledStoryCam, StyledTimer } from "../../Story.styled"
import Image from "next/image"

const Seq11 = () => {
  const text: string = '어디로 가야 할까요?'
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
          <Image src='/resources/stairs_icon.png' width={100} height={100} alt="fire_icon"/>
          <StyledTimer>{timer > 0 ? timer : ''}</StyledTimer>
          <Image src='/resources/elevator_icon.png' width={100} height={100} alt="water_icon"/>
        </StyledQuizBox>
      </StyledSpan>
      <StyledStoryCam>
        <CamComponent />
      </StyledStoryCam>
    </>
  )
}

export default Seq11
