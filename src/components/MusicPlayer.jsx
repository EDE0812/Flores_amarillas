import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  // Path in public/music/cancion.mp3
  const musicSrc = '/music/cancion.mp3';

  const togglePlay = (e) => {
    e?.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Autoplay blocked or file not found:', err);
        });
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src={musicSrc} loop />

      {/* Floating Audio Widget */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-4 right-4 z-[80]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-full shadow-xl border border-amber-300/80 p-1.5 transition-all duration-300 flex items-center">
          {/* Collapsed State: Compact Circular Button */}
          {!isHovered && (
            <motion.button
              key="compact"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={togglePlay}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-950 font-bold shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              <div className={`w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
                {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
              </div>
              <span className="text-xs font-bold tracking-tight pr-1">
                {isPlaying ? 'Música 🎵' : 'Play 🎵'}
              </span>
            </motion.button>
          )}

          {/* Expanded State: Full Control Bar on Hover */}
          {isHovered && (
            <motion.div
              key="expanded"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 px-3 py-1 overflow-hidden whitespace-nowrap"
            >
              {/* Disc */}
              <div
                onClick={togglePlay}
                className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all ${
                  isPlaying
                    ? 'bg-gradient-to-tr from-amber-400 to-yellow-300 animate-spin text-amber-950'
                    : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                }`}
                style={{ animationDuration: '4s' }}
              >
                <span className="text-sm">🌻</span>
              </div>

              <div className="flex flex-col pr-1 cursor-pointer" onClick={togglePlay}>
                <span className="text-xs font-bold text-amber-900 leading-tight">
                  {isPlaying ? 'Nuestra Canción 🎵' : 'Música de Fondo'}
                </span>
                <span className="text-[10px] text-amber-700 font-medium">
                  {isPlaying ? 'Reproduciendo...' : 'Click para escuchar'}
                </span>
              </div>

              {/* Play / Pause button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-sm active:scale-95 cursor-pointer"
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
              </button>

              {/* Mute button */}
              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors active:scale-95 cursor-pointer"
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}
