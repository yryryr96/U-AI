import { useEffect, useRef, useState } from 'react';

const useWebcam = (socketUrl: string, sendInterval: number) => {
  const [isStreaming, setIsStreaming] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  
  useEffect(() => {
    socketRef.current = new WebSocket(socketUrl);
    socketRef.current.onopen = () => console.log('WebSocket is connected.');
    socketRef.current.onmessage = (event) => {
      // console.log(event.data)
    }

    return () => {
      if(socketRef.current){
        socketRef.current.close();
      }
    };
    
  }, []);

  
  useEffect(() => {

    if(isStreaming){
      
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error(err));

        const sendFrame = async () => {
          if (socketRef.current?.readyState === WebSocket.OPEN && canvasRef.current && videoRef.current) {

              const context = canvasRef.current.getContext('2d');
              if(context){
                  context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
                  canvasRef.current.toBlob(async (blob: Blob | null) => {
                      if(blob){
                          const reader = new FileReader();
                          reader.onloadend=(event)=>{
                              if(event.target?.readyState === FileReader.DONE){
                                const arrayBuffer = event.target?.result as ArrayBuffer;
                                socketRef.current?.send(arrayBuffer);
                              }
                          };
                          reader.readAsArrayBuffer(blob);
                      }
                  },'image/jpeg')
              }

          }
      };

      let intervalId: NodeJS.Timeout; 
          
      intervalId= setInterval(sendFrame, sendInterval);

      return () =>{
        clearInterval(intervalId); 
      
      };
    }
  }, [isStreaming]);

  const startStream = () => {
    setIsStreaming(true);
  };

  const stopStream = () => {
    setIsStreaming(false);
  };

  return {
    startStream,
    stopStream, 
    videoElm: <video style={{ objectFit: 'cover', width: '100%', height: '100%' }} ref={videoRef} autoPlay playsInline muted />, 
    hiddenCanvasElm : <canvas ref={canvasRef} style={{ display: 'none' }}/> };
}

export default useWebcam;
