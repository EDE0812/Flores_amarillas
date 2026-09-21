import React from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const launchCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.8 },
      colors: ['#facc15', '#fbbf24', '#f59e0b', '#eab308', '#ffffff']
    });
  };

  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-amber-50/50 via-yellow-100/60 to-amber-200/50 text-stone-800 relative z-20 border-t border-amber-200/60">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-amber-400 text-amber-950 flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-3xl">🌻</span>
        </div>

        <h3 className="font-cursive text-4xl sm:text-5xl font-bold text-amber-950">
          ¡Feliz 21 de Septiembre! ✨
        </h3>

        <p className="font-sans-clean text-stone-700 max-w-xl mx-auto text-base sm:text-lg">
          Espero que este detalle te haya sacado una gran sonrisa. Cada pétalo y cada nota de esta página fue hecha con mucho amor especialmente para ti.
        </p>

        <div className="pt-2">
          <button
            onClick={launchCelebration}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-amber-950 font-bold rounded-full shadow-lg hover:shadow-yellow-300/60 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            <span>¡Celebrar con más pétalos! 🌻</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-amber-800/80 font-medium pt-8 border-t border-amber-200/60">
          Hecho con 💛 especialmente para ti • 2026
        </p>
      </div>
    </footer>
  );
}
