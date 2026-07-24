import React from 'react';
import { Flame, Plus, Star, Sparkles, Info } from 'lucide-react';
import { MenuItem, formatQuetzales } from '../../types/menu';
import { useCart } from '../../context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
  onOpenDetail: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onOpenDetail }) => {
  const { addToCart } = useCart();

  return (
    <div className="group rounded-2xl glass-panel border border-white/10 hover:border-luchador-gold/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-glow-gold">
      <div>
        {/* Item Image with Badges */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black/40">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16141a] via-transparent to-transparent"></div>

          {/* Badges Top Bar */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
            <div className="flex flex-wrap gap-1.5">
              {item.isPopular && (
                <span className="px-2.5 py-1 rounded-full bg-luchador-gold text-[#0d0c0e] font-bold text-[10px] uppercase tracking-wider shadow-lg flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Popular</span>
                </span>
              )}
              {item.tags?.includes('chef-choice') && (
                <span className="px-2.5 py-1 rounded-full bg-luchador-red text-white font-bold text-[10px] uppercase tracking-wider shadow-lg flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Chef's Choice</span>
                </span>
              )}
              {item.tags?.includes('vegetariano') && (
                <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-lg">
                  Vegetariano
                </span>
              )}
            </div>

            {/* Spiciness Indicator */}
            {item.spicinessLevel && (
              <div className="px-2 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center space-x-0.5 text-luchador-red text-[11px]">
                {[...Array(item.spicinessLevel)].map((_, i) => (
                  <Flame key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          <div className="flex justify-between items-start gap-2">
            <div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-luchador-gold transition-colors">
                {item.name}
              </h3>
              {item.subtitle && (
                <p className="text-xs text-luchador-gold/90 font-medium">{item.subtitle}</p>
              )}
            </div>
          </div>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Ingredients tags */}
          {item.ingredients && (
            <div className="flex flex-wrap gap-1 pt-1">
              {item.ingredients.slice(0, 3).map((ing, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-400"
                >
                  {ing}
                </span>
              ))}
              {item.ingredients.length > 3 && (
                <span className="text-[10px] text-slate-500 font-mono">
                  +{item.ingredients.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer with ELEGANT QUETZAL PRICE (Q) and Add Button */}
      <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-3">
        {/* Highly visible, elegant price tag strictly in Q */}
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Precio</span>
          <span className="font-display font-black text-2xl text-luchador-cream group-hover:text-luchador-gold transition-colors tracking-tight">
            {formatQuetzales(item.price)}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onOpenDetail(item)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="Ver detalles del platillo"
            aria-label="Ver detalles"
          >
            <Info className="w-4 h-4" />
          </button>

          <button
            onClick={() => addToCart(item, 1)}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-luchador-gold to-amber-600 hover:from-amber-500 hover:to-luchador-red text-[#0d0c0e] hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
