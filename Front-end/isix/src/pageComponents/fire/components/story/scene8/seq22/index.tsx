import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled"

const Seq22 = () => {
  const text: string = `네 소방관님들입니다.
    소방관은 불이 났을 때 사람들을 구하고,
    불이 빨리 꺼질 수 있도록 하고 있어요.`

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/firefighters.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq22