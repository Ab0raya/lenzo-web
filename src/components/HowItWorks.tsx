import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Smartphone, Camera, Sliders, FileCheck2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      icon: Smartphone,
      title: t.howItWorks.step1Title,
      desc: t.howItWorks.step1Desc,
    },
    {
      num: '02',
      icon: Camera,
      title: t.howItWorks.step2Title,
      desc: t.howItWorks.step2Desc,
    },
    {
      num: '03',
      icon: Sliders,
      title: t.howItWorks.step3Title,
      desc: t.howItWorks.step3Desc,
    },
    {
      num: '04',
      icon: FileCheck2,
      title: t.howItWorks.step4Title,
      desc: t.howItWorks.step4Desc,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2B2B] bg-[#FF2B2B]/10 px-3 py-1 rounded-full inline-block border border-[#FF2B2B]/20">
            {t.nav.howItWorks}
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.howItWorks.sectionTitle}
          </h3>
          <p className="text-base sm:text-lg text-gray-400">
            {t.howItWorks.sectionSubtitle}
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-white/20 font-mono group-hover:text-[#FF2B2B] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center group-hover:border-[#FF2B2B] group-hover:glow-red-sm transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#FF2B2B]" />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>

                {/* Flow Arrow Indicator for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF2B2B]" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
