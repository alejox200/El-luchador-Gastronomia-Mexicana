import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Menu as MenuIcon, X, MapPin, Phone, Flame, Clock } from 'lucide-react';
import { RESTAURANT_DATA, getIsOpenNow } from '../../types/restaurant';
import { useCart } from '../../context/CartContext';
import { useReservation } from '../../context/ReservationContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const { openReservationModal } = useReservation();
  const openStatus = getIsOpenNow();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Menú', href: '#menu' },
    { name: 'Reservaciones', href: '#reservaciones' },
    { name: 'Ubicación & Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0c0e]/90 backdrop-blur-md border-b border-luchador-gold/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0d0c0e]/90 via-[#0d0c0e]/40 to-transparent py-5'
      }`}
    >
      {/* Top Banner Bar for Quick Info */}
      <div className="hidden lg:block border-b border-white/5 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-400">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1 hover:text-luchador-gold transition-colors">
              <MapPin className="w-3.5 h-3.5 text-luchador-gold" />
              <span>{RESTAURANT_DATA.address}</span>
            </span>
            <a
              href={`tel:${RESTAURANT_DATA.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center space-x-1 hover:text-luchador-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-luchador-gold" />
              <span>{RESTAURANT_DATA.phone}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-luchador-gold" />
              <span>
                {openStatus.isOpen ? (
                  <span className="inline-flex items-center text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-1.5"></span>
                    Abierto ahora ({openStatus.nextStatusMessage})
                  </span>
                ) : (
                  <span className="text-amber-400 font-medium">
                    Cerrado ahora • {openStatus.nextStatusMessage}
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#inicio" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-luchador-red via-luchador-gold to-[#851e1e] p-0.5 shadow-glow-gold group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0d0c0e] rounded-[10px] flex items-center justify-center">
                <Flame className="w-6 h-6 text-luchador-gold group-hover:text-luchador-red transition-colors duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl sm:text-2xl tracking-wider text-white group-hover:text-luchador-gold transition-colors">
                EL LUCHADOR
              </span>
              <span className="text-[10px] sm:text-xs text-luchador-gold tracking-widest uppercase font-semibold -mt-1">
                Gastronomía Mexicana Fusión
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-luchador-gold transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-luchador-red after:to-luchador-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Cart Trigger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={openReservationModal}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-luchador-gold to-[#b45309] text-white font-semibold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all duration-200 shadow-glow-gold"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar Mesa</span>
            </button>

            <button
              onClick={toggleCart}
              className="relative p-2.5 rounded-lg bg-luchador-card border border-white/10 hover:border-luchador-gold/40 text-slate-200 hover:text-luchador-gold transition-all duration-200 active:scale-95"
              aria-label="Abrir pedido"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-luchador-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-glow-red animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-luchador-card border border-white/10 text-slate-200"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-luchador-gold" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0c0e]/95 backdrop-blur-xl border-b border-luchador-gold/30 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/5 text-xs text-slate-300">
            <span>Estado hoy:</span>
            <span className={openStatus.isOpen ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
              {openStatus.isOpen ? 'Abierto' : 'Cerrado'} ({openStatus.nextStatusMessage})
            </span>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-luchador-gold hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openReservationModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-to-r from-luchador-gold to-luchador-red text-white font-bold text-sm uppercase tracking-wider shadow-glow-gold"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar una Mesa</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
