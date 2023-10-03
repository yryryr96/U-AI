import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"

const Seq8Correct = () => {
  const text: string = `불이 난 것을 확인하면, "불이야!"라고 외치고
    다 같이 함께 불을 피해야 해요.`
  const audioUrl: string = '/resources/audioFile/seq8.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/speak_fire.png'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq8Correct