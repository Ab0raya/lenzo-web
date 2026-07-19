import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { APK_DOWNLOAD_URL } from '../data/translations';
import { Download, Tablet, Smartphone, Cpu, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface DownloadSectionProps {
  onOpenDownload: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenDownload }) => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-20 relative bg-[#0A0A0A] border-t border-white/5 bg-radial-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with System Status Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>{t.download.statusBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.download.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t.download.sectionSubtitle}
          </p>
        </div>

        {/* Exclusive Android Download Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Main Direct Android APK Download */}
          <div className="glass-panel p-8 rounded-3xl border border-[#FF2B2B]/40 glass-panel-hover flex flex-col justify-between group glow-red-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#FF2B2B] text-white text-[10px] font-mono font-bold rounded-bl-xl uppercase tracking-wider">
              Primary Package
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FF2B2B]/10 border border-[#FF2B2B]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7 text-[#FF2B2B]" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">{t.download.androidTitle}</h3>
              <p className="text-sm text-gray-400 mb-6">{t.download.androidDesc}</p>
            </div>

            <a
              href={APK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF2B2B] via-[#E53935] to-[#FF5252] hover:opacity-95 text-white font-extrabold text-sm shadow-xl shadow-[#FF2B2B]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>{t.download.androidBtn}</span>
            </a>
          </div>

          {/* Android Tablet Optimized */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Tablet className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">{t.download.windowsTitle}</h3>
              <p className="text-sm text-gray-400 mb-6">{t.download.windowsDesc}</p>
            </div>

            <button
              onClick={onOpenDownload}
              className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>{t.download.windowsBtn}</span>
            </button>
          </div>

          {/* Android Mobile Precision */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">{t.download.iosTitle}</h3>
              <p className="text-sm text-gray-400 mb-6">{t.download.iosDesc}</p>
            </div>

            <button
              onClick={onOpenDownload}
              className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.download.iosBtn}</span>
            </button>
          </div>

        </div>

        {/* Hardware Recommendations Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-[#FF2B2B]/10 text-[#FF2B2B]">
              <Cpu className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">{t.download.hardwareSpecsTitle}</h4>
              <p className="text-xs text-gray-400">{t.download.hardwareSpecsDesc}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2 bg-[#050505] px-3.5 py-2 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#FF2B2B]" />
              <span>{t.download.minRam}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#050505] px-3.5 py-2 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#FF2B2B]" />
              <span>{t.download.minCamera}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#050505] px-3.5 py-2 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#FF2B2B]" />
              <span>{t.download.osSupport}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
