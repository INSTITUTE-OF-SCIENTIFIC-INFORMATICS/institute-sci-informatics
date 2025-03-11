import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree, ThreeElements } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

// Molecule structure component
interface AtomProps {
  position: [number, number, number];
  color: string;
  size?: number;
}

const Atom = ({ position, color, size = 0.3 }: AtomProps) => {
  return (
    <Sphere args={[size, 16, 16]} position={position}>
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.4} />
    </Sphere>
  );
};

interface BondProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}

const Bond = ({ start, end, color = "#ffffff" }: BondProps) => {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  
  return (
    <Line 
      points={points}
      color={color}
      lineWidth={2}
      opacity={0.7}
    />
  );
};

// Draggable atom with physics
interface DraggableMoleculeProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  atomPositions: AtomProps[];
  bonds: BondProps[];
}

const DraggableMolecule = ({ position, rotation = [0, 0, 0], atomPositions, bonds }: DraggableMoleculeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState<[number, number, number]>([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  
  useFrame(() => {
    if (!groupRef.current || isDragging) return;
    
    // Apply rotation animation when not dragging
    groupRef.current.rotation.x += 0.002;
    groupRef.current.rotation.y += 0.002;
    
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
  
  const handlePointerDown = (event: ThreeElements['mesh']['onPointerDown']) => {
    if (!event.target) return;
    setIsDragging(true);
    (event.target as any).setPointerCapture(event.pointerId);
  };
  
  const handlePointerUp = (event: ThreeElements['mesh']['onPointerUp']) => {
    if (!event.target) return;
    setIsDragging(false);
    (event.target as any).releasePointerCapture(event.pointerId);
  };
  
  const handlePointerMove = (event: ThreeElements['mesh']['onPointerMove']) => {
    if (isDragging && groupRef.current) {
      const { movementX, movementY } = event.nativeEvent as PointerEvent;
      
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
        <Atom key={`atom-${index}`} {...atom} />
      ))}
      
      {/* Render bonds */}
      {bonds.map((bond, index) => (
        <Bond key={`bond-${index}`} {...bond} />
      ))}
    </group>
  );
};

// Create common molecule structures
const createWaterMolecule = (basePosition: [number, number, number]): { atoms: AtomProps[], bonds: BondProps[] } => {
  const [x, y, z] = basePosition;
  
  return {
    atoms: [
      { position: [x, y, z], color: '#ff2d55', size: 0.4 }, // Oxygen (red)
      { position: [x-0.5, y+0.3, z], color: '#2d55ff', size: 0.3 }, // Hydrogen (blue)
      { position: [x+0.5, y+0.3, z], color: '#2d55ff', size: 0.3 }, // Hydrogen (blue)
    ],
    bonds: [
      { start: [x, y, z], end: [x-0.5, y+0.3, z] },
      { start: [x, y, z], end: [x+0.5, y+0.3, z] },
    ]
  };
};

const createCarbonDioxideMolecule = (basePosition: [number, number, number]): { atoms: AtomProps[], bonds: BondProps[] } => {
  const [x, y, z] = basePosition;
  
  return {
    atoms: [
      { position: [x, y, z], color: '#3b3b3b', size: 0.4 }, // Carbon (gray)
      { position: [x-0.8, y, z], color: '#ff2d55', size: 0.35 }, // Oxygen (red)
      { position: [x+0.8, y, z], color: '#ff2d55', size: 0.35 }, // Oxygen (red)
    ],
    bonds: [
      { start: [x, y, z], end: [x-0.8, y, z] },
      { start: [x, y, z], end: [x+0.8, y, z] },
    ]
  };
};

const createSimpleMethane = (basePosition: [number, number, number]): { atoms: AtomProps[], bonds: BondProps[] } => {
  const [x, y, z] = basePosition;
  
  return {
    atoms: [
      { position: [x, y, z], color: '#3b3b3b', size: 0.4 }, // Carbon (gray)
      { position: [x+0.6, y+0.6, z-0.2], color: '#2d55ff', size: 0.3 }, // Hydrogen
      { position: [x-0.6, y+0.6, z-0.2], color: '#2d55ff', size: 0.3 }, // Hydrogen
      { position: [x+0.6, y-0.6, z-0.2], color: '#2d55ff', size: 0.3 }, // Hydrogen
      { position: [x-0.6, y-0.6, z-0.2], color: '#2d55ff', size: 0.3 }, // Hydrogen
    ],
    bonds: [
      { start: [x, y, z], end: [x+0.6, y+0.6, z-0.2] },
      { start: [x, y, z], end: [x-0.6, y+0.6, z-0.2] },
      { start: [x, y, z], end: [x+0.6, y-0.6, z-0.2] },
      { start: [x, y, z], end: [x-0.6, y-0.6, z-0.2] },
    ]
  };
};

const createBenzeneMolecule = (basePosition: [number, number, number]): { atoms: AtomProps[], bonds: BondProps[] } => {
  const [x, y, z] = basePosition;
  const radius = 0.8;
  const atoms: AtomProps[] = [];
  const bonds: BondProps[] = [];
  
  // Create hexagon of carbon atoms
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const posX = x + Math.sin(angle) * radius;
    const posY = y + Math.cos(angle) * radius;
    
    atoms.push({ 
      position: [posX, posY, z], 
      color: '#3b3b3b', 
      size: 0.35
    });
    
    // Add bonds between atoms
    const nextIndex = (i + 1) % 6;
    const nextAngle = (Math.PI / 3) * nextIndex;
    const nextPosX = x + Math.sin(nextAngle) * radius;
    const nextPosY = y + Math.cos(nextAngle) * radius;
    
    bonds.push({
      start: [posX, posY, z],
      end: [nextPosX, nextPosY, z],
      color: i % 2 === 0 ? '#ffffff' : '#77eeff' // Alternate bond colors for double bond effect
    });
  }
  
  return { atoms, bonds };
};

// Main component with multiple molecules
const Scene = () => {
  const molecules = [
    {
      type: 'water',
      position: [-3, 2, 0] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number]
    },
    {
      type: 'co2',
      position: [3, -1, 1] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number]
    },
    {
      type: 'methane',
      position: [-2, -2, -1] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number]
    },
    {
      type: 'benzene',
      position: [2, 1, -2] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number]
    },
    {
      type: 'water',
      position: [0, 3, 2] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number]
    }
  ];
  
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#5cebdf" />
      
      {/* Add multiple molecules */}
      {molecules.map((molecule, index) => {
        let atomData;
        switch(molecule.type) {
          case 'water':
            atomData = createWaterMolecule(molecule.position);
            break;
          case 'co2':
            atomData = createCarbonDioxideMolecule(molecule.position);
            break;
          case 'methane':
            atomData = createSimpleMethane(molecule.position);
            break;
          case 'benzene':
            atomData = createBenzeneMolecule(molecule.position);
            break;
          default:
            atomData = createWaterMolecule(molecule.position);
        }
        
        return (
          <DraggableMolecule 
            key={`molecule-${index}`}
            position={molecule.position}
            rotation={molecule.rotation}
            atomPositions={atomData.atoms}
            bonds={atomData.bonds}
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
