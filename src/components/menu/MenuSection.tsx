import React, { useState, useEffect, useMemo } from 'react';
import { UtensilsCrossed, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';
import { Category, MenuItem, DietaryTag } from '../../types/menu';
import { RestaurantApiService } from '../../services/api';
import { MenuCategoryFilter } from './MenuCategoryFilter';
import { MenuItemCard } from './MenuItemCard';
import { MenuDetailModal } from './MenuDetailModal';

export const MenuSection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTagFilter, setActiveTagFilter] = useState<DietaryTag | 'todos'>('todos');
  const [selectedDetailItem, setSelectedDetailItem] = useState<MenuItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [catData, itemData] = await Promise.all([
          RestaurantApiService.getCategories(),
          RestaurantApiService.getMenuItems(),
        ]);
        setCategories(catData);
        setItems(itemData);
      } catch (err) {
        console.error('Error cargando menú:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category match
      const matchCategory = activeCategory === 'todos' || item.category === activeCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(query)) ||
        (item.ingredients && item.ingredients.some((i) => i.toLowerCase().includes(query)));

      // Tag match
      const matchTag =
        activeTagFilter === 'todos' || (item.tags && item.tags.includes(activeTagFilter as DietaryTag));

      return matchCategory && matchSearch && matchTag;
    });
  }, [items, activeCategory, searchQuery, activeTagFilter]);

  return (
    <section id="menu" className="py-24 bg-[#0d0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-luchador-gold/10 border border-luchador-gold/30 text-luchador-gold font-bold text-xs uppercase tracking-widest">
            <UtensilsCrossed className="w-4 h-4" />
            <span>Gastronomía de Autor en Guatemala</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
            NUESTRO MENÚ <br />
            <span className="bg-gradient-to-r from-luchador-gold via-amber-400 to-luchador-red bg-clip-text text-transparent">
              FUSIÓN MEXICANA
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explora nuestras creaciones exclusivas. Todos los precios están transparentemente expresados en la moneda oficial de Guatemala: <strong className="text-luchador-cream font-bold underline decoration-luchador-gold">Quetzales (Q)</strong>.
          </p>
        </div>

        {/* Category Filters Component */}
        <MenuCategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeTagFilter={activeTagFilter}
          onTagFilterChange={setActiveTagFilter}
        />

        {/* Loading Spinner State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-luchador-gold">
            <RefreshCw className="w-8 h-8 animate-spin mb-3" />
            <span className="text-sm font-semibold uppercase tracking-wider">Cargando menú de autor...</span>
          </div>
        ) : (
          <>
            {/* Empty State */}
            {filteredItems.length === 0 ? (
              <div className="text-center py-16 p-8 rounded-2xl glass-panel max-w-lg mx-auto space-y-3">
                <UtensilsCrossed className="w-10 h-10 text-slate-500 mx-auto" />
                <h3 className="font-bold text-white text-lg">No se encontraron platillos</h3>
                <p className="text-xs text-slate-400">
                  Intenta cambiar los términos de búsqueda o seleccionar otra categoría del menú.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('todos');
                    setSearchQuery('');
                    setActiveTagFilter('todos');
                  }}
                  className="px-4 py-2 rounded-xl bg-luchador-gold text-[#0d0c0e] font-bold text-xs uppercase tracking-wider hover:brightness-110"
                >
                  Restablecer Filtros
                </button>
              </div>
            ) : (
              /* Items Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onOpenDetail={setSelectedDetailItem}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Detail Modal */}
      <MenuDetailModal
        item={selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
      />
    </section>
  );
};
