import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OpticalSimulator } from './OpticalSimulator';
import { Download, ShieldCheck, Sparkles, Activity, Gauge, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenAdmin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onOpenAdmin }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-radial-gradient">
      
      {/* Background Decorative Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF2B2B]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#FF2B2B]/5 rounded-full blur-[90px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#FF2B2B]/30 backdrop-blur-md text-xs font-mono font-semibold text-[#FF2B2B] shadow-lg shadow-[#FF2B2B]/10 animate-float">
            <Sparkles className="w-4 h-4 text-[#FF2B2B]" />
            <span>{t.hero.badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2B2B] animate-ping"></span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.15]">
            {t.hero.titleStart}{' '}
            <span className="text-gradient-red block sm:inline">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Primary Neon Red Download */}
            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF2B2B] via-[#E53935] to-[#FF5252] text-white font-bold text-base shadow-xl shadow-[#FF2B2B]/30 hover:shadow-[#FF2B2B]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>{t.hero.primaryCta}</span>
            </button>

            {/* Secondary Request Admin Access */}
            <button
              onClick={onOpenAdmin}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-200 hover:text-white font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5 text-[#FF2B2B]" />
              <span>{t.hero.secondaryCta}</span>
            </button>

          </div>

          {/* Key Clinical Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto">
            
            <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#FF2B2B]/10 text-[#FF2B2B]">
                <Gauge className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-black text-white font-mono">{t.hero.stats.precisionVal}</span>
                <span className="text-xs text-gray-400 block">{t.hero.stats.precisionLabel}</span>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#FF2B2B]/10 text-[#FF2B2B]">
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-black text-white font-mono">{t.hero.stats.speedVal}</span>
                <span className="text-xs text-gray-400 block">{t.hero.stats.speedLabel}</span>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#FF2B2B]/10 text-[#FF2B2B]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-black text-[#4ade80] font-mono">{t.hero.stats.accuracyVal}</span>
                <span className="text-xs text-gray-400 block">{t.hero.stats.accuracyLabel}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Hero Interactive Device Mockup (Optical Simulator Component) */}
        <div className="mt-8 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF2B2B]/30 via-transparent to-[#FF2B2B]/30 rounded-3xl blur-xl opacity-70"></div>
          <OpticalSimulator />
        </div>

      </div>
    </section>
  );
};
