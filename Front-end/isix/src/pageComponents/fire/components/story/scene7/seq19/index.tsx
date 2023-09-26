import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryContainer } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent"
import crawlPanda from "../../../../../../../public/resources/crawl_panda.json"
import Lottie from "react-lottie-player";

const Seq19 = () => {
  const text: string = `옷에 불이 붙었을 때는 불이 더 커지기 전에
    땅에 몸을 굴러 불이 꺼질 수 있도록 합니다.`
  const audioUrl: string = '/resources/audioFile/seq19.mp3'
  return (
    <>
      <StyledStoryContainer>
        <Lottie style={{width: '150%', height: '150%'}} loop animationData={crawlPanda} play />
      </StyledStoryContainer>
      <TextComponent text={text} />
      <AudioPlayer file={audioUrl} />
    </>
  )
}

export default Seq19