import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Group } from 'three'

const BXCarModel = () => {
  const carRef = useRef<Group>(null!)
  
  useFrame(() => {
    // Subtle automatic rotation when not being dragged
    if (carRef.current) {
      carRef.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={carRef}>
      {/* Car Body - Angular wedge shape characteristic of BX */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 1.2, 1.8]} />
        <meshPhongMaterial color="#2a4c6b" />
      </mesh>
      
      {/* Front wedge - Gandini's angular design */}
      <mesh position={[1.8, -0.1, 0]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.8, 1, 1.6]} />
        <meshPhongMaterial color="#2a4c6b" />
      </mesh>
      
      {/* Rear section */}
      <mesh position={[-1.8, 0.1, 0]}>
        <boxGeometry args={[0.8, 1, 1.6]} />
        <meshPhongMaterial color="#2a4c6b" />
      </mesh>
      
      {/* Windshield */}
      <mesh position={[0.5, 0.4, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[2, 0.8, 1.5]} />
        <meshPhongMaterial color="#87ceeb" transparent opacity={0.7} />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[1.3, -0.8, 0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[1.3, -0.8, -0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-1.3, -0.8, 0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-1.3, -0.8, -0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Wheel rims */}
      <mesh position={[1.3, -0.8, 0.85]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 8]} />
        <meshPhongMaterial color="#c0c0c0" />
      </mesh>
      <mesh position={[1.3, -0.8, -0.85]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 8]} />
        <meshPhongMaterial color="#c0c0c0" />
      </mesh>
      <mesh position={[-1.3, -0.8, 0.85]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 8]} />
        <meshPhongMaterial color="#c0c0c0" />
      </mesh>
      <mesh position={[-1.3, -0.8, -0.85]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 8]} />
        <meshPhongMaterial color="#c0c0c0" />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[2.1, 0, 0.5]}>
        <sphereGeometry args={[0.15, 8, 6]} />
        <meshPhongMaterial color="#ffffcc" emissive="#ffff99" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[2.1, 0, -0.5]}>
        <sphereGeometry args={[0.15, 8, 6]} />
        <meshPhongMaterial color="#ffffcc" emissive="#ffff99" emissiveIntensity={0.3} />
      </mesh>
      
      {/* BX Badge/Grille area */}
      <mesh position={[2.05, 0, 0]}>
        <boxGeometry args={[0.1, 0.4, 0.8]} />
        <meshPhongMaterial color="#333333" />
      </mesh>
    </group>
  )
}

export const CitroenBXModel = () => {
  return (
    <div className="w-full h-96 md:h-[500px]">
      <Canvas
        camera={{ position: [8, 4, 8], fov: 50 }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight
          position={[-10, -10, -5]}
          intensity={0.3}
        />
        
        <BXCarModel />
        
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxDistance={15}
          minDistance={5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}