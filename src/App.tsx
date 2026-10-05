import React, { useState } from 'react';
import { MercadoHeader, CartItem } from './components/Header.tsx';
import { ProductInfoHead } from './components/ProductInfoHead.tsx';
import { ProductGallery } from './components/ProductGallery.tsx';
import { ProductPricingSection } from './components/ProductPricingSection.tsx';
import { ProductHighlights } from './components/ProductHighlights.tsx';
import { ProductCharacteristics } from './components/ProductCharacteristics.tsx';
import { SellerReputation } from './components/SellerReputation.tsx';
import { ProductDescription } from './components/ProductDescription.tsx';
import { ProductReviews } from './components/ProductReviews.tsx';
import { Footer } from './components/Footer.tsx';
import {
  Smartphone,
  Monitor,
  CheckCircle2,
  Sparkles,
  Share2,
  ChevronRight,
  ShoppingCart,
  Plus
} from 'lucide-react';

export default function App() {
  const [deviceView, setDeviceView] = useState<'mobile' | 'desktop'>('mobile');
  const [isFavorite, setIsFavorite] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  // Cart starts completely EMPTY as requested
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const productTitle = 'Ar-Condicionado LG DUAL Inverter Compact +AI 18.000 BTU Frio – S3-Q18KLQAL';

  const handleAddToCart = (quantityToAdd: number = 1, voltage: string = '220V') => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.title === productTitle);
      if (existing) {
        return prev.map((item) =>
          item.title === productTitle
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }
      return [
        ...prev,
        {
          id: 'lg-18000',
          title: `${productTitle} (${voltage})`,
          price: 199.90,
          quantity: quantityToAdd,
          shipping: 'Frete grátis',
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: number | string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: number | string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleShare = () => {
    setShareToast(true);
    setTimeout(() => setShareToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans">
      {/* Top Builder Control Bar */}
      <div className="bg-slate-900 text-slate-200 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs z-50">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">Rodapé Oficial Adicionado:</span>
          <span className="text-slate-300">
            Termos, Privacidade, Acessibilidade, Blog, Afiliados, CNPJ e endereço institucional ativos!
          </span>
        </div>

        {/* Viewport switchers */}
        <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg border border-slate-700">
          <button
            onClick={() => setDeviceView('mobile')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${
              deviceView === 'mobile'
                ? 'bg-[#ffe600] text-slate-950 font-bold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
          <button
            onClick={() => setDeviceView('desktop')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${
              deviceView === 'desktop'
                ? 'bg-[#ffe600] text-slate-950 font-bold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 px-2.5 py-1 rounded font-medium flex items-center gap-1.5 transition-colors"
          >
            <ShoppingCart className="w-3 h-3 text-[#ffe600]" />
            <span>Ver carrinho ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</span>
          </button>
        </div>
      </div>

      {/* Share Toast Notification */}
      {shareToast && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs px-4 py-2 rounded-full shadow-lg border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <Share2 className="w-3.5 h-3.5 text-blue-400" />
          <span>Link do produto copiado para a área de transferência!</span>
        </div>
      )}

      {/* Main Container */}
      <div className="flex-1 flex flex-col items-center p-2 sm:p-6 bg-slate-200/50">
        {/* Device frame container */}
        <div
          className={`w-full transition-all duration-300 flex flex-col bg-white rounded-xl shadow-xl overflow-hidden border border-slate-300/80 ${
            deviceView === 'mobile'
              ? 'max-w-[430px] my-2 sm:my-4'
              : 'max-w-5xl my-2 sm:my-4'
          }`}
        >
          {/* 1. CABEÇALHO DO MERCADO LIVRE (PRINT 1) */}
          <MercadoHeader
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
          />

          {/* Breadcrumb de categoria */}
          <div className="bg-white px-4 py-2 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1 text-[11px] text-slate-500 truncate">
              <span>Voltar à lista</span>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className="text-[#3483fa] hover:underline cursor-pointer">Ar e Ventilação</span>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className="text-[#3483fa] hover:underline cursor-pointer">LG</span>
            </div>
          </div>

          {/* 2 & 3. INFORMAÇÕES DE MARCA, AVALIAÇÃO E MAIS VENDIDO (PRINTS 2 E 3) */}
          <ProductInfoHead
            brandLinkText="Conferir mais produtos da marca LG"
            condition="Novo"
            salesCount="+1000 vendidos"
            rating={4.9}
            reviewCount={395}
          />

          {/* 4. TÍTULO E GALERIA DE FOTOS (PRINT 4) */}
          <ProductGallery
            title={productTitle}
            isFavorite={isFavorite}
            onToggleFavorite={() => setIsFavorite(!isFavorite)}
            onShare={handleShare}
          />

          {/* 5. COR, VOLTAGEM, PREÇO, FRETE GRÁTIS, ESTOQUE, BOTÕES E GARANTIAS (PRINTS 5, 6 E 7) */}
          <ProductPricingSection
            onAddToCart={handleAddToCart}
          />

          {/* 6. O QUE VOCÊ PRECISA SABER SOBRE ESTE PRODUTO (PRINT 8) */}
          <ProductHighlights />

          {/* 7. CARACTERÍSTICAS DO PRODUTO (PRINT 9) */}
          <ProductCharacteristics />

          {/* 8. REPUTAÇÃO DO VENDEDOR / MERCADOLÍDER PLATINUM (PRINT 10) */}
          <SellerReputation />

          {/* 9. DESCRIÇÃO DO PRODUTO (PRINT 11) */}
          <ProductDescription />

          {/* 10. OPINIÕES DO PRODUTO (PRINTS 12, 13, 14, 15, 16, 17) */}
          <ProductReviews />

          {/* 11. RODAPÉ OFICIAL (PRINT 18) */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
