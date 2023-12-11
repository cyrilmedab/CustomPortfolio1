import React, { Suspense } from 'react';
import { Canvas, useLoader} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

const Avatar = () => {

    const avatar = useLoader(GLTFLoader, './avatar/AvaturnPortfolioAnimated.glb');
    return (
        <primitive object={avatar.scene} scale={2.5} position-y={0} rotation-y={0} />
    )
};

const AvatarCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand' 
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ fov: 45, near: 0.1, far: 100, position: [-4, 3, 6]}}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Avatar />

                <Preload all />
            </Suspense>
        </Canvas>
    )
}

export default AvatarCanvas;

// const Earth = () => {
//     const earth = useGLTF("./planet/scene.gltf");
//     return (
//       <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
//     )
//   }
  
//   const EarthCanvas = () => {
//     return (
//       <Canvas 
//         shadows
//         frameloop='demand' 
//         dpr={[1, 2]}
//         gl={{ preserveDrawingBuffer: true }} 
//         camera={{ fov: 45, near: 0.1, far: 100, position: [-4, 3, 6]}}
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//           <Earth />
  
//           <Preload all />
//         </Suspense>
//       </Canvas>
//     )
//   }
  
//   export default EarthCanvas