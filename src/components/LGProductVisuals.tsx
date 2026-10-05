import React from 'react';

// Official LG Logo SVG (Precise vector)
export function LGLogo({ className = "w-10 h-10", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Official LG Crimson Symbol */}
      <svg viewBox="0 0 100 100" className="w-full h-auto aspect-square" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#C40047" />
        {/* Eye dot */}
        <circle cx="34" cy="38" r="4.8" fill="#FFFFFF" />
        {/* L nose */}
        <path d="M47 28 V57 H63" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="square" />
        {/* G smile and outer arc */}
        <path
          d="M68 33 C63 24 53 20 42 21 C28 23 18 34 18 48 C18 64 30 77 47 77 C62 77 75 66 76 51 H54"
          stroke="#FFFFFF"
          strokeWidth="6.5"
          strokeLinecap="square"
          fill="none"
        />
      </svg>
      {showText && (
        <span className="text-[15px] font-bold tracking-tight text-[#4a4a4a] mt-0.5 font-sans leading-none">
          LG
        </span>
      )}
    </div>
  );
}

// Slide 1: Full Set (Indoor + Outdoor + Remote)
export function LGFullSetVisual() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-2 select-none bg-white">
      {/* Indoor Unit (Top) */}
      <div className="w-[92%] max-w-md h-24 sm:h-28 bg-gradient-to-b from-slate-50 to-white rounded-t-lg rounded-b-md border border-slate-300 shadow-md p-2 flex flex-col justify-between relative mt-2">
        {/* Top intake grille texture */}
        <div className="w-full h-2 flex justify-between gap-1 opacity-20">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex-1 bg-slate-900 rounded-xs h-full" />
          ))}
        </div>
        {/* Center branding */}
        <div className="flex items-center justify-center gap-1.5 opacity-80 my-auto">
          <LGLogo className="w-4 h-4" showText={false} />
          <span className="text-[10px] font-bold text-slate-700">LG</span>
        </div>
        {/* Bottom air deflector flap */}
        <div className="w-full flex items-center justify-between border-t border-slate-200 pt-1 px-2 text-[9px] text-slate-500">
          <span className="text-[8px] text-slate-400 font-mono">DUAL Inverter +AI</span>
          <div className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[9px] font-mono text-slate-600 font-semibold">20°C</span>
          </div>
        </div>
      </div>

      {/* Bottom Row: Remote (Left) + Outdoor Condenser (Right) */}
      <div className="w-full max-w-md flex items-end justify-between gap-3 px-2 mt-4">
        {/* Remote Control */}
        <div className="w-20 sm:w-24 bg-gradient-to-b from-slate-100 to-white rounded-xl border border-slate-300 shadow-md p-2 flex flex-col items-center shrink-0">
          {/* LCD Screen */}
          <div className="w-full bg-[#cad2c5] rounded border border-slate-400 p-1 flex flex-col items-center justify-center font-mono text-[9px] text-slate-800 shadow-inner mb-2">
            <div className="flex justify-between w-full text-[7px] text-slate-600">
              <span>COOL</span>
              <span>AUTO</span>
            </div>
            <span className="text-sm font-bold text-slate-900 leading-tight">20°C</span>
            <span className="text-[7px] text-slate-600">AI MODE</span>
          </div>
          {/* Power Button */}
          <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center text-white text-[8px] font-bold mb-2 shadow-xs">
            I/O
          </div>
          {/* Keypad Grid */}
          <div className="grid grid-cols-2 gap-1 w-full mb-2">
            <div className="h-2.5 bg-slate-200 rounded text-[7px] flex items-center justify-center text-slate-600">▲</div>
            <div className="h-2.5 bg-slate-200 rounded text-[7px] flex items-center justify-center text-slate-600">▼</div>
            <div className="h-2.5 bg-slate-200 rounded text-[6px] flex items-center justify-center text-slate-500">FAN</div>
            <div className="h-2.5 bg-slate-200 rounded text-[6px] flex items-center justify-center text-slate-500">MODE</div>
          </div>
          {/* LG text */}
          <div className="flex items-center gap-0.5 mt-auto pt-1">
            <LGLogo className="w-2.5 h-2.5" showText={false} />
            <span className="text-[8px] font-bold text-slate-700">LG</span>
          </div>
        </div>

        {/* Outdoor Condenser Unit */}
        <div className="flex-1 bg-gradient-to-br from-white to-slate-100 rounded-lg border border-slate-300 shadow-md p-3 relative flex flex-col justify-between">
          <div className="flex items-center gap-3">
            {/* Fan Grille */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-900 border-4 border-slate-200 relative flex items-center justify-center shadow-inner overflow-hidden shrink-0">
              {/* Concentric radial rings */}
              <div className="absolute inset-2 rounded-full border border-slate-700/80" />
              <div className="absolute inset-4 rounded-full border border-slate-700/80" />
              <div className="absolute inset-7 rounded-full border border-slate-700/80" />
              {/* Blades */}
              <div className="absolute w-full h-1 bg-slate-700 rotate-12" />
              <div className="absolute w-full h-1 bg-slate-700 rotate-45" />
              <div className="absolute w-full h-1 bg-slate-700 rotate-90" />
              <div className="absolute w-full h-1 bg-slate-700 -rotate-45" />
              {/* Center Hub */}
              <div className="w-7 h-7 rounded-full bg-white border-2 border-slate-300 z-10 shadow-xs" />
            </div>

            {/* Right Branding: LG Logo + DUAL Inverter */}
            <div className="flex flex-col items-center justify-center flex-1">
              <LGLogo className="w-10 h-10 mb-1" showText={true} />
              <div className="text-[10px] font-bold text-slate-600 tracking-wider uppercase mt-1">
                DUAL Inverter
              </div>
              <div className="text-[8px] text-slate-400 font-medium">
                18.000 BTU/h
              </div>
            </div>
          </div>

          {/* Base mounting brackets */}
          <div className="flex justify-between px-2 -mb-5 pt-1">
            <div className="w-6 h-2 bg-slate-400 rounded-b shadow-xs" />
            <div className="w-6 h-2 bg-slate-400 rounded-b shadow-xs" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 2: Outdoor Condenser 3/4 Isometric View
export function LGCondenserAngleVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 bg-white select-none">
      <div className="relative w-full max-w-sm bg-gradient-to-r from-slate-50 via-white to-slate-100 rounded-xl border border-slate-300 shadow-xl p-4 sm:p-6 flex items-center justify-between overflow-hidden">
        {/* Side depth isometric panel */}
        <div className="absolute -right-3 top-0 bottom-0 w-8 bg-slate-200/90 border-l border-slate-300 transform -skew-y-12 origin-top-left" />

        {/* Large Circular Fan Grille */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-950 border-4 border-slate-200 relative flex items-center justify-center shadow-2xl shrink-0 overflow-hidden">
          {/* Radial concentric rings */}
          <div className="absolute inset-3 rounded-full border border-slate-800" />
          <div className="absolute inset-6 rounded-full border border-slate-800" />
          <div className="absolute inset-10 rounded-full border border-slate-800" />
          <div className="absolute inset-14 rounded-full border border-slate-800" />
          {/* Radial spiral blades */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-[1.5px] bg-slate-700/80"
              style={{ transform: `rotate(${i * 30}deg)` }}
            />
          ))}
          {/* Center White Hub */}
          <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-300 z-10 shadow-md" />
        </div>

        {/* Right Details: Authentic LG Branding */}
        <div className="flex flex-col items-center justify-center flex-1 pl-4 z-10">
          <LGLogo className="w-14 h-14 mb-1" showText={true} />
          
          <div className="text-xs font-bold text-slate-700 tracking-wider uppercase mt-2">
            DUAL Inverter
          </div>
          <div className="text-[10px] text-slate-500 font-medium">
            AI Energy Saver
          </div>

          <div className="mt-3 px-2.5 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-600 font-mono">
            R-32 Ecológico
          </div>
        </div>

        {/* Bottom metal feet */}
        <div className="absolute bottom-0 left-6 w-8 h-2 bg-slate-400 rounded-b shadow-xs" />
        <div className="absolute bottom-0 right-14 w-8 h-2 bg-slate-400 rounded-b shadow-xs" />
      </div>
    </div>
  );
}

