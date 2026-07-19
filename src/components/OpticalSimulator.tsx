import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Layers, RotateCcw, FileSpreadsheet, Sparkles, CheckCircle2 } from 'lucide-react';

export const OpticalSimulator: React.FC = () => {
  const { t } = useLanguage();
  
  // State for interactive phase alignment
  const [phase, setPhase] = useState<'A' | 'B'>('A');
  
  // Interactive coordinates/values
  const [rightPupilX, setRightPupilX] = useState<number>(180);
  const [rightPupilY, setRightPupilY] = useState<number>(145);
  const [leftPupilX, setLeftPupilX] = useState<number>(320);
  const [leftPupilY, setLeftPupilY] = useState<number>(145);

  // Derived metrics
  const binocularPd = parseFloat(((leftPupilX - rightPupilX) * 0.45).toFixed(1));
  const rightPd = parseFloat((binocularPd / 2 + 0.3).toFixed(1));
  const leftPd = parseFloat((binocularPd / 2 - 0.3).toFixed(1));
  const fittingHeight = parseFloat((225 - (rightPupilY + leftPupilY) / 2).toFixed(1));
  const vertexDistance = phase === 'B' ? 12.4 : 12.0;
  const pantoscopicAngle = phase === 'B' ? 8.5 : 8.0;

  const handleReset = () => {
    setRightPupilX(180);
    setRightPupilY(145);
    setLeftPupilX(320);
    setLeftPupilY(145);
  };

  return (
    <div className="relative rounded-2xl glass-panel p-4 sm:p-6 lg:p-8 border border-white/10 glow-red-sm overflow-hidden group">
      
      {/* Top Tablet Interface Frame Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#FF2B2B] animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="text-xs font-mono text-gray-400 font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10">
            LENZO OS v2.4 • LIVE OPTICAL ENGINE
          </span>
        </div>

        {/* Phase Toggle Buttons */}
        <div className="flex items-center gap-1 bg-[#050505] p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setPhase('A')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              phase === 'A'
                ? 'bg-[#FF2B2B] text-white shadow-lg shadow-[#FF2B2B]/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t.simulator.phaseA}</span>
          </button>
          <button
            onClick={() => setPhase('B')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              phase === 'B'
                ? 'bg-[#FF2B2B] text-white shadow-lg shadow-[#FF2B2B]/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t.simulator.phaseB}</span>
          </button>
        </div>
      </div>

      {/* Simulator Display Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-center">
        
        {/* Left Side: Interactive Graphic Viewport */}
        <div className="lg:col-span-7 relative bg-[#030303] rounded-xl border border-white/10 overflow-hidden min-h-[320px] flex items-center justify-center p-2 select-none">
          
          {/* Subtle Grid Background & Scanlines */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#FF2B2B]/5 to-transparent animate-scan"></div>
          
          {/* SVG Frame Alignment Simulator */}
          <svg className="w-full h-auto max-h-[360px] relative z-10" viewBox="0 0 500 300">
            <defs>
              {/* Radial gradient for glowing pupil centers */}
              <radialGradient id="pupilGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF2B2B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF2B2B" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {phase === 'A' ? (
              /* Phase A: Frontal View */
              <g>
                {/* Face Contour Silhouette */}
                <path
                  d="M 100 80 Q 250 40 400 80 Q 430 180 380 270 Q 250 310 120 270 Q 70 180 100 80 Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Eyeglass Frame (Right & Left Rims) */}
                {/* Right Frame Box */}
                <rect
                  x="130"
                  y="100"
                  width="100"
                  height="80"
                  rx="16"
                  fill="url(#frameGrad)"
                  stroke="rgba(255, 43, 43, 0.5)"
                  strokeWidth="2"
                />
                {/* Left Frame Box */}
                <rect
                  x="270"
                  y="100"
                  width="100"
                  height="80"
                  rx="16"
                  fill="url(#frameGrad)"
                  stroke="rgba(255, 43, 43, 0.5)"
                  strokeWidth="2"
                />
                {/* Frame Bridge */}
                <path d="M 230 130 Q 250 125 270 130" stroke="#FF2B2B" strokeWidth="3" fill="none" />

                {/* Pupil Eyes Graphics */}
                {/* Right Eye OD */}
                <circle cx={rightPupilX} cy={rightPupilY} r="16" fill="url(#pupilGlow)" />
                <circle cx={rightPupilX} cy={rightPupilY} r="8" fill="#FF2B2B" />
                <circle cx={rightPupilX} cy={rightPupilY} r="3" fill="#FFFFFF" />

                {/* Left Eye OS */}
                <circle cx={leftPupilX} cy={leftPupilY} r="16" fill="url(#pupilGlow)" />
                <circle cx={leftPupilX} cy={leftPupilY} r="8" fill="#FF2B2B" />
                <circle cx={leftPupilX} cy={leftPupilY} r="3" fill="#FFFFFF" />

                {/* Crosshairs & Alignment Guides */}
                {/* Right Crosshair */}
                <line x1={rightPupilX - 25} y1={rightPupilY} x2={rightPupilX + 25} y2={rightPupilY} stroke="#FF2B2B" strokeWidth="1" strokeDasharray="2 2" />
                <line x1={rightPupilX} y1={rightPupilY - 25} x2={rightPupilX} y2={rightPupilY + 25} stroke="#FF2B2B" strokeWidth="1" strokeDasharray="2 2" />

                {/* Left Crosshair */}
                <line x1={leftPupilX - 25} y1={leftPupilY} x2={leftPupilX + 25} y2={leftPupilY} stroke="#FF2B2B" strokeWidth="1" strokeDasharray="2 2" />
                <line x1={leftPupilX} y1={leftPupilY - 25} x2={leftPupilX} y2={leftPupilY + 25} stroke="#FF2B2B" strokeWidth="1" strokeDasharray="2 2" />

                {/* Interpupillary Measurement Bar */}
                <line x1={rightPupilX} y1={rightPupilY - 40} x2={leftPupilX} y2={leftPupilY - 40} stroke="#38bdf8" strokeWidth="2" />
                <line x1={rightPupilX} y1={rightPupilY - 48} x2={rightPupilX} y2={rightPupilY - 32} stroke="#38bdf8" strokeWidth="2" />
                <line x1={leftPupilX} y1={leftPupilY - 48} x2={leftPupilX} y2={leftPupilY - 32} stroke="#38bdf8" strokeWidth="2" />
                <text x="250" y={rightPupilY - 46} fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
                  Binocular PD: {binocularPd} mm
                </text>

                {/* Fitting Height Markers */}
                <line x1={rightPupilX} y1={rightPupilY} x2={rightPupilX} y2="180" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="2 2" />
                <text x={rightPupilX - 10} y="200" fill="#4ade80" fontSize="10" textAnchor="end">FH: {fittingHeight}mm</text>

                {/* Dimension Box Labels */}
                <text x="180" y="94" fill="#9ca3af" fontSize="9" textAnchor="middle">A: 52mm</text>
                <text x="320" y="94" fill="#9ca3af" fontSize="9" textAnchor="middle">A: 52mm</text>
                <text x="250" y="145" fill="#9ca3af" fontSize="9" textAnchor="middle">DBL: 18mm</text>
              </g>
            ) : (
              /* Phase B: Side View Profile Alignment */
              <g>
                {/* Profile Silhouette */}
                <path
                  d="M 180 50 Q 250 60 260 110 L 290 150 Q 270 180 250 200 L 230 260 Q 160 270 140 200 Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="1.5"
                />

                {/* Tilted Lens Side Profile */}
                <line x1="285" y1="90" x2="270" y2="190" stroke="#FF2B2B" strokeWidth="4" strokeLinecap="round" />

                {/* Cornea Position */}
                <path d="M 255 125 Q 265 140 255 155" fill="none" stroke="#38bdf8" strokeWidth="2" />
                
                {/* Vertex Distance Line */}
                <line x1="255" y1="140" x2="277" y2="140" stroke="#38bdf8" strokeWidth="2" />
                <text x="266" y="132" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                  VD: {vertexDistance} mm
                </text>

                {/* Pantoscopic Angle Arc */}
                <line x1="277" y1="90" x2="277" y2="190" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
                <path d="M 277 170 A 20 20 0 0 1 271 185" fill="none" stroke="#facc15" strokeWidth="2" />
                <text x="315" y="180" fill="#facc15" fontSize="12" fontWeight="bold">
                  Panto Angle: {pantoscopicAngle}°
                </text>
              </g>
            )}
          </svg>

          {/* Interactive Controls Bar */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-[#0A0A0A]/90 backdrop-blur-md p-2 rounded-lg border border-white/10 text-xs">
            <span className="text-gray-400 flex items-center gap-1.5 text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF2B2B]" />
              {t.simulator.simulatingMsg}
            </span>
            <button
              onClick={handleReset}
              className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-gray-200 flex items-center gap-1 cursor-pointer text-[11px]"
            >
              <RotateCcw className="w-3 h-3 text-[#FF2B2B]" />
              <span>{t.simulator.realignBtn}</span>
            </button>
          </div>
        </div>

        {/* Right Side: Real-Time Calculated Metrics Table */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 font-mono flex items-center gap-2">
              <Target className="w-4 h-4 text-[#FF2B2B]" />
              Live Clinical Parameter Telemetry
            </h3>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-3 h-3" /> Live Sync
            </span>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            
            {/* Binocular PD */}
            <div className="glass-panel p-3 rounded-xl border border-white/10 hover:border-[#FF2B2B]/40 transition-colors">
              <span className="text-[11px] text-gray-400 block mb-0.5">{t.simulator.farPd}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-extrabold text-white font-mono">{binocularPd}</span>
                <span className="text-xs text-[#FF2B2B] font-bold">mm</span>
              </div>
              <div className="mt-1 flex justify-between text-[10px] text-gray-500">
                <span>OD: {rightPd}</span>
                <span>OS: {leftPd}</span>
              </div>
            </div>

            {/* Fitting Height */}
            <div className="glass-panel p-3 rounded-xl border border-white/10 hover:border-[#FF2B2B]/40 transition-colors">
              <span className="text-[11px] text-gray-400 block mb-0.5">{t.simulator.fittingHeight}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-extrabold text-[#4ade80] font-mono">{fittingHeight}</span>
                <span className="text-xs text-[#4ade80] font-bold">mm</span>
              </div>
              <span className="text-[10px] text-gray-500 block mt-1">Progressive Target</span>
            </div>

            {/* Vertex Distance */}
            <div className="glass-panel p-3 rounded-xl border border-white/10 hover:border-[#FF2B2B]/40 transition-colors">
              <span className="text-[11px] text-gray-400 block mb-0.5">{t.simulator.vertexDistance}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-extrabold text-sky-400 font-mono">{vertexDistance}</span>
                <span className="text-xs text-sky-400 font-bold">mm</span>
              </div>
              <span className="text-[10px] text-gray-500 block mt-1">Ref: 12.0 mm</span>
            </div>

            {/* Pantoscopic Angle */}
            <div className="glass-panel p-3 rounded-xl border border-white/10 hover:border-[#FF2B2B]/40 transition-colors">
              <span className="text-[11px] text-gray-400 block mb-0.5">{t.simulator.pantoscopicAngle}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-extrabold text-yellow-400 font-mono">{pantoscopicAngle}°</span>
                <span className="text-xs text-yellow-400 font-bold">deg</span>
              </div>
              <span className="text-[10px] text-gray-500 block mt-1">Optimum: 8.0°</span>
            </div>

            {/* Boxing Dimensions */}
            <div className="col-span-2 glass-panel p-3 rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-gray-400 block">{t.metricsShowcase.boxingName}</span>
                <span className="text-xs font-mono font-bold text-gray-200">52 (A) • 38 (B) • 18 (DBL) mm</span>
              </div>
              <div className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono text-gray-400">
                ISO 8624
              </div>
            </div>

          </div>

          {/* Interactive Trigger Sliders */}
          <div className="space-y-2 bg-[#050505] p-3 rounded-xl border border-white/10 text-xs">
            <div className="flex justify-between text-gray-300 font-mono text-[11px]">
              <span>Adjust Pupil Spacing (Simulate PD)</span>
              <span className="text-[#FF2B2B] font-bold">{leftPupilX - rightPupilX} px</span>
            </div>
            <input
              type="range"
              min="100"
              max="180"
              value={leftPupilX - rightPupilX}
              onChange={(e) => {
                const diff = parseInt(e.target.value);
                const mid = 250;
                setRightPupilX(mid - diff / 2);
                setLeftPupilX(mid + diff / 2);
              }}
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#FF2B2B]"
            />
          </div>

          {/* Export Demo Action */}
          <button
            onClick={() => alert('LENZO PDF Measurement Report Generated Successfully! (Demo Export)')}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-[#FF2B2B]/20 hover:to-[#FF2B2B]/10 border border-white/20 hover:border-[#FF2B2B]/40 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4 text-[#FF2B2B]" />
            <span>{t.simulator.exportPdf}</span>
          </button>

        </div>

      </div>

    </div>
  );
};
