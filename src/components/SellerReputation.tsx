import React from 'react';
import { Award, MessageSquare, Clock, Check } from 'lucide-react';

interface SellerReputationProps {
  level?: string;
  subtitle?: string;
  salesCount?: string;
}

export function SellerReputation({
  level = 'MercadoLíder Platinum',
  subtitle = 'É um dos melhores do site!',
  salesCount = '+50 mil'
}: SellerReputationProps) {
  return (
    <section className="w-full bg-white px-4 py-5 border-b border-slate-100 text-left font-sans">
      {/* 1. Badge MercadoLíder Platinum */}
      <div className="flex items-start gap-2 mb-4">
        {/* Ícone de medalha MercadoLíder */}
        <div className="text-[#00a650] mt-0.5 shrink-0">
          <svg
            className="w-5 h-5 text-[#00a650]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        </div>

        <div>
          <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#00a650] leading-tight">
            {level}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-slate-500 font-normal mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* 2. Termômetro de Reputação (5 barras com a última verde destacada) */}
      <div className="grid grid-cols-5 gap-1 mb-5">
        <div className="h-[7px] bg-[#ffe6e6] rounded-[2px]" />
        <div className="h-[7px] bg-[#fff0e5] rounded-[2px]" />
        <div className="h-[7px] bg-[#fffbe6] rounded-[2px]" />
        <div className="h-[7px] bg-[#f0f9eb] rounded-[2px]" />
        <div className="h-[7px] bg-[#00a650] rounded-[2px]" />
      </div>

      {/* 3. Métricas de Vendas, Atendimento e Prazo */}
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Vendas */}
        <div className="flex flex-col items-center justify-between min-h-[50px]">
          <strong className="text-[16px] sm:text-[18px] font-bold text-slate-900 tracking-tight leading-tight">
            {salesCount}
          </strong>
          <span className="text-[11px] sm:text-[12px] text-slate-500 font-normal leading-tight mt-1">
            Vendas
          </span>
        </div>

        {/* Bom atendimento */}
        <div className="flex flex-col items-center justify-between min-h-[50px] border-x border-slate-100 px-1">
          <div className="relative inline-flex items-center justify-center">
            {/* Ícone de mensagem */}
            <svg
              className="w-5 h-5 text-slate-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {/* Pequeno checkmark verde */}
            <div className="absolute -bottom-1 -right-1.5 w-3 h-3 bg-[#00a650] rounded-full flex items-center justify-center text-white ring-1 ring-white">
              <Check className="w-2 h-2 stroke-[3]" />
            </div>
          </div>
          <span className="text-[11px] sm:text-[12px] text-slate-500 font-normal leading-tight mt-1">
            Bom atendimento
          </span>
        </div>

        {/* Entrega no prazo */}
        <div className="flex flex-col items-center justify-between min-h-[50px]">
          <div className="relative inline-flex items-center justify-center">
            {/* Ícone de relógio/cronômetro */}
            <svg
              className="w-5 h-5 text-slate-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 14 14" />
            </svg>
            {/* Pequeno checkmark verde */}
            <div className="absolute -bottom-1 -right-1.5 w-3 h-3 bg-[#00a650] rounded-full flex items-center justify-center text-white ring-1 ring-white">
              <Check className="w-2 h-2 stroke-[3]" />
            </div>
          </div>
          <span className="text-[11px] sm:text-[12px] text-slate-500 font-normal leading-tight mt-1">
            Entrega no prazo
          </span>
        </div>
      </div>
    </section>
  );
}
