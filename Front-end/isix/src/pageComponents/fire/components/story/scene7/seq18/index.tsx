import DualComponent from "@/commonComponents/story/dualComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled"

const Seq18 = () => {
  const text: string = '판다를 따라 몸을 굴러주세요.'

  return (
    <>
      <StyledStoryShow>
        <DualComponent imageSrc="/resources/clothes_fire.png"/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq18