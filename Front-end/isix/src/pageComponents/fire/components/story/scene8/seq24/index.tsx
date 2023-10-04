import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"

const Seq24 = () => {
  const text: string = `불이 모두 꺼지고, 모두가 안전하게 밖으로 나왔답니다.
    우리 모두 불이 중요하지만
    얼마나 위험한지도 잘 알게 되었나요?`
  const audioUrl: string = '/resources/audioFile/seq24.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='/resources/images/final.png'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq24