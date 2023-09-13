import { CameraControls } from '@react-three/drei'

const Rig = () => {
  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} enabled={false} />
}

export default Rig;