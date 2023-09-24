import CamComponent from "@/commonComponents/story/camComponent"
import { StyledCamText, StyledStoryCam } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Repeat3Sol: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = '정답은 소방관입니다. { }명이 정답을 맞혔어요!'
  const audioUrl: string = '/resources/audioFile/repeat3Sol.mp3'
  return (
    <>
      <StyledCamText>{text}</StyledCamText>
      <StyledStoryCam>
        <CamComponent videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />
      </StyledStoryCam>
      <AudioPlayer file={audioUrl} />
    </>
  )
}

export default Repeat3Sol
