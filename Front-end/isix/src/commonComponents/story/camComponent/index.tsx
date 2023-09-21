import { useEffect } from 'react';

interface CamProps {
  videoElm: JSX.Element;
  hiddenCanvasElm: JSX.Element; 
  startStream: () => void;
  stopStream: () => void;
}

const CamComponent: React.FC<CamProps> = ({ startStream, stopStream, videoElm, hiddenCanvasElm }) =>{

   useEffect(()=>{
     startStream();
     return () => stopStream();
   },[])

   return (
     <>
       {videoElm}
       {hiddenCanvasElm}
     </>
   );
}

export default CamComponent;
