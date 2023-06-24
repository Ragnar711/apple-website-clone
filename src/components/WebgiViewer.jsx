import React, { useRef, useCallback, useEffect } from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = () => {
    const canvasRef = useRef(null);

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        });
        const manager = await viewer.addPlugin(AssetManagerPlugin);
        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        await viewer.addPlugin(GBufferPlugin);
        await viewer.addPlugin(new ProgressivePlugin(32));
        await viewer.addPlugin(new TonemapPlugin(true));
        await viewer.addPlugin(GammaCorrectionPlugin);
        await viewer.addPlugin(SSRPlugin);
        await viewer.addPlugin(SSAOPlugin);
        await viewer.addPlugin(BloomPlugin);

        viewer.renderer.refreshPipeline();

        await manager.addFromPath("scene-black.glb");

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
        window.scrollTo(0, 0);

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        };

        viewer.addEventListener("preFrame", () => {
            camera.positionTargetUpdated(true);
            needsUpdate = false;
        });

        const memorizedScrollAnimation = () => {
            if (position && target && onUpdate) {
                scrollAnimation(position, target, onUpdate);
            }
        };

        memorizedScrollAnimation();
    }, []);

    useEffect(() => {
        setupViewer();
    }, []);

    return (
        <div id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef} />
        </div>
    );
};

export default WebgiViewer;
