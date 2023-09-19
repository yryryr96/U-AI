import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import Image from "next/image"
import { StyledQuizBox, StyledStoryShow } from "../../Story.styled"

const Seq8Incorrect = () => {
  const text: string = '다시 한번 크게 외쳐주세요!'

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/speak_fire_tmp.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
      <StyledQuizBox>
        <Image src='/resources/volume_icon.png' width={80} height={60} alt="volume_icon"/>
      </StyledQuizBox>
    </>
  )
}

export default Seq8Incorrect