import AudioPlayer from "@/commonComponents/story/audioComponent";
import { BorderHeight, BorderWidth, StyledBorders, StyledCamImg, StyledCamText, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"
import Image from "next/image";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Final2: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = `판다 친구들과 함께 사진 찍어볼까요?`
  const audioUrl: string = '/resources/audioFile/final2.mp3'
  return (  
    <>
      <StyledBorders>
        <BorderHeight />
        <BorderHeight />
      </StyledBorders>
      <StyledBorders>
        <BorderWidth />
        <BorderWidth />
      </StyledBorders>

      <StyledCamText>{text}</StyledCamText>
      <StyledStoryCam>
        <CamComponent videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />
      </StyledStoryCam>
      <StyledCamImg>
        <Image src='/resources/firefighterpanda.svg' width={400} height={450} alt="firefighter"  style={{ marginTop: '14rem' }}/>
        <Image src='/resources/teacherpanda.svg' width={400} height={450} alt="teacher"  style={{ marginTop: '12rem' }}/>
      </StyledCamImg>
      <AudioPlayer file={audioUrl} />
    </>
  )
}

export default Final2
