import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Artext = (props) => {
  const { nodes } = useGLTF('/models/artext.glb');
  const artextRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (artextRef.current) {
      // 让整个模型的所有子对象都在 Layer 1      
      artextRef.current.traverse((obj) => {
        if (obj.isMesh) obj.layers.set(1);
      });
    }
    if (nodes?.Artext?.material) {
      nodes.Artext.material.color.set('#f5e427');
    }
  

    // 相机开启 Layer 1 能力（不影响默认 Layer 0）
    camera.layers.enable(1);
  }, [camera], [nodes]);;

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
        <group ref={artextRef} position={[9, -4, 0]} rotation={[Math.PI/2, 0, 270]} scale={2} {...props}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Artext.geometry}
            material={nodes.Artext.material}
          />
        </group>
      </Float>
    </>
  );
};

export default Artext;
