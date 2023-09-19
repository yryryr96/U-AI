import DualComponent from "@/commonComponents/story/dualComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer, StyledStoryShow } from "../../Story.styled"

const Seq15 = () => {
  const text: string = '판다를 따라 입을 막고 몸을 숙여주세요.'

  return (
    <>
      <StyledStoryShow>
        <DualComponent imageSrc="/resources/smoke_panda.png"/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq15