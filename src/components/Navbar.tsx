import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Download, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenAdmin }) => {
  const { t, toggleLanguage, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.features, href: '#features' },
    { name: '3D Reference', href: '#reference' },
    { name: t.nav.metrics, href: '#metrics' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.download, href: '#download' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF2B2B] to-[#990000] p-[1px] flex items-center justify-center glow-red-sm group-hover:glow-red-md transition-all duration-300 overflow-hidden">
              <div className="w-full h-full bg-[#0A0A0A] rounded-[11px] flex items-center justify-center p-1">
                <img
                  src="/lenzo_logo.png"
                  alt="LENZO Logo"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-wider text-white font-outfit">
                LEN<span className="text-[#FF2B2B]">ZO</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gray-400 font-mono -mt-1">
                Android Optics Engine
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF2B2B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:bg-white/10 hover:border-[#FF2B2B]/40 transition-all duration-300 text-xs font-semibold cursor-pointer"
              title="Toggle Language"
            >
              <Globe className="w-4 h-4 text-[#FF2B2B]" />
              <span>{t.nav.langBtn}</span>
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-400 uppercase">
                {language}
              </span>
            </button>

            {/* Request Admin secondary button */}
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300 text-xs font-semibold cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-gray-400" />
              <span>{t.hero.secondaryCta}</span>
            </button>

            {/* Neon Red CTA Download */}
            <button
              onClick={onOpenDownload}
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF2B2B] via-[#E53935] to-[#FF5252] rounded-xl group-hover:opacity-100 opacity-80 transition-opacity"></span>
              <div className="relative px-5 py-2.5 rounded-[11px] bg-[#050505] group-hover:bg-[#FF2B2B]/10 flex items-center gap-2 text-white font-semibold text-xs transition-all duration-300 glow-red-sm group-hover:glow-red-md">
                <Download className="w-4 h-4 text-[#FF2B2B] group-hover:translate-y-0.5 transition-transform" />
                <span>{t.nav.downloadBtn}</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:text-white text-xs font-semibold flex items-center gap-1"
            >
              <Globe className="w-4 h-4 text-[#FF2B2B]" />
              <span className="uppercase text-[11px]">{language}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF2B2B]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm"
            >
              <ShieldCheck className="w-4 h-4 text-[#FF2B2B]" />
              <span>{t.hero.secondaryCta}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#FF2B2B] to-[#E53935] text-white font-bold text-sm glow-red-md"
            >
              <Download className="w-4 h-4" />
              <span>{t.nav.downloadBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
