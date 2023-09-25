import { useEffect, useRef, useState } from 'react';
import axios, { AxiosResponse } from "axios";

const RecordComponent = () => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [start, setStart] = useState(false);

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

          function download() {
            const a = document.createElement('a');
            a.href= url;
            a.download= mp3File.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }

          // Download the file
          download();

           console.log('mp3:', typeof(mp3File))

           // FormData creation and append data
           const formData= new FormData();
           formData.append("mp3File", mp3File);
           formData.append("textData", "fire");

           try{
             const res : AxiosResponse= await axios.post('http://127.0.0.1:8000/voice/api/voicerecognition/', formData); 
             console.log('res:', res.data); 
           } catch(err){
             console.error(err)
           }
         }

         setTimeout(() => {
             mediaRecorder.start();
             console.log('start');
             setStart(true);
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
  
}, []);

return (
<></>
)
}

export default RecordComponent;
