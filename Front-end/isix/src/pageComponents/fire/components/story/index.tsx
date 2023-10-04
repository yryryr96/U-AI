"use client"

import React, { useCallback, useEffect, useState } from 'react'
import Seq0 from './scene1/seq0'
import Seq1 from './scene2/seq1'
import Seq2 from './scene2/seq2'
import Seq3 from './scene2/seq3'
import Seq4 from './scene3/seq4'
import Seq5 from './scene3/seq5'
import Seq6 from './scene4/seq6'
import Seq7 from './scene4/seq7'
import Seq8Correct from './scene4/seq8_correct'
import Seq8Incorrect from './scene4/seq8_incorrect'
import Seq9 from './scene5/seq9'
import Seq10 from './scene5/seq10'
import Seq11 from './scene5/seq11'
import Seq12 from './scene5/seq12'
import Seq13 from './scene6/seq13'
import Seq14 from './scene6/seq14'
import Seq15 from './scene6/seq15'
import Seq16 from './scene6/seq16'
import Seq17 from './scene7/seq17'
import Seq18 from './scene7/seq18'
import Seq19 from './scene7/seq19'
import Seq20 from './scene8/seq20'
import Seq21 from './scene8/seq21'
import Seq22 from './scene8/seq22'
import Seq23 from './scene8/seq23'
import Seq24 from './scene8/seq24'
import Seq25 from './scene8/seq25'
import Seq26 from './scene8/seq26'
import Seq27 from './scene9/seq27'
import Repeat1 from './repeat/repeat1'
import Repeat2 from './repeat/repeat2'
import Repeat2Sol from './repeat/repeat2Sol'
import Repeat3 from './repeat/repeat3'
import Repeat3Sol from './repeat/repeat3Sol'
import Final1 from './final/final1'
import Final2 from './final/final2'

import useWebcam from '@/Hooks/webcam/useWebcamHook';
import Cover from '@/commonComponents/cover'
import Loading from '@/commonComponents/loading'
import Ending from '@/pageComponents/ending'
import useFireState from '@/stores/fire/useFireState'
import { useRouter } from 'next/navigation'
import useImageUrlState from '@/stores/capture/useImageUrlState'
import { customAxios } from '@/api/api'

