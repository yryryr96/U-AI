import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"

const Seq19 = () => {
  const text: string = `네 소방관님들입니다.
    소방관은 불이 났을 때 사람들을 구하고,
    불이 빨리 꺼질 수 있도록 하고 있어요.`
  const audioUrl: string = '/resources/audioFile/seq19.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='/resources/fireavengers.svg' width={1550} height={620} />
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq19