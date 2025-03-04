import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const RobotModel = () => {
  const { scene, animations } = useGLTF("/model/robot.glb", true);
  const mixer = useRef(null);

  useEffect(() => {
    if (animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
      });
    }
  }, [scene, animations]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return <primitive object={scene} scale={1.2} position={[0, -1, 0]} />;
};

const Robot = () => {
  return (
    <Canvas className="canvas-container" camera={{ position: [0, 1, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <RobotModel />
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  );
};

export default Robot;
