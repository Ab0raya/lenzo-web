import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { useLanguage } from '../context/LanguageContext';
import { RotateCw, Eye, Sparkles, Layers, RefreshCw, ZoomIn, ZoomOut } from 'lucide-react';

interface ThreeDViewerProps {
  stlUrl?: string;
}

export const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ stlUrl = '/frame_refernce.stl' }) => {
  const { t } = useLanguage();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const meshRef = useRef<THREE.Mesh | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 420;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    // Subtle Grid Helper
    const gridHelper = new THREE.GridHelper(300, 30, 0xff2b2b, 0x333333);
    gridHelper.position.y = -30;
    scene.add(gridHelper);

    // 2. Camera (Positioned much closer for maximum visibility)
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 18, 55);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 4. High-Contrast Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Main Key Light
    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainKeyLight.position.set(40, 60, 60);
    scene.add(mainKeyLight);

    // Fill Light with Red Neon Accent
    const redFillLight = new THREE.PointLight(0xff2b2b, 4, 150);
    redFillLight.position.set(-50, 40, 40);
    scene.add(redFillLight);

    // Cyan Rim Light for metallic specular separation
    const cyanRimLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    cyanRimLight.position.set(0, -40, -50);
    scene.add(cyanRimLight);

    // 5. Load STL Geometry
    const loader = new STLLoader();
    setLoading(true);

    loader.load(
      stlUrl,
      (geometry) => {
        geometry.computeVertexNormals();
        geometry.center();

        // High contrast Silver Metallic Alloy Material
        const material = new THREE.MeshStandardMaterial({
          color: 0xe2e8f0, // Bright Platinum Silver
          roughness: 0.25,
          metalness: 0.85,
          wireframe: false,
        });

        const mesh = new THREE.Mesh(geometry, material);
        // Scaled up larger so it's prominent and clear
        mesh.scale.set(1.4, 1.4, 1.4);
        mesh.rotation.x = -Math.PI / 2; // Upright orientation
        meshRef.current = mesh;

        // Add Glowing Red Calibration Markers on reference endpoints
        const markerGeo = new THREE.SphereGeometry(2.5, 16, 16);
        const markerMat = new THREE.MeshBasicMaterial({ color: 0xff2b2b });

        const p1 = new THREE.Mesh(markerGeo, markerMat);
        p1.position.set(-35, 0, 8);
        mesh.add(p1);

        const p2 = new THREE.Mesh(markerGeo, markerMat);
        p2.position.set(35, 0, 8);
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

    // Mouse Drag Rotation Setup
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

      meshRef.current.rotation.z += deltaMove.x * 0.012;
      meshRef.current.rotation.x += deltaMove.y * 0.012;

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
        meshRef.current.rotation.z += 0.009;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Window Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 420;
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

  // Wireframe Mode Switcher
  useEffect(() => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      mat.wireframe = wireframe;
      mat.color.setHex(wireframe ? 0xff2b2b : 0xe2e8f0);
    }
  }, [wireframe]);

  const handleResetCamera = () => {
    if (meshRef.current) {
      meshRef.current.rotation.set(-Math.PI / 2, 0, 0);
    }
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 18, 55);
    }
  };

  const handleZoom = (direction: 'in' | 'out') => {
    if (cameraRef.current) {
      cameraRef.current.position.z += direction === 'in' ? -10 : 10;
    }
  };

  return (
    <div className="relative rounded-2xl glass-panel border border-[#FF2B2B]/30 overflow-hidden glow-red-md group">
      
      {/* Top Toolbar */}
      <div className="flex items-center justify-between p-4 bg-[#0A0A0A] border-b border-white/10 flex-wrap gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#FF2B2B]/10 text-[#FF2B2B] border border-[#FF2B2B]/20">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
              {t.reference.cadTitle}
            </h4>
            <span className="text-[10px] text-gray-400 font-mono block">
              {t.reference.cadSubtitle}
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
            <span>{t.reference.wireframeBtn}</span>
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
            <span>{t.reference.spinBtn}</span>
          </button>

          {/* Zoom In */}
          <button
            onClick={() => handleZoom('in')}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={() => handleZoom('out')}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Reset View */}
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
      <div className="relative w-full h-[420px] bg-[#050505] flex items-center justify-center cursor-grab active:cursor-grabbing">
        
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
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[#0A0A0A]/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10 text-xs text-gray-300 pointer-events-none">
          <span className="flex items-center gap-1.5 text-[11px] font-mono">
            <Eye className="w-3.5 h-3.5 text-[#FF2B2B]" /> {t.reference.dragInstructions}
          </span>
          <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            {t.reference.scaleRef}
          </span>
        </div>

      </div>

    </div>
  );
};