const Story = () => {
  const [speakResult, setSpeakResult] = useState<boolean>(true);
  const { state, setState } = useFireState();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const {videoElm , hiddenCanvasElm, startStream, stopStream}=useWebcam('ws://passportlkm.iptime.org:32768/ws/chat',100);
  const { resetImageUrls } = useImageUrlState();
  
  const totalPage = 35; // 총 페이지 수

  // OCR
  const ocrEvent = async () => {
    const url = "api/events/multiocr";
    const sessionId = localStorage.getItem('socketId')
    const data = {
      sessionId: sessionId,
      numChild: 1, // 처음에 입력받은 값 넣기
    };

    try {
      const response = await customAxios.post(url, data);
      console.log(response.data); 
    } catch (error) {
      console.error('error', error);
    }
  };
  
  const handleKeyDown = (e: any) => {
    if (e.key === 'ArrowRight' && state < totalPage) {
      setState(state + 1);
    } else if (e.key === 'ArrowRight' && state === totalPage) {
      // main으로 이동
      if (window.confirm('메인 페이지로 이동하시겠습니까?')) {
        setState(0)
        router.push('/main')
      }
    } else if (e.key === 'ArrowLeft' && state > 0) {
      setState(state - 1)
    }
    setIsLoading(true)
  };

  const handleMouseClick = (e: any) => {
    e.preventDefault();
    if (e.button === 2) { 
      setState(state + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseClick);
    };
  }, [state])

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer); 
    }
  }, [isLoading])

  useEffect(() => {
    // imageUrls 초기화
    resetImageUrls();
  }, []);
  
  return (
    <>
      {state === 0 && <Seq0 videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />}
      {state === 1 && <Seq1 />}
      {state === 2 && <Seq2 videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />}
      {state === 3 && <Seq3 />}
      {state === 4 && <Seq4 />}
      {state === 5 && <Seq5 />}
      {state === 6 && <Seq6 />}
      {state === 7 && <Seq7 onResult={(result: number) => {
        if (result === 1) {
          setState(state + 1);
        }
      }}/>}
      {(state === 8 && speakResult) && <Seq8Correct />}
      {(state === 8 && !speakResult) && <Seq8Incorrect />}
      {state === 9 && <Seq9 />}
      {state === 10 && <Seq10 />}
      {state === 11 && <Seq11 videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />}
      {state === 12 && <Seq12 />}
      {state === 13 && <Seq13 />}
      {state === 14 && <Seq14 />}
      {state === 15 && <Seq15 videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />}
      {state === 16 && <Seq16 />}
      {state === 17 && <Seq17 />}
      {state === 18 && <Seq18 videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />}
      {state === 19 && <Seq19 />}
      {state === 20 && <Seq20 />}
      {state === 21 && <Seq21 videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />}
      {state === 22 && <Seq22 />}
      {state === 23 && <Seq23 />}
      {state === 24 && <Seq24 videoElm={videoElm} hiddenCanvasElm = { hiddenCanvasElm } startStream = {startStream} stopStream={stopStream} />}
      {state === 25 && <Seq25 />}
      {state === 26 && <Seq26 />}
      {state === 27 && <Seq27 />}
      {state === 28 && <Repeat1 />}
      {state === 29 &&
        <>
          {isLoading ?
            <div style={{ position: 'fixed', top: '0', left: '0', width: "100vw", height: "100vh", backgroundColor: 'gray' }}>
              <Loading />
            </div>
            :
            <Repeat2 videoElm={videoElm} hiddenCanvasElm={hiddenCanvasElm} startStream={startStream} stopStream={stopStream} ocrEvent={ocrEvent}/>
          }
        </>
      }
      { state === 30 &&
        <>
          {isLoading ?
            <div style={{position:'fixed', top: '0', left: '0',width: "100vw", height: "100vh", backgroundColor: 'gray'}}>
              <Loading />
            </div>
            :
            <Repeat2Sol videoElm={videoElm} hiddenCanvasElm={hiddenCanvasElm} startStream={startStream} stopStream={stopStream} />
          }
        </>
      }
      {state === 31 &&
        <>
          {isLoading ?
            <div style={{ position: 'fixed', top: '0', left: '0', width: "100vw", height: "100vh", backgroundColor: 'gray' }}>
              <Loading />
            </div>
            :
            <Repeat3 videoElm={videoElm} hiddenCanvasElm={hiddenCanvasElm} startStream={startStream} stopStream={stopStream} ocrEvent={ocrEvent}/>
          }
        </>
      }
      {state === 32 &&
        <>
          {isLoading ?
            <div style={{ position: 'fixed', top: '0', left: '0', width: "100vw", height: "100vh", backgroundColor: 'gray' }}>
              <Loading />
            </div>
            :
            <Repeat3Sol videoElm={videoElm} hiddenCanvasElm={hiddenCanvasElm} startStream={startStream} stopStream={stopStream} />
          }
        </>
      }
      {state === 33 &&
        <>
          {isLoading ?
            <div style={{ position: 'fixed', top: '0', left: '0', width: "100vw", height: "100vh", backgroundColor: 'gray' }}>
              <Loading />
            </div>
            :
            <Final1 videoElm={videoElm} hiddenCanvasElm={hiddenCanvasElm} startStream={startStream} stopStream={stopStream} />
          }
        </>
      }
      {state === 34 &&
        <>
          {isLoading ?
            <div style={{ position: 'fixed', top: '0', left: '0', width: "100vw", height: "100vh", backgroundColor: 'gray' }}>
              <Loading />
            </div>
            :
            <Final2 videoElm={videoElm} hiddenCanvasElm={hiddenCanvasElm} startStream={startStream} stopStream={stopStream} />
          }
        </>
      }
      {state === 35 && <Ending/>}
    </>
  )
}

export default Story