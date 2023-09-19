import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled"

const Seq23 = () => {
  const text: string = `집에서 놀고 있다가 불이 붙은 것을 발견했어요.
    판다는 소방관 님들이 와야 한다는 것을 알고 있어요.
    아기 판다는 어디에 가장 먼저 전화를 걸어야 할까요?`

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/call.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq23