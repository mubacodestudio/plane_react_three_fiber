'use client'

import {SphereEnv} from "@/components/SphereEnv";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {Environment,PerspectiveCamera, OrbitControls} from "@react-three/drei";
import {LandScape} from "@/components/LandScape";
import {AirPlane} from "@/components/Airplane";

export default function HomeCompontent() {
    return (
        <Canvas shadows>
            <Suspense fallback={null}>
                <SphereEnv/>
                <Environment background={false} files={"assets/textures/envmap.hdr"}/>
                <PerspectiveCamera position={[0, 10, 10]}/>
                {/*<OrbitControls target={[0,0,0]}/>*/}

                <LandScape/>
                <AirPlane/>

                <directionalLight
                    castShadow color={"#f3d29a"}
                    intensity={2}
                    position={[10, 5, 4]}
                    shadow-bias={-0.0005}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-near={0.01}
                    shadow-camera-far={20}
                    shadow-camera-top={6}
                    shadow-camera-bottom={-6}
                    shadow-camera-left={-6.2}
                    shadow-camera-right={6.4}
                />
            </Suspense>
        </Canvas>
    );
}