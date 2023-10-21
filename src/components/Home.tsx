'use client'

import {SphereEnv} from "@/components/SphereEnv";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {Environment, OrbitControls} from "@react-three/drei";

export default function HomeCompontent() {
    return (<Canvas shadows>
        <Suspense fallback={null}>
            <SphereEnv/>
            <Environment background={false} files={"assets/textures/envmap.hdr"}/>
            <perspectiveCamera position={[0, 10, 10]} />
            <OrbitControls target={[0,0,0]}/>
        </Suspense></Canvas>);
}