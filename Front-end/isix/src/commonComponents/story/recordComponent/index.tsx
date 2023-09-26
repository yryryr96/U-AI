import { useEffect, useRef, useState } from 'react';
import axios, { AxiosResponse } from "axios";

interface RecordComponentProps {
  onResult: (result: number) => void;
}

const RecordComponent = ({ onResult }: RecordComponentProps): JSX.Element => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [retryKey, setRetryKey] = useState(0);
  const sessionId = localStorage.getItem('socketId') || '';

  useEffect(() => {
    console.log('id: ', sessionId)
    const startRecording = async () => {
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
            const res : AxiosResponse= await axios.post('http://localhost:8080/api/events/stt', formData); 
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
          mediaRecorder.start();
          console.log('start');
        }, 2000);

        setTimeout(() => {
          if(mediaRecorder.state === 'recording'){
            mediaRecorder.stop();
            console.log('end');
          }
        }, 7000); 

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
<></>
)
}

export default RecordComponent;
