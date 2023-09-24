import CamComponent from "@/commonComponents/story/camComponent"
import { BorderHeight, BorderWidth, StyledBorders, StyledCamText, StyledStoryCam } from "../../Story.styled"

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Repeat2Sol: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = '정답은 119입니다!'

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
    </>
  )
}

export default Repeat2Sol
