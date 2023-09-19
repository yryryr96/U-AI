import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import Image from "next/image"
import { StyledQuizBox, StyledStoryShow } from "../../Story.styled"
import RecordComponent from "@/commonComponents/story/recordComponent"

const Seq7 = () => {
  const text: string = '판다를 따라 다 같이 외쳐주세요!'

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/speak_fire.svg'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
      <StyledQuizBox>
        <Image src='/resources/volume_icon.png' width={70} height={60} alt="volume_icon"/>
      </StyledQuizBox>
      {/* recordComponent에서 시간 axios 보내는 시간 조정하기 */}
      <RecordComponent/>
    </>
  )
}

export default Seq7