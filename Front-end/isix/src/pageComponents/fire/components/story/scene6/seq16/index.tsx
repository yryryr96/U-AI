import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled"

const Seq16 = () => {
  const text: string = `위쪽으로 이동하는 연기를 마시지 않고 불을 피하려면,
    모두 고개를 숙인 채로 조심해서 앞으로 걸어가야 합니다.`

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/smoke_tmp.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq16