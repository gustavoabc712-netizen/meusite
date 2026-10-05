import React, { useState } from 'react';
import {
  Star,
  Info,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  ThumbsUp,
  MoreHorizontal,
} from 'lucide-react';

import photo1 from '../assets/images/review_photo_1_1791208336385.jpg';
import photo2 from '../assets/images/review_photo_2_1791208351194.jpg';
import photo3 from '../assets/images/review_photo_3_1791208366007.jpg';
import photo4 from '../assets/images/review_photo_4_1791208378672.jpg';
import thumbSlats from '../assets/images/rev_slats_1791208507831.jpg';
import thumbLouvers from '../assets/images/rev_louvers_1791208523232.jpg';
import thumbWoodClosed from '../assets/images/rev_wood_closed_1791208918355.jpg';
import thumbWoodOpen from '../assets/images/rev_wood_open_1791208929227.jpg';
import thumbChande from '../assets/images/rev_chande_1791209078426.jpg';
import thumbLgClose from '../assets/images/rev_lg_close_1791209090416.jpg';

interface ReviewPhotoItem {
  id: number;
  image: string;
  rating: number;
  isVideo?: boolean;
  author: string;
  date: string;
  comment: string;
}

interface SimpleReviewProps {
  comment: string;
  date: string;
  initialUseful?: number;
}

function SimpleReviewRow({ comment, date, initialUseful = 1 }: SimpleReviewProps) {
  const [useful, setUseful] = useState(initialUseful);
  const [liked, setLiked] = useState(false);

  const toggleUseful = () => {
    if (liked) {
      setUseful((prev) => prev - 1);
      setLiked(false);
    } else {
      setUseful((prev) => prev + 1);
      setLiked(true);
    }
  };

  return (
    <>
      <hr className="border-t border-slate-100 my-2.5" />
      <div className="pt-1 pb-2">
        {/* 5 estrelas azuis */}
        <div className="flex items-center gap-0.5 text-[#3483fa] mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#3483fa] stroke-[#3483fa]" />
          ))}
        </div>

        {/* Comentário */}
        <p className="text-[14px] sm:text-[15px] font-normal text-slate-900 mb-3 leading-snug">
          {comment}
        </p>

        {/* Rodapé */}
        <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
          <div className="flex items-center gap-2">
            <span>Brasil</span>
            <span className="text-slate-300">|</span>
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleUseful}
              className={`flex items-center gap-1.5 transition-colors ${
                liked ? 'text-[#3483fa] font-medium' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${liked ? 'fill-[#3483fa]' : ''}`} />
              <span>Útil ({useful})</span>
            </button>
            <button className="text-slate-400 hover:text-slate-700">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function ProductReviews() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [modalCustomImage, setModalCustomImage] = useState<string | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [usefulReview1, setUsefulReview1] = useState(3);
  const [likedReview1, setLikedReview1] = useState(false);
  const [usefulReview2, setUsefulReview2] = useState(3);
  const [likedReview2, setLikedReview2] = useState(false);
  const [usefulReview3, setUsefulReview3] = useState(1);
  const [likedReview3, setLikedReview3] = useState(false);
  const [usefulReview4, setUsefulReview4] = useState(1);
  const [likedReview4, setLikedReview4] = useState(false);

  const reviewPhotos: ReviewPhotoItem[] = [
    {
      id: 1,
      image: photo1,
      rating: 5,
      author: 'Carlos M.',
      date: 'Há 2 semanas',
      comment: 'Ar condicionado maravilhoso! Super silencioso, gela a sala inteira em menos de 10 minutos.',
    },
    {
      id: 2,
      image: photo2,
      rating: 5,
      author: 'Mariana S.',
      date: 'Há 1 mês',
      comment: 'Design muito elegante e clean. O acabamento da LG dispensa comentários, muito bom.',
    },
    {
      id: 3,
      image: photo3,
      rating: 5,
      author: 'Roberto F.',
      date: 'Há 1 mês',
      comment: 'Instalação tranquila e o consumo de energia veio bem baixo comparado ao antigo convencional.',
    },
    {
      id: 4,
      image: photo4,
      rating: 5,
      isVideo: true,
      author: 'Juliana P.',
      date: 'Há 2 meses',
      comment: 'Chegou muito bem embalado e antes do prazo. Vídeo mostrando o unboxing completo.',
    },
  ];

  const handleToggleUseful1 = () => {
    if (likedReview1) {
      setUsefulReview1(prev => prev - 1);
      setLikedReview1(false);
    } else {
      setUsefulReview1(prev => prev + 1);
      setLikedReview1(true);
    }
  };

  const handleToggleUseful2 = () => {
    if (likedReview2) {
      setUsefulReview2(prev => prev - 1);
      setLikedReview2(false);
    } else {
      setUsefulReview2(prev => prev + 1);
      setLikedReview2(true);
    }
  };

  const handleToggleUseful3 = () => {
    if (likedReview3) {
      setUsefulReview3(prev => prev - 1);
      setLikedReview3(false);
    } else {
      setUsefulReview3(prev => prev + 1);
      setLikedReview3(true);
    }
  };

  const handleToggleUseful4 = () => {
    if (likedReview4) {
      setUsefulReview4(prev => prev - 1);
      setLikedReview4(false);
    } else {
      setUsefulReview4(prev => prev + 1);
      setLikedReview4(true);
    }
  };

  return (
    <section className="w-full bg-white px-4 py-6 border-b border-slate-100 text-left font-sans">
      {/* 1. Título do Bloco Superior */}
      <h2 className="text-[18px] sm:text-[20px] font-normal text-slate-900 tracking-tight mb-4">
        Opiniões do produto
      </h2>

      {/* 2. Nota Média e Estrelas */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[44px] sm:text-[48px] font-light text-[#3483fa] leading-none tracking-tight">
          4.9
        </span>

        <div className="flex flex-col justify-center">
          {/* 5 Estrelas Azuis Preenchidas */}
          <div className="flex items-center gap-0.5 text-[#3483fa]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#3483fa] stroke-[#3483fa]"
              />
            ))}
          </div>

          {/* 395 avaliações + ícone (i) */}
          <div className="flex items-center gap-1 mt-1 text-[13px] text-slate-500 font-normal">
            <span>395 avaliações</span>
            <button
              onClick={() => setShowInfoModal(true)}
              className="text-[#3483fa] hover:text-[#2968c8] inline-flex items-center"
              aria-label="Informações sobre avaliações"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Subtítulo: Opiniões com fotos */}
      <h3 className="font-bold text-[14px] sm:text-[15px] text-slate-900 mb-3">
        Opiniões com fotos
      </h3>

      {/* 4. Carrossel / Galeria de Fotos */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none snap-x border-b border-slate-100 mb-6">
        {reviewPhotos.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhotoIndex(index)}
            className="group relative w-[105px] h-[140px] sm:w-[120px] sm:h-[160px] rounded-lg overflow-hidden shrink-0 cursor-pointer bg-slate-100 border border-slate-200 shadow-xs hover:border-[#3483fa] transition-all"
          >
            <img
              src={item.image}
              alt={`Foto da avaliação ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Ícone de Play centralizado para vídeo (no 4º item) */}
            {item.isVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform pl-0.5">
                  <Play className="w-4 h-4 fill-slate-900 text-slate-900" />
                </div>
              </div>
            )}

            {/* Badge de Nota no canto inferior esquerdo: "5 ★" */}
            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-1.5 py-0.5 rounded">
              <span>{item.rating}</span>
              <Star className="w-3 h-3 fill-white text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* 5. SEÇÃO: Opiniões + Botão Filtrar (Print 13) */}
      <div className="flex items-center justify-between mb-3.5">
        <h3 className="text-[17px] sm:text-[18px] font-semibold text-slate-900 tracking-tight">
          Opiniões
        </h3>

        {/* Botão Filtrar com visual oficial azul suave */}
        <button
          onClick={() => setShowFilterModal(true)}
          className="inline-flex items-center gap-1.5 bg-[#e3edfb] hover:bg-[#d6e5fa] text-[#3483fa] px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filtrar</span>
        </button>
      </div>

      {/* Resumo Gerado por IA */}
      <div className="mb-6">
        <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed font-normal">
          O ar condicionado é amplamente elogiado por sua eficiência e desempenho, sendo descrito como excelente e silencioso. Destacase pelo ótimo custobenefício e pela capacidade de resfriamento eficaz. A instalação foi considerada satisfatória, e o produto atendeu às expectativas dos consumidores.
        </p>

        {/* Tag Resumo por IA com ícone azul de 4 pontas */}
        <div className="flex items-center gap-1.5 mt-2.5 text-[12px] text-slate-500 font-normal">
          <svg
            className="w-3.5 h-3.5 text-[#3483fa] shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
          </svg>
          <span>Resumo de opiniões gerado por IA</span>
        </div>
      </div>

      {/* 6. AVALIAÇÃO 1 (Bastante silencioso, muito bom mesmo.) */}
      <div className="pt-2 pb-4">
        {/* 5 estrelas azuis */}
        <div className="flex items-center gap-0.5 text-[#3483fa] mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#3483fa] stroke-[#3483fa]" />
          ))}
        </div>

        {/* Título da Opinião */}
        <p className="text-[14px] sm:text-[15px] font-normal text-slate-900 mb-3 leading-snug">
          Bastante silencioso, muito bom mesmo.
        </p>

        {/* 3 Fotos miniaturas anexadas pelo cliente */}
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={() => setModalCustomImage(thumbSlats)}
            className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-md overflow-hidden border border-slate-200 hover:opacity-90 transition-opacity bg-slate-50"
          >
            <img
              src={thumbSlats}
              alt="Aleta do ar condicionado"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setModalCustomImage(thumbLouvers)}
            className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-md overflow-hidden border border-slate-200 hover:opacity-90 transition-opacity bg-slate-50"
          >
            <img
              src={thumbLouvers}
              alt="Unidade frontal"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setModalCustomImage(photo3)}
            className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-md overflow-hidden border border-slate-200 hover:opacity-90 transition-opacity bg-slate-50"
          >
            <img
              src={photo3}
              alt="Instalado acima da cortina"
              className="w-full h-full object-cover"
            />
          </button>
        </div>

        {/* Rodapé da avaliação 1 */}
        <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
          <div className="flex items-center gap-2">
            <span>Brasil</span>
            <span className="text-slate-300">|</span>
            <span>Há 3 meses</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleUseful1}
              className={`flex items-center gap-1.5 transition-colors ${
                likedReview1 ? 'text-[#3483fa] font-medium' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${likedReview1 ? 'fill-[#3483fa]' : ''}`} />
              <span>Útil ({usefulReview1})</span>
            </button>
            <button className="text-slate-400 hover:text-slate-700">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Linha divisória sutil */}
      <hr className="border-t border-slate-100 my-2" />

      {/* 7. AVALIAÇÃO 2 (Gostei, recomendo.) */}
      <div className="pt-2 pb-2">
        {/* 5 estrelas azuis */}
        <div className="flex items-center gap-0.5 text-[#3483fa] mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#3483fa] stroke-[#3483fa]" />
          ))}
        </div>

        {/* Título da Opinião */}
        <p className="text-[14px] sm:text-[15px] font-normal text-slate-900 mb-3 leading-snug">
          Gostei, recomendo.
        </p>

        {/* 1 Foto miniatura anexada pelo cliente */}
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={() => setModalCustomImage(photo2)}
            className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-md overflow-hidden border border-slate-200 hover:opacity-90 transition-opacity bg-slate-50"
          >
            <img
              src={photo2}
              alt="Ar condicionado instalado"
              className="w-full h-full object-cover"
            />
          </button>
        </div>

        {/* Rodapé da avaliação 2 */}
        <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
          <div className="flex items-center gap-2">
            <span>Brasil</span>
            <span className="text-slate-300">|</span>
            <span>Há mais de 1 ano</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleUseful2}
              className={`flex items-center gap-1.5 transition-colors ${
                likedReview2 ? 'text-[#3483fa] font-medium' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${likedReview2 ? 'fill-[#3483fa]' : ''}`} />
              <span>Útil ({usefulReview2})</span>
            </button>
            <button className="text-slate-400 hover:text-slate-700">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Linha divisória sutil */}
      <hr className="border-t border-slate-100 my-2" />

      {/* 8. AVALIAÇÃO 3 (Print 14: Produto de excelente qualidade, gela bastante neste calor...) */}
      <div className="pt-2 pb-2">
        {/* 5 estrelas azuis */}
        <div className="flex items-center gap-0.5 text-[#3483fa] mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#3483fa] stroke-[#3483fa]" />
          ))}
        </div>

        {/* Título da Opinião */}
        <p className="text-[14px] sm:text-[15px] font-normal text-slate-900 mb-3 leading-snug">
          Produto de excelente qualidade, gela bastante neste calor ele dá conta de refrigerar bem o ambiente. Nao faz barulho.
        </p>

        {/* 2 Fotos miniaturas anexadas pelo cliente */}
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={() => setModalCustomImage(thumbWoodClosed)}
            className="w-[125px] h-[125px] sm:w-[145px] sm:h-[145px] rounded-lg overflow-hidden border border-slate-200 hover:opacity-90 transition-opacity bg-slate-50"
          >
            <img
              src={thumbWoodClosed}
              alt="Ar condicionado instalado com aleta fechada"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setModalCustomImage(thumbWoodOpen)}
            className="w-[125px] h-[125px] sm:w-[145px] sm:h-[145px] rounded-lg overflow-hidden border border-slate-200 hover:opacity-90 transition-opacity bg-slate-50"
          >
            <img
              src={thumbWoodOpen}
              alt="Ar condicionado ligado refrigerando com aleta aberta"
              className="w-full h-full object-cover"
            />
          </button>
        </div>

        {/* Rodapé da avaliação 3 */}
        <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
          <div className="flex items-center gap-2">
            <span>Brasil</span>
            <span className="text-slate-300">|</span>
            <span>Há 8 meses</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleUseful3}
              className={`flex items-center gap-1.5 transition-colors ${
                likedReview3 ? 'text-[#3483fa] font-medium' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${likedReview3 ? 'fill-[#3483fa]' : ''}`} />
              <span>Útil ({usefulReview3})</span>
            </button>
            <button className="text-slate-400 hover:text-slate-700">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Linha divisória sutil */}
      <hr className="border-t border-slate-100 my-2" />

      {/* 9. AVALIAÇÃO 4 (Print 15: Produto em perfeito estado. Não me atentei que ele não possui o led...) */}
      <div className="pt-2 pb-2">
        {/* 5 estrelas azuis */}
        <div className="flex items-center gap-0.5 text-[#3483fa] mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#3483fa] stroke-[#3483fa]" />
          ))}
        </div>

        {/* Título da Opinião */}
        <p className="text-[14px] sm:text-[15px] font-normal text-slate-900 mb-3 leading-snug">
          Produto em perfeito estado. Não me atentei que ele não possui o led que informa a temperatura e o aplicativo para acessar através do wi-fi, mas tirando isso recomendo a compra!.
        </p>

        {/* 2 Fotos miniaturas anexadas pelo cliente */}
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={() => setModalCustomImage(thumbChande)}
            className="w-[125px] h-[125px] sm:w-[145px] sm:h-[145px] rounded-lg overflow-hidden border border-slate-200 hover:opacity-90 transition-opacity bg-slate-50"
          >
            <img
              src={thumbChande}
              alt="Ar condicionado instalado com lustre pendente no ambiente"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setModalCustomImage(thumbLgClose)}
            className="w-[125px] h-[125px] sm:w-[145px] sm:h-[145px] rounded-lg overflow-hidden border border-slate-200 hover:opacity-90 transition-opacity bg-slate-50"
          >
            <img
              src={thumbLgClose}
              alt="Painel frontal do ar condicionado com logo da LG"
              className="w-full h-full object-cover"
            />
          </button>
        </div>

        {/* Rodapé da avaliação 4 */}
        <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
          <div className="flex items-center gap-2">
            <span>Brasil</span>
            <span className="text-slate-300">|</span>
            <span>Há 3 meses</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleUseful4}
              className={`flex items-center gap-1.5 transition-colors ${
                likedReview4 ? 'text-[#3483fa] font-medium' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${likedReview4 ? 'fill-[#3483fa]' : ''}`} />
              <span>Útil ({usefulReview4})</span>
            </button>
            <button className="text-slate-400 hover:text-slate-700">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 10. AVALIAÇÕES ADICIONAIS (Print 16) */}
      <SimpleReviewRow
        comment="Absolutamente impecável."
        date="Há 9 meses"
        initialUseful={1}
      />

      <SimpleReviewRow
        comment="O split lg dual inverter é maravilhoso."
        date="Há 11 meses"
        initialUseful={1}
      />

      <SimpleReviewRow
        comment="Muito bom! resfri bem rápido o ambiente, com isso não tem gasto exagero na conta de energia!."
        date="Há 11 meses"
        initialUseful={1}
      />

      <SimpleReviewRow
        comment="Muito bom mesmo."
        date="Há 11 meses"
        initialUseful={1}
      />

      <SimpleReviewRow
        comment="Excelente compra!."
        date="Há 11 meses"
        initialUseful={1}
      />

      {/* 11. AVALIAÇÕES ADICIONAIS (Print 17) */}
      <SimpleReviewRow
        comment="Muito bom ótimo."
        date="Há 1 ano"
        initialUseful={1}
      />

      <SimpleReviewRow
        comment="Produto excelente. Recomendo."
        date="Há 1 ano"
        initialUseful={1}
      />

      <SimpleReviewRow
        comment="Penso ser o melhor disponível."
        date="Há 1 ano"
        initialUseful={1}
      />

      <SimpleReviewRow
        comment="Amando."
        date="Há mais de 1 ano"
        initialUseful={1}
      />

      {/* Modal Lightbox de Foto Ampliada do Carrossel */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Imagem Ampliada */}
            <div className="relative aspect-[4/3] bg-black flex items-center justify-center">
              <img
                src={reviewPhotos[selectedPhotoIndex].image}
                alt="Foto ampliada"
                className="max-h-full max-w-full object-contain"
              />

              {reviewPhotos[selectedPhotoIndex].isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center pl-1">
                    <Play className="w-6 h-6 fill-slate-900 text-slate-900" />
                  </div>
                </div>
              )}

              {/* Botão Anterior */}
              {selectedPhotoIndex > 0 && (
                <button
                  onClick={() => setSelectedPhotoIndex(selectedPhotoIndex - 1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Botão Próximo */}
              {selectedPhotoIndex < reviewPhotos.length - 1 && (
                <button
                  onClick={() => setSelectedPhotoIndex(selectedPhotoIndex + 1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Informações da Avaliação */}
            <div className="p-4 text-left">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1 text-[#3483fa]">
                  {[...Array(reviewPhotos[selectedPhotoIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#3483fa] stroke-[#3483fa]" />
                  ))}
                </div>
                <span className="text-xs text-slate-400">
                  {reviewPhotos[selectedPhotoIndex].date}
                </span>
              </div>

              <div className="text-xs font-semibold text-slate-900 mb-1">
                {reviewPhotos[selectedPhotoIndex].author}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                "{reviewPhotos[selectedPhotoIndex].comment}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal Lightbox de Foto Individual das Avaliações */}
      {modalCustomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setModalCustomImage(null)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalCustomImage(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-square bg-black flex items-center justify-center">
              <img
                src={modalCustomImage}
                alt="Foto da avaliação do cliente"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-3 text-left">
              <div className="flex items-center gap-0.5 text-[#3483fa] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#3483fa] stroke-[#3483fa]" />
                ))}
              </div>
              <p className="text-xs text-slate-600">Foto enviada por comprador verificado</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Filtro */}
      {showFilterModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setShowFilterModal(false)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-xl p-5 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#3483fa]" />
                Filtrar opiniões
              </h3>
              <button
                onClick={() => setShowFilterModal(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <label className="flex items-center justify-between p-2.5 rounded-lg border border-[#3483fa] bg-[#f0f6ff] font-medium text-[#3483fa] cursor-pointer">
                <span>Todas as opiniões (395)</span>
                <span className="w-2 h-2 rounded-full bg-[#3483fa]" />
              </label>
              <label className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer">
                <span>Com fotos ou vídeos (84)</span>
              </label>
              <label className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer">
                <span>5 estrelas (362)</span>
              </label>
              <label className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer">
                <span>4 estrelas (28)</span>
              </label>
            </div>

            <button
              onClick={() => setShowFilterModal(false)}
              className="mt-4 w-full py-2.5 bg-[#3483fa] text-white text-xs font-semibold rounded-md hover:bg-[#2968c8]"
            >
              Aplicar filtros
            </button>
          </div>
        </div>
      )}

      {/* Modal de Informações sobre Avaliações */}
      {showInfoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setShowInfoModal(false)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-xl p-5 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                Sobre as opiniões
              </h3>
              <button
                onClick={() => setShowInfoModal(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              As avaliações e fotos são enviadas por compradores reais que adquiriram e testaram o produto no Mercado Livre.
            </p>

            <button
              onClick={() => setShowInfoModal(false)}
              className="mt-4 w-full py-2 bg-[#3483fa] text-white text-xs font-semibold rounded-md hover:bg-[#2968c8]"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
