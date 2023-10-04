import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled";
import AudioPlayer from "@/commonComponents/story/audioComponent";
import HomeButton from "@/commonComponents/story/homeButtonComponent";

const Seq3 = () => {
  const text: string = '맞아요. 이것은 불입니다!';
  const audioUrl: string = '/resources/audioFile/seq3.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='/resources/images/fire.png'/>  
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton/>
    </>
  )
}

export default Seq3