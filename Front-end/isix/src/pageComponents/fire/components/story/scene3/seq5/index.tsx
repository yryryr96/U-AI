import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled";
import AudioPlayer from "@/commonComponents/story/audioComponent";

const Seq5 = () => {
  const text: string = `불은 정말 위험하기 때문에, 절대 장난을 치면 안 돼요.
  불이 붙은 것을 본다면, 커지기 전에 꼭 피해야 합니다.`;
  const audioUrl: string = '/resources/audioFile/seq5.mp3'
  return (
    <>
      {/* 불이 커지는 gif 넣기 */}
      <StyledStoryContainer>
        <ImageComponent src='./resources/fire_animation.gif'/>
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
    </>
  )
}

export default Seq5