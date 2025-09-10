import { useState } from 'react';
import InertiaTools from '../components/InertiaTools';
import { Mail, Linkedin, MessageCircle } from "lucide-react";

const About = () => {
  
  return (
    <section className="c-space my-20 px-4 sm:px-8" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 xl:auto-rows-auto gap-6 h-full">

        {/* --- Left Text Area --- */}
        <div className="xl:col-span-3 xl:row-span-3 md:col-span-2">
          <div className="grid-container">
            <p className="grid-headtext text-center">About Me</p>
            <p className="grid-subtext mb-4">
              Hello! I am Goh Xiu Jun and my chinese name is 吴秀君.
              I’m a passionate AR/XR Developer & Software Developer from Johor, Malaysia.
            </p>

            <p className="grid-subtext mb-4">
              I focus on creating immersive and interactive experiences. 
              I enjoy turning creative ideas into functional applications—whether it's virtual training simulations, educational AR apps, or WebXR content.
              Outside of programming, I am also a creative thinker who enjoys digital design, exploring emerging tech, and occasionally diving into game development and 3D modeling.
            </p>

            <p className="grid-subtext">
              My strengths lie in combining technical expertise with user-centered design to build impactful applications.
              I'm always exploring new technologies and love building things that blend creativity, usability, and innovation.
            </p>
          </div>
        </div>

        {/* --- Image Area --- */}
<div className="xl:col-span-2 xl:row-span-3 md:col-span-2 flex flex-col items-center mt-20">
  <img 
    src="/assets/gxjimage.jpeg" 
    alt="grid-1"
    className="w-60 h-auto object-contain rounded-md shadow-md"
  />

  {/* --- Social Icons --- */}
  <div className="flex gap-6 mt-4 text-gray-600">
    {/* Email */}
    <a href="mailto:xiujun717@gmail.com" className="hover:text-[#006ca5]">
      <Mail size={28} />
    </a>
    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/xiu-jun-goh-1618ab249" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2]">
      <Linkedin size={28} />
    </a>    
  </div>
</div>


        {/* --- Tech Stack --- */}
        <div className="xl:col-span-5 xl:row-span-3 md:col-span-2">
          <div className="flex flex-col gap-4">                      
            <InertiaTools />            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
