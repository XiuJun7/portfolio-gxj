import gsap from 'gsap';
import * as THREE from 'three';

// 共享 Three.js 场景
let scene, camera, renderer;
let weatherAnimationId = null;
let weatherObjects = [];

function initThreeScene() {
    if (renderer) return; // 已初始化就不重复初始化

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    document.body.appendChild(renderer.domElement);

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();
}

function clearWeather() {
    // 停止动画
    if (weatherAnimationId !== null) {
        cancelAnimationFrame(weatherAnimationId);
        weatherAnimationId = null;
    }

    // 清除雾
    if (scene && scene.fog) {
        scene.fog = null;
    }

    // 移除旧天气对象
    weatherObjects.forEach(obj => {
        scene.remove(obj);
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
    });
    weatherObjects.length = 0;
}

export const effectsMap = {
    // 暴露清理函数
    clearWeather,

    welcomeText: () => {
        const el = document.querySelector('.station-popup h3');
        if (el) {
            gsap.fromTo(el, 
                { y: -50, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1, ease: 'bounce' }
            );
        }
    },
    groundHalo: () => {
        const halo = document.createElement('div');
        halo.className = 'halo-effect';
        document.body.appendChild(halo);
        gsap.fromTo(halo, 
            { scale: 0, opacity: 0.8 }, 
            { scale: 2, opacity: 0, duration: 1.5, onComplete: () => halo.remove() }
        );
    },
    mapZoom: () => {
        gsap.to('.station-popup', { scale: 1.1, duration: 0.3, yoyo: true, repeat: 1 });
    },
    stationBubble: () => {
        gsap.fromTo('.station-popup', { y: -10 }, { y: 0, duration: 0.4, ease: 'bounce' });
    },
    ticketBoothGlow: () => {
        gsap.fromTo('.station-popup', { boxShadow: '0 0 0px gold' }, 
            { boxShadow: '0 0 20px gold', duration: 0.5, yoyo: true, repeat: 3 }
        );
    },

    // ☀️ 太阳
    weatherSun: () => {
        initThreeScene();
        clearWeather();

        const sunlight = new THREE.PointLight(0xffdd88, 2, 100);
        sunlight.position.set(5, 5, 5);
        scene.add(sunlight);
        weatherObjects.push(sunlight);

        const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc33 });
        const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
        sunMesh.position.set(0, 3, -5);
        scene.add(sunMesh);
        weatherObjects.push(sunMesh);
    },

    // 🌧 下雨
    weatherRain: () => { 
        initThreeScene();
        clearWeather();

        if (renderer && renderer.domElement) {
            renderer.domElement.style.pointerEvents = 'none';
        }

        const rainGeometry = new THREE.BufferGeometry();
        const rainCount = 1500;
        const rainPositions = [];

        for (let i = 0; i < rainCount; i++) {
            rainPositions.push((Math.random() - 0.5) * 20); // x
            rainPositions.push(Math.random() * 10);         // y
            rainPositions.push((Math.random() - 0.5) * 20); // z
        }
        rainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(rainPositions, 3));

        const rainMaterial = new THREE.PointsMaterial({ color: 0x88ccff, size: 0.05 });
        const rain = new THREE.Points(rainGeometry, rainMaterial);
        scene.add(rain);
        weatherObjects.push(rain);

        function animateRain() {
            const positions = rainGeometry.attributes.position.array;
            for (let i = 1; i < positions.length; i += 3) {
                positions[i] -= 0.1;
                if (positions[i] < 0) positions[i] = 10;
            }
            rainGeometry.attributes.position.needsUpdate = true;

            weatherAnimationId = requestAnimationFrame(animateRain);
        }

        animateRain();
    },

    // 🌫 雾
    weatherFog: () => {
        initThreeScene();
        clearWeather();

        scene.fog = new THREE.FogExp2(0xcccccc, 0.05);

        const fogLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(fogLight);
        weatherObjects.push(fogLight);
    },

    returnGlow: () => {
        gsap.fromTo('.station-popup', { border: '2px solid transparent' },
            { border: '2px solid lightgreen', duration: 0.5, yoyo: true, repeat: 3 }
        );
    },
    fireworks: () => {
        console.log("🎆 烟花效果 - 可以加粒子爆炸");
    }
};
