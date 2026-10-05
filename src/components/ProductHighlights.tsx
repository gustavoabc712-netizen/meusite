import React from 'react';

interface ProductHighlightsProps {
  title?: string;
  items?: string[];
}

export function ProductHighlights({
  title = 'O que você precisa saber sobre este produto',
  items = [
    'Capacidade de resfriamento de 18000 BTU.',
    'Frigorias: 4500.',
    'Tem temporizador.',
    'Energia de resfriamento de 1.79 kW.'
  ]
}: ProductHighlightsProps) {
  return (
    <section className="w-full bg-white px-4 py-6 border-b border-slate-100 text-left font-sans">
      <h2 className="text-[18px] sm:text-[20px] font-normal text-slate-900 tracking-tight mb-5">
        {title}
      </h2>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-slate-800 leading-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0 inline-block" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
