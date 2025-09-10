import { useRef, useState } from "react";
import Lottie from "lottie-react";
import bookAnimation from "../lottie/book.json"; 

export default function StoryBookAR() {
  const lottieRef = useRef();
  const [showVideo, setShowVideo] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const handleOpenBook = () => {
    lottieRef.current.setDirection(1);
    lottieRef.current.play();
   
    setTimeout(() => {
      setShowVideo(true);
      setShowGallery(true);
    }, 1500); //Adjust time
  };

  const reset = () => {
    lottieRef.current.stop();
    setShowVideo(false);
    setShowGallery(false);
  };

  return (
    <div className="w-full px-10 space-y-16">
  
  <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-center">
    
    <div className="space-y-6">
      <span className="bg-gray-200 px-3 py-1 rounded-full text-sm inline-block">
        AR Mobile App
      </span>

      <h1 className="text-5xl font-bold text-[#006ca5]">
        Kembara Sally <br />
      </h1>

      <p className="text-xl text-gray-700">
        An interactive mobile AR storybook for early childhood education, based on Dewan Bahasa dan Pustaka's Sally Si Salpa, featuring animated characters.
        Won fourth place in the Digital Innovation Competition Dewan Bahasa dan Pustaka Malaysia Augmented Reality category.
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
        <div className="flex flex-col items-center">
          <img src="/assets/vuforia.png" alt="UVuforia" loading="lazy" className="w-10 h-10" />
          <span className="text-sm">Vuforia</span>
        </div>
      </div>
    </div>

    
    <div className="relative">
      <img
        src="/assets/sallybook.jpg"
        alt="Main UI"
        loading="lazy"
        className=" w-[300px] mx-auto relative z-10 transition-transform duration-500 hover:rotate-[25deg] hover:scale-100 rounded-xl shadow-lg"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-bold text-[#006ca5]">AR Technology</h3>
    <p className="text-gray-600">
      Implemented marker-based recognition using <b>Vuforia</b>, 
      where each story page acts as a marker to trigger 3D content.
    </p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-bold text-[#006ca5]">Development</h3>
    <p className="text-gray-600">
      Built in <b>Unity3D</b>, with custom <b>C# scripts</b> for marker tracking, 
      animation control, and touch interactions.
    </p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-bold text-[#006ca5]">3D Assets</h3>
    <p className="text-gray-600">
      Designed and optimized characters in <b>Blender</b> with reduced 
      polygon count and compressed textures for mobile.
    </p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-bold text-[#006ca5]">User Interaction</h3>
    <p className="text-gray-600">
      Children can scan pages to see animated characters, tap to trigger 
      actions like <b>zoom in</b>/<b>zoom out</b>/<b>rotate</b>, and listen to narration + sound effects.
    </p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition md:col-span-2">
  <h3 className="text-lg font-bold text-[#006ca5]">Quiz & Learning</h3>
  <p className="text-gray-600">
    After the story, children can answer <b>interactive quizzes</b> designed to test their understanding of the narrative, 
    reinforcing comprehension and learning outcomes.
  </p>
</div>
</div>
      
    <div className="flex flex-col items-center gap-4 relative">
      {/* Book Animation */}
      <div style={{ width: 650, position: "relative" }}>
        <Lottie
          lottieRef={lottieRef}
          animationData={bookAnimation}
          loop={false}
          autoplay={false}
        />
        
        {showVideo && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "translateY(-20%)", 
              animation: "fadeInUp 1s ease forwards",
            }}
          >
            <video
              src="/assets/video/Ksally.mp4"
              width="350"
              preload="metadata"
              autoPlay
              muted
              loop
              className="rounded-xl shadow-lg border-4 border-white"
            />
          </div>
        )}
      </div>

      {showGallery && (
          <>
          <div className="absolute left-[-50px] top-0 h-full w-[290px] overflow-hidden">
      <div className="flex flex-col animate-scrollUp gap-14">
        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            src={`/assets/ar/ar${i + 1}.jpg`}
            alt={`AR ${i + 1}`}
            loading="lazy" 
            className="rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
    
    <div className="absolute right-[-50px] top-0 h-full w-[290px] overflow-hidden">
      <div className="flex flex-col animate-scrollUp gap-14">
        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            src={`/assets/ar/ar${i + 7}.jpg`}
            alt={`AR ${i + 7}`}
            loading="lazy" 
            className="rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
    </>
        )}
      
      <div className="flex gap-2">
        <button
          onClick={handleOpenBook}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Open
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
        >
          Close
        </button>
      </div>
      
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20%) scale(0.8); }
            100% { opacity: 1; transform: translateY(-20%) scale(1); }
          }
        `}
      </style>
    </div>
    <div className="bg-blue-50 p-8 rounded-xl text-center mt-12">
  <h2 className="text-2xl font-bold text-[#006ca5] mb-4">Outcome</h2>
  <p className="text-lg text-gray-700">
    The app combines storytelling and AR interactivity to 
    <span className="font-semibold"> enhance reading engagement </span> 
    for young learners, transforming a traditional book into 
    an immersive learning experience.
  </p>
</div>

    </div>
  );
}
