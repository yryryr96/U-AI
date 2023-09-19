import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled"
import ImageComponent from "@/commonComponents/story/imageComponent"

const Repeat1 = () => {
  const text: string = `그럼 이제 퀴즈를 통해 복습해 볼까요?`

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/final_tmp.png' />
      </StyledStoryShow>
      <TextComponent text={text} />
    </>
  )
}

export default Repeat1