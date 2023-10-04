import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import { StyledTutorialContainer,StyledLine,StyledTextContainer, StyledText} from "../../Tutorial.styled"

const OX = () => {

  const text: string = `정답이라고 생각하는 곳에 서주세요 !`
  // const audioUrl: string = '/resources/audioFile/seq1.mp3'
  return (
    <>
        <StyledTextContainer getLeft="20vw">
          <StyledText marginTop="14vh">
            왼쪽
          </StyledText>
        </StyledTextContainer>
        <StyledTextContainer getLeft="63.4vw">
          <StyledText marginTop="14vh">
            오른쪽
          </StyledText>
        </StyledTextContainer>

        <StyledLine />
        <StyledTutorialContainer>
        <ImageComponent src='/resources/moving_panda4.png' style={{marginRight : "14vw", marginTop : "12vh"}} />
        </StyledTutorialContainer>

        <TextComponent text={text} style={{marginTop : '10vh', fontSize: '3.5rem' }} />
        {/* <AudioPlayer file={audioUrl} /> */}
    </>
  )
}

export default OX


