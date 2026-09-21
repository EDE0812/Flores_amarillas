import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [bloomCount, setBloomCount] = useState(0);

  const triggerYellowConfetti = () => {
    setBloomCount((prev) => prev + 1);

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#facc15', '#fbbf24', '#f59e0b', '#fef08a', '#ffffff', '#eab308'],
      scalar: 1.2
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-16 pb-12 text-center">
      {/* Soft Romantic Radial Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] bg-yellow-300/35 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

      {/* Date badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 border border-amber-300/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm"
      >
        <Sparkles className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
        <span>21 de Septiembre • Día de las Flores Amarillas</span>
        <Sparkles className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-cursive text-5xl sm:text-7xl md:text-8xl font-bold text-amber-900 leading-tight mb-4 drop-shadow-sm"
      >
        Para Ti, Mis Flores Amarillas 🌻
      </motion.h1>

      {/* Subtitle / Romantic Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-sans-clean max-w-2xl text-stone-700 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 px-2"
      >
        Hoy 21 de septiembre quiero regalarte este rinconcito lleno de luz, pétalos y
        recuerdos especiales. Porque tu presencia ilumina cada uno de mis días como la primavera más hermosa. ✨💛
      </motion.p>

      {/* Perfectly Centered Interactive Vector Sunflower */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative my-4 cursor-pointer group flex flex-col items-center"
        onClick={triggerYellowConfetti}
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
          {/* SVG Sunflower Petals & Disc (Perfectly Center Aligned) */}
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
          >
            <defs>
              {/* Petal Gradient */}
              <linearGradient id="petalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="45%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#fef08a" />
              </linearGradient>

              {/* Center Disc Gradient */}
              <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#78350f" />
                <stop offset="70%" stopColor="#451a03" />
                <stop offset="100%" stopColor="#290e02" />
              </radialGradient>
            </defs>

            {/* 16 Perfectly Centered Petals */}
            <g transform="translate(150, 150)">
              {[...Array(16)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 22.5})`}>
                  <ellipse
                    cx="0"
                    cy="-72"
                    rx="18"
                    ry="54"
                    fill="url(#petalGrad)"
                    stroke="#d97706"
                    strokeWidth="1.2"
                  />
                  {/* Subtle inner petal vein line */}
                  <line
                    x1="0"
                    y1="-30"
                    x2="0"
                    y2="-105"
                    stroke="#b45309"
                    strokeWidth="0.8"
                    opacity="0.5"
                  />
                </g>
              ))}

              {/* Center Brown Disc */}
              <circle
                cx="0"
                cy="0"
                r="52"
                fill="url(#centerGrad)"
                stroke="#fbbf24"
                strokeWidth="3.5"
              />

              {/* Textured Seed Dots */}
              {[...Array(24)].map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const r = i % 2 === 0 ? 32 : 22;
                return (
                  <circle
                    key={i}
                    cx={Math.cos(angle) * r}
                    cy={Math.sin(angle) * r}
                    r="2.5"
                    fill="#fde047"
                    opacity="0.4"
                  />
                );
              })}
            </g>
          </svg>

          {/* Absolute Center Content (Heart & Counter) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-center">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 fill-yellow-400 animate-pulse drop-shadow" />
            <span className="text-xs sm:text-sm font-bold text-yellow-100 mt-1 font-mono">
              {bloomCount > 0 ? `${bloomCount} 💛` : 'Tócame'}
            </span>
          </div>
        </div>

        <p className="text-xs text-amber-700 font-semibold mt-3 animate-bounce">
          (Haz clic en el girasol para soltar más pétalos 🌸)
        </p>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-amber-800 text-xs font-semibold gap-1 cursor-pointer"
        onClick={() => {
          const target = document.getElementById('carta-amor');
          target?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span>Desliza hacia abajo</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-amber-600" />
      </motion.div>
    </section>
  );
}
