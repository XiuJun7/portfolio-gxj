import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Anitext = (props) => {
  const { nodes } = useGLTF('/models/animation.glb');
  const anitextRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    
      if (nodes?.animation?.material) {
        nodes.animation.material.color.set('#4358f7');
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
        <group ref={anitextRef} position={[9, -4, 0]} rotation={[Math.PI/2, 0, 270]} scale={2} {...props}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.animation.geometry}
            material={nodes.animation.material}
          />
        </group>
      </Float>
    </>
  );
};

export default Anitext;
