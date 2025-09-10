import { Leva } from 'leva';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera, Text3D } from '@react-three/drei';

import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { calculateSizes } from '../constants/index.js';

// 地板
function Ground(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

// 单个掉落字母
function FallingLetter({ letter, index }) {
  const bounceCount = useRef(0);

  // 给每个字母一个随机初始旋转
  const initialRotation = useRef([
    Math.random() * 0.5,
    Math.random() * 0.5,
    Math.random() * 0.5,
  ]);

  // 直接启用物理 mass，不用 setTimeout
  const [ref, api] = useBox(() => ({
    mass: 5, // ✅ 一开始就有重量
    position: [index * 3.2 - 13, 15, 0], // 每个字母初始在空中
    rotation: initialRotation.current,
    onCollide: () => {
      if (bounceCount.current < 3) {
        api.velocity.set(0, 6 / (bounceCount.current + 1), 0);
        api.angularVelocity.set(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        );
        bounceCount.current += 1;
      }
    }
  }), []);

  return (
    <group ref={ref}>
      <Text3D
        font="/font/helvetiker_bold.typeface.json"
        size={3}
        height={0.3}
        bevelEnabled
        bevelThickness={0.15}
        bevelSize={0.16}
        bevelSegments={5}
      >
        {letter}
        <meshStandardMaterial color="orange" />
      </Text3D>
    </group>
  );
}



const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const word = "PORTFOLIO";

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      {/* Text intro */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-black text-center font-generalsans">
          Hi, I am Xiu Jun <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-black_gradient">Multimedia Computing</p>
      </div>

      {/* 3D Scene */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full" shadows>
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 5, 30]} />

            <Physics gravity={[0, -9.81, 0]}>
              {word.split("").map((letter, i) => (
                <FallingLetter key={i} letter={letter} index={i} />
              ))}

              <Ground position={[0, -2, 0]} />
            </Physics>

            <ambientLight intensity={0.6} />
            <directionalLight
              position={[10, 20, 10]}
              intensity={2}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* CTA 按钮 */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
