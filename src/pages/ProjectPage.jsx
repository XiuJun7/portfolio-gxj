// src/pages/AboutPage.jsx
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/Loading.jsx';
import Works from '../sections/Works';
import InertiaMedia from '../components/InertiaMedia';
import { useMediaQuery } from 'react-responsive';

const ProjectPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">      
      <InertiaMedia />
      <Works />
    </section>
    
  );
};

export default ProjectPage;
