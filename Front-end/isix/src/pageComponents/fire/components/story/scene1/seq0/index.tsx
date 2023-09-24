import CamComponent from "@/commonComponents/story/camComponent"
import { BorderHeight, BorderWidth, StyledBorders, StyledCamText, StyledStoryCam } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Seq0: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = `다같이 소방관 판다와 함께
    화재 안전에 대해 배워볼까요?`
  const audioUrl: string = '/resources/audioFile/seq0.mp3'

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
      <AudioPlayer file={audioUrl} />
    </>
  )
}

export default Seq0