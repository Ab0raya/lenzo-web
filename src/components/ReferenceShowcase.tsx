import React from 'react';
import { ThreeDViewer } from './ThreeDViewer';
import { Box, Target, Sliders, CheckCircle2, Cpu } from 'lucide-react';

export const ReferenceShowcase: React.FC = () => {

  return (
    <section id="reference" className="py-20 relative bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2B2B]/10 border border-[#FF2B2B]/20 text-[#FF2B2B] text-xs font-mono font-bold">
            <Box className="w-3.5 h-3.5" />
            <span>3D CAD Reference Hardware</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Precision 3D Frame Calibration Reference
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            The LENZO hardware reference clip attaches seamlessly above customer spectacle frames, establishing an absolute physical baseline for 0.1mm optical accuracy.
          </p>
        </div>

        {/* Workspace Grid: 3D Viewport on Left, Specs & Information on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 3D STL Canvas */}
          <div className="lg:col-span-7">
            <ThreeDViewer stlUrl="/frame_refernce.stl" />
          </div>

          {/* Right Column: Technical Information & Calibration Guide */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#FF2B2B]/10 text-[#FF2B2B] border border-[#FF2B2B]/20">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Sub-Millimeter Pixel-to-mm Mapping</h3>
                  <span className="text-xs font-mono text-gray-400">Computer Vision Scale Calibration</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                By detecting the 80.0mm physical reference targets on the 3D clip, LENZO dynamically corrects for camera distance, lens distortion, and perspective angle variations.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-3">
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0A0A0A] border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Universal Frame Clip Design</h4>
                  <p className="text-xs text-gray-400 mt-1">Compatible with acetate, metal wire, and rimless frame bridges without scratching spectacle coatings.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0A0A0A] border border-white/10">
                <Sliders className="w-5 h-5 text-[#FF2B2B] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Dual-Phase Marker Alignment</h4>
                  <p className="text-xs text-gray-400 mt-1">Enables automated crosshair lock for Phase A (Frontal PD/FH) and Phase B (Side Profile Vertex Distance/Panto Angle).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0A0A0A] border border-white/10">
                <Cpu className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">3D Printable & Autoclavable</h4>
                  <p className="text-xs text-gray-400 mt-1">Lightweight biocompatible polymer structure available for direct lab 3D printing or clinic supply ordering.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
