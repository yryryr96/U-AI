import TextComponent from "@/commonComponents/story/textComponent"
import { StyledTutorialContainer } from "../../Tutorial.styled"
import ImageComponent from "@/commonComponents/story/imageComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent"

const OCR = () => {
    const text: string = `정답을 보드에 크게 적어 들어주세요!`
    const audioUrl: string = '/resources/audioFile/tutorialOCR.mp3'
    return (
      <>  
        <StyledTutorialContainer>
          <ImageComponent src='/resources/images/ocr_panda.png' style={{marginRight : "14vw", marginTop : "12vh"}} />
        </StyledTutorialContainer>

        <TextComponent text={text} style={{marginTop : '10vh', fontSize: '3.5rem' }} />
        <AudioPlayer file={audioUrl} />
      </>
    )
}

export default OCR