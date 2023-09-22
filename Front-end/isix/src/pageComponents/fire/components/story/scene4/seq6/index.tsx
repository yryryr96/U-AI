import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"

const Seq6 = () => {
  const text: string = `아기 판다가 혼자 있다가 불이 난 것을 발견했어요.
  친구들은 불이 난 것을 모를 때, 어떻게 해야 할까요?`

  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/call.png'/>
      </StyledStoryContainer>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq6