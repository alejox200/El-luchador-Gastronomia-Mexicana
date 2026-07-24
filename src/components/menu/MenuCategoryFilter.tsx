import React from 'react';
import { Category, DietaryTag } from '../../types/menu';
import { Flame, UtensilsCrossed, ChefHat, Cake, GlassWater, Sparkles, Filter, Search } from 'lucide-react';

interface MenuCategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeTagFilter: DietaryTag | 'todos';
  onTagFilterChange: (tag: DietaryTag | 'todos') => void;
}

export const MenuCategoryFilter: React.FC<MenuCategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  activeTagFilter,
  onTagFilterChange,
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-4 h-4" />;
      case 'ChefHat': return <ChefHat className="w-4 h-4" />;
      case 'Cake': return <Cake className="w-4 h-4" />;
      case 'GlassWater': return <GlassWater className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      default: return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  const tagFilters: { label: string; value: DietaryTag | 'todos' }[] = [
    { label: 'Todos los platillos', value: 'todos' },
    { label: '⭐ Recomendados', value: 'chef-choice' },
    { label: '🌱 Vegetarianos', value: 'vegetariano' },
    { label: '🌶️ Con Picante', value: 'picante' },
    { label: '🌾 Sin Gluten', value: 'gluten-free' },
  ];

  return (
    <div className="space-y-6 mb-12">
      {/* Search and Tag filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar taco, mole, cóctel..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-luchador-card border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-luchador-gold transition-colors"
          />
        </div>

        {/* Dietary Tag Pill Toggles */}
        <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-luchador-gold shrink-0 mr-1 hidden sm:block" />
          {tagFilters.map((tag) => (
            <button
              key={tag.value}
              onClick={() => onTagFilterChange(tag.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                activeTagFilter === tag.value
                  ? 'bg-luchador-gold text-[#0d0c0e] font-bold border-luchador-gold shadow-md'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs Grid */}
      <div className="flex items-center space-x-3 overflow-x-auto pb-4 scrollbar-thin">
        <button
          onClick={() => onSelectCategory('todos')}
          className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-300 border ${
            activeCategory === 'todos'
              ? 'bg-gradient-to-r from-luchador-gold to-amber-600 text-white border-luchador-gold shadow-glow-gold'
              : 'bg-luchador-card border-white/10 text-slate-300 hover:border-luchador-gold/40 hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Todo el Menú</span>
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center space-x-2.5 px-5 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-300 border ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-luchador-gold to-luchador-red text-white border-luchador-gold shadow-glow-gold'
                : 'bg-luchador-card border-white/10 text-slate-300 hover:border-luchador-gold/40 hover:text-white'
            }`}
          >
            {getCategoryIcon(cat.iconName)}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
