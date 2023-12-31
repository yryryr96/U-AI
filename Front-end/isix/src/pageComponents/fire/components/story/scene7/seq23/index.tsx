import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"

const Seq23 = () => {
  const text: string = `소방관 님들은 불이 난 곳에 바로 출동할 수 있도록
    올바른 신고 전화를 기다리고 있어요.
    그러니 119에 장난으로 전화를 걸면 안 되겠죠?`
  const audioUrl: string = '/resources/audioFile/seq23.mp3'
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

export default Seq23