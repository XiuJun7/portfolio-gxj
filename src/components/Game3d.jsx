import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Game3d = (props) => {
  const { nodes } = useGLTF('/models/game3d.glb');
  const gameRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (nodes?.Game3d?.material) {
      nodes.Game3d.material.color.set('#f5a262');
    }
  }, [nodes]);

  return (
    <>
      {/* 专属灯光，只影响 Layer 1 */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        ref={(light) => light && light.layers.set(1)}
        castShadow
      />

      <Float floatIntensity={2}>
        <group ref={gameRef} position={[-9, -4, -10]} rotation={[Math.PI/2, 0, 0]} scale={2} {...props}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Game3d.geometry}
            material={nodes.Game3d.material}
          />
        </group>
      </Float>
    </>
  );
};

export default Game3d;
