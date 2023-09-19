import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled";

const Seq5 = () => {
  const text: string = `불은 정말 위험하기 때문에, 절대 장난을 치면 안 돼요.
  불이 붙은 것을 본다면, 커지기 전에 꼭 피해야 합니다.`;

  return (
    <>
      {/* 불이 커지는 gif 넣기 */}
      <StyledStoryShow>
        <ImageComponent src='./resources/fire.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq5