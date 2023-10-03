import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"
const Seq10 = () => {
  const text: string = `어느 곳으로 가야 안전하게 내려갈 수 있을까요?
    친구들도 다 같이 올바른 곳으로 이동해 볼까요?`
  const audioUrl: string = '/resources/audioFile/seq10.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/wonder_stair.png'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq10
