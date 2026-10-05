import React, { useState } from 'react';
import {
  ChevronRight,
  Check,
  CreditCard,
  QrCode,
  FileText,
  Truck,
  ShieldCheck,
  X,
  ShoppingCart,
  Plus,
  CheckCircle2,
  RotateCcw
} from 'lucide-react';

interface ProductPricingSectionProps {
  onAddToCart: (quantity: number, voltage: string) => void;
  onBuyNow?: (quantity: number, voltage: string) => void;
}

export function ProductPricingSection({ onAddToCart, onBuyNow }: ProductPricingSectionProps) {
  const [selectedVoltage, setSelectedVoltage] = useState('220V');
  const [quantity, setQuantity] = useState(1);
  const [isQuantityModalOpen, setIsQuantityModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const originalPrice = 665.00;
  const price = 199.90;
  const discountPercentage = 70;
  const installments = '12x R$ 19,38';

  const quantityOptions = [1, 2];

  const handleSelectQuantity = (qty: number) => {
    setQuantity(qty);
    setIsQuantityModalOpen(false);
  };

  const handleAddToCartClick = () => {
    onAddToCart(quantity, selectedVoltage);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const handleBuyNowClick = () => {
    if (onBuyNow) {
      onBuyNow(quantity, selectedVoltage);
    } else {
      setIsCheckoutModalOpen(true);
    }
  };

  const handleConfirmPurchase = () => {
    setPurchaseSuccess(true);
    setTimeout(() => {
      setPurchaseSuccess(false);
      setIsCheckoutModalOpen(false);
    }, 2800);
  };

  return (
    <section className="w-full bg-white px-4 py-3 font-sans border-b border-slate-100 select-none text-left">
      {/* 1. COR: BRANCO */}
      <div className="text-[14px] text-slate-800 mb-3">
        <span>Cor: </span>
        <strong className="font-semibold text-slate-900">Branco</strong>
      </div>

      {/* 2. VOLTAGEM: ESCOLHA + BOTÃO 220V */}
      <div className="mb-4">
        <div className="text-[14px] text-slate-800 mb-2">
          <span>Voltagem: </span>
          <strong className="font-semibold text-slate-900">Escolha</strong>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedVoltage('220V')}
            className={`px-4 py-2 rounded-md border text-[13px] font-medium transition-all cursor-pointer ${
              selectedVoltage === '220V'
                ? 'border-slate-800 bg-white text-slate-900 ring-1 ring-slate-800 shadow-xs'
                : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
            }`}
          >
            220V
          </button>
        </div>
      </div>

      {/* 3. PREÇO COM DESCONTO: DE R$ 665 POR R$ 199,90 (70% OFF) */}
      <div className="mb-3">
        {/* Preço original riscado */}
        <div className="text-[14px] text-slate-400 line-through mb-0.5 font-normal">
          R$ 665
        </div>

        {/* Preço promocional e tag idêntica ao print: [70% OFF] no Pix */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="text-[32px] sm:text-[36px] font-normal text-slate-950 tracking-tight leading-none flex items-baseline gap-0.5">
            <span>R$ 199</span>
            <span className="text-[18px] font-normal -translate-y-2">90</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="bg-[#00a650] text-white text-[12px] sm:text-[13px] font-bold px-1.5 py-0.5 rounded-[3px] tracking-tight leading-tight">
              70% OFF
            </span>
            <span className="text-[#00a650] text-[13px] sm:text-[14px] font-semibold leading-none">
              no Pix
            </span>
          </div>
        </div>

        <div className="text-[14px] text-slate-700 mt-1">
          em {installments}
        </div>
        <button
          onClick={() => setIsPaymentModalOpen(true)}
          className="text-[13px] text-[#3483fa] hover:underline cursor-pointer font-normal mt-1 block"
        >
          Ver os meios de pagamento
        </button>
      </div>

      {/* 4. TAG VERDE: FRETE GRÁTIS ACIMA DE R$ 19 */}
      <div className="mb-2">
        <span className="inline-block bg-[#00a650] text-white text-[11px] font-bold px-2 py-0.5 rounded-[3px] tracking-wide uppercase">
          FRETE GRÁTIS ACIMA DE R$ 19
        </span>
      </div>

      {/* 5. PREVISÃO DE ENTREGA */}
      <div className="mb-4">
        <div className="text-[14px] leading-snug">
          <span className="text-[#00a650] font-semibold">Chegará grátis</span>
          <span className="text-slate-800"> entre 12 e 13/out</span>
        </div>
        <button
          onClick={() => setIsShippingModalOpen(true)}
          className="text-[13px] text-[#3483fa] hover:underline cursor-pointer font-normal mt-0.5 block"
        >
          Mais detalhes e formas de entrega
        </button>
      </div>

      {/* 6. ESTOQUE DISPONÍVEL & SELETOR DE QUANTIDADE */}
      <div className="mb-3">
        <div className="text-[14px] font-semibold text-slate-900 mb-2">
          Estoque disponível
        </div>

        {/* Botão de Quantidade */}
        <button
          onClick={() => setIsQuantityModalOpen(true)}
          className="w-full bg-[#f5f5f5] hover:bg-[#ececec] transition-colors rounded-lg px-3.5 py-3 flex items-center justify-between cursor-pointer border border-transparent active:scale-[0.99]"
        >
          <div className="text-[14px] text-slate-800 flex items-center">
            <span>Quantidade: </span>
            <strong className="font-bold text-slate-950 ml-1">{quantity}</strong>
            <span className="text-slate-400 text-[13px] ml-1.5">(2 disponíveis)</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {/* 7. BOTÕES DE AÇÃO: COMPRAR AGORA & ADICIONAR AO CARRINHO (EXATAMENTE COMO NO PRINT) */}
      <div className="mt-3.5 space-y-2">
        {/* Botão Comprar agora */}
        <button
          onClick={handleBuyNowClick}
          className="w-full h-12 bg-[#3483fa] hover:bg-[#2968c8] text-white font-semibold text-[15px] sm:text-[16px] rounded-[6px] transition-colors flex items-center justify-center cursor-pointer shadow-xs active:scale-[0.99]"
        >
          Comprar agora
        </button>

        {/* Botão Adicionar ao carrinho */}
        <button
          onClick={handleAddToCartClick}
          className="w-full h-12 bg-[#e3edfb] hover:bg-[#d4e4f9] text-[#3483fa] font-semibold text-[15px] sm:text-[16px] rounded-[6px] transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
        >
          {/* Ícone de carrinho com sinal de + */}
          <div className="relative flex items-center justify-center">
            <ShoppingCart className="w-[18px] h-[18px] text-[#3483fa]" />
            <Plus className="w-2.5 h-2.5 text-[#3483fa] absolute -top-1 -right-1 font-black stroke-[3.5]" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </div>

      {/* 8. BENEFÍCIOS: DEVOLUÇÃO GRÁTIS E COMPRA GARANTIDA (EXATAMENTE COMO NO PRINT) */}
      <div className="mt-4 pt-1 space-y-3 text-[13px] sm:text-[13.5px] leading-snug">
        {/* Devolução grátis */}
        <div className="flex items-start gap-2.5">
          <RotateCcw className="w-4 h-4 text-slate-500 mt-0.5 shrink-0 stroke-[1.8]" />
          <p className="text-slate-500">
            <button
              onClick={() => setIsReturnModalOpen(true)}
              className="text-[#3483fa] hover:underline font-normal inline cursor-pointer text-left"
            >
              Devolução grátis.
            </button>{' '}
            <span>Você tem 30 dias a partir da data de recebimento.</span>
          </p>
        </div>

        {/* Compra Garantida */}
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-slate-500 mt-0.5 shrink-0 stroke-[1.8]" />
          <p className="text-slate-500">
            <button
              onClick={() => setIsGuaranteeModalOpen(true)}
              className="text-[#3483fa] hover:underline font-normal inline cursor-pointer text-left"
            >
              Compra Garantida.
            </button>{' '}
            <span>Receba o produto que está esperando ou devolvemos o dinheiro.</span>
          </p>
        </div>
      </div>

      {/* Toast de Confirmação ao Adicionar ao Carrinho */}
      {addedToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs px-4 py-2.5 rounded-full shadow-2xl border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Produto ({quantity}x) adicionado ao carrinho com sucesso!</span>
        </div>
      )}

      {/* Modal de Finalização Direta (Comprar Agora) */}
      {isCheckoutModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => !purchaseSuccess && setIsCheckoutModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-xl p-5 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {purchaseSuccess ? (
              <div className="py-6 text-center">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Compra Concluída!</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Pedido confirmado. Chegará entre 12 e 13/out no seu endereço.
                </p>
                <div className="mt-4 p-3 bg-slate-50 rounded-lg text-xs text-slate-700">
                  <div className="flex justify-between font-semibold">
                    <span>Total pago:</span>
                    <span className="text-[#00a650]">R$ {(price * quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <h3 className="text-base font-bold text-slate-900">Resumo da compra</h3>
                  <button
                    onClick={() => setIsCheckoutModalOpen(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 text-xs mb-4">
                  <div className="p-3 bg-slate-50 rounded-lg space-y-1.5 border border-slate-200">
                    <div className="font-semibold text-slate-900 text-sm">
                      Ar-Condicionado LG DUAL Inverter 18000 BTU
                    </div>
                    <div className="text-slate-600 flex justify-between">
                      <span>Voltagem: <strong>{selectedVoltage}</strong></span>
                      <span>Quantidade: <strong>{quantity}x</strong></span>
                    </div>
                    <div className="text-slate-600 flex justify-between">
                      <span>Preço original:</span>
                      <span className="line-through text-slate-400">R$ {(originalPrice * quantity).toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="text-slate-600 flex justify-between text-[#00a650]">
                      <span>Desconto (70% OFF):</span>
                      <span className="font-semibold">- R$ {((originalPrice - price) * quantity).toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="text-slate-600 flex justify-between">
                      <span>Frete:</span>
                      <span className="text-[#00a650] font-semibold">Grátis</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-bold text-slate-900">
                      <span>Total a pagar:</span>
                      <span className="text-[#00a650]">
                        R$ {(price * quantity).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-lg flex items-center gap-2 text-emerald-900">
                    <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Previsão de entrega: <strong>12 a 13 de outubro</strong></span>
                  </div>
                </div>

                <button
                  onClick={handleConfirmPurchase}
                  className="w-full py-3 bg-[#3483fa] hover:bg-[#2968c8] text-white text-sm font-semibold rounded-md transition-colors shadow-xs"
                >
                  Confirmar compra (R$ {(price * quantity).toFixed(2).replace('.', ',')})
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal / Sheet de Seleção de Quantidade */}
      {isQuantityModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-0 sm:p-4 backdrop-blur-xs"
          onClick={() => setIsQuantityModalOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-t-2xl sm:rounded-xl p-4 shadow-2xl animate-in slide-in-from-bottom-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Escolha a quantidade</h3>
              <button
                onClick={() => setIsQuantityModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-2 divide-y divide-slate-100">
              {quantityOptions.map((qty) => (
                <button
                  key={qty}
                  onClick={() => handleSelectQuantity(qty)}
                  className={`w-full py-3 px-2 flex items-center justify-between text-sm transition-colors cursor-pointer ${
                    quantity === qty
                      ? 'text-[#3483fa] font-bold bg-blue-50/50 rounded-lg'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>
                    {qty} {qty === 1 ? 'unidade' : 'unidades'}
                  </span>
                  {quantity === qty && <Check className="w-4 h-4 text-[#3483fa]" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Meios de Pagamento */}
      {isPaymentModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setIsPaymentModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-xl p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <h3 className="text-base font-bold text-slate-900">Meios de pagamento</h3>
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <CreditCard className="w-5 h-5 text-[#3483fa] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">Cartão de Crédito</div>
                  <p className="text-slate-500 mt-0.5">
                    Em até 12x de R$ 19,38 nos cartões Visa, Mastercard, Elo, Hipercard e American Express.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <QrCode className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-emerald-950 text-sm">Pix Instantâneo</div>
                  <p className="text-emerald-800 mt-0.5">
                    Aprovação imediata do pedido e envio mais ágil.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <FileText className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">Boleto Bancário</div>
                  <p className="text-slate-500 mt-0.5">
                    Pagamento à vista com vencimento em até 3 dias úteis.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsPaymentModalOpen(false)}
              className="mt-4 w-full py-2 bg-[#3483fa] text-white text-xs font-semibold rounded-md hover:bg-[#2968c8]"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Detalhes de Entrega */}
      {isShippingModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setIsShippingModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-xl p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <h3 className="text-base font-bold text-slate-900">Formas de entrega</h3>
              <button
                onClick={() => setIsShippingModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg flex items-start gap-3">
                <Truck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-emerald-900 text-sm">Envio Grátis para todo o Brasil</div>
                  <p className="text-emerald-800 mt-0.5">
                    Chegará grátis entre 12 e 13/out no seu endereço cadastrado.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Compra Garantida Mercado Livre</div>
                  <p className="text-slate-500 mt-0.5">
                    Receba o produto que está esperando ou devolvemos o seu dinheiro.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsShippingModalOpen(false)}
              className="mt-4 w-full py-2 bg-[#3483fa] text-white text-xs font-semibold rounded-md hover:bg-[#2968c8]"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Modal Devolução Grátis */}
      {isReturnModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setIsReturnModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-xl p-5 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-[#3483fa]" />
                Devolução grátis
              </h3>
              <button
                onClick={() => setIsReturnModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <p>
                Você tem <strong>30 dias corridos</strong> a partir do momento em que receber o produto para devolvê-lo, sem custo algum.
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="font-semibold text-slate-900 mb-1">Como funciona:</div>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Peça a devolução pela seção "Minhas compras".</li>
                  <li>Você receberá uma etiqueta para postar o produto nos Correios ou agências parceiras.</li>
                  <li>Assim que enviado, seu dinheiro será reembolsado.</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setIsReturnModalOpen(false)}
              className="mt-4 w-full py-2.5 bg-[#3483fa] text-white text-xs font-semibold rounded-md hover:bg-[#2968c8]"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Modal Compra Garantida */}
      {isGuaranteeModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setIsGuaranteeModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-xl p-5 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Compra Garantida
              </h3>
              <button
                onClick={() => setIsGuaranteeModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <p>
                Com o programa <strong>Compra Garantida Mercado Livre</strong>, seu dinheiro está 100% protegido em todas as compras.
              </p>
              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg text-emerald-950">
                <div className="font-semibold mb-1">Total segurança:</div>
                <p>
                  Receba o produto exatamente como esperado ou devolvemos 100% do seu dinheiro, incluindo frete.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsGuaranteeModalOpen(false)}
              className="mt-4 w-full py-2.5 bg-[#3483fa] text-white text-xs font-semibold rounded-md hover:bg-[#2968c8]"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
