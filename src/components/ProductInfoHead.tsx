import React from 'react';
import { Star } from 'lucide-react';

interface ProductInfoHeadProps {
  brandLinkText?: string;
  condition?: string;
  salesCount?: string;
  rating?: number;
  reviewCount?: number;
  onBrandClick?: () => void;
  onReviewsClick?: () => void;
}

export function ProductInfoHead({
  brandLinkText = 'Conferir mais produtos da marca LG',
  condition = 'Novo',
  salesCount = '+1000 vendidos',
  rating = 4.9,
  reviewCount = 395,
  onBrandClick,
  onReviewsClick,
}: ProductInfoHeadProps) {
  return (
    <div className="w-full bg-white px-4 pt-3.5 pb-2.5 border-b border-slate-100 font-sans">
      {/* Top Link: Exact match to print */}
      <div className="mb-2">
        <a
          href="#marca-lg"
          onClick={(e) => {
            e.preventDefault();
            if (onBrandClick) onBrandClick();
          }}
          className="text-sm font-normal text-[#3483fa] hover:text-[#2968c8] hover:underline transition-colors inline-block"
        >
          {brandLinkText}
        </a>
      </div>

      {/* Bottom line: Condition/Sales on Left, Rating/Stars on Right */}
      <div className="flex items-center justify-between text-xs text-[#737373] tracking-tight mb-2.5">
        {/* Left: Novo | +1000 vendidos */}
        <div className="flex items-center gap-2">
          <span>{condition}</span>
          <span className="text-slate-300 font-light select-none">|</span>
          <span>{salesCount}</span>
        </div>

        {/* Right: 4.9 ★★★★★ (395) with Mercado Livre blue stars */}
        <button
          onClick={onReviewsClick}
          className="flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer group"
          title={`${rating} estrelas de 5 (${reviewCount} avaliações)`}
        >
          <span className="text-[#737373] font-medium mr-0.5 tabular-nums">
            {rating.toFixed(1)}
          </span>

          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]"
                strokeWidth={1}
              />
            ))}
          </div>

          <span className="text-[#737373] ml-1">
            ({reviewCount})
          </span>
        </button>
      </div>

      {/* 3rd Print: MAIS VENDIDO badge + ranking link */}
      <div className="flex items-center gap-2 pt-0.5">
        <span className="inline-block bg-[#ff6a00] text-white text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-[3px] tracking-wide shadow-xs">
          MAIS VENDIDO
        </span>
        <a
          href="#ranking-ares-condicionados-lg"
          className="text-xs text-[#3483fa] hover:text-[#2968c8] hover:underline transition-colors font-normal"
        >
          8º em Ares Condicionados LG
        </a>
      </div>
    </div>
  );
}
