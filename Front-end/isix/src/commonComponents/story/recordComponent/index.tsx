import { useEffect, useRef, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import styled from 'styled-components';

interface RecordComponentProps {
  onResult: (result: number) => void;
}

export const StyledTimer = styled.div`
  font-size: 20rem;
  font-weight: bold;
  color: red;
  z-index: 2;
  position: absolute;
  width: 100%;
  top: 10vh;
  text-align: center;
`

const RecordComponent = ({ onResult }: RecordComponentProps): JSX.Element => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const sessionId = localStorage.getItem('socketId') || '';
  const [countdown, setCountdown] = useState(0);
  
  let startTimerId : number | null = null; 
  let stopTimerId : number | null= null;

  useEffect(() => {
    const startRecording = async () => {
      setTimeout(() => {
        setCountdown(3)
        let countdownIntervalId = setInterval(() => {
          setCountdown(prevCountdown=>prevCountdown -1);
        }, 1000);

        setTimeout(()=> clearInterval(countdownIntervalId), 3000);
      }, 3000)

      try{
        const stream = await navigator.mediaDevices.getUserMedia({ audio:true });
        const mediaRecorder : MediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current=mediaRecorder;

        let chunks : Blob[]=[];
        mediaRecorder.ondataavailable=(e)=>{
          if(e.data) {
            chunks.push(e.data);
          }
        };

        // 녹음 멈추면 blob으로 mp3파일 만들기
        mediaRecorder.onstop = async() => {
          const formData=new FormData();

          console.log(sessionId)

          // // 정상 파일 테스트
          //   await fetch('/resources/fire_last.mp3')
          //     .then(res => res.blob())
          //     .then(blob => {
          //       const file = new File([blob], "fire_last.mp3", { type: "audio/mp3"});
          //       console.log(file);
                
    
          //       formData.append("mp3File", file);
          //       formData.append("sessionId", sessionId);
          //       formData.append("type", "fire");
          //     })


          let blob = new Blob(chunks, { type:'audio/mp3' });
          const url = window.URL.createObjectURL(blob);
          const mp3File = new File([blob],"recorded_audio.mp3", {
            type:"audio/mp3"
          });

          console.log(mp3File)

          // FormData
          formData.append("mp3File", mp3File);
          formData.append("sessionId", sessionId);
          formData.append("type", "fire");


          // // 파일 확인용 다운로드 함수
          // function download() {
          //   const a = document.createElement('a');
          //   const url = URL.createObjectURL(mp3File);

          //   a.href = url; 
          //   a.download = mp3File.name; 
            
          //   document.body.appendChild(a); 
          //   a.click(); 
          //   document.body.removeChild(a); 
          // }
            
          try{
            // 확인용 파일 다운로드
            // download();

            const res : AxiosResponse = await axios.post('http://passportlkm.iptime.org:32768/api/events/stt', formData); 
            console.log(res.data); 
            onResult(res.data.result);
            } catch(err) {
              console.error(err)
            }
          }

        // setTiemout 함수 실행
        recordControl();
        
      } catch(err) {
        console.error(err)
      }
    };

    startRecording();

    return () => {
      if(mediaRecorderRef.current){
        mediaRecorderRef.current.stream.getTracks().forEach(track=>track.stop());
      }
        // 중복 실행 방지
        if(startTimerId) clearTimeout(startTimerId);
        if(stopTimerId) clearTimeout(stopTimerId);
    };

  },[]);

  // 3.5초 뒤 녹음 시작, 그 후 5초 뒤 녹음 종료
  const recordControl = () => {
    startTimerId = window.setTimeout(() => {
      mediaRecorderRef.current?.start(); 
      console.log('start');
    }, 5000);

    stopTimerId= window.setTimeout(() => {
      if(mediaRecorderRef.current?.state === 'recording'){
        mediaRecorderRef.current.stop();
        console.log('end');
      }
    }, 8500); 
  }

  return (
    <>{countdown > 0 && <StyledTimer>{countdown}</StyledTimer>}</>
  )
}

export default RecordComponent;
