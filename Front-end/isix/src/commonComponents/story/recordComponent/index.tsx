"use client"

import { useEffect, useRef, useState } from 'react';
import axios from "axios";

const RecordComponent = () => {
  const mediaRecorderRef = useRef<HTMLVideoElement | null>(null);
  const formData = new FormData();
  const [start, setStart] = useState(false);
  
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        // MediaRecorder 생성
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        type Chunks = <T>(a: T[]) => T
        
        // dataavailable 이벤트 리스너 설정
        let chunks : Chunks = [];
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
          
          if (mediaRecorder.state === 'inactive') {
            let blob = new Blob(chunks, { type: 'audio/mp3' });
            const url = window.URL.createObjectURL(blob);
            const mp3File = new File([blob], "recorded-audio.mp3", {
              type: "audio/mp3"
            })
  

            // // 확인용 파일 다운로드
            // function download() {
            //   const a = document.createElement('a');
            //   const url = URL.createObjectURL(mp3File);

            //   a.href = url;
            //   a.download = mp3File.name;
            //   document.body.appendChild(a);
            //   a.click();
            //   // Remove the anchor from the body
            //   document.body.removeChild(a);
            // }

            // download();
            
            const textData = "fire"
            formData.append("mp3File", mp3File);
            formData.append("textData", textData);

            for(let file of formData.entries()) {
              console.log(file[0], ' | ', file[1]);
            }
          }
        };

        // 1초 뒤 녹음 시작
        setTimeout(() => {
          mediaRecorder.start();
          console.log('start');
          setStart(true);
        }, 1000)


	// 4초 후에 녹음 중지
	setTimeout(() => {
	  if(mediaRecorder.state === 'recording'){
	    mediaRecorder.stop();
      console.log('end');

      axios.post('http://127.0.0.1:8000/voice/api/voicerecognition/', formData)
      .then(res => {
        console.log('res: ', res.data);
      })
      .catch(err => {
        console.log(err)
      })
	  }
	}, 4000); 
      })
      .catch((err) => console.error(err));

    return () => {
      if(mediaRecorderRef.current){
	      media.RecorderRef.current.stream.getTracks().forEach(track=>track.stop());
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
 );
}

export default RecordComponent