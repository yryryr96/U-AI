import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"

const Seq14 = () => {
  const text: string = `연기는 눈높이 위로 올라가기 때문에,
    연기를 마시지 않기 위해 입과 코를 막고,
    고개를 숙이고 안전하게 줄을 서서 다 같이 피해야 해요.`

  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/smoke.png'/>
      </StyledStoryContainer>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq14