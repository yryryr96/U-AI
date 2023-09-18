import { useEffect, useRef, useState } from 'react';
import axios, { AxiosResponse } from "axios";

const RecordComponent = () => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const formData = new FormData();
  const [start, setStart] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        // MediaRecorder 생성
        const mediaRecorder: MediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        // dataavailable 이벤트 리스너 설정
        let chunks: Blob[] = [];
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);

          if (mediaRecorder.state === 'inactive') {
            let blob = new Blob(chunks, { type: 'audio/mp3' });
            const url = window.URL.createObjectURL(blob);
            const mp3File = new File([blob], "recorded-audio.mp3", {
              type: "audio/mp3"
            });

            // FormData에 추가
            const textData:string="fire";
            formData.append("mp3File", mp3File);
            formData.append("textData", textData);

          }
        };

        setTimeout(() => {
          mediaRecorder.start();
          console.log('start');
          setStart(true);
        }, 1000)

	setTimeout(() => {
	  if(mediaRecorder.state === 'recording'){
	    mediaRecorder.stop();
      console.log('end');

      axios.post<AxiosResponse>('http://127.0.0.1:8000/voice/api/voicerecognition/', formData)
      .then(res => {
        console.log('res: ', res.data);
      })
      .catch(err => {
      	console.error(err)
      })
	  }
	}, 4000); 
      
    }).catch((err) => console.error(err));

    return () => {

    	if(mediaRecorderRef.current){
    		mediaRecorderRef.current.stream.getTracks().forEach(track=>track.stop());
    	}
      
    };
  
}, []);

return (
<div>
RecordComponent
{start && 
<h1>녹음 중</h1>
}
</div>
)
}

export default RecordComponent;
