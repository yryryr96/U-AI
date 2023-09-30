import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import { StyledTutorialContainer,StyledLine} from "../../Tutorial.styled"

const OX = () => {

  const text: string = `정답이라고 생각하는 곳에 서주세요 !`
  const audioUrl: string = '/resources/audioFile/seq1.mp3'
  return (
    <>
        <StyledLine />
        <StyledTutorialContainer>
            <ImageComponent src='./resources/moving_panda3.png' />
        </StyledTutorialContainer>
        <TextComponent text={text} style={{marginTop : '10vh', fontSize: '3.5rem' }} />
        <AudioPlayer file={audioUrl} />
    </>
  )
}

export default OX