// Slide 3: Outdoor Condenser Straight Frontal View (Aba 3)
export function LGCondenserFrontVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 bg-white select-none">
      <div className="relative w-full max-w-sm aspect-[4/3] bg-gradient-to-b from-white to-slate-50 rounded-xl border border-slate-300 shadow-xl p-4 sm:p-6 flex items-center justify-between">
        {/* Direct Frontal Fan Grille */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-slate-950 border-4 border-slate-200 relative flex items-center justify-center shadow-2xl shrink-0 overflow-hidden">
          {/* Concentric circles */}
          <div className="absolute inset-3 rounded-full border border-slate-800" />
          <div className="absolute inset-7 rounded-full border border-slate-800" />
          <div className="absolute inset-11 rounded-full border border-slate-800" />
          <div className="absolute inset-15 rounded-full border border-slate-800" />
          {/* Radial grille mesh spokes */}
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-[1.5px] bg-slate-700/80"
              style={{ transform: `rotate(${i * 22.5}deg)` }}
            />
          ))}
          {/* Center White Disc */}
          <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-300 z-10 shadow-md" />
        </div>

        {/* Right Side: Exact LG Branding & Badges */}
        <div className="flex flex-col items-center justify-center flex-1 pl-4">
          <LGLogo className="w-16 h-16 mb-1" showText={true} />

          <div className="text-sm font-bold text-slate-700 tracking-wider uppercase mt-2">
            DUAL Inverter
          </div>
          <div className="text-[11px] text-slate-500 font-medium">
            18.000 BTU/h
          </div>

          <div className="mt-3 flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded text-[10px] text-amber-900 font-medium">
            <span>⚡ 10 Anos Garantia</span>
          </div>
        </div>

        {/* Side valve cover on right */}
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-14 bg-slate-200 border border-slate-300 rounded-r-md shadow-xs" />

        {/* Bottom metal feet */}
        <div className="absolute -bottom-2 left-6 w-10 h-3 bg-slate-400 rounded-b shadow-xs" />
        <div className="absolute -bottom-2 right-12 w-10 h-3 bg-slate-400 rounded-b shadow-xs" />
      </div>
    </div>
  );
}

// Slide 4: Indoor Unit Wall Mount (Evaporadora Interna)
export function LGIndoorUnitVisual() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-white select-none">
      <div className="w-full max-w-md bg-gradient-to-b from-slate-50 via-white to-slate-100 rounded-2xl border border-slate-300 shadow-xl p-5 flex flex-col justify-between aspect-[16/7]">
        {/* Air intake ribs top */}
        <div className="w-full h-2 flex justify-between gap-1 opacity-25">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="flex-1 bg-slate-900 rounded-xs h-full" />
          ))}
        </div>

        {/* Center Brand Lockup */}
        <div className="flex flex-col items-center justify-center my-auto">
          <LGLogo className="w-8 h-8" showText={true} />
          <span className="text-[11px] font-semibold text-slate-500 mt-1">DUAL Inverter Voice +AI</span>
        </div>

        {/* Bottom Louver and Temperature Display */}
        <div className="w-full border-t border-slate-200 pt-2 flex items-center justify-between text-xs text-slate-600 px-2">
          <span className="text-[10px] text-slate-400">Silencioso · 19 dB</span>
          <div className="flex items-center gap-2 bg-slate-900 text-white px-2.5 py-0.5 rounded-full font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>20°C AUTO</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3 text-center">
        Evaporadora Interna LG DUAL Inverter Compact · Acabamento Premium Branco Fosco
      </p>
    </div>
  );
}

// Slide 5: Remote Control (Controle Remoto Oficial LG)
export function LGRemoteVisual() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-white select-none">
      <div className="w-32 sm:w-36 bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-300 shadow-xl p-3 flex flex-col items-center">
        {/* LCD Screen */}
        <div className="w-full bg-[#c8d1c3] rounded-lg border border-slate-400 p-2 flex flex-col items-center justify-center font-mono text-slate-900 shadow-inner mb-3">
          <div className="flex justify-between w-full text-[8px] text-slate-600 font-bold">
            <span>REFRIGERAÇÃO</span>
            <span>VENTILAÇÃO</span>
          </div>
          <div className="text-2xl font-black my-0.5">20°C</div>
          <div className="text-[8px] text-slate-600 font-semibold">AI COMFORT DUAL</div>
        </div>

        {/* Power button */}
        <div className="w-8 h-8 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs shadow-md hover:bg-rose-700 cursor-pointer mb-3">
          ⏻
        </div>

        {/* Controls grid */}
        <div className="grid grid-cols-2 gap-1.5 w-full mb-3 text-[9px] font-semibold text-slate-700">
          <div className="p-1 bg-slate-100 border border-slate-200 rounded text-center">TEMP ▲</div>
          <div className="p-1 bg-slate-100 border border-slate-200 rounded text-center">TEMP ▼</div>
          <div className="p-1 bg-slate-100 border border-slate-200 rounded text-center">MODO</div>
          <div className="p-1 bg-slate-100 border border-slate-200 rounded text-center">VELOC</div>
          <div className="p-1 bg-slate-100 border border-slate-200 rounded text-center">SWING</div>
          <div className="p-1 bg-slate-100 border border-slate-200 rounded text-center">TIMER</div>
        </div>

        {/* LG Brand at base */}
        <div className="pt-1 flex items-center gap-1">
          <LGLogo className="w-4 h-4" showText={false} />
          <span className="text-xs font-bold text-slate-700">LG</span>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-2 text-center">
        Controle Remoto Oficial LG com Comandos Completos e Display Iluminado
      </p>
    </div>
  );
}
