import { useEffect, useRef, useState, useCallback } from 'react';

const useWebcam = (socketUrl: string, sendInterval: number) => {
  
  const [isStreaming, setIsStreaming] = useState(false);
  const [isFirstConnection, setIsFirstConnection] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  
  type MediaDevice = {
    kind: string;
    deviceId: string;
  };

  const [devices, setDevices] = useState<MediaDevice[]>([]);

  const [deviceId, setDeviceId] = useState(devices[0]?.deviceId);
  
  const handleDevices = useCallback(
    (mediaDevices: MediaDeviceInfo[]) => {
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput"))
    },
    [setDevices]
  );


  useEffect(() => {
          navigator.mediaDevices.enumerateDevices().then(handleDevices);
      },
      [handleDevices]
  );

  useEffect(() => {
    socketRef.current = new WebSocket(socketUrl);
    socketRef.current.onopen = () => {
      console.log('WebSocket is connected.')
      setIsFirstConnection(true);
    };
    socketRef.current.onmessage = (event) => {
      if (isFirstConnection) {
        const sessionId = event.data;
        localStorage.setItem('socketId', sessionId)
        console.log(`세션 ID: ${sessionId}`);
        setIsFirstConnection(false);
      }
    }

    return () => {
      if(socketRef.current){
        socketRef.current.close();
      }
    };
    
  }, []);

  
  useEffect(() => {
    
    if(isStreaming){
      navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: deviceId }} })
        .then((stream) => {
          
          if (videoRef.current) {
            // console.log(videoRef)
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error(err));

        const sendFrame = async () => {
          // console.log(videoRef.current)
          // console.log(deviceId)
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
  }, [isStreaming, deviceId]);

  const startStream = () => {
    setIsStreaming(true);
  };

  const stopStream = () => {
    setIsStreaming(false);
  };

  return {
    startStream,
    stopStream, 
    videoElm: <video style={{ objectFit: 'cover', width: '100%', height: '100%', transform: 'scaleX(-1)' }} ref={videoRef}  autoPlay playsInline muted />, 
    hiddenCanvasElm : <canvas ref={canvasRef} style={{ display: 'none' }}/>,
    devices : devices,
    setDeviceId : setDeviceId
   }
    
}

export default useWebcam;
