import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { APK_DOWNLOAD_URL } from '../data/translations';
import { X, Download, ShieldCheck, QrCode, CheckCircle, Send, Smartphone } from 'lucide-react';

interface ModalsProps {
  downloadOpen: boolean;
  adminOpen: boolean;
  supportOpen: boolean;
  onCloseDownload: () => void;
  onCloseAdmin: () => void;
  onCloseSupport: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  downloadOpen,
  adminOpen,
  supportOpen,
  onCloseDownload,
  onCloseAdmin,
  onCloseSupport,
}) => {
  const { t } = useLanguage();
  const [adminSubmitted, setAdminSubmitted] = useState(false);
  const [supportSubmitted, setSupportSubmitted] = useState(false);

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminSubmitted(true);
    setTimeout(() => {
      setAdminSubmitted(false);
      onCloseAdmin();
    }, 2500);
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSupportSubmitted(true);
    setTimeout(() => {
      setSupportSubmitted(false);
      onCloseSupport();
    }, 2500);
  };

  return (
    <>
      {/* 1. Download Modal */}
      {downloadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 glow-red-md space-y-6">
            <button
              onClick={onCloseDownload}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#FF2B2B]/10 text-[#FF2B2B]">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">{t.modals.downloadTitle}</h3>
                <p className="text-xs text-gray-400">{t.modals.downloadSubtitle}</p>
              </div>
            </div>

            {/* Exclusive Android Direct Download */}
            <div className="space-y-3">
              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-5 rounded-2xl bg-gradient-to-r from-[#FF2B2B] via-[#E53935] to-[#FF5252] text-white font-extrabold text-sm flex items-center justify-between shadow-xl shadow-[#FF2B2B]/40 cursor-pointer hover:opacity-95 transition-opacity"
              >
                <div className="flex items-center gap-3.5">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <span className="block font-black text-base">Download LENZO Android APK (v2.4.1)</span>
                    <span className="text-xs text-white/90 font-mono">68.4 MB • Official Direct Release</span>
                  </div>
                </div>
                <Download className="w-6 h-6 animate-bounce" />
              </a>
            </div>

            {/* Simulated QR Code Scan */}
            <div className="bg-[#050505] p-4 rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="p-2 bg-white rounded-xl flex-shrink-0">
                <svg className="w-20 h-20" viewBox="0 0 100 100">
                  <rect x="0" y="0" width="100" height="100" fill="#ffffff" />
                  <rect x="10" y="10" width="30" height="30" fill="#050505" />
                  <rect x="15" y="15" width="20" height="20" fill="#ffffff" />
                  <rect x="20" y="20" width="10" height="10" fill="#050505" />
                  
                  <rect x="60" y="10" width="30" height="30" fill="#050505" />
                  <rect x="65" y="15" width="20" height="20" fill="#ffffff" />
                  <rect x="70" y="20" width="10" height="10" fill="#050505" />
                  
                  <rect x="10" y="60" width="30" height="30" fill="#050505" />
                  <rect x="15" y="65" width="20" height="20" fill="#ffffff" />
                  <rect x="20" y="70" width="10" height="10" fill="#050505" />
                  
                  <rect x="50" y="50" width="15" height="15" fill="#FF2B2B" />
                  <rect x="70" y="70" width="15" height="15" fill="#050505" />
                  <rect x="50" y="75" width="10" height="10" fill="#FF2B2B" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-[#FF2B2B]" /> Scan to Install on Tablet
                </span>
                <p className="text-[11px] text-gray-400 leading-normal">
                  Open your iPad or Android Tablet camera to download & activate instantly.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. Admin Request Access Modal */}
      {adminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 glow-red-md space-y-6">
            <button
              onClick={onCloseAdmin}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#FF2B2B]/10 text-[#FF2B2B]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">{t.modals.adminTitle}</h3>
                <p className="text-xs text-gray-400">{t.modals.adminSubtitle}</p>
              </div>
            </div>

            {adminSubmitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                <p className="text-sm font-bold text-white">{t.modals.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleAdminSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">{t.modals.nameLabel}</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Alexander Vance, OD"
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:border-[#FF2B2B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">{t.modals.emailLabel}</label>
                  <input
                    type="email"
                    required
                    placeholder="practitioner@opticsclinic.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:border-[#FF2B2B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">{t.modals.clinicLabel}</label>
                  <input
                    type="text"
                    required
                    placeholder="Precision Vision Optical Lab"
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:border-[#FF2B2B] focus:outline-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onCloseAdmin}
                    className="w-1/3 py-3 rounded-xl bg-white/10 text-gray-300 hover:text-white text-xs font-bold cursor-pointer"
                  >
                    {t.modals.cancelBtn}
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-[#FF2B2B] to-[#E53935] text-white text-xs font-bold glow-red-sm cursor-pointer hover:opacity-90"
                  >
                    {t.modals.submitBtn}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

      {/* 3. Support Modal */}
      {supportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 glow-red-md space-y-6">
            <button
              onClick={onCloseSupport}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#FF2B2B]/10 text-[#FF2B2B]">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">{t.modals.supportTitle}</h3>
                <p className="text-xs text-gray-400">{t.modals.supportSubtitle}</p>
              </div>
            </div>

            {supportSubmitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                <p className="text-sm font-bold text-white">{t.modals.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSupportSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">{t.modals.emailLabel}</label>
                  <input
                    type="email"
                    required
                    placeholder="support@optometry.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:border-[#FF2B2B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">{t.modals.messageLabel}</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry or technical integration question..."
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:border-[#FF2B2B] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onCloseSupport}
                    className="w-1/3 py-3 rounded-xl bg-white/10 text-gray-300 hover:text-white text-xs font-bold cursor-pointer"
                  >
                    {t.modals.closeBtn}
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-[#FF2B2B] to-[#E53935] text-white text-xs font-bold glow-red-sm cursor-pointer hover:opacity-90"
                  >
                    {t.modals.sendBtn}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
};
