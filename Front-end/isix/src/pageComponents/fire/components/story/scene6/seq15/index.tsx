import { BorderHeight, BorderWidth, StyledBorders, StyledCamImg, StyledCamText, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"
import AudioPlayer from "@/commonComponents/story/audioComponent";
import Image from "next/image"
import { customAxios } from "@/api/api";


interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Seq15: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = '판다를 따라 입을 막고 몸을 숙여주세요'
  const audioUrl: string = '/resources/audioFile/seq15.mp3'

  // motion
  const motionEvent = async () => {
    const url = "api/events/motion";
    const sessionId = localStorage.getItem('socketId')
    const data = {
      sessionId: sessionId,
      eventName: 'evacuatefire',
      numChild: 1, // 처음에 입력받은 값 넣기
      limit: 10 // 시간 초
    };

    try {
      const response = await customAxios.post(url, data);
      console.log(response.data); 
    } catch (error) {
      console.error('error', error);
    }
  };

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
        <StyledCamImg>
          <Image src='/resources/foldPanda.gif' width={400} height={300} alt="smoke"/>
        </StyledCamImg>
      </StyledStoryCam>
      <AudioPlayer file={audioUrl} />
    </>
  )
}

export default Seq15