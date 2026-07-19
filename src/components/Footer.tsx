import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail } from 'lucide-react';

interface FooterProps {
  onOpenSupport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSupport }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#030303] text-gray-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF2B2B] p-[1px] flex items-center justify-center glow-red-sm overflow-hidden">
                <div className="w-full h-full bg-[#0A0A0A] rounded-[11px] flex items-center justify-center p-1">
                  <img src="/lenzo_logo.png" alt="LENZO Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <span className="text-2xl font-black text-white tracking-wider">
                LEN<span className="text-[#FF2B2B]">ZO</span>
              </span>
            </div>
            <p className="text-sm font-semibold text-[#FF2B2B]">{t.footer.slogan}</p>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-white transition-colors">{t.nav.features}</a>
              </li>
              <li>
                <a href="#reference" className="hover:text-white transition-colors">{t.nav.reference3d}</a>
              </li>
              <li>
                <a href="#metrics" className="hover:text-white transition-colors">{t.nav.metrics}</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">{t.nav.howItWorks}</a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">{t.nav.download}</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {t.nav.support} & Contact
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={onOpenSupport}
                className="flex items-center gap-2 hover:text-[#FF2B2B] transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#FF2B2B]" />
                <span>support@lenzo-optics.com</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
