import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import HomeButton from "@/commonComponents/story/homeButtonComponent"
const Seq12 = () => {
  const text: string = `정답은 계단입니다. 엘리베이터는
    연기로 가득 차 위험해질 수 있기 때문에
    계단으로 다 같이 조심해서 이동해야 합니다.`
  const audioUrl: string = '/resources/audioFile/seq12.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='/resources/images/stair_sol.png'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq12
