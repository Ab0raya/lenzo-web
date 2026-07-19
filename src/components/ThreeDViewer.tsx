import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { RotateCw, Eye, Sparkles, Layers, RefreshCw, ZoomIn, ZoomOut } from 'lucide-react';

interface ThreeDViewerProps {
  stlUrl?: string;
}

export const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ stlUrl = '/frame_refernce.stl' }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const meshRef = useRef<THREE.Mesh | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 360;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x050505);

    // Grid helper for tech aesthetic
    const gridHelper = new THREE.GridHelper(200, 20, 0xff2b2b, 0x333333);
    gridHelper.position.y = -25;
    scene.add(gridHelper);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 40, 120);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const redSpotLight = new THREE.SpotLight(0xff2b2b, 4);
    redSpotLight.position.set(50, 100, 50);
    redSpotLight.castShadow = true;
    scene.add(redSpotLight);

    const blueDirLight = new THREE.DirectionalLight(0x38bdf8, 2);
    blueDirLight.position.set(-50, -20, -50);
    scene.add(blueDirLight);

    // 5. Load STL Geometry
    const loader = new STLLoader();
    setLoading(true);

    loader.load(
      stlUrl,
      (geometry) => {
        geometry.computeVertexNormals();
        geometry.center();

        // Create Mesh Material (Metallic Dark Onyx with Red Highlight)
        const material = new THREE.MeshStandardMaterial({
          color: 0x1a1a1a,
          roughness: 0.2,
          metalness: 0.8,
          wireframe: false,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(0.8, 0.8, 0.8);
        mesh.rotation.x = -Math.PI / 2; // Orient upright
        meshRef.current = mesh;

        // Add Red Calibration Point Markers on the 3D model
        const markerGeo = new THREE.SphereGeometry(2, 16, 16);
        const markerMat = new THREE.MeshBasicMaterial({ color: 0xff2b2b });

        const p1 = new THREE.Mesh(markerGeo, markerMat);
        p1.position.set(-35, 0, 10);
        mesh.add(p1);

        const p2 = new THREE.Mesh(markerGeo, markerMat);
        p2.position.set(35, 0, 10);
        mesh.add(p2);

        scene.add(mesh);
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error('Failed to load STL model:', err);
        setError('Could not load 3D STL file. Please check path.');
        setLoading(false);
      }
    );

    // Mouse Drag Interaction setup
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !meshRef.current) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      meshRef.current.rotation.z += deltaMove.x * 0.01;
      meshRef.current.rotation.x += deltaMove.y * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (meshRef.current && autoRotate && !isDragging) {
        meshRef.current.rotation.z += 0.008;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [stlUrl]);

  // Wireframe toggle update
  useEffect(() => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      mat.wireframe = wireframe;
      mat.color.setHex(wireframe ? 0xff2b2b : 0x1a1a1a);
    }
  }, [wireframe]);

  const handleResetCamera = () => {
    if (meshRef.current) {
      meshRef.current.rotation.set(-Math.PI / 2, 0, 0);
    }
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 40, 120);
    }
  };

  const handleZoom = (direction: 'in' | 'out') => {
    if (cameraRef.current) {
      cameraRef.current.position.z += direction === 'in' ? -15 : 15;
    }
  };

  return (
    <div className="relative rounded-2xl glass-panel border border-white/10 overflow-hidden glow-red-sm group">
      
      {/* Top Toolbar */}
      <div className="flex items-center justify-between p-4 bg-[#0A0A0A] border-b border-white/10 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#FF2B2B]/10 text-[#FF2B2B]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
              LENZO 3D Frame Reference Clip Model
            </h4>
            <span className="text-[10px] text-gray-400 font-mono">
              Interactive WebGL CAD Geometry • STL Scale Calibrator
            </span>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center gap-2">
          
          {/* Wireframe Toggle */}
          <button
            onClick={() => setWireframe(!wireframe)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
              wireframe
                ? 'bg-[#FF2B2B] text-white border-[#FF2B2B] glow-red-sm'
                : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Wireframe</span>
          </button>

          {/* Auto Rotate Toggle */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
              autoRotate
                ? 'bg-[#FF2B2B]/20 text-[#FF2B2B] border-[#FF2B2B]/40'
                : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
            <span>Spin</span>
          </button>

          {/* Zoom Buttons */}
          <button
            onClick={() => handleZoom('in')}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleZoom('out')}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Reset Camera */}
          <button
            onClick={handleResetCamera}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white cursor-pointer"
            title="Reset View"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div className="relative w-full h-[380px] bg-[#030303] flex items-center justify-center cursor-grab active:cursor-grabbing">
        
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505]/90 z-20 space-y-3">
            <div className="w-8 h-8 border-2 border-[#FF2B2B] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs font-mono text-gray-400">Loading 3D Frame Reference STL Mesh...</span>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#050505] text-red-400 text-xs font-mono p-4 text-center">
            {error}
          </div>
        )}

        <div ref={mountRef} className="w-full h-full"></div>

        {/* Instructions Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[#0A0A0A]/80 backdrop-blur-md p-2.5 rounded-xl border border-white/10 text-xs text-gray-300 pointer-events-none">
          <span className="flex items-center gap-1.5 text-[11px] font-mono">
            <Eye className="w-3.5 h-3.5 text-[#FF2B2B]" /> Drag mouse to 3D rotate clip • Scroll to zoom
          </span>
          <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            Scale Ref: 80.00 mm
          </span>
        </div>

      </div>

    </div>
  );
};
