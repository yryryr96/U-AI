import { Html } from '@react-three/drei';
import Image from 'next/image';

const CharacterScene = ({position, width, height, gifUrl, scaleFactor= 10}) => {

  return (
    <Html position={position} scaleFactor={scaleFactor}>
      <Image width={width} height={height} src={gifUrl} alt="animated-gif" />
    </Html>
  );
};

export default CharacterScene