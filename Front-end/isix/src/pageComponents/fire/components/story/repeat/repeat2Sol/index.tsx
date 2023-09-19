import CamComponent from "@/commonComponents/story/camComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledQuizBox, StyledSpan, StyledStoryCam } from "../../Story.styled"

const Repeat2Sol = () => {
  const text: string = '정답은 { }입니다. { }명이 정답을 맞혔어요!'

  return (
    <>
      <TextComponent text={text} />
      <StyledSpan>
        <StyledQuizBox>
        </StyledQuizBox>
      </StyledSpan>
      <StyledStoryCam>
        <CamComponent />
      </StyledStoryCam>
    </>
  )
}

export default Repeat2Sol
