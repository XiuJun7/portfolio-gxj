// src/pages/AboutPage.jsx
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/Loading.jsx';
import WorkExperience from '../sections/Experience';
import { useMediaQuery } from 'react-responsive';

import Vrtext from '../components/Vrtext.jsx';
import Artext from '../components/Artext.jsx';
import Game3d from '../components/Game3d.jsx';
import Game2d from '../components/Game2d.jsx';
import Anitext from '../components/Anitext.jsx';
import Art3d from '../components/Art3d.jsx';

const AboutPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const center = [0, 0, 0];

  // 响应式半径
  const radius = isMobile ? 4 : isTablet ? 5.5 : 7;

  // 响应式 Y 偏移
  const yOffsetBottom = isMobile ? -1.5 : isTablet ? -1.8 : -2;
  const yOffsetTop = isMobile ? 2 : isTablet ? 2.8 : 3.5;

  const getRingPosition = (index, total, yOffset = 0) => {
    const angle = (index / total) * 2 * Math.PI;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return [center[0] + x, center[1] + yOffset, center[2] + z];
  };

  const totalItems = 6;

  const bottomRing = [
    { Component: Vrtext, position: getRingPosition(0, totalItems, -2) },
    { Component: Anitext, position: getRingPosition(1, totalItems, -2) },
    { Component: Game3d, position: getRingPosition(2, totalItems, -2) },
    { Component: Art3d, position: getRingPosition(3, totalItems, -2) },
    { Component: Artext, position: getRingPosition(4, totalItems, -2) },
    { Component: Game2d, position: getRingPosition(5, totalItems, -2) },
  ];

  const topRing = [
    { Component: Vrtext, position: getRingPosition(0, totalItems, 3.5) },
    { Component: Game2d, position: getRingPosition(1, totalItems, 3.5) },
    { Component: Artext, position: getRingPosition(2, totalItems, 3.5) },
    { Component: Art3d, position: getRingPosition(3, totalItems, 3.5) },
    { Component: Game3d, position: getRingPosition(4, totalItems, 3.5) },
    { Component: Anitext, position: getRingPosition(5, totalItems, 3.5) },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      {/* 顶部文字 */}
<div
  className={`w-full flex flex-col items-center gap-3 relative z-20
    ${isMobile ? 'mt-16' : 'sm:mt-36 mt-20'}
  `}
>
  <p className={`text-center font-generalsans font-medium
      ${isMobile ? 'text-xl' : 'sm:text-3xl'}
  `}>
    About <span className="waving-hand">👋</span>
  </p>
  <p className={`text-center hero_tag text-black
      ${isMobile ? 'text-lg' : 'text-xl'}
  `}>
    GOH XIU JUN
  </p>
</div>


      <div className="h-[500px] w-full rounded-lg mt-10">
        <Canvas frameloop="always">
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} />
          <directionalLight position={[5, 5, 10]} intensity={0.5} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

          <Suspense fallback={<CanvasLoader />}>
            <group>
              {/* Bottom Ring */}
              {bottomRing.map(({ Component, position }, index) => (
                <Component key={`bottom-${index}`} position={position} />
              ))}

              {/* Top Ring */}
              {topRing.map(({ Component, position }, index) => (
                <Component key={`top-${index}`} position={position} />
              ))}
            </group>
            
          </Suspense>
        </Canvas>
      </div>

      <WorkExperience />
    </section>
    
  );
};

export default AboutPage;
