
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree, ThreeElements, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Atom component with glow effect
interface AtomProps {
  position: [number, number, number];
  color: string;
  size?: number;
  pulse?: boolean;
}

const Atom = ({ position, color, size = 0.3, pulse = false }: AtomProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current && pulse) {
      // Subtle pulsing effect
      const t = clock.getElapsedTime();
      meshRef.current.scale.setScalar(1.0 + Math.sin(t * 2) * 0.1);
    }
  });
  
  return (
    <group position={position}>
      {/* Main sphere */}
      <Sphere ref={meshRef} args={[size, 16, 16]}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.8} 
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      {/* Glow effect */}
      <Sphere args={[size * 1.2, 16, 16]}>
        <meshBasicMaterial 
          color={color} 
          transparent={true} 
          opacity={0.2} 
        />
      </Sphere>
    </group>
  );
};

// Enhanced bond with glow effect
interface BondProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  thickness?: number;
  glowIntensity?: number;
}

const Bond = ({ 
  start, 
  end, 
  color = "#ffffff", 
  thickness = 2,
  glowIntensity = 0.7
}: BondProps) => {
  const lineRef = useRef<THREE.Line>(null);
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  
  useFrame(({ clock }) => {
    if (lineRef.current && lineRef.current.material) {
      // Subtle pulsing effect for the line
      const t = clock.getElapsedTime();
      const pulse = 1.0 + Math.sin(t * 3 + Math.random()) * 0.2;
      
      // Handle both single material and array of materials
      const material = lineRef.current.material;
      if (Array.isArray(material)) {
        material.forEach(mat => {
          if (mat.opacity !== undefined) {
            mat.opacity = 0.7 + Math.sin(t * 2) * 0.3;
          }
        });
      } else if (material.opacity !== undefined) {
        material.opacity = 0.7 + Math.sin(t * 2) * 0.3;
      }
    }
  });
  
  return (
    <group>
      {/* Main line */}
      <Line 
        ref={lineRef as any} // Use type assertion to bypass the type check
        points={points}
        color={color}
        lineWidth={thickness}
        opacity={0.8}
        transparent
      />
      
      {/* Glow effect */}
      <Line 
        points={points}
        color={color}
        lineWidth={thickness * 2}
        opacity={0.3 * glowIntensity}
        transparent
      />
    </group>
  );
};

// Draggable molecule with physics
interface DraggableMoleculeProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  atomPositions: AtomProps[];
  bonds: BondProps[];
  morphSpeed?: number;
}

const DraggableMolecule = ({ 
  position, 
  rotation = [0, 0, 0], 
  atomPositions, 
  bonds,
  morphSpeed = 0.001
}: DraggableMoleculeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState<[number, number, number]>([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    
    const t = clock.getElapsedTime();
    
    // Apply subtle vibration animation all the time
    groupRef.current.position.x += Math.sin(t * 10) * 0.0015;
    groupRef.current.position.y += Math.cos(t * 8) * 0.0015;
    
    // Apply rotation animation when not dragging
    if (!isDragging) {
      groupRef.current.rotation.x += morphSpeed;
      groupRef.current.rotation.y += morphSpeed * 1.3;
    }
    
    // Apply velocity
    groupRef.current.position.x += velocity[0] * 0.05;
    groupRef.current.position.y += velocity[1] * 0.05;
    groupRef.current.position.z += velocity[2] * 0.05;
    
    // Dampen velocity
    setVelocity(current => [
      current[0] * 0.98,
      current[1] * 0.98,
      current[2] * 0.98
    ]);
    
    // Boundary bounce
    if (Math.abs(groupRef.current.position.x) > 5) {
      setVelocity(current => [-current[0] * 0.8, current[1], current[2]]);
    }
    if (Math.abs(groupRef.current.position.y) > 3) {
      setVelocity(current => [current[0], -current[1] * 0.8, current[2]]);
    }
  });
  
  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsDragging(true);
    const eventObject = event.object as unknown as THREE.Object3D & { setPointerCapture: (id: number) => void };
    eventObject.setPointerCapture(event.pointerId);
  };
  
  const handlePointerUp = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsDragging(false);
    const eventObject = event.object as unknown as THREE.Object3D & { releasePointerCapture: (id: number) => void };
    eventObject.releasePointerCapture(event.pointerId);
  };
  
  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (isDragging && groupRef.current) {
      const { movementX, movementY } = event.nativeEvent;
      
      groupRef.current.position.x += movementX / aspect / 100;
      groupRef.current.position.y -= movementY / aspect / 100;
      
      setVelocity([
        movementX / aspect / 50,
        -movementY / aspect / 50,
        0
      ]);
    }
  };
  
  return (
    <group 
      ref={groupRef}
      position={position}
      rotation={rotation as any}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      {/* Invisible sphere for dragging */}
      <Sphere args={[1.2, 16, 16]} visible={false} />
      
      {/* Render atoms */}
      {atomPositions.map((atom, index) => (
        <Atom key={`atom-${index}`} {...atom} pulse={true} />
      ))}
      
      {/* Render bonds */}
      {bonds.map((bond, index) => (
        <Bond key={`bond-${index}`} {...bond} glowIntensity={0.8} />
      ))}
    </group>
  );
};

