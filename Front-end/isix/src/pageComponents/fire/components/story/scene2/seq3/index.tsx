import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled";

const Seq3 = () => {
  const text: string = '맞아요. 이것은 불입니다!';

  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/fire.png'/>  
      </StyledStoryContainer>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq3