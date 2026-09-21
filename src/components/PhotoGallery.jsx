import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, X, Sparkles, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Photos array mapped to the user's uploaded images
  const photos = [
    {
      id: 1,
      src: '/images/20230919_100522.jpg',
      caption: 'La flor más hermosa de mi jardín 🌻',
      date: 'Septiembre 2023'
    },
    {
      id: 2,
      src: '/images/20230603_173547.jpg',
      caption: 'Atardeceres dorados a tu lado 🌅',
      date: 'Junio 2023'
    },
    {
      id: 3,
      src: '/images/0917a2c558c96b0922d4af6db50db304.jpg',
      caption: 'Tus besos que me alegran la vida 💋✨',
      date: 'Recuerdo Especial'
    },
    {
      id: 4,
      src: '/images/20230602_125612.jpg',
      caption: 'Nuestros viajes y aventuras juntos 🗺️',
      date: 'Junio 2023'
    },
    {
      id: 5,
      src: '/images/20230523_114656.jpg',
      caption: 'Descubriendo nuevos lugares contigo ⚓💛',
      date: 'Mayo 2023'
    },
    {
      id: 6,
      src: '/images/IMG_20230520_220848_848.jpg',
      caption: 'Noches divertidas e inolvidables 🥂✨',
      date: 'Mayo 2023'
    },
    {
      id: 7,
      src: '/images/20230916_190538.jpg',
      caption: 'Cenas mágicas y miradas cómplices 🍷',
      date: 'Septiembre 2023'
    },
    {
      id: 8,
      src: '/images/20230401_175932.jpg',
      caption: 'Caminatas bajo las estrellas 🌌',
      date: 'Abril 2023'
    },
    {
      id: 9,
      src: '/images/IMG-20230308-WA0027.jpg',
      caption: 'Siempre juntos, cuidándonos y abrazándonos 💖',
      date: 'Marzo 2023'
    },
    {
      id: 10,
      src: '/images/20230422_182406.jpg',
      caption: 'Tu sonrisa iluminando mis noches 🌙',
      date: 'Abril 2023'
    },
    {
      id: 11,
      src: '/images/20230625_145235.jpg',
      caption: 'Mi lugar favorito en el mundo eres tú 🏡💛',
      date: 'Junio 2023'
    },
    {
      id: 12,
      src: '/images/20230907_141355.jpg',
      caption: 'Nuestros momentos de ternura 🐾',
      date: 'Septiembre 2023'
    }
  ];

  // Auto-play carousel timer
  useEffect(() => {
    if (!isAutoPlaying || selectedPhoto) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, selectedPhoto, photos.length]);

  // Disable body scroll when lightbox modal is active
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhoto]);

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentPhoto = photos[currentIndex];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto relative z-20">
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 text-amber-800 font-semibold text-sm bg-yellow-100 px-4 py-1.5 rounded-full border border-yellow-300">
          <Camera className="w-4 h-4 text-amber-600" />
          <span>Nuestra Galería de Recuerdos</span>
        </div>

        <h2 className="font-cursive text-4xl sm:text-6xl text-amber-950 font-bold">
          Carrusel de Recuerdos Contigo 📸
        </h2>

        <p className="text-stone-600 font-sans-clean max-w-lg mx-auto text-base">
          Cada fotografía cuenta un pedacito inolvidable de nuestra historia de amor.
        </p>
      </div>

      {/* Interactive Auto Carousel */}
      <div
        className="relative max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-3xl shadow-xl border border-amber-200/80 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Display Frame */}
        <div
          onClick={() => setSelectedPhoto(currentPhoto)}
          className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-900 cursor-pointer shadow-inner border border-amber-100 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPhoto.id}
              src={currentPhoto.src}
              alt={currentPhoto.caption}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-contain bg-stone-900"
            />
          </AnimatePresence>

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 sm:p-6">
            <span className="text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 bg-black/50 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-300" /> Toca para ampliar
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsAutoPlaying(!isAutoPlaying);
              }}
              className="text-white bg-black/50 p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
              title={isAutoPlaying ? 'Pausar carrusel' : 'Reanudar carrusel'}
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Foto anterior"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-amber-900 shadow-md border border-amber-200 flex items-center justify-center hover:bg-amber-400 hover:text-white transition-all active:scale-90 z-10 cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Siguiente foto"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-amber-900 shadow-md border border-amber-200 flex items-center justify-center hover:bg-amber-400 hover:text-white transition-all active:scale-90 z-10 cursor-pointer"
        >
          <ChevronRight size={22} />
        </button>

        {/* Photo Caption & Date */}
        <div className="mt-4 text-center space-y-1">
          <p className="font-cursive text-2xl sm:text-3xl font-bold text-amber-950">
            {currentPhoto.caption}
          </p>
          <p className="text-xs font-semibold text-amber-700 tracking-wider uppercase flex items-center justify-center gap-1">
            <Heart className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
            {currentPhoto.date} ({currentIndex + 1} de {photos.length})
          </p>
        </div>

        {/* Thumbnails Row */}
        <div className="flex justify-start sm:justify-center items-center gap-2 mt-4 overflow-x-auto pb-2 px-1 scrollbar-none">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'border-amber-500 scale-105 shadow-md ring-2 ring-amber-300'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Rendered via Portal to document.body */}
      {selectedPhoto && createPortal(
        <AnimatePresence>
          <motion.div
            key="modal-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-4 sm:p-6 rounded-3xl max-w-3xl w-full shadow-2xl relative border border-amber-200"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-stone-100 text-stone-700 hover:bg-amber-500 hover:text-white transition-colors flex items-center justify-center z-20 cursor-pointer shadow-md"
              >
                <X size={20} />
              </button>

              <div className="rounded-2xl overflow-hidden max-h-[75vh] bg-stone-900 flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  className="max-h-[72vh] w-auto object-contain"
                />
              </div>

              <div className="mt-4 text-center space-y-1">
                <h3 className="font-cursive text-3xl font-bold text-amber-950">
                  {selectedPhoto.caption}
                </h3>
                <p className="text-xs text-amber-700 font-semibold flex items-center justify-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                  {selectedPhoto.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
