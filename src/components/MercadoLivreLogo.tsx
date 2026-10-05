import React from 'react';

export function MercadoLivreLogo({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 72"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sombra / Borda 3D inferior escura */}
      <path
        d="M 6 36 C 8 58, 25 68, 50 68 C 75 68, 92 58, 94 36 C 94 62, 74 71, 50 71 C 26 71, 6 62, 6 36 Z"
        fill="#1c2260"
      />

      {/* Oval Amarelo Principal com Contorno Azul Escuro */}
      <ellipse
        cx="50"
        cy="35"
        rx="45"
        ry="30"
        fill="#ffe600"
        stroke="#2d3277"
        strokeWidth="4"
      />

      {/* APERTO DE MÃO (Handshake) */}
      <g>
        {/* Preenchimento Branco Total dos Dois Braços e Mãos Juntos */}
        <path
          d="
            M 5 30
            C 18 30, 26 29, 34 26
            C 38 20, 44 14, 51 15
            C 56 16, 57 21, 53 26
            C 62 25, 74 27, 95 30
            L 95 44
            C 82 44, 73 42, 63 39
            C 58 45, 52 52, 44 54
            C 39 55, 33 53, 27 47
            C 23 44, 16 43, 5 44
            Z
          "
          fill="#ffffff"
        />

        {/* Linha de Contorno Superior do Braço Esquerdo até a ponta do Polegar */}
        <path
          d="M 5 30 C 18 30, 26 29, 34 26 C 38 20, 44 14, 51 15 C 56 16, 57 21, 53 26"
          fill="none"
          stroke="#2d3277"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dobra Interna do Polegar Esquerdo */}
        <path
          d="M 53 26 C 47 28, 41 31, 36 34"
          fill="none"
          stroke="#2d3277"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Linha Superior do Braço Direito cruzando sobre a mão */}
        <path
          d="M 95 30 C 78 28, 67 27, 57 26 C 53 26, 46 25, 41 22"
          fill="none"
          stroke="#2d3277"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Linha de contorno da mão direita descendo para envolver a mão esquerda */}
        <path
          d="M 57 26 C 64 30, 67 36, 63 41 C 60 45, 55 48, 50 50"
          fill="none"
          stroke="#2d3277"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Dedos da mão direita que envolvem por baixo (4 dedos curvos visíveis) */}
        {/* Dedo 1 (Indicador) */}
        <path
          d="M 50 43 C 51 48, 49 52, 45 53 C 41 53, 40 49, 41 45"
          fill="#ffffff"
          stroke="#2d3277"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Dedo 2 (Médio) */}
        <path
          d="M 43 45 C 44 50, 41 54, 38 54 C 34 54, 33 50, 35 46"
          fill="#ffffff"
          stroke="#2d3277"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Dedo 3 (Anelar) */}
        <path
          d="M 37 46 C 37 51, 34 54, 31 53 C 27 52, 27 48, 29 45"
          fill="#ffffff"
          stroke="#2d3277"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Dedo 4 (Mínimo) */}
        <path
          d="M 30 46 C 30 50, 28 52, 25 50 C 23 49, 23 46, 25 44"
          fill="#ffffff"
          stroke="#2d3277"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Linha Inferior do Braço Esquerdo */}
        <path
          d="M 5 44 C 15 44, 21 44, 26 46"
          fill="none"
          stroke="#2d3277"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Linha Inferior do Braço Direito */}
        <path
          d="M 95 44 C 82 44, 73 42, 63 39"
          fill="none"
          stroke="#2d3277"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
