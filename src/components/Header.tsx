import React, { useState } from 'react';
import mlBingLogo from '../assets/images/ml_bing_logo.png';
import {
  Search,
  Menu,
  ShoppingCart,
  MapPin,
  X,
  ChevronRight,
  User,
  Package,
  Heart,
  Tag,
  HelpCircle,
  Bell,
  Trash2,
  Plus,
  Minus,
  ShoppingBag
} from 'lucide-react';

export interface CartItem {
  id: number | string;
  title: string;
  price: number;
  quantity: number;
  shipping?: string;
  image?: string;
}

interface HeaderProps {
  onSearch?: (query: string) => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number | string, delta: number) => void;
  onRemoveItem: (id: number | string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export function MercadoHeader({
  onSearch,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  isCartOpen,
  setIsCartOpen,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [address, setAddress] = useState('Informe seu CEP');
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [cepInput, setCepInput] = useState('');

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const searchSuggestions = [
    'Ar Condicionado LG Dual Inverter',
    'Ar Condicionado 12000 BTU',
    'Smartphone Samsung Galaxy',
    'Smart TV 50 polegadas LG',
    'Fritadeira Air Fryer',
    'Geladeira Frost Free',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
    setIsSearchFocused(false);
  };

  const handleSaveCep = (e: React.FormEvent) => {
    e.preventDefault();
    if (cepInput.trim()) {
      setAddress(`Enviar para CEP ${cepInput.trim()}`);
    }
    setIsEditingAddress(false);
    setCepInput('');
  };

  return (
    <div className="w-full font-sans select-none">
      {/* Top Header Bar - Exact Match to Screenshot */}
      <header
        className="w-full bg-[#fff159] border-b border-[#ebd734]/80 px-2 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between shadow-xs sticky top-0 z-40 transition-colors"
        style={{ backgroundColor: '#fff159' }}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center gap-2 sm:gap-3">
          {/* Logo (Handshake from Bing link) */}
          <a
            href="#home"
            className="shrink-0 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            title="Mercado Livre"
            aria-label="Mercado Livre Página Inicial"
          >
            <img
              src={mlBingLogo}
              alt="Mercado Livre"
              className="h-[32px] sm:h-[36px] w-auto object-contain rounded-xs drop-shadow-xs"
            />
          </a>

          {/* Search Bar - Exact Match to Screenshot */}
          <div className="relative flex-1 max-w-3xl">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <div className="relative flex items-center w-full bg-white rounded-[3px] shadow-[0_1px_2px_0_rgba(0,0,0,0.18)] focus-within:shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] transition-shadow">
                <div className="pl-2.5 sm:pl-3 pr-1 text-slate-400 flex items-center justify-center pointer-events-none">
                  <Search className="w-4 h-4 text-slate-400 stroke-[1.8]" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Estou buscando..."
                  className="w-full py-1.5 sm:py-2 pl-1 pr-8 text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none font-normal"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="pr-2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>

            {/* Search Suggestions Dropdown */}
            {isSearchFocused && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setIsSearchFocused(false)}
                />
                <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-md shadow-xl border border-slate-200 z-40 py-2 overflow-hidden text-sm">
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Mais buscados
                  </div>
                  {searchSuggestions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchQuery(item);
                        setIsSearchFocused(false);
                      }}
                      className="w-full px-3 py-2 text-left text-slate-700 hover:bg-slate-100 flex items-center gap-2.5 transition-colors"
                    >
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Action Icons: Hamburger Menu & Shopping Cart */}
          <div className="flex items-center gap-2 sm:gap-3.5 shrink-0 pl-1">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-1.5 text-slate-800 hover:bg-black/5 active:bg-black/10 rounded transition-colors"
              title="Menu principal"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6 text-[#333333] stroke-[1.8]" />
            </button>

            {/* Shopping Cart Button - Exact to Screenshot (NO badge when empty) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1.5 text-slate-800 hover:bg-black/5 active:bg-black/10 rounded transition-colors relative"
              title="Carrinho de compras"
              aria-label="Abrir carrinho de compras"
            >
              <ShoppingCart className="w-6 h-6 text-[#333333] stroke-[1.8]" />
              {/* Only show badge when cart has items! */}
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 min-w-[17px] h-[17px] px-1 bg-rose-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs animate-in zoom-in">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Sub-header Bar: Delivery / Location address */}
      <div className="w-full bg-[#fff159] border-b border-[#ebd734] px-3 py-1.5 text-xs text-slate-700 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <button
            onClick={() => setIsEditingAddress(true)}
            className="flex items-center gap-1.5 text-slate-800 hover:text-slate-950 font-normal truncate transition-colors text-left"
          >
            <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0" />
            <span className="truncate">
              {address === 'Informe seu CEP' ? (
                <>
                  <span className="text-slate-600">Enviar para </span>
                  <span className="underline decoration-slate-400 font-medium">Informe seu CEP</span>
                </>
              ) : (
                <span className="font-medium">{address}</span>
              )}
            </span>
          </button>

          <span className="text-[11px] text-slate-600 hidden sm:inline">
            Benefício com Mercado Pontos
          </span>
        </div>
      </div>

      {/* Address / CEP Modal */}
      {isEditingAddress && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl max-w-sm w-full p-5 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ffe600] fill-[#ffe600] stroke-slate-900" />
                Onde quer receber suas compras?
              </h3>
              <button
                onClick={() => setIsEditingAddress(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Informe seu CEP para ver custos e prazos de entrega exatos na sua região.
            </p>
            <form onSubmit={handleSaveCep} className="flex flex-col gap-3">
              <input
                type="text"
                value={cepInput}
                onChange={(e) => setCepInput(e.target.value)}
                placeholder="Ex: 01001-000"
                maxLength={9}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditingAddress(false)}
                  className="flex-1 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
                >
                  Confirmar CEP
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile / Side Menu Drawer */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300">
            {/* Drawer Header */}
            <div className="bg-[#fff159] p-4 flex items-center justify-between border-b border-[#ebd734]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/80 border border-slate-300 flex items-center justify-center text-slate-700">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Olá, Visitante</h4>
                  <p className="text-[11px] text-slate-700">Entre para ver suas compras</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 rounded-full hover:bg-black/10 text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 overflow-y-auto py-2">
              <div className="px-4 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Navegação
              </div>
              <nav className="flex flex-col text-sm text-slate-700">
                <a
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 transition-colors"
                >
                  <span>Início</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="#ofertas"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-blue-600" />
                    Ofertas do dia
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="#compras"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-blue-600" />
                    Minhas compras
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="#favoritos"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500" />
                    Favoritos
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="#notificacoes"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-amber-500" />
                    Notificações
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>

                <div className="my-2 border-t border-slate-100" />

                <div className="px-4 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Categorias
                </div>
                {['Ar Condicionado & Climatização', 'Eletrodomésticos', 'Tecnologia', 'Casa & Decoração'].map((cat, i) => (
                  <a
                    key={i}
                    href={`#cat-${cat}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 text-xs text-slate-600 transition-colors"
                  >
                    <span>{cat}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  </a>
                ))}

                <div className="my-2 border-t border-slate-100" />

                <a
                  href="#ajuda"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  Contato e Ajuda
                </a>
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <button className="w-full py-2.5 bg-[#3483fa] hover:bg-[#2968c8] text-white font-medium text-xs rounded-lg transition-colors shadow-xs">
                Entrar na minha conta
              </button>
            </div>
          </div>
        </>
      )}

      {/* Shopping Cart Drawer */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-96 max-w-[90vw] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 animate-in slide-in-from-right">
            {/* Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-slate-800" />
                <h3 className="text-base font-bold text-slate-900">
                  Carrinho {totalItems > 0 ? `(${totalItems})` : ''}
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items or Empty State */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col">
              {cartItems.length === 0 ? (
                <div className="my-auto text-center py-10 px-4 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4 border border-slate-200">
                    <ShoppingBag className="w-8 h-8 text-slate-400 stroke-[1.5]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    Seu carrinho está vazio
                  </h4>
                  <p className="text-xs text-slate-500 max-w-xs leading-relaxed mb-6">
                    Você ainda não adicionou nenhum produto ao seu carrinho.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-5 py-2.5 bg-[#3483fa] hover:bg-[#2968c8] text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                  >
                    Ver ofertas e produtos
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 border border-slate-200 rounded-lg flex flex-col gap-2 hover:border-slate-300 transition-colors bg-white shadow-xs"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs font-medium text-slate-900 leading-snug">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                          title="Remover"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.shipping && (
                        <div className="text-xs text-emerald-600 font-medium">
                          {item.shipping}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-sm font-bold text-slate-900 tabular-nums">
                          R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>

                        <div className="flex items-center border border-slate-200 rounded-md">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-2 py-1 text-slate-500 hover:bg-slate-100 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 py-0.5 text-xs font-semibold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-2 py-1 text-slate-500 hover:bg-slate-100 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer when has items */}
            {cartItems.length > 0 && (
              <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 font-medium">Total da compra</span>
                  <span className="text-lg font-bold text-slate-900 tabular-nums">
                    R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <button className="w-full py-2.5 bg-[#3483fa] hover:bg-[#2968c8] text-white font-medium text-xs rounded-lg transition-colors shadow-xs">
                  Continuar a compra
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
