import React, { useState, useRef, TouchEvent } from 'react';
import { Heart, Share2, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
  title: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onShare: () => void;
}

export function ProductGallery({
  title,
  isFavorite,
  onToggleFavorite,
  onShare,
}: ProductGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Slides of the exact LG DUAL Inverter model (only 4 primary product photos)
  const slides = [
    {
      id: 1,
      src: '/src/assets/images/lg_set_all_black_grille_1791206492559.jpg',
      alt: 'Ar-Condicionado LG DUAL Inverter 18000 BTU - Conjunto Completo com Grade Preta Fosca',
      label: 'Conjunto Completo (Evaporadora, Condensadora com Grade Preta Fosca e Controle)',
      tag: '1/4 Conjunto Oficial',
    },
    {
      id: 2,
      src: '/src/assets/images/lg_condenser_unit_photo_1791205754755.jpg',
      alt: 'Unidade Condensadora Externa LG DUAL Inverter - Grade Preta',
      label: 'Condensadora Externa com Grade Preta, Logotipo Oficial LG e DUAL Inverter',
      tag: '2/4 Condensadora',
    },
    {
      id: 3,
      src: '/src/assets/images/lg_indoor_unit_photo_1791205765635.jpg',
      alt: 'Unidade Evaporadora Interna LG DUAL Inverter Compact +AI',
      label: 'Evaporadora Interna com Design Branco Minimalista',
      tag: '3/4 Evaporadora',
    },
    {
      id: 4,
      src: '/src/assets/images/lg_remote_control_photo_1791205782930.jpg',
      alt: 'Controle Remoto Oficial LG DUAL Inverter com Display LCD',
      label: 'Controle Remoto Digital com Funções Inteligentes',
      tag: '4/4 Controle Remoto',
    },
  ];

  const totalSlides = slides.length;
  const safeIndex = Math.min(Math.max(0, currentSlide), totalSlides - 1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch Swipe Handlers for mobile gestures
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 35;

    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="w-full bg-white font-sans border-b border-slate-100 select-none">
      {/* 1. TÍTULO DO PRODUTO (LG DUAL Inverter) */}
      <div className="px-4 pt-3 pb-2 text-left">
        <h1 className="text-[17px] sm:text-[19px] font-normal text-[#333333] leading-snug tracking-tight">
          {title}
        </h1>
      </div>

      {/* 2. ÁREA DO CARROSSEL DE FOTOS COM GESTO DE PASSAR PRO LADO */}
      <div
        className="relative w-full max-w-lg mx-auto bg-white px-2 py-2 select-none overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Contador 1/8, 2/8... no canto superior esquerdo */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-slate-100/95 text-slate-700 text-[11px] font-semibold px-2.5 py-0.8 rounded-full border border-slate-200/80 shadow-xs tabular-nums">
            {currentSlide + 1}/{totalSlides}
          </span>
        </div>

        {/* Botão flutuante de Favoritos no canto superior direito */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onToggleFavorite}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 text-[#3483fa]"
            title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            aria-label="Favoritar produto"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite
                  ? 'fill-[#3483fa] text-[#3483fa]'
                  : 'text-[#3483fa] stroke-[1.8]'
              }`}
            />
          </button>
        </div>

        {/* Botão flutuante de Compartilhar no canto inferior direito */}
        <div className="absolute bottom-10 right-4 z-20">
          <button
            onClick={onShare}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 text-[#3483fa]"
            title="Compartilhar produto"
            aria-label="Compartilhar produto"
          >
            <Share2 className="w-5 h-5 stroke-[1.8]" />
          </button>
        </div>

        {/* Seta esquerda para passar para o lado */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200/70 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          aria-label="Foto anterior"
          title="Foto anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Seta direita para passar para o lado */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200/70 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          aria-label="Próxima foto"
          title="Próxima foto"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Container Deslizante com transição suave (passa para o lado) */}
        <div
          className="relative w-full aspect-square flex items-center justify-center overflow-hidden cursor-pointer bg-white"
          onClick={() => setIsZoomed(true)}
        >
          <div
            className="flex w-full h-full transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full h-full shrink-0 flex items-center justify-center p-3 relative bg-white"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain max-h-[380px] pointer-events-none select-none transition-transform hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Legenda explicativa da foto atual */}
        <div className="text-center px-4 -mt-1 mb-1">
          <div className="text-xs font-semibold text-slate-800 truncate">
            {slides[safeIndex]?.label}
          </div>
          <div className="text-[10px] text-slate-400">
            Arraste para o lado ou use as setas para navegar
          </div>
        </div>

        {/* 3. PONTINHOS DE PAGINAÇÃO (Dots) */}
        <div className="flex items-center justify-center gap-1.5 pt-1 pb-3">
          {slides.map((_, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-200 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-[#3483fa]'
                    : 'w-1.5 h-1.5 bg-[#d8d8d8] hover:bg-[#a8a8a8]'
                }`}
                aria-label={`Ir para foto ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Miniaturas de acesso rápido abaixo da imagem (todas as 8 abas 100% LG) */}
      <div className="px-4 pb-3 flex items-center gap-2 overflow-x-auto scrollbar-none justify-start sm:justify-center">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-14 h-14 rounded-md border-2 p-0.5 shrink-0 overflow-hidden bg-white transition-all cursor-pointer ${
              currentSlide === idx
                ? 'border-[#3483fa] shadow-sm ring-1 ring-[#3483fa]'
                : 'border-slate-200 hover:border-slate-300 opacity-60 hover:opacity-100'
            }`}
            title={slide.label}
          >
            <img
              src={slide.src}
              alt={`Miniatura ${idx + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>

      {/* Modal de Zoom da Imagem */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-2xl w-full bg-white rounded-xl p-4 flex flex-col items-center shadow-2xl">
            <div className="w-full aspect-square flex items-center justify-center">
              <img
                src={slides[safeIndex]?.src}
                alt="Visualização ampliada"
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-between w-full mt-3 px-4 text-slate-700 text-xs border-t pt-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1 font-medium"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
              <span className="font-semibold truncate max-w-xs">
                Foto {safeIndex + 1} de {totalSlides} · {slides[safeIndex]?.label}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1 font-medium"
              >
                Próxima <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
