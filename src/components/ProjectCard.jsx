import { useState } from "react";

export default function ProjectCard() {
  const features = [
    {
      title: "Vocabulary Learning",
      frontIcon: "🅰️",
      description: "Learn English words with visuals and sound.",
      video: "/assets/video/Vocablearn.mp4"
    },
    {
      title: "Math Operation",
      frontIcon: "➕➖",
      description: "Pratice addition and subtraction interactively.",
      video: "/assets/video/Mathop.mp4"
    },
    {
      title: "Mini Games",
      frontIcon: "🎮",
      description: "Play drag-and-drop matching games.",
      video: "/assets/video/Minigame.mp4"
    },
    {
      title: "Learn Numbers",
      frontIcon: "🔢",
      description: "Learn numbers from 1 to 100.",
      video: "/assets/video/Mathterm.mp4"
    },
    {
      title: "Leaderboard",
      frontIcon: "🏆",
      description: "See top scores and compete with others.",
      video: "/assets/video/Leaderboard.mp4"
    },
    {
      title: "Learn Math Operations",
      frontIcon: "➕➖",
      description: "Understand addition and subtraction with visual guidance.",
      video: "/assets/video/learnmath.mp4"
    },
    {
      title: "Profile Setting",
      frontIcon: "⚙️",
      description: "Change the name and profile icon.",
      video: "/assets/video/profile.mp4"
    },    
    {
      title: "Login & Register",
      frontIcon: "🔐",
      description: "Securely log in or register your profile to track progress.",
      video: "/assets/video/logsign.mp4"
    },
    {
      title: "Settings",
      frontIcon: "⚙️",
      description: "Customize your learning experience — sound, language, and difficulty.",
      video: "/assets/video/settings.mp4"
    }   
    
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="w-full px-10 space-y-16">
      {/* 第一部分：介绍 + 手机图 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* 左侧介绍文字 */}
        <div className="space-y-6">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm inline-block">
            Mobile App
          </span>

          <h1 className="text-5xl font-bold text-[#a42022]">
            Preschool: <br />
            <span className="text-[#a42022]">Learn & Grow</span>
          </h1>

          <p className="text-xl text-gray-700">
            2D Mobile Learning Application designed for children aged 4 to 6 years old,
            focusing on Mathematics and English.
          </p>

          {/* Tools */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <img src="/assets/figma.svg" alt="Figma" loading="lazy" className="w-10 h-10" />
              <span className="text-sm">Figma</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/Unity.png" alt="Unity 3D" loading="lazy" className="w-10 h-10" />
              <span className="text-sm">Unity 3D</span>
            </div>
          </div>
        </div>

        {/* 右侧手机图 + 数字 */}
        <div className="relative">
          
          <img   src="/assets/mainplg.png"
            alt="Main UI"
            loading="lazy"
            className="rotate-[20deg] w-[300px] mx-auto relative z-10 transition-transform duration-500 hover:rotate-[25deg] hover:scale-150"
          />

          
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
  <h3 className="text-lg font-bold text-[#a42022]">Overview</h3>
  <p className="text-gray-600">
    Developed a 2D <b>mobile learning application</b> for children aged <b>4–6 years</b>, 
    focusing on early <b>Mathematics</b> and <b>English</b> skills.
  </p>
</div>

<div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
  <h3 className="text-lg font-bold text-[#a42022]">Development</h3>
  <p className="text-gray-600">
    Built with <b>Unity</b> and <b>C#</b>, featuring interactive mini-games, animations, 
    and touch-based activities tailored for preschoolers.
  </p>
</div>

<div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
  <h3 className="text-lg font-bold text-[#a42022]">User Authentication</h3>
  <p className="text-gray-600">
    Implemented secure <b>email registration</b> and <b>login</b> system, ensuring 
    safe and personalized access for young learners.
  </p>
</div>

<div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
  <h3 className="text-lg font-bold text-[#a42022]">Progress Tracking</h3>
  <p className="text-gray-600">
    Integrated <b>PlayFab database</b> to store user data, track scores, and monitor 
    progress across mini-games, encouraging continuous learning.
  </p>
</div>

<div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition md:col-span-2">
  <h3 className="text-lg font-bold text-[#a42022]">Learning Impact</h3>
  <p className="text-gray-600">
    Provides an engaging way for preschoolers to <b>learn through play</b>, 
    reinforcing foundational skills in <b>English</b> and <b>Mathematics</b> while 
    maintaining a fun, safe, and interactive experience.
  </p>
</div>

</div>

      {/* 第二部分：卡片区域 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {features.map((item, idx) => (
          <div key={idx} className="[perspective:1000px] w-full">
            <div className="relative h-[300px] w-full [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute h-full w-full bg-orange-300 border rounded-xl shadow-xl flex flex-col items-center justify-center text-center text-black px-4 [backface-visibility:hidden]">
              <span className="text-5xl mb-2">{item.frontIcon}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>

              {/* Back */}
              <div className="absolute h-full w-full bg-white border rounded-xl shadow-xl flex items-center justify-center overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">                
              <video 
                className="max-w-full max-h-full object-contain " 
                src={item.video}  autoPlay preload="metadata" loop muted playsInline />                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