// Create graphene/nanotube-like hexagonal mesh structure
const createHexagonalMesh = (basePosition: [number, number, number], size = 3, layers = 2): { atoms: AtomProps[], bonds: BondProps[] } => {
  const [x, y, z] = basePosition;
  const atoms: AtomProps[] = [];
  const bonds: BondProps[] = [];
  
  // Parameters
  const radius = size;
  const hexSide = 0.6;
  const atomSize = 0.17;
  const layerSpacing = 0.5;
  
  // Create hexagonal lattice
  for (let layer = 0; layer < layers; layer++) {
    const layerZ = z + layer * layerSpacing;
    const layerOffset = layer * 0.3; // Offset each layer slightly for 3D effect
    
    // Main hexagonal pattern
    for (let ring = 0; ring < 4; ring++) {
      const ringRadius = (ring + 1) * hexSide;
      const nodesInRing = Math.max(6, Math.floor(6 * (ring + 1) * 0.9));
      
      for (let i = 0; i < nodesInRing; i++) {
        const angle = (Math.PI * 2 / nodesInRing) * i;
        const posX = x + Math.cos(angle) * ringRadius + layerOffset;
        const posY = y + Math.sin(angle) * ringRadius + layerOffset;
        
        // Random variation for organic feel
        const jitter = hexSide * 0.1;
        const jitterX = (Math.random() - 0.5) * jitter;
        const jitterY = (Math.random() - 0.5) * jitter;
        
        // Determine atom color - use metallic colors
        const colorChoices = [
          "#FFFFFF", // Pure white highlight
          "#E8E8E8", // Silver white
          "#C8C8C9", // Light gray
          "#F1F1F1", // Off-white
          "#D6BCFA", // Light purple
        ];
        const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
        
        // Add atom with slight random size variation
        const atomSizeVar = atomSize * (0.9 + Math.random() * 0.3);
        atoms.push({ 
          position: [posX + jitterX, posY + jitterY, layerZ], 
          color: color,
          size: atomSizeVar
        });
        
        // Connect to nearby atoms in the same layer
        const currentAtomIndex = atoms.length - 1;
        for (let j = 0; j < currentAtomIndex; j++) {
          const otherAtom = atoms[j];
          // Only connect if the atoms are in the same layer
          if (Math.abs(otherAtom.position[2] - layerZ) < 0.01) {
            const dx = otherAtom.position[0] - (posX + jitterX);
            const dy = otherAtom.position[1] - (posY + jitterY);
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // If close enough, create a bond
            if (distance < hexSide * 1.2) {
              // Determine bond color
              const bondColorChoices = [
                "#1EAEDB", // Bright blue
                "#0FA0CE", // Vibrant blue
                "#77EEFF", // Light blue
                "#D3E4FD"  // Soft blue
              ];
              const bondColor = bondColorChoices[Math.floor(Math.random() * bondColorChoices.length)];
              
              bonds.push({
                start: atoms[currentAtomIndex].position,
                end: otherAtom.position,
                color: bondColor,
                thickness: 1.5 + Math.random() * 1.5
              });
            }
          }
        }
        
        // Connect to previous layer if it exists
        if (layer > 0) {
          // Find closest atoms in previous layer
          const prevLayerStart = layer > 0 ? (layer - 1) * nodesInRing * 4 : 0;
          for (let j = prevLayerStart; j < atoms.length - nodesInRing; j++) {
            const otherAtom = atoms[j];
            // Only connect if the atoms are in the adjacent layer
            if (Math.abs(otherAtom.position[2] - (layerZ - layerSpacing)) < 0.01) {
              const dx = otherAtom.position[0] - (posX + jitterX);
              const dy = otherAtom.position[1] - (posY + jitterY);
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              // Connect some atoms between layers, but not all
              if (distance < hexSide * 1.2 && Math.random() > 0.7) {
                const interlayerBondColor = "#D6BCFA"; // Light purple for interlayer connections
                
                bonds.push({
                  start: atoms[currentAtomIndex].position,
                  end: otherAtom.position,
                  color: interlayerBondColor,
                  thickness: 1.2
                });
              }
            }
          }
        }
      }
    }
  }
  
  return { atoms, bonds };
};

// Main component with multiple molecules
const Scene = () => {
  // Define nano mesh structures
  const nanoMeshes = [
    {
      type: 'hexMesh',
      position: [-2, 0, -1] as [number, number, number],
      rotation: [Math.random() * Math.PI * 0.1, Math.random() * Math.PI * 0.1, 0] as [number, number, number],
      size: 3,
      layers: 2
    },
    {
      type: 'hexMesh',
      position: [2, 1, 0] as [number, number, number],
      rotation: [Math.random() * Math.PI * 0.1, Math.random() * Math.PI * 0.1, 0] as [number, number, number],
      size: 2.5,
      layers: 2
    },
    {
      type: 'hexMesh',
      position: [0.5, -2, 0.5] as [number, number, number],
      rotation: [Math.random() * Math.PI * 0.1, Math.random() * Math.PI * 0.1, 0] as [number, number, number],
      size: 2,
      layers: 2
    }
  ];
  
  return (
    <>
      {/* Enhanced lighting for better glow effects */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#5cebdf" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#D6BCFA" />
      
      {/* Add nano mesh structures */}
      {nanoMeshes.map((mesh, index) => {
        const atomData = createHexagonalMesh(mesh.position, mesh.size, mesh.layers);
        
        return (
          <DraggableMolecule 
            key={`mesh-${index}`}
            position={mesh.position}
            rotation={mesh.rotation}
            atomPositions={atomData.atoms}
            bonds={atomData.bonds}
            morphSpeed={0.0005 + Math.random() * 0.001}
          />
        );
      })}
      
      {/* Add OrbitControls for camera manipulation */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false} 
        makeDefault 
      />
    </>
  );
};

// Main export component
const MoleculeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default MoleculeBackground;
