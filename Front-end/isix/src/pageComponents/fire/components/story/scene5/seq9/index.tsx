import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"
const Seq9 = () => {
  const text: string = `다 함께 불을 피해서 밖으로 이동하던 중,
    계단과 엘리베이터가 있다는 것을 알게 되었어요.`
  const audioUrl: string = '/resources/audioFile/seq9.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='/resources/wonder_stair.png'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq9