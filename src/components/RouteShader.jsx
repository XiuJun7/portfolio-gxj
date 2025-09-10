import * as THREE from 'three';
import { extend } from '@react-three/fiber';

class RouteShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uBaseColor: { value: new THREE.Color('#00ff88') }, // 绿色底色
        uLightColor: { value: new THREE.Color('#ffffff') }, // 白色扫光
        uLightOpacity: { value: 0.5 } // 新增透明度控制
      },
      transparent: true, // 允许透明
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uBaseColor;
        uniform vec3 uLightColor;
        uniform float uLightOpacity; // 新增透明度
        varying vec2 vUv;

        void main() {
          // 扫光强度 (沿路线Y方向移动)
          float glow = smoothstep(0.0, 0.4, abs(sin(uTime * 2.0 + vUv.x * 15.0)));

          // 计算颜色
          vec3 finalColor = mix(uBaseColor, uLightColor, glow);

          // 用透明度控制扫光整体可见度
          gl_FragColor = vec4(finalColor, uLightOpacity);
        }
      `
    });
  }
}

extend({ RouteShaderMaterial });

export { RouteShaderMaterial };
