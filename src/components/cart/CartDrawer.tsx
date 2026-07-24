import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatQuetzales } from '../../types/menu';
import { RestaurantApiService } from '../../services/api';

export const CartDrawer: React.FC = () => {
  const { cart, isOpen, closeCart, updateQuantity, removeFromCart, clearCart, totalAmount, totalItems } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryType, setDeliveryType] = useState<'dine_in' | 'takeout' | 'delivery'>('takeout');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0 || !customerName || !customerPhone) return;

    setSubmitting(true);
    try {
      const orderItems = cart.map((item) => ({
        menuItemId: item.menuItem.id,
        name: item.menuItem.name,
        quantity: item.quantity,
        price: item.menuItem.price,
      }));

      const res = await RestaurantApiService.submitOrder({
        items: orderItems,
        totalAmount,
        customerName,
        customerPhone,
        deliveryType,
        notes,
      });

      window.open(res.whatsappMessageUrl, '_blank', 'noopener,noreferrer');
      clearCart();
      closeCart();
    } catch (err) {
      console.error('Error enviando orden:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Dark Overlay backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121016] text-slate-100 border-l border-luchador-gold/30 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#18151e]">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-luchador-gold/20 flex items-center justify-center text-luchador-gold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Tu Pedido</h3>
                <p className="text-xs text-luchador-gold">
                  {totalItems} {totalItems === 1 ? 'platillo' : 'platillos'} seleccionados
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="font-bold text-white text-base">Tu pedido está vacío</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Navega por nuestro menú y añade tus platillos fusión favoritos.
                </p>
                <button
                  onClick={closeCart}
                  className="px-5 py-2.5 rounded-xl bg-luchador-gold text-[#0d0c0e] font-bold text-xs uppercase tracking-wider hover:brightness-110"
                >
                  Ver Menú
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.menuItem.id}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-3 group"
                  >
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      className="w-16 h-16 rounded-lg object-cover bg-black/40 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-xs text-white truncate">{item.menuItem.name}</h5>
                      <span className="font-display font-black text-sm text-luchador-gold">
                        {formatQuetzales(item.menuItem.price * item.quantity)}
                      </span>
                      {item.specialInstructions && (
                        <p className="text-[10px] text-slate-400 italic truncate">
                          Nota: {item.specialInstructions}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-end space-y-2">
                      <button
                        onClick={() => removeFromCart(item.menuItem.id)}
                        className="text-slate-500 hover:text-luchador-red p-1 transition-colors"
                        title="Eliminar del pedido"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center space-x-1.5 bg-black/40 border border-white/10 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.menuItem.id, -1)}
                          className="w-5 h-5 rounded flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.menuItem.id, 1)}
                          className="w-5 h-5 rounded flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-xs"
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

          {/* Footer Checkout Controls */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#16141c] space-y-4">
              {/* Order Mode Selector */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Tipo de Servicio
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('takeout')}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-colors ${
                      deliveryType === 'takeout'
                        ? 'bg-luchador-gold text-[#0d0c0e] border-luchador-gold'
                        : 'bg-white/5 border-white/10 text-slate-300'
                    }`}
                  >
                    Para Llevar
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-colors ${
                      deliveryType === 'delivery'
                        ? 'bg-luchador-gold text-[#0d0c0e] border-luchador-gold'
                        : 'bg-white/5 border-white/10 text-slate-300'
                    }`}
                  >
                    Domicilio
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('dine_in')}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-colors ${
                      deliveryType === 'dine_in'
                        ? 'bg-luchador-gold text-[#0d0c0e] border-luchador-gold'
                        : 'bg-white/5 border-white/10 text-slate-300'
                    }`}
                  >
                    En Mesa
                  </button>
                </div>
              </div>

              {/* Customer Inputs */}
              <form onSubmit={handleCheckout} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-luchador-gold"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Tu WhatsApp *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-luchador-gold"
                  />
                </div>

                {/* Total Summary */}
                <div className="flex justify-between items-center py-2 border-t border-b border-white/10">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Total a Pagar:
                  </span>
                  <span className="font-display font-black text-2xl text-luchador-cream">
                    {formatQuetzales(totalAmount)}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Pedido a WhatsApp ({formatQuetzales(totalAmount)})</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
