import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Eye, MoveVertical, EyeOff, Compass, Maximize2, Box, Info, CheckCircle2 } from 'lucide-react';

export const ParameterShowcase: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const parameters = [
    {
      id: 'pd',
      icon: Eye,
      name: t.metricsShowcase.pdName,
      desc: t.metricsShowcase.pdDesc,
      range: t.metricsShowcase.pdRange,
      importance: 'Essential for eliminating unwanted prism effects and ensuring proper optical center alignment.',
      diagramType: 'pd',
    },
    {
      id: 'fh',
      icon: MoveVertical,
      name: t.metricsShowcase.fhName,
      desc: t.metricsShowcase.fhDesc,
      range: t.metricsShowcase.fhRange,
      importance: 'Critical for progressive addition lenses (PALs) to align distance, intermediate, and reading corridors.',
      diagramType: 'fh',
    },
    {
      id: 'vd',
      icon: EyeOff,
      name: t.metricsShowcase.vdName,
      desc: t.metricsShowcase.vdDesc,
      range: t.metricsShowcase.vdRange,
      importance: 'Adjusts effective power calculations for high Rx lenses (> ±4.00 D).',
      diagramType: 'vd',
    },
    {
      id: 'panto',
      icon: Compass,
      name: t.metricsShowcase.pantoName,
      desc: t.metricsShowcase.pantoDesc,
      range: t.metricsShowcase.pantoRange,
      importance: 'Optimizes pantoscopic tilt to match natural downward gaze during reading.',
      diagramType: 'panto',
    },
    {
      id: 'wrap',
      icon: Maximize2,
      name: t.metricsShowcase.wrapName,
      desc: t.metricsShowcase.wrapDesc,
      range: t.metricsShowcase.wrapRange,
      importance: 'Compensates oblique astigmatism in sports and curved wrap-around frames.',
      diagramType: 'wrap',
    },
    {
      id: 'boxing',
      icon: Box,
      name: t.metricsShowcase.boxingName,
      desc: t.metricsShowcase.boxingDesc,
      range: t.metricsShowcase.boxingRange,
      importance: 'Standardizes lens blank sizing and minimum edge thickness calculations for lab surfacing.',
      diagramType: 'boxing',
    },
  ];

  const current = parameters[activeTab];

  return (
    <section id="metrics" className="py-20 relative bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2B2B] bg-[#FF2B2B]/10 px-3 py-1 rounded-full inline-block border border-[#FF2B2B]/20">
            {t.nav.metrics}
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.metricsShowcase.sectionTitle}
          </h3>
          <p className="text-base sm:text-lg text-gray-400">
            {t.metricsShowcase.sectionSubtitle}
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Parameter Selection Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {parameters.map((param, index) => {
              const IconComponent = param.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={param.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? 'bg-[#FF2B2B]/10 border-[#FF2B2B] glow-red-sm shadow-lg'
                      : 'glass-panel border-white/10 hover:border-white/20 text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-lg ${
                        isActive ? 'bg-[#FF2B2B] text-white' : 'bg-white/5 text-gray-400'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{param.name}</h4>
                      <span className="text-[11px] text-gray-400 block font-mono">{param.range}</span>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#FF2B2B] animate-ping' : 'bg-gray-700'}`}></div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Parameter Inspection Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 glow-red-sm space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#FF2B2B]/10 text-[#FF2B2B] border border-[#FF2B2B]/20">
                  <current.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">{current.name}</h4>
                  <span className="text-xs text-gray-400 font-mono">LENZO Clinical Precision Module</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified Standard
              </span>
            </div>

            {/* Description */}
            <p className="text-base text-gray-300 leading-relaxed">
              {current.desc}
            </p>

            {/* Visual SVG Diagram Representation */}
            <div className="bg-[#030303] rounded-xl p-4 border border-white/10 flex items-center justify-center min-h-[220px]">
              <svg className="w-full h-44 max-w-md" viewBox="0 0 400 160">
                <rect x="0" y="0" width="400" height="160" rx="8" fill="#050505" />

                {current.diagramType === 'pd' && (
                  <g>
                    <circle cx="130" cy="80" r="30" fill="none" stroke="#FF2B2B" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="270" cy="80" r="30" fill="none" stroke="#FF2B2B" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="130" cy="80" r="6" fill="#FF2B2B" />
                    <circle cx="270" cy="80" r="6" fill="#FF2B2B" />
                    <line x1="130" y1="80" x2="270" y2="80" stroke="#38bdf8" strokeWidth="3" />
                    <line x1="130" y1="65" x2="130" y2="95" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="270" y1="65" x2="270" y2="95" stroke="#38bdf8" strokeWidth="2" />
                    <text x="200" y="55" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">
                      Binocular PD: 63.5 mm
                    </text>
                  </g>
                )}

                {current.diagramType === 'fh' && (
                  <g>
                    <rect x="150" y="30" width="100" height="100" rx="12" fill="none" stroke="#FF2B2B" strokeWidth="2" />
                    <line x1="150" y1="130" x2="250" y2="130" stroke="#4ade80" strokeWidth="3" />
                    <circle cx="200" cy="70" r="8" fill="#FF2B2B" />
                    <line x1="200" y1="70" x2="200" y2="130" stroke="#4ade80" strokeWidth="2" strokeDasharray="4 4" />
                    <text x="220" y="105" fill="#4ade80" fontSize="13" fontWeight="bold">
                      FH: 18.0 mm
                    </text>
                  </g>
                )}

                {current.diagramType === 'vd' && (
                  <g>
                    <path d="M 170 40 Q 190 80 170 120" fill="none" stroke="#38bdf8" strokeWidth="4" />
                    <path d="M 210 50 Q 230 80 210 110" fill="none" stroke="#FF2B2B" strokeWidth="4" />
                    <line x1="180" y1="80" x2="220" y2="80" stroke="#facc15" strokeWidth="2" />
                    <text x="200" y="65" fill="#facc15" fontSize="13" fontWeight="bold" textAnchor="middle">
                      VD: 12.0 mm
                    </text>
                  </g>
                )}

                {current.diagramType === 'panto' && (
                  <g>
                    <line x1="200" y1="20" x2="200" y2="140" stroke="rgba(255,255,255,0.3)" strokeDasharray="4 4" />
                    <line x1="215" y1="25" x2="185" y2="135" stroke="#FF2B2B" strokeWidth="4" />
                    <path d="M 200 110 A 30 30 0 0 1 190 120" fill="none" stroke="#facc15" strokeWidth="3" />
                    <text x="240" y="90" fill="#facc15" fontSize="14" fontWeight="bold">
                      Tilt Angle: 8.5°
                    </text>
                  </g>
                )}

                {current.diagramType === 'wrap' && (
                  <g>
                    <path d="M 100 90 Q 200 40 300 90" fill="none" stroke="#FF2B2B" strokeWidth="4" />
                    <line x1="100" y1="90" x2="300" y2="90" stroke="rgba(255,255,255,0.3)" strokeDasharray="4 4" />
                    <text x="200" y="115" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">
                      Panoramic Angle: 5.0°
                    </text>
                  </g>
                )}

                {current.diagramType === 'boxing' && (
                  <g>
                    <rect x="120" y="35" width="160" height="90" fill="none" stroke="#FF2B2B" strokeWidth="2" strokeDasharray="3 3" />
                    <text x="200" y="25" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Lens Width (A): 52mm</text>
                    <text x="295" y="85" fill="#4ade80" fontSize="12" fontWeight="bold">Height (B): 38mm</text>
                  </g>
                )}
              </svg>
            </div>

            {/* Clinical Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#050505] p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-xs text-gray-400 font-semibold flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#FF2B2B]" />
                  {t.metricsShowcase.clinicalImportance}
                </span>
                <p className="text-xs text-gray-300 leading-normal">{current.importance}</p>
              </div>

              <div className="bg-[#050505] p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-xs text-gray-400 font-semibold flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#38bdf8]" />
                  {t.metricsShowcase.typicalRange}
                </span>
                <span className="text-xs font-mono font-bold text-white block mt-1">{current.range}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
