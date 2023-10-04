import TextComponent from "@/commonComponents/story/textComponent"
import ImageComponent from "@/commonComponents/story/imageComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import { StyledTutorialContainer } from "../../Tutorial.styled"

const Sound = () => {
    const text: string = `판다와 함께 크게 외쳐주세요!`
    const audioUrl: string = '/resources/audioFile/tutorialSTT.mp3'
    return (
      <>  
        <StyledTutorialContainer>
          <ImageComponent src='/resources/images/speak_panda2.png' width={1000} height={900} style={{marginTop : "15vh",marginRight : "10vw"}} />
        </StyledTutorialContainer>
       
        <TextComponent text={text} style={{marginTop : '10vh', fontSize: '3.5rem' }} />
        <AudioPlayer file={audioUrl} />
      </>
    )
}

export default Sound