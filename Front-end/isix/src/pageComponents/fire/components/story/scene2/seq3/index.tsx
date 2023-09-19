import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled";

const Seq3 = () => {
  const text: string = '맞아요. 이것은 불입니다!';

  return (
    <>
    <StyledStoryShow>
      <ImageComponent src='./resources/fire.png'/>  
    </StyledStoryShow>
    <TextComponent text={text}/>
    </>
  )
}

export default Seq3