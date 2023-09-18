import CamComponent from "@/commonComponents/story/camComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { useEffect, useState } from "react"
import { StyledQuizBox } from "../../Story.styled"

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
    <div>
      <TextComponent text={text} />
      <StyledQuizBox>
        <p>부모님</p>
        <p>{timer > 0 ? timer : ''}</p>
        <p>119</p>
        </StyledQuizBox>
      <CamComponent />
    </div>
  )
}

export default Seq24
