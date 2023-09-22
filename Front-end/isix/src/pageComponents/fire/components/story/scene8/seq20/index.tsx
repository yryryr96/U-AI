import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"

const Seq20 = () => {
  const text: string = `불을 끄기 위해 이분들이 도착했답니다.
    불이 났을 때 불을 끄고, 사람을 구해주는
    이분들은 누구일까요?`

  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/firefighterpanda.svg'/>
      </StyledStoryContainer>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq20