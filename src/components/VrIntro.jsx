import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import { FaPlay } from 'react-icons/fa'
import CanvasLoader from '../components/Loading.jsx';

// 预加载模型
useGLTF.preload('/models/oculus_quest_2.glb')

function VRHeadsetModel({ onClick }) {
  const { scene } = useGLTF('/models/oculus_quest_2.glb')
  return (
    <motion.group
      scale={5}
      animate={{ y: [0, 0.2, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      whileHover={{ rotateY: 0.2, scale: 2.1 }}
      onClick={onClick}
    >
      <primitive object={scene} />
    </motion.group>
  )
}

const popupcard = [
  {
    title: "Hover and Pop out",
    video: "/assets/video/hoverpop.mp4",
    explanation: "Displays tooltip during hover."
  },
  {
    title: "Grab and Place",
    video: "/assets/video/grabplace.mp4",
    explanation: "XR Socket Interaction — snaps objects into holder."
  },
  {
    title: "Grab and Pour",
    video: "/assets/video/grabpour.mp4",
    explanation: "Pourable particle systems, updates mesh scale and visibility."
  },
  {
    title: "Grab and Drop",
    video: "/assets/video/grabdrop.mp4",
    explanation: "Drop tools with velocity, changes color after delay."
  }
];

export default function VrBtoB() {
  const [inVR, setInVR] = useState(false)
  const [fadeBlack, setFadeBlack] = useState(false)
  const videoRef = useRef(null)
  const [videoTexture, setVideoTexture] = useState(null)
  const [showDebugBtn, setShowDebugBtn] = useState(true)

  // Create THREE.VideoTexture after <video> mounts
  useEffect(() => {
    if (videoRef.current) {
      const texture = new THREE.VideoTexture(videoRef.current)
      setVideoTexture(texture)
    }
  }, [inVR])

  const enterVR = () => {
    setFadeBlack(true)
    
    setTimeout(() => {
      setInVR(true)
      setFadeBlack(false)

      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.muted = false
        videoRef.current.play()
          .then(() => {
            console.log("调试按钮：视频播放成功")
          })
          .catch(err => {
            console.warn("调试按钮：视频播放失败", err)
          })
      }

    
    }, 1500)
  }

  const exitVR = () => {
    setInVR(false)
    setShowDebugBtn(true)

  }

  return (
    <div className="w-full">
      
    <div className="w-full px-10 space-y-16">

  <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-center mt-12">

    <div className="space-y-6">
      <span className="bg-gray-200 px-3 py-1 rounded-full text-sm inline-block">
        VR Desktop App
      </span>

      <h1 className="text-5xl font-bold text-[#800000]">
        VR Malaysia FestiWorlds <br />
      </h1>

      <p className="text-xl text-gray-700">
      A fully immersive VR application for VR headsets, allowing users to explore festival environments and experience cultural amusement rides. Implemented realistic and creative 3D models, animations, visual effects and sound effects to enhance the overall user experience. 
      </p>

      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center">
          <img src="/assets/figma.svg" alt="Figma" className="w-10 h-10" />
          <span className="text-sm">Figma</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/Unity.png" alt="Unity 3D" className="w-10 h-10" />
          <span className="text-sm">Unity 3D</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/Blender.png" alt="Blender" className="w-10 h-10" />
          <span className="text-sm">Blender</span>
        </div>
      </div>
    </div>

    <div className="relative">
      <img
        src="/assets/VrlogoApp.png"
        alt="Main UI"
        className=" w-[300px] mx-auto relative z-10 transition-transform duration-500 hover:rotate-[25deg] hover:scale-100 rounded-xl shadow-lg"
      />
    </div>
  </div>  

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-[#800000]">Cultural Significance</h3>
            <p className="text-gray-600">
            Promoted Malaysia’s cultural diversity by integrating <b>Hari Raya</b>, <b>Chinese New Year</b>, and <b>Deepavali</b> elements into the VR theme park experience.
            </p>
  </div>

    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-lg font-bold text-[#800000]">Interactive Features</h3>
        <p className="text-gray-600">
        Implemented <b>motion tracking</b> for natural VR interactions, allowing users to navigate, grab, and interact with virtual festival items.
        </p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-bold text-[#800000]">User Interaction</h3>
    <p className="text-gray-600">
      Players can explore festival areas, <b>click interactive objects </b>  
       for cultural insights, and perform <b>virtual cooking steps</b> 
      like preparing Lemang.
    </p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-bold text-[#800000]">3D Assets & Effects</h3>
    <p className="text-gray-600">
      Created <b>realistic 3D models</b>, animations, and <b>special effects </b> 
      to replicate Malaysia’s cultural festivals, complemented by spatial sound design.
    </p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-bold text-[#800000]">Optimization</h3>
    <p className="text-gray-600">
      Enhanced performance using <b>Dynamic Occlusion</b> and <b>Unity Profiler</b>, 
      achieving smoother frame rates and improved user experience.
    </p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-bold text-[#800000]">Cultural Experience</h3>
    <p className="text-gray-600">
      Integrated themes from <b>Hari Raya</b>, <b>Chinese New Year</b>, and <b>Deepavali</b>, 
      promoting Malaysia’s <b>multicultural heritage</b> through immersive storytelling.
    </p>
  </div>
  
</div>

</div>

{/* 中间介绍 */}
<div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          From Sketch to VR Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* 左边草图 */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <img
              src="/assets/vrplan.png"
              alt="Sketch Layout"
              className="rounded-xl object-contain h-94"
            />
            <p className="mt-4 text-center text-gray-700 text-sm">
              Initial concept sketch of the <br />
              Virtual Amusement Park layout.
            </p>
          </div>

          {/* 中间箭头 */}
          <div className="hidden md:flex justify-center items-center">
            <span className="text-5xl text-gray-500">→</span>
          </div>

          {/* 右边VR场景 */}
          <div className="bg-red-50 rounded-2xl shadow-lg p-4 flex flex-col items-center text-white">
            <img
              src="/assets/vrimg.png"
              alt="VR Scene"
              loading="lazy" 
              className="rounded-xl object-contain h-94 w-94"
            />
            <p className="mt-4 text-center text-black text-sm">
              Final VR environment built in <strong>Unity 3D</strong>. <br />
              Props and buildings modeled in <strong>Blender</strong>, <br />
              with controller vibrations enhancing immersion.
            </p>
          </div>
        </div>
      </div>

      {/* 卡片展示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-12">
        {popupcard.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* 视频区域 */}
            <video
              src={item.video}
              className="w-full h-40 object-cover"
              preload="metadata"
              autoPlay
              loop
              muted
            />
            {/* 内容区域 */}
            <div className="p-4">
              <h3 className="text-center font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.explanation}</p>
            </div>
          </div>
        ))}
      </div>

      
      {/* VR 区域 */}      
      <div className="relative w-full h-screen overflow-hidden">
      <div className="text-center mt-10">
            <h1 className="text-[clamp(2rem,4vw,5rem)] font-extrabold text-black text-center">
            Ready to Dive In ?
      </h1>
      <p className="text-gray-500 text-[clamp(1rem,2vw,1.5rem)] italic tracking-wide">
      Click the headset to begin !
        </p>
      </div>
      {fadeBlack && (
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
    <span className="ml-4 text-black text-xl">Loading...</span>
  </div>
)}

        {!inVR ? (
          <Canvas camera={{ position: [0, 0, 5] }} frameloop="demand">
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={<CanvasLoader />}>
              <VRHeadsetModel onClick={enterVR} />
            </Suspense>           

            <OrbitControls enableZoom={false} />
          </Canvas>
        ) : (
          <div className="w-full h-full relative">

            <Canvas camera={{ position: [0, 0, 0.1] }} frameloop="demand">
              <ambientLight intensity={1} />

            {videoTexture && (
              <mesh>
                <planeGeometry args={[0.192, 0.108]} /> 
                <meshBasicMaterial map={videoTexture} />
              </mesh>
            )}

            </Canvas>

            {/* Exit button */}
            <button
              onClick={exitVR}
              className="absolute top-4 right-4 px-4 py-2 bg-white/80 rounded-lg shadow hover:bg-white"
            >
              Exit VR
            </button>

            {showDebugBtn && (
                <button
                    onClick={() => {
                    if (videoRef.current) {
                    videoRef.current.currentTime = 0
                    videoRef.current.muted = false
                    videoRef.current.play().then(() => {
                    setShowDebugBtn(false) }).catch(err => {
                    console.warn("调试按钮：视频播放失败", err)
            })
      }
    }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:bg-blue-600">
        <FaPlay className="text-white text-2xl ml-1" />
        </button>
    )}

            <video
              ref={videoRef}
              src="/assets/video/VRvideo.mp4"             
              loop
              playsInline
              preload="metadata"
            />
          </div>
        )}

        {/* Credits */}
        <div className="absolute bottom-2 left-2 text-xs text-white/70 bg-black/50 px-2 py-1 rounded z-10">
          Oculus Quest 2 model by Nosakhae, licensed under CC BY
        </div>
    </div>      


      <div className="bg-red-50 p-8 rounded-xl text-center mt-12">
  <h2 className="text-2xl font-bold text-[#800000] mb-4">Recognition</h2>
  <p className="text-lg text-gray-700">
  Awarded <b>Top 5 Best Final Year Project</b>, recognized for creativity, 
      technical innovation, and contribution to <b>cultural education</b>.
  </p>
</div>

    </div>
  )
}
