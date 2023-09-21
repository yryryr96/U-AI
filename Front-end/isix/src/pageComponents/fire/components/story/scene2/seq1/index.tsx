import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled"

const Seq1 = () => {
  const text: string = `이것은 우리를 따뜻하게 해주고, 밝게 비춰주기도 하지만
  정말 위험하기도 하답니다. 이것은 무엇일까요?`

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/fire_animation.gif' />
      </StyledStoryShow>
      <TextComponent text={text} />
    </>
  )
}

export default Seq1