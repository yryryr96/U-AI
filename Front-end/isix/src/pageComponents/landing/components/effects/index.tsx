import {useRef} from 'react'
import { EffectComposer, DepthOfField, Vignette } from '@react-three/postprocessing'

const Effects = () => {
  const ref = useRef(null)
  return (
    <EffectComposer disableNormalPass multisampling={0}>
      <DepthOfField ref={ref} target={[0, 0, 30]} bokehScale={8} focalLength={0.1} width={1024} />
      <Vignette />
    </EffectComposer>
  )
};

export default Effects;
