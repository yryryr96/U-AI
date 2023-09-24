import Image from "next/image";
import { BorderHeight, BorderWidth, StyledBorders, StyledCamImg, StyledCamText, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Final1: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = `너무 잘했어요! 이제 판다 친구들과 함께 사진 찍어볼까요?`

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
    </>
  )
}

export default Final1