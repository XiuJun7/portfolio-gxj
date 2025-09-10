import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Game2d = (props) => {
  const { nodes } = useGLTF('/models/game2d.glb');
  const gameRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (nodes?.game2d?.material) {
      nodes.game2d.material.color.set('#27f53c');
    }
  }, [nodes]);
  return (
    <>
      {/* 专属灯光，只影响 Layer 1 */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0}
        ref={(light) => light && light.layers.set(1)}
        castShadow
      />

      <Float floatIntensity={2}>
        <group ref={gameRef} position={[-9, -4, -10]} rotation={[Math.PI/2, 0, 270]} scale={2} {...props}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.game2d.geometry}
            material={nodes.game2d.material}
          />
        </group>
      </Float>
    </>
  );
};

export default Game2d;
