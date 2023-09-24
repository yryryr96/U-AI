import { BorderHeight, BorderWidth, StyledBorders, StyledCamImg, StyledCamText, StyledStoryCam } from "../../Story.styled";
import CamComponent from "@/commonComponents/story/camComponent";
import AudioPlayer from "@/commonComponents/story/audioComponent";
import Image from "next/image"
import { customAxios } from "@/api/api";

interface WebcamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const Seq18: React.FC<WebcamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) => {
  const text: string = '판다를 따라 몸을 굴러주세요'
  const audioUrl: string = '/resources/audioFile/seq18.mp3'

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
          <Image src='/resources/clothes_fire_animation.gif' width={300} height={250} alt="clothes"  style={{ marginTop: '4rem' }}/>
        </StyledCamImg>
      </StyledStoryCam>
      <AudioPlayer file={audioUrl} />
    </>
  )
}

export default Seq18