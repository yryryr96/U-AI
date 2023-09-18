import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import Image from "next/image"
import { StyledQuizBox } from "../../Story.styled"

const Seq7 = () => {
  const text: string = '판다를 따라 다 같이 외쳐주세요!'

  return (
    <div>
      <ImageComponent src='./resources/speak_fire_tmp.png'/>
      <TextComponent text={text}/>
      <StyledQuizBox>
        <Image src='/resources/volume_icon.png' width={80} height={60} alt="volume_icon"/>
      </StyledQuizBox>
    </div>
  )
}

export default Seq7