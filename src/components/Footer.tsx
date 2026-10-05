import React from 'react';

export function Footer() {
  const links = [
    { label: 'Termos e condições', href: '#' },
    { label: 'Promoções', href: '#' },
    { label: 'Como cuidamos da sua privacidade', href: '#' },
    { label: 'Acessibilidade', href: '#', hasAccessibilityIcon: true },
    { label: 'Informações sobre seguros', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Afiliados', href: '#' },
    { label: 'Tendências', href: '#' },
  ];

  return (
    <footer className="w-full bg-white border-t border-slate-200 px-4 sm:px-6 py-6 text-left font-sans">
      {/* 1. Lista de Links com Ícone de Acessibilidade */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-[#333333] mb-4">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a
              href={link.href}
              className="hover:text-[#3483fa] inline-flex items-center gap-1 transition-colors"
            >
              {link.hasAccessibilityIcon && (
                <svg
                  className="w-4 h-4 shrink-0 text-slate-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {/* Círculo externo */}
                  <circle cx="12" cy="12" r="10" />
                  {/* Cabeça */}
                  <circle cx="12" cy="7" r="1.5" fill="#3483fa" stroke="none" />
                  {/* Braços estendidos */}
                  <path d="M7 11h10" strokeLinecap="round" />
                  {/* Tronco */}
                  <path d="M12 11v4" strokeLinecap="round" />
                  {/* Pernas */}
                  <path d="M9.5 18L12 15l2.5 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <span>{link.label}</span>
            </a>
          </React.Fragment>
        ))}
      </div>

      {/* 2. Copyright */}
      <p className="text-[11px] sm:text-[12px] text-slate-400 font-normal leading-normal mb-1">
        © 1999-2026. Mercado Livre Brasil Ltda.
      </p>

      {/* 3. CNPJ e Endereço */}
      <p className="text-[11px] sm:text-[12px] text-slate-400 font-normal leading-relaxed">
        CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.
      </p>
    </footer>
  );
}
