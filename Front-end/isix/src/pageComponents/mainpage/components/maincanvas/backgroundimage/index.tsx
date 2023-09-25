import { Plane, useTexture } from '@react-three/drei'

const BackgroundImage = () => {
  const texture = useTexture('/resources/board.png');
  return (
    <Plane scale={11} args={[1.920, 1.080]} position={[0, 0, -0.01]}>
      <meshBasicMaterial attach="material" map={texture} />
    </Plane>
  );
}

export default BackgroundImage;