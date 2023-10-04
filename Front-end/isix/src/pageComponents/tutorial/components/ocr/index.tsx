import TextComponent from "@/commonComponents/story/textComponent"
import { StyledTutorialContainer } from "../../Tutorial.styled"

const OCR = () => {
    const text: string = `정답을 보드에 크게 적어 들어주세요!`
    // const audioUrl: string = '/resources/audioFile/seq1.mp3'
    return (
      <>  
        <StyledTutorialContainer>
        </StyledTutorialContainer>

        <TextComponent text={text} style={{marginTop : '10vh', fontSize: '3.5rem' }} />
        {/* <AudioPlayer file={audioUrl} /> */}
      </>
    )
}

export default OCR