import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { myWorks } from '../constants/index.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import CoverCarousel from '../components/CoverCarousel.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import MapScene from '../components/MapScene.jsx';
import StoryBookAR from '../components/StorybookAR.jsx';
import VRIntro from '../components/VrIntro.jsx';
import VrBtoB from '../components/VrBtoB.jsx';
import Bookweb from '../components/Bookweb.jsx';
import Petweb from '../components/Petweb.jsx';

gsap.registerPlugin(ScrollTrigger);

const DetailPage = () => {
  const { slug } = useParams();
  const project = myWorks.find((item) => item.slug === slug);
  const containerRef = useRef(null);
  const showCarouselSlugs = ['bike-rent','preschool-learn-grow', 'kembara-sally'];
  const notshowCarouselSlugs = ['vr-malaysia-festiworlds','bean-to-brew','book-scape','pet-adoption'];



  useEffect(() => {
    
    gsap.utils.toArray('.fade-in').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            scroller: window, 
          },
        }
      );
    });
  
    ScrollTrigger.refresh();
  
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  if (!project) {
    return <div className="text-center mt-20 text-black">Project not found</div>;
  }

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white relative px-6 pt-[150px] py-20 overflow-hidden font-sans"
    >
      {/* 面包屑导航 */}
      <div className="mb-6 text-gray-500 text-sm z-20">
      <a href="/work" className="hover:underline cursor-pointer text-gray-500">Works</a>
        <span className="mx-2">•</span>
        <span className="text-black font-semibold">{project.title}</span>
      </div>

      {/* 主体内容：图片 + 标题 */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* 图像区域 */}
        <div className="w-full fade-in">
          <img
            src={project.bgImage}
            alt={project.title}
            className="rounded-3xl w-full h-auto object-cover shadow-lg"
          />
        </div>

        {/* 大号标题文字 */}
        <div className="relative md:absolute md:left-12 md:bottom-12 z-20 mt-10 md:mt-0 fade-in">
          <h1 className="text-left text-[5vw] leading-none font-black text-black">
          {project.title.split(' - ')[0]}<br />          
          </h1>
          <h2 className="text-[1.8vw] text-gray-700 font-medium">
            {project.title.split(' - ')[1]}
          </h2>
        </div>
      </div>

      
      {showCarouselSlugs.includes(slug) && (
  <div>
    <CoverCarousel />
    {slug === "preschool-learn-grow" && <ProjectCard />}

    {slug === "kembara-sally" && <StoryBookAR />}    
    
    {/* bike-rent 时显示 MapScene */}
    {slug === "bike-rent" && (
      <div className="app-shell">
        <MapScene />
      </div>
    )}
  </div>
)}

{notshowCarouselSlugs.includes(slug) && (
  <div>
    
    {slug === "vr-malaysia-festiworlds" && <VRIntro />} 
    {slug === "bean-to-brew" && <VrBtoB />}
    {slug === "book-scape" && <Bookweb />}
    {slug === "pet-adoption" && <Petweb />}
    
  </div>
)}




      {/* Discover 按钮 */}      
      <div className="flex flex-col items-center mt-24 z-10 relative fade-in">
        <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center shadow-md animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="text-sm text-gray-700 mt-2">Discover</p>        
      </div>      
    </section>
  );
};

export default DetailPage;
