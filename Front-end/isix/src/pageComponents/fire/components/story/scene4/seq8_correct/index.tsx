import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import Image from "next/image"
import { StyledQuizBox, StyledStoryShow } from "../../Story.styled"

const Seq8Correct = () => {
  const text: string = `불이 난 것을 확인하면, "불이야!"라고 외치고
    다 같이 함께 불을 피해야 해요.`

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/speak_fire_tmp.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq8Correct