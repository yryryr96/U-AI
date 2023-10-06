import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled";
import AudioPlayer from "@/commonComponents/story/audioComponent";
import HomeButton from "@/commonComponents/story/homeButtonComponent";

const Seq4 = () => {
  const text: string = '방금처럼 작았던 불이 커지면 어떻게 될까요?';
  const audioUrl: string = '/resources/audioFile/seq4.mp3'
  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='/resources/images/fire_animation.gif'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Seq4