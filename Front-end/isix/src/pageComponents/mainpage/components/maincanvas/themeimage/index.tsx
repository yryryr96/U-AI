import { Plane, useTexture } from '@react-three/drei'
import { Texture } from 'three'

const ThemeImage = ({ scale = 1, url, args, position } : any) => {
  const texture = useTexture(url) as Texture;
  return (
    <Plane scale={scale} args={args} position={position}>
      <meshBasicMaterial attach="material" map={texture} />
    </Plane>
  );
}

export default ThemeImage;