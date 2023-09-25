import {useRef} from 'react'
import { EffectComposer, DepthOfField, Vignette } from '@react-three/postprocessing'

const Effects = () => {
  const ref = useRef(null)
  return (
    <EffectComposer disableNormalPass multisampling={0}>
      <Vignette />
    </EffectComposer>
  )
};

export default Effects;
