import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Float } from '@react-three/drei';

const Vrtext = (props) => {
  const { nodes } = useGLTF('/models/vrtext.glb');
  const vrtextRef = useRef();

  useEffect(() => {
    if (nodes?.Vrtext?.material) {
      nodes.Vrtext.material.color.set('#dc79f2');
    }
  }, [nodes]);

  return (
    <Float floatIntensity={2}>
      <group
        ref={vrtextRef}
        position={[9, -4, 0]}
        rotation={[Math.PI / 2, 0, 270]}
        scale={2}
        {...props}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vrtext.geometry}
          material={nodes.Vrtext.material}
        />
      </group>
    </Float>
  );
};

export default Vrtext;
