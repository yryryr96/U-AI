import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled"

const Seq25 = () => {
  const text: string = `불이 났을 때는 119에 전화를 해야 해요.
    119에 전화할 땐, 불이 난 위치를 정확히 말해야 해요.`

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/call119.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq25