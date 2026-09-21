import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, MailOpen, Heart, Sparkles, Sun } from 'lucide-react';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#facc15', '#fbbf24', '#f59e0b', '#ffffff', '#eab308']
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="carta-amor" className="py-16 px-4 max-w-4xl mx-auto text-center relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 text-amber-700 font-semibold text-sm bg-yellow-100 px-4 py-1.5 rounded-full border border-yellow-300">
          <Sun className="w-4 h-4 text-amber-600" />
          <span>Una Carta Especial Para Ti</span>
        </div>

        <h2 className="font-cursive text-4xl sm:text-6xl text-amber-950 font-bold">
          ¿Por qué regalarte Flores Amarillas hoy? 💛
        </h2>

        <p className="text-stone-600 font-sans-clean max-w-xl mx-auto text-base sm:text-lg">
          Toca el sobre para abrir la carta especial que he preparado con todo mi cariño.
        </p>

        {/* Envelope Container */}
        <div className="relative mt-8 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOpen}
            className="cursor-pointer max-w-xl w-full bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-50 rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-amber-300 relative overflow-hidden"
          >
            {/* Top decorative seal */}
            <div className="flex justify-between items-center border-b border-amber-200/80 pb-4 mb-6">
              <div className="flex items-center gap-2 text-amber-900 font-serif-romantic font-semibold">
                {isOpen ? <MailOpen className="w-6 h-6 text-amber-600" /> : <Mail className="w-6 h-6 text-amber-600" />}
                <span>Carta del 21 de Septiembre</span>
              </div>
              <span className="bg-amber-200/80 text-amber-950 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
                Con Amor
              </span>
            </div>

            {/* Closed State Hint */}
            {!isOpen && (
              <div className="py-12 flex flex-col items-center justify-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center shadow-lg animate-bounce">
                  <Heart className="w-8 h-8 fill-amber-950" />
                </div>
                <p className="font-cursive text-2xl text-amber-900 font-bold">
                  Toca aquí para abrir tu carta... ✨
                </p>
              </div>
            )}

            {/* Opened State Content */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.6 }}
                className="text-left space-y-4 font-sans-clean text-stone-700 text-base leading-relaxed bg-white/80 p-6 sm:p-8 rounded-2xl border border-amber-200 shadow-inner"
              >
                <p className="font-cursive text-3xl text-amber-900 font-bold border-b border-amber-100 pb-2">
                  Mi amor hermoso,
                </p>

                <p>
                  Regalar flores amarillas cada 21 de septiembre se ha convertido en una hermosa tradición para celebrar el inicio de la primavera, la luz y la alegría. Pero para mí, tú eres la razón por la que mi mundo florece todos los días. 🌼
                </p>

                <p>
                  Estas flores amarillas simbolizan mi deseo de verte siempre feliz, llena de sonrisas y con la certeza de que siempre estaré a tu lado para cuidarte, apoyarte y hacerte sonreír.
                </p>

                <p>
                  Gracias por ser mi persona favorita, por llenar mi vida de colores cálidos y por hacer que cada momento juntos sea inolvidable.
                </p>

                <div className="pt-4 border-t border-amber-100 flex flex-col items-end">
                  <p className="font-cursive text-2xl font-bold text-amber-900">
                    Con todo mi amor siempre,
                  </p>
                  <p className="font-serif-romantic text-sm text-amber-700 italic">
                    Tu pareja que te ama infinitamente 💛
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
