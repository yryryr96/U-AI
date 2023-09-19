import TextComponent from "@/commonComponents/story/textComponent"
import { StyledQuizBox, StyledSpan, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"

const Final1 = () => {
  const text: string = `{ }유치원 친구들! 너무 잘했어요`

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

export default Final1