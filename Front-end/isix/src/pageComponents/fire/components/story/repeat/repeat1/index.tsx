import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import ImageComponent from "@/commonComponents/story/imageComponent"

const Repeat1 = () => {
  const text: string = `그럼 이제 퀴즈를 통해 복습해 볼까요?`

  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/final.png' />
      </StyledStoryContainer>
      <TextComponent text={text} />
    </>
  )
}

export default Repeat1