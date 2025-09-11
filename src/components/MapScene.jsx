// App.jsx
import React, { useRef, useState, useEffect } from 'react'; 
import { Canvas, useFrame, useThree } from '@react-three/fiber'; 
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { RouteShaderMaterial } from './RouteShader';
import { stationsConfig } from '../components/StationsConfig.jsx';
import { effectsMap } from '../components/Effects.jsx';
import BikePanels from './BikePanels';
import BikeIntro from './BikeIntro';

function AutoFitCamera({ objectRef, padding = 1.2 }) {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!objectRef.current) return;
    const box = new THREE.Box3().setFromObject(objectRef.current);
    if (box.isEmpty()) return;

    const sizeVec = new THREE.Vector3();
    box.getSize(sizeVec);
    const center = new THREE.Vector3();
    box.getCenter(center);

    const maxSize = Math.max(sizeVec.x, sizeVec.y, sizeVec.z) * padding;
    const fov = camera.fov * (Math.PI / 180);
    const aspect = size.width / size.height;

    let distance = maxSize / (2 * Math.tan(fov / 2));
    const distanceX = maxSize / (2 * aspect * Math.tan(fov / 2));
    distance = Math.max(distance, distanceX);

    camera.position.set(center.x, center.y, center.z + distance);
    camera.lookAt(center);
    camera.updateProjectionMatrix();
  }, [camera, size, objectRef, padding]);

  return null;
}

function BikeRoute({ setActiveStation }) {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-8, 5, 0),
    new THREE.Vector3(-4, 5, 0),
    new THREE.Vector3(2, 3, 3),
    new THREE.Vector3(-6, 2, 0),
    new THREE.Vector3(-8, 1, 0),
    new THREE.Vector3(1, -3, 0),
  ]);

  const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.15, 8, false);
  const stationCount = stationsConfig.length;
  const stationPositions = Array.from({ length: stationCount }, (_, i) => i / (stationCount - 1));

  const { scene: bike } = useGLTF('/models/bike.glb');
  const bikeRef = useRef();
  const shaderRef = useRef();
  const progressRef = useRef(0);
  const groupRef = useRef();

  useEffect(() => {
    bike.scale.set(1.2, 1.2, 1.2);
  }, [bike]);

  useEffect(() => {
    const startPos = curve.getPointAt(0);
    const startTangent = curve.getTangentAt(0);
    bikeRef.current.position.copy(startPos);
    bikeRef.current.lookAt(startPos.clone().add(startTangent));
    setActiveStation(0);
  }, []);

  const moveToStation = (targetProgress, stationIndex) => {
    gsap.to(progressRef, {
      current: targetProgress,
      duration: 2,
      ease: "power1.inOut",
      onUpdate: () => {
        const point = curve.getPointAt(progressRef.current);
        const tangent = curve.getTangentAt(progressRef.current);
        bikeRef.current.position.copy(point);
        bikeRef.current.lookAt(point.clone().add(tangent));
      },
      onComplete: () => {
        effectsMap.clearWeather();

        setActiveStation(stationIndex);
    
    const config = stationsConfig[stationIndex];
    const effects = config.effects || (config.effect ? [config.effect] : []);
    
    effects.forEach(effectKey => {
        if (effectsMap[effectKey]) {
            effectsMap[effectKey](); // 这里会立刻执行 animateRain
        }
        });
    }
    
    });
  };

  function MapPinMarker({ position, onClick }) {
    const groupRef = useRef();
    useFrame(({ clock }) => {
      if (groupRef.current) {
        groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 2) * 0.05;
      }
    });

    return (
      <group ref={groupRef} position={position} onClick={onClick} scale={[1.5, 1.5, 1.5]}>
        <mesh position={[0, 0.15, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#ff4d4d" emissive="#660000" emissiveIntensity={0.2} />
        </mesh>
        <mesh rotation={[Math.PI, 0, 0]} position={[0, 0, 0]}>
          <coneGeometry args={[0.07, 0.15, 16]} />
          <meshStandardMaterial color="#ff4d4d" emissive="#660000" emissiveIntensity={0.2} />
        </mesh>
      </group>
    );
  }

  const stations = stationPositions.map((t, i) => {
    const pos = curve.getPointAt(t);
    const offset = (i % 2 === 0) ? 0.5 : -0.5;
    return (
      <MapPinMarker
        key={i}
        position={[pos.x + offset, pos.y, pos.z]}
        onClick={() => moveToStation(t, i)}
      />
    );
  });

  useFrame((_, delta) => {
    if (shaderRef.current) {
      shaderRef.current.uTime += delta;
    }
  });

  return (
    <>
    
      <group ref={groupRef}>
        <mesh geometry={tubeGeometry}>
          <routeShaderMaterial ref={shaderRef} uTime={0} uLightOpacity={0}/>
        </mesh>
        {stations}
        <primitive ref={bikeRef} object={bike} />
      </group>
      <AutoFitCamera objectRef={groupRef} />
    </>
  );
}

function StationPopup({ activeStation }) {
  if (activeStation === null) return null;

  const { title, video, effect, component: UIComponent } = stationsConfig[activeStation];
  const Component = UIComponent;

  return (
    <div className="absolute top-36 right-5 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-5 w-72 text-center">
  <h2 className="text-xl font-bold mb-3">{title}</h2>
  
  {video && (
    <video 
    className="max-w-full max-h-full object-contain " 
    src={video}  autoPlay loop preload="metadata" muted playsInline />
  )}
  {UIComponent && <UIComponent />}
</div>

  );
}

export default function App() {
  const [activeStation, setActiveStation] = useState(null);

  return (
    
    <div style={{
      top: 0,
      left: 0,
      width: '100vw',
      minheight: '100vh',
      zIndex: 0,
      position: 'relative',
    }}>

      
      
      {/* 顶部 Canvas 区块 */}
      <div style={{ width: "100%", height: "100vh" }}>
        <BikePanels activeStation={activeStation} />
        <Canvas
          style={{ width: "100%", height: "100%" }} // 单独控制 Canvas 全屏
          camera={{ position: [0, 0, 8], fov: 50 }} 
          frameloop="always"         
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
          <BikeRoute setActiveStation={setActiveStation} />
        </Canvas>
        <StationPopup activeStation={activeStation} />
      </div>
     
      <BikeIntro />
    </div>
    
  );
}