"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

function createGradientTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;

  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createLinearGradient(0, 0, 1024, 0);

  gradient.addColorStop(0, "#ff6a00");
  gradient.addColorStop(0.33, "#ff3cac");
  gradient.addColorStop(0.66, "#652a98");
  gradient.addColorStop(1, "#2b86c5");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 1024);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return texture;
}

function Blob() {
  const texture = useMemo(() => createGradientTexture(), []);

  return (
    <Sphere args={[1.5, 128, 128]} scale={2}>
      <MeshDistortMaterial
        map={texture}
        distort={0.5}
        speed={2}
        transparent
        opacity={0.7}
        roughness={0.1}
      />
    </Sphere>
  );
}

export default function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Blob />
        </Float>
      </Canvas>

      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>
  );
}
