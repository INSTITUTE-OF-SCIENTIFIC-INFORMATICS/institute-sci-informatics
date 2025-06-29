import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas, useThree } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

// Generate a field of stars
const StarField = ({ count = 5000, depth = 50 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate random star positions
  const [positions] = useState(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Position
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 25;
      positions[i3 + 1] = (Math.random() - 0.5) * 25;
      positions[i3 + 2] = -Math.random() * depth;
      
      // Color
      colors[i3] = 0.8 + Math.random() * 0.2; // R
      colors[i3 + 1] = 0.8 + Math.random() * 0.2; // G
      colors[i3 + 2] = 0.8 + Math.random() * 0.2; // B
      
      // Size
      sizes[i] = Math.random() * 1.5;
    }
    
    return { positions, colors, sizes };
  });
  
  // Animation for the stars
  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    
    const elapsedTime = clock.getElapsedTime();
    
    // Rotate the stars slowly
    pointsRef.current.rotation.y = elapsedTime * 0.05;
    
    // Make some stars twinkle
    const geometry = pointsRef.current.geometry;
    const sizes = geometry.attributes.size.array as Float32Array;
    
    for (let i = 0; i < 100; i++) {
      const idx = Math.floor(Math.random() * count);
      sizes[idx] = 0.5 + Math.sin(elapsedTime * 2 + idx) * 1;
    }
    
    geometry.attributes.size.needsUpdate = true;
  });
  
  return (
    <Points ref={pointsRef} limit={10000}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={positions.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={new Float32Array(count).fill(1)}
          itemSize={1}
        />
      </bufferGeometry>
      <PointMaterial
        size={0.15}
        vertexColors
        transparent
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

// Colorful nebula cloud
const Nebula = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const [texture] = useState(() => createNebulaTexture());
  
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    const t = clock.getElapsedTime() * 0.2;
    
    // Slow rotation
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.02;
    meshRef.current.rotation.y = Math.sin(t * 0.2) * 0.03;
  });
  
  return (
    <mesh ref={meshRef} scale={[viewport.width * 1.5, viewport.height * 1.5, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <meshBasicMaterial
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        wireframe={false}
        color={new THREE.Color("#1a0038")}
        map={texture}
      />
    </mesh>
  );
};

// Create procedural cloud texture function
const createNebulaTexture = () => {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d')!;
  
  // Draw nebula-like gradients
  const gradient1 = context.createRadialGradient(
    size * 0.3, size * 0.3, 0,
    size * 0.3, size * 0.3, size * 0.7
  );
  gradient1.addColorStop(0, 'rgba(103, 0, 180, 0.5)');
  gradient1.addColorStop(0.4, 'rgba(42, 0, 99, 0.2)');
  gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');
  
  const gradient2 = context.createRadialGradient(
    size * 0.7, size * 0.7, 0,
    size * 0.7, size * 0.7, size * 0.5
  );
  gradient2.addColorStop(0, 'rgba(0, 42, 99, 0.5)');
  gradient2.addColorStop(0.4, 'rgba(0, 12, 64, 0.2)');
  gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');
  
  context.fillStyle = gradient1;
  context.fillRect(0, 0, size, size);
  
  context.fillStyle = gradient2;
  context.fillRect(0, 0, size, size);
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

// Camera effects
const CameraEffects = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.z = 10;
  }, [camera]);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    // Gentle camera movement
    camera.position.x = Math.sin(t * 0.1) * 0.2;
    camera.position.y = Math.cos(t * 0.1) * 0.1;
  });
  
  return null;
};

// Main scene
const GalaxyScene = () => {
  return (
    <>
      <color attach="background" args={['#050315']} />
      <CameraEffects />
      <StarField count={2000} />
      <Nebula />
    </>
  );
};

// Main export component
const GalaxyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-blue-900/20"></div>
      
      {/* Animated stars */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 0%, #000 100%)' }}>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      {/* Add the CSS for the stars animation */}
      <style jsx>{`
        @keyframes animateStars {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-2000px);
          }
        }
        
        .stars {
          position: absolute;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${generateStars(700)};
          animation: animateStars 100s linear infinite;
        }
        
        .stars2 {
          position: absolute;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${generateStars(200)};
          animation: animateStars 150s linear infinite;
        }
        
        .stars3 {
          position: absolute;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${generateStars(100)};
          animation: animateStars 200s linear infinite;
        }
      `}</style>
    </div>
  );
};

// Helper function to generate random star positions
const generateStars = (count: number) => {
  let stars = '';
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    stars += `${x}px ${y}px #FFF${i === count - 1 ? '' : ','} `;
  }
  return stars;
};

export default GalaxyBackground;
