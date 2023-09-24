import { useEffect, useRef } from 'react';
import axios from "axios";

const OcrComponent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error(err));

    setTimeout(async () => {
      if (canvasRef.current && videoRef.current) {
        const context = canvasRef.current.getContext('2d');
        if (context) {
          context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
          canvasRef.current.toBlob(async (blob: Blob | null) => {

            const formData = new FormData();

            // 이미지파일 생성
            let file = new File([blob!], "capture.jpg", { type: "image/jpeg" });
            formData.append("file", file);
            
            // Axios
            // try{
            //     let res = await axios.post("http://127.0.0.1:8000/voice/api/voicerecognition/", formData);
            //     console.log(res.data);    
            // }catch(error){
            //     console.log(error);   
            // }
                
          },'image/jpeg')        
        }
      }
    }, 3000); 

}, []);

return (
<>
<video style={{ objectFit: 'cover', width: '100%', height: '100%' }} ref={videoRef} autoPlay playsInline muted />
<canvas ref={canvasRef} style={{ display: 'none' }}/>
</>
)
}

export default OcrComponent;
