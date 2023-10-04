import CamComponent from "@/commonComponents/story/camComponent"
import { BorderHeight, BorderWidth, StyledBorders, StyledCamText, StyledCenter, StyledStoryCam } from "../../Story.styled"
import AudioPlayer from "@/commonComponents/story/audioComponent";
import HomeButton from "@/commonComponents/story/homeButtonComponent";
import useOcrCorrect from "@/stores/ocr/useOcrCorrect";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Repeat2Sol: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = '정답은 119입니다!'
  const audioUrl: string = '/resources/audioFile/repeat2Sol.mp3'
  const {correct, setCorrect} = useOcrCorrect();

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
      <StyledCenter>{correct}명 정답!!</StyledCenter>
      <StyledCamText>{text}</StyledCamText>
      <StyledStoryCam>
      
        <CamComponent videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />
      </StyledStoryCam>
      <AudioPlayer file={audioUrl} />
      <HomeButton />
    </>
  )
}

export default Repeat2Sol
