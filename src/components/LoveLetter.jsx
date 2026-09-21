import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, MailOpen, Heart, Sun } from 'lucide-react';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      confetti({
        particleCount: 110,
        spread: 85,
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
          <span>Una cartita especial para ti</span>
        </div>

        <h2 className="font-cursive text-4xl sm:text-6xl text-amber-950 font-bold">
          Para el amor de mi vida 🌻
        </h2>

        <p className="text-stone-600 font-sans-clean max-w-xl mx-auto text-base sm:text-lg">
          Toca el sobrecito para abrir la carta que te escribí con todo mi corazón.
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
                <span>21 de Septiembre</span>
              </div>
              <span className="bg-amber-200/80 text-amber-950 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
                Solo para ti
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
                className="text-left space-y-4 font-sans-clean text-stone-700 text-base leading-relaxed bg-white/90 p-6 sm:p-8 rounded-2xl border border-amber-200 shadow-inner"
              >
                <p className="font-cursive text-3xl text-amber-900 font-bold border-b border-amber-100 pb-2">
                  Mi reina hermosa,
                </p>

                <p>
                  Hoy es 21 de septiembre y en todos lados regalan flores amarillas, pero yo no quería darte solo una flor que con los días se apaga. Quería regalarte algo hecho por mí, un rinconcito nuestro que quede guardado para siempre, donde cada pétalo y cada detalle te recuerden lo mucho que te amo. 🌼
                </p>

                <p>
                  Gracias por estar a mi lado, por tus abrazos que me curan cualquier día pesado, por tu risa hermosa que ilumina todo y por hacer que cada momento juntos sea el mejor de mi vida.
                </p>

                <p>
                  Estas flores amarillas son para decirte que mi felicidad eres tú, hoy y todos los días del año.
                </p>

                <div className="pt-4 border-t border-amber-100 flex flex-col items-end">
                  <p className="font-cursive text-3xl font-bold text-amber-900">
                    Te amo con todo mi corazón,
                  </p>
                  <p className="font-cursive text-xl text-amber-700 font-bold mt-1">
                    Tu esposito Edehilton 💛
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
