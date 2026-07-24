import React from 'react';
import { CartProvider } from './context/CartContext';
import { ReservationProvider } from './context/ReservationContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { AboutSection } from './components/about/AboutSection';
import { MenuSection } from './components/menu/MenuSection';
import { ReservationSection } from './components/reservation/ReservationSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { CartDrawer } from './components/cart/CartDrawer';
import { ReservationModal } from './components/reservation/ReservationModal';

export function App() {
  return (
    <CartProvider>
      <ReservationProvider>
        <div className="min-h-screen bg-[#0d0c0e] text-slate-100 selection:bg-luchador-red selection:text-white font-sans antialiased relative">
          {/* Main Top Navigation */}
          <Navbar />

          {/* Main Body Sections */}
          <main>
            <Hero />
            <AboutSection />
            <MenuSection />
            <ReservationSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating UI Elements */}
          <FloatingWhatsApp />
          <CartDrawer />
          <ReservationModal />
        </div>
      </ReservationProvider>
    </CartProvider>
  );
}

export default App;
