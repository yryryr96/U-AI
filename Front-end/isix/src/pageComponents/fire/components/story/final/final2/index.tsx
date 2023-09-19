import TextComponent from "@/commonComponents/story/textComponent"
import { StyledQuizBox, StyledSpan, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"

const Final2 = () => {
  const text: string = `판다 친구들과 함께 사진 찍어볼까요?`

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

export default Final2