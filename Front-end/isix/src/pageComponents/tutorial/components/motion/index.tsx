import TextComponent from "@/commonComponents/story/textComponent"
import { StyledTutorialContainer } from "../../Tutorial.styled"

const Motion = () => {
    const text: string = `판다의 동작을 따라해주세요!`
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

export default Motion