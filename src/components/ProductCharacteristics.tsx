import React from 'react';
import { CheckCircle2, Leaf } from 'lucide-react';

interface CharacteristicItem {
  id: string;
  label: string;
  value: string;
  isEco?: boolean;
}

export function ProductCharacteristics() {
  const characteristics: CharacteristicItem[] = [
    {
      id: 'btu',
      label: 'Capacidade de refrigeração',
      value: '18000 BTU',
    },
    {
      id: 'inverter',
      label: 'Com tecnologia inverter',
      value: 'Sim',
    },
    {
      id: 'wifi',
      label: 'Com Wi-Fi',
      value: 'Não',
    },
    {
      id: 'dehumidifier',
      label: 'Com função desumidificação',
      value: 'Sim',
    },
    {
      id: 'eco',
      label: 'Produto com impacto positivo',
      value: 'Sim',
      isEco: true,
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-6 border-b border-slate-100 text-left font-sans">
      <h2 className="text-[18px] sm:text-[20px] font-normal text-slate-900 tracking-tight mb-5">
        Características do produto
      </h2>

      <div className="space-y-4 sm:space-y-4.5">
        {characteristics.map((item) => (
          <div key={item.id} className="flex items-center gap-3.5">
            {/* Ícone com fundo circular cinza claro exatamente como no print */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center shrink-0 text-slate-800">
              {item.isEco ? (
                /* Ícone de folha / impacto positivo */
                <svg
                  className="w-4 h-4 text-slate-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              ) : (
                /* Ícone de verificação circular */
                <svg
                  className="w-4 h-4 text-slate-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              )}
            </div>

            {/* Texto: Label normal e Valor em negrito */}
            <div className="text-[14px] sm:text-[15px] text-slate-800 leading-snug">
              <span>{item.label}: </span>
              <strong className="font-bold text-slate-950">{item.value}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
