import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStackData = {
  "Design Tools": [
    { name: "Blender", image: "/assets/Blender.png" },
    { name: "Procreate", image: "/assets/Procreate.png" },
    { name: "Figma", image: "/assets/figma.svg" },
    { name: "Photoshop", image: "/assets/Photoshop.png" },
    { name: "Capcut", image: "/assets/Capcut.png" },
  ],
  "Tools": [
    { name: "Unity", image: "/assets/Unity.png" },    
    { name: "Vuforia", image: "/assets/vuforia.png" },
    { name: "Lens Studio", image: "/assets/lensstudio.png" },
    { name: "Android Studio", image: "/assets/AndroidStudioLogo.png" },
    { name: "VS Code", image: "/assets/visualstudiocode.png" },
    { name: "Visual Studio", image: "/assets/visualstudio.png" },
    { name: "Postman", image: "/assets/postman.svg" },
    { name: "Tortoise SVN", image: "/assets/tortoisesvn.png" },
  ],
  "Programming Languages": [
    { name: "Kotlin", image: "/assets/Kotlin.png" },    
    { name: "C#", image: "/assets/csharp.png" },
    { name: "Java", image: "/assets/java.png" },
    { name: "C", image: "/assets/c.png" },
  ],
  "Web Tools": [
    { name: "Tailwind", image: "/assets/tailwindcss.png" },
    { name: "React", image: "/assets/react.svg" },
    { name: "Asp.Net", image: "/assets/Aspnet.png" },
    { name: "Three.js", image: "/assets/threejs.png" },
    { name: "Node.js", image: "/assets/nodejs.svg" },
    { name: "Vite.js", image: "/assets/Vitejs.svg" },
    { name: "TypeScript", image: "/assets/typescript.png" },
    { name: "JavaScript", image: "/assets/javascript.png" },
    { name: "HTML5", image: "/assets/html.png" },
  ],
  "Backend Development": [
    { name: "MySQL", image: "/assets/mysql.png" },    
    { name: "PHP", image: "/assets/php.png" },
    { name: "MSSQL", image: "/assets/mssql.png" },
    { name: "Firebase", image: "/assets/firebase.png" },
  ],
};

export default function TechStackSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;

    const items = root.querySelectorAll(".tools .media");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 30%",
            toggleActions: "play none play reverse", 
          },
        }
      );
    });

    // Cleanup to kill ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full px-4 pt-0 pb-10 bg-white" ref={sectionRef}>
  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 mt-20">Tech Stack</h2>

    {Object.entries(techStackData).map(([category, tools]) => (
      <div key={category} className="mb-12 w-full ">
        <h3 className="text-xl font-semibold mb-7 text-center">{category}</h3>
        <div className="tools flex flex-wrap justify-center gap-12">
          {tools.map((tech, index) => (
            <div key={index} className="media flex flex-col items-center mb-6">
              <img
                src={tech.image}
                alt={tech.name}
                loading="lazy"
                className="w-16 h-16 object-contain"
              />
              <p className="mt-2 text-sm text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>



  );
}
