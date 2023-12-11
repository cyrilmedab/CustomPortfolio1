import { Model } from './AvaturnPortfolioAnimated';
import { RpmModel } from './RpmPortfolioAnimated';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const AvatarCanvas = () => {
    return (
        <Canvas camera={{ fov: 45, near: 0.1, far: 100, position: [-4, 2.5, 1]}}>
            <ambientLight intensity={5} />
            <Suspense fallback={null}>
                <Model action='waving'/>
            </Suspense>
        </Canvas>
    )
}

export default AvatarCanvas;