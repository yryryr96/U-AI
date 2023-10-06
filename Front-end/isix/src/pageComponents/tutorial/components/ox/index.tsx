import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import { StyledTutorialContainer,StyledLine,StyledTextContainer, StyledText} from "../../Tutorial.styled"

const OX = () => {

  const text: string = `정답이라고 생각하는 곳에 서주세요 !`
  const audioUrl: string = '/resources/audioFile/tutorialOX.mp3'
  return (
    <>
        <StyledTextContainer getLeft="21.6vw">
          <StyledText marginTop="9.8vh">
            왼쪽
          </StyledText>
        </StyledTextContainer>
        <StyledTextContainer getLeft="64.8vw">
          <StyledText marginTop="9.8vh">
            오른쪽
          </StyledText>
        </StyledTextContainer>

        <StyledLine />
        <StyledTutorialContainer>
        <ImageComponent src='/resources/images/moving_panda4.png' width={950} height={950} style={{marginRight : "4vw", marginTop : "16vh"}} />
        </StyledTutorialContainer>

        <TextComponent text={text} style={{marginTop : '13vh', fontSize: '3.5rem' }} />
        <AudioPlayer file={audioUrl} />
    </>
  )
}

export default OX


