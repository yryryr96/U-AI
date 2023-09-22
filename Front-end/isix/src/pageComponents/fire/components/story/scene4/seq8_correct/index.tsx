import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"

const Seq8Correct = () => {
  const text: string = `불이 난 것을 확인하면, "불이야!"라고 외치고
    다 같이 함께 불을 피해야 해요.`

  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/speak_fire.png'/>
      </StyledStoryContainer>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq8Correct