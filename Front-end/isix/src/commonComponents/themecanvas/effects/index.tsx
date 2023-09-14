import {useRef} from 'react'
import { EffectComposer, Vignette, ColorDepth } from '@react-three/postprocessing'

const Effects = () => {
  const ref = useRef(null)
  return (
    <EffectComposer disableNormalPass multisampling={0}>
      <ColorDepth />
      <Vignette eskil={true} />
    </EffectComposer>
  )
};

export default Effects;
