import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Flame, Sparkles, Star } from 'lucide-react';
import { MenuItem, formatQuetzales } from '../../types/menu';
import { useCart } from '../../context/CartContext';

interface MenuDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const MenuDetailModal: React.FC<MenuDetailModalProps> = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  const { addToCart } = useCart();

  if (!item) return null;

  const handleAddToCart = () => {
    addToCart(item, quantity, instructions);
    setQuantity(1);
    setInstructions('');
    onClose();
  };

  const totalPrice = item.price * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-2xl glass-panel-gold border border-luchador-gold/40 shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]">
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-black/60 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16141a] via-[#16141a]/40 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges Overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white drop-shadow-md">
                {item.name}
              </h2>
              {item.subtitle && (
                <p className="text-sm text-luchador-gold font-medium">{item.subtitle}</p>
              )}
            </div>

            {/* Price badge strictly in Q */}
            <div className="bg-luchador-gold/90 text-[#0d0c0e] font-display font-black text-2xl px-4 py-1.5 rounded-xl shadow-lg">
              {formatQuetzales(item.price)}
            </div>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 space-y-5 overflow-y-auto">
          <p className="text-slate-300 text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Ingredients list */}
          {item.ingredients && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-luchador-gold uppercase tracking-wider">
                Ingredientes Principales:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Special instructions */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Instrucciones Especiales para la Cocina (Opcional):
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Ej: Sin picante, salsa por separado, etc."
              rows={2}
              className="w-full bg-black/40 border border-white/15 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-luchador-gold resize-none"
            ></textarea>
          </div>

          {/* Quantity Selector & Add Button */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl p-1.5 w-full sm:w-auto justify-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Disminuir cantidad"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-base w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Aumentar cantidad"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-luchador-gold to-luchador-red text-white font-bold text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all duration-200 shadow-glow-gold flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Agregar al Pedido ({formatQuetzales(totalPrice)})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
