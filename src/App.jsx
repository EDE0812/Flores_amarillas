import React from 'react';
import YellowPetalsCanvas from './components/YellowPetalsCanvas';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import LoveLetter from './components/LoveLetter';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100/30 to-yellow-50 text-stone-800 font-sans-clean relative overflow-x-hidden selection:bg-yellow-300 selection:text-amber-900">
      {/* Dynamic 2D Canvas Petals Background */}
      <YellowPetalsCanvas />

      {/* Floating Audio Player */}
      <MusicPlayer />

      {/* Main Content Layout */}
      <main className="relative z-20 space-y-8 sm:space-y-16">
        <HeroSection />
        <LoveLetter />
        <PhotoGallery />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
