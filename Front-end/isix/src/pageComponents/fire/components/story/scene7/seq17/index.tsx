import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"

const Seq17 = () => {
  const text: string = `아기 판다가 대피하던 중 옷에 불이 붙고 말았어요.
    옷에 불이 붙었을 때는 어떻게 해야 할까요?`
  const audioUrl: string = '/resources/audioFile/seq17.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/clothes_fire_animation.gif'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq17