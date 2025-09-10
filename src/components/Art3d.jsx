import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Art3d = (props) => {
  const { nodes } = useGLTF('/models/art3d.glb');
  const art3dRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (nodes?.Art3d?.material) {
      nodes.Art3d.material.color.set('#f27979');
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
        <group ref={art3dRef} position={[9, -4, 0]} rotation={[Math.PI/2, 0, 270]} scale={2} {...props}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Art3d.geometry}
            material={nodes.Art3d.material}
          />
        </group>
      </Float>
    </>
  );
};

export default Art3d;
