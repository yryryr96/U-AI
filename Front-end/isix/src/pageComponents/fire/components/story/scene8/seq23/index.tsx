import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"

const Seq23 = () => {
  const text: string = `집에서 놀고 있다가 불이 붙은 것을 발견했어요.
    판다는 소방관 님들이 와야 한다는 것을 알고 있어요.
    아기 판다는 어디에 가장 먼저 전화를 걸어야 할까요?`
  const audioUrl: string = '/resources/audioFile/seq23.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/find_fire.png'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq23