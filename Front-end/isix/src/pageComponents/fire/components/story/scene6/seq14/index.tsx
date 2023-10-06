import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"

const Seq14 = () => {
  const text: string = `연기는 눈높이 위로 올라가기 때문에,
    연기를 마시지 않기 위해 입과 코를 막고,
    고개를 숙이고 안전하게 줄을 서서 다 같이 피해야 해요.`
  const audioUrl: string = '/resources/audioFile/seq14.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='/resources/images/smoke.png'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq14