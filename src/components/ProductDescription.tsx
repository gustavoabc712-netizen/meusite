import React from 'react';

export function ProductDescription() {
  return (
    <section className="w-full bg-white px-4 py-6 border-b border-slate-100 text-left font-sans">
      <h2 className="text-[18px] sm:text-[20px] font-normal text-slate-900 tracking-tight mb-5">
        Descrição
      </h2>

      <div className="space-y-5 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
        {/* Parágrafo Principal */}
        <p>
          A LG, pioneira no âmbito tecnológico e com histórico internacional, está comprometida em fornecer produtos e soluções com a mais alta qualidade do mercado. Desfrutar do melhor ar condicionado e com um desenho que encaixa na sua casa é sem dúvida pensar na LG. Dias quentes não são mais um problema para você. Este ar condicionado LG Dual Inverter Compact será a melhor companhia para você desfrutar de sua casa, independentemente da temperatura externa.
        </p>

        {/* Desenho adequado aos seus espaços */}
        <div>
          <h3 className="text-slate-700 font-normal mb-1">
            Desenho adequado aos seus espaços
          </h3>
          <p>
            O tipo de ar condicionado split é de baixo consumo de energia, manutenção fácil e extremamente silencioso pois possui uma unidade externa.
          </p>
        </div>

        {/* Tecnologia inverter */}
        <div>
          <h3 className="text-slate-700 font-normal mb-1">
            Tecnologia inverter
          </h3>
          <p>
            Este tipo de tecnologia melhora a eficiência do seu equipamento, aumenta sua capacidade de refrigeração e proporciona uma temperatura mais estável.
          </p>
        </div>

        {/* Programe de acordo com suas necessidades (Novo Print) */}
        <div>
          <h3 className="text-slate-700 font-normal mb-1">
            Programe de acordo com suas necessidades
          </h3>
          <p>
            Quando as pessoas descansam sua temperatura corporal diminui gradualmente. É por isso que este ar tem a função de sono, que faz com que a temperatura ambiente aumente à medida que o tempo passa. Você não terá que se levantar para desligá-lo e poderá desfrutar de um sono agradável.
          </p>
        </div>
      </div>
    </section>
  );
}
