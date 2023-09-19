import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled";

const Seq4 = () => {
  const text: string = '방금처럼 작았던 불이 커지면 어떻게 될까요?';

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/fire.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq4