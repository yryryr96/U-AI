import { useEffect, useRef, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';
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
  const [retryKey, setRetryKey] = useState(0);
  const sessionId = localStorage.getItem('socketId') || '';
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    console.log('id: ', sessionId)
    const startRecording = async () => {
      setTimeout(() => {
        setCountdown(3)
        let countdownIntervalId = setInterval(() => {
          setCountdown(prevCountdown => prevCountdown -1);
        },1000);

        setTimeout(() => clearInterval(countdownIntervalId),3000);

      }, 3000);
      
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder: MediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        let chunks: Blob[] = [];
        
        // dataavailable event listener
        mediaRecorder.ondataavailable = (e) => {
          if (e.data) {
            chunks.push(e.data);
          }
        };

        // onstop event listener
        mediaRecorder.onstop = async () => {
          let blob = new Blob(chunks, { type: 'audio/mp3' });
          const url = window.URL.createObjectURL(blob);
          const mp3File = new File([blob], "recorded-audio.mp3", {
            type: "audio/mp3"
          });


           // FormData creation and append data
          const formData= new FormData();

          formData.append("mp3File", mp3File);
          formData.append("sessionId", sessionId);
          formData.append("type", "fire");

          try{
            const res : AxiosResponse= await axios.post('http://127.0.0.1:8000/voice/api/voicerecognition/', formData); 
            console.log('res:', res.data); 

            if (res.data.result === -1) {
              setRetryKey(prev => prev + 1);
            } else {
              onResult(res.data.result);
            }
          } catch(err){
            console.error(err)
          }
         }

        setTimeout(() => {
          if(countdown === 0){ 
            mediaRecorder.start();
            console.log('start');
          }
        },3000);

        setTimeout(() => {
          if(mediaRecorder.state === 'recording'){
            mediaRecorder.stop();
            console.log('end');
          }
        }, 3000); 

      } catch (err) {
      	console.error(err)
      }
    };

    startRecording();

    return () => {

    	if(mediaRecorderRef.current){
    		mediaRecorderRef.current.stream.getTracks().forEach(track=>track.stop());
    	}
      
    };
  
}, [retryKey]);

return (
<>{countdown > 0 && <StyledTimer>{countdown}</StyledTimer>}</>
)
}

export default RecordComponent;
