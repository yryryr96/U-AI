import AudioPlayer from "@/commonComponents/story/audioComponent";
import { StyledCamImg, StyledCamText, StyledQuizBox, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"
import Image from "next/image"


interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Seq15: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = '판다를 따라 입을 막고 몸을 숙여주세요'
  const audioUrl: string = '/resources/audioFile/seq15.mp3'
  return (
    <>
      <StyledCamText>{text}</StyledCamText>
      <StyledStoryCam>
        <CamComponent videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />
        <StyledCamImg>
          <Image src='/resources/avoid_smoke_panda.png' width={300} height={250} alt="smoke"  style={{ marginTop: '3.7rem' }}/>
        </StyledCamImg>
      {/* <TextComponent text={text}/> */}
      </StyledStoryCam>
      <AudioPlayer file={audioUrl} />
    </>
  )
}

export default Seq15