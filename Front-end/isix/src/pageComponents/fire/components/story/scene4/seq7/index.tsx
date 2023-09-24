import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import Image from "next/image"
import { StyledSpan, StyledStoryContainer } from "../../Story.styled"
import RecordComponent from "@/commonComponents/story/recordComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent"

const Seq7 = () => {
  const text: string = '판다를 따라 다 같이 외쳐주세요!'
  const audioUrl: string = '/resources/audioFile/seq7.mp3'

  return (
    <>
      <StyledStoryContainer>
        <ImageComponent src='./resources/speak_fire.png'/>
      </StyledStoryContainer>
      <TextComponent text={text}/>
      <StyledSpan>
        <Image src='/resources/volume_icon.png' width={70} height={60} alt="volume_icon"/>
      </StyledSpan>
      {/* recordComponent에서 시간 axios 보내는 시간 조정하기 */}
      <RecordComponent />
      <AudioPlayer file={audioUrl} />
    </>
  )
}

export default Seq7