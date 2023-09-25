import { useEffect, useRef, useState } from 'react';
import axios, { AxiosResponse } from "axios";

interface RecordComponentProps {
  onResult: (result: number) => void;
}

const RecordComponent = ({ onResult }: RecordComponentProps): JSX.Element => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
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
          formData.append("textData", "fire");

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
