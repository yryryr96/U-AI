import TextComponent from "@/commonComponents/story/textComponent"
import ImageComponent from "@/commonComponents/story/imageComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import { StyledTutorialContainer } from "../../Tutorial.styled"

const Motion = () => {
    const text: string = `판다의 동작을 따라해주세요!`
    const audioUrl: string = '/resources/audioFile/tutorialMOTION.mp3'
    return (
      <>  
        <StyledTutorialContainer>
          <ImageComponent src='/resources/images/foldpandaTest.webp' width={850} height={850} style={{marginRight : "12vw", marginTop : "10vh"}} />  
        </StyledTutorialContainer>

        <TextComponent text={text} style={{marginTop : '10vh', fontSize: '3.5rem' }} />
        <AudioPlayer file={audioUrl} />
      </>
    )
}

export default Motion