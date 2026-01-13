"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.5} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#4f8fff"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={0.5} position={position}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial
          color="#a78bfa"
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4f8fff" />
        <AnimatedSphere />
        <FloatingTorus position={[3, 2, -2]} />
        <FloatingTorus position={[-3, -1.5, -1]} />
      </Canvas>
    </div>
  );
}
