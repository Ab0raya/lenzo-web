import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ReferenceShowcase } from './components/ReferenceShowcase';
import { ParameterShowcase } from './components/ParameterShowcase';
import { HowItWorks } from './components/HowItWorks';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export function AppContent() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white">
      <Navbar
        onOpenDownload={() => setDownloadOpen(true)}
      />

      <main className="flex-grow">
        <Hero />
        <FeaturesGrid />
        <ReferenceShowcase />
        <ParameterShowcase />
        <HowItWorks />
        <DownloadSection onOpenDownload={() => setDownloadOpen(true)} />
      </main>

      <Footer
        onOpenSupport={() => setSupportOpen(true)}
      />

      <Modals
        downloadOpen={downloadOpen}
        supportOpen={supportOpen}
        onCloseDownload={() => setDownloadOpen(false)}
        onCloseSupport={() => setSupportOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
