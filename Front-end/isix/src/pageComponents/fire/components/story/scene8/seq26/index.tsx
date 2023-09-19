
import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled"

const Seq26 = () => {
  const text: string = `소방관 님들은 불이 난 곳에 바로 출동할 수 있도록
    올바른 신고 전화를 기다리고 있어요.
    그러니 119에 장난으로 전화를 걸면 안 되겠죠?`

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/call119.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq26