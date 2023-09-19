import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled"

const Seq19 = () => {
  const text: string = `옷에 불이 붙었을 때는 불이 더 커지기 전에
    땅에 몸을 굴러 불이 꺼질 수 있도록 합니다.`

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/clothes_fire.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq19