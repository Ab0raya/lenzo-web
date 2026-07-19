import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Camera, Ruler, FileText, BellRing, Languages, ArrowRight } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Camera,
      title: t.features.dualScanTitle,
      desc: t.features.dualScanDesc,
      badge: 'Phase A & B',
    },
    {
      icon: Ruler,
      title: t.features.metricsSuiteTitle,
      desc: t.features.metricsSuiteDesc,
      badge: '6 Core Metrics',
    },
    {
      icon: FileText,
      title: t.features.pdfReportsTitle,
      desc: t.features.pdfReportsDesc,
      badge: 'Instant PDF',
    },
    {
      icon: BellRing,
      title: t.features.adminNotifTitle,
      desc: t.features.adminNotifDesc,
      badge: 'Real-Time Sync',
    },
    {
      icon: Languages,
      title: t.features.bilingualTitle,
      desc: t.features.bilingualDesc,
      badge: 'EN / AR (RTL)',
    },
  ];

  return (
    <section id="features" className="py-20 relative bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2B2B] bg-[#FF2B2B]/10 px-3 py-1 rounded-full inline-block border border-[#FF2B2B]/20">
            {t.nav.features}
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.features.sectionTitle}
          </h3>
          <p className="text-base sm:text-lg text-gray-400">
            {t.features.sectionSubtitle}
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl glass-panel p-6 sm:p-8 glass-panel-hover flex flex-col justify-between"
              >
                {/* Glow Backdrop */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2B2B]/5 rounded-full blur-2xl group-hover:bg-[#FF2B2B]/15 transition-all duration-300 pointer-events-none"></div>

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center group-hover:border-[#FF2B2B] group-hover:glow-red-sm transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#FF2B2B] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF2B2B] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Action Hint */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                  <span>Explore Metric Specs</span>
                  <ArrowRight className="w-4 h-4 text-[#FF2B2B] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
