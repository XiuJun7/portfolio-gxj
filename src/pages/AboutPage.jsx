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

  const center = [0, 0, 0];
  const radius = isMobile ? 5.5 : 7;

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
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-5 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-black text-center font-generalsans">
          About <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-black">GOH XIU JUN</p>
      </div>

      <div className="h-[500px] w-full rounded-lg mt-10">
        <Canvas>
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
