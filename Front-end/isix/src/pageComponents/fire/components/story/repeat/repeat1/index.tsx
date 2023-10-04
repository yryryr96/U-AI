import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import ImageComponent from "@/commonComponents/story/imageComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"

const Repeat1 = () => {
  const text: string = `그럼 이제 퀴즈를 통해 복습해 볼까요?`
  const audioUrl: string = '/resources/audioFile/repeat1.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='/resources/start_review.svg' />
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Repeat1