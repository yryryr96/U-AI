import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"

const Seq22 = () => {
  const text: string = `불이 났을 때는 119에 전화를 해야 해요.
    119에 전화할 땐, 불이 난 위치를 정확히 말해야 해요.`
  const audioUrl: string = '/resources/audioFile/seq22.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='/resources/images/call119.png'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq22