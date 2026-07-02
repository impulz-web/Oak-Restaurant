'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SignatureDishes } from '@/components/sections/SignatureDishes';
import { OurStory } from '@/components/sections/OurStory';
import { MeetTheChef } from '@/components/sections/MeetTheChef';
import { DiningExperience } from '@/components/sections/DiningExperience';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { ReservationProcess } from '@/components/sections/ReservationProcess';
import { Events } from '@/components/sections/Events';
import { FAQ } from '@/components/sections/FAQ';
import { ContactLocation } from '@/components/sections/ContactLocation';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';
import { ReservationModal } from '@/components/ui/Modal';
import { CalendarRange } from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalCity, setModalCity] = React.useState('Nairobi');
  const [showMobileSticky, setShowMobileSticky] = React.useState(false);

  // Monitor scroll height to trigger the mobile-only sticky action bar
  React.useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past hero height (approx 600px)
      if (window.scrollY > 400) {
        setShowMobileSticky(true);
      } else {
        setShowMobileSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openReservation = (city: string = 'Nairobi') => {
    setModalCity(city);
    setIsModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#FAF6F0] selection:bg-copper selection:text-charcoal overflow-x-hidden">
      {/* 1. Navigation */}
      <Navbar onReserveClick={() => openReservation('Nairobi')} />

      {/* 2. Hero Section */}
      <Hero onReserveClick={() => openReservation('Nairobi')} />

      {/* 3. Signature Dishes (Menu category filtering & Loading skeletons inside) */}
      <SignatureDishes onReserveClick={() => openReservation('Nairobi')} />

      {/* 4. Our Story (Philosophy & Interiors) */}
      <OurStory onReserveClick={() => openReservation('Nairobi')} />

      {/* 5. Meet The Chef (Bio & Spinning rotating recomendation badge inside) */}
      <MeetTheChef />

      {/* 6. Dining Experience (Experiences & Years / Diners Statistics inside) */}
      <DiningExperience />

      {/* 7. Gallery (Responsive grid visual portfolio with Lightbox popup inside) */}
      <Gallery />

      {/* 8. Customer Reviews (Testimonial cards optimized with Kenyan cities) */}
      <Reviews />

      {/* 9. Reservation Process (4 easy steps stepper) */}
      <ReservationProcess />

      {/* 10. Upcoming Events (Wine Tasting, Jazz Evening, Chef flights) */}
      <Events onReserveClick={() => openReservation('Nairobi')} />

      {/* 11. FAQ Accordions */}
      <FAQ />

      {/* 12. Contact & Locations (Multi-city interactive tabs & custom SVG Kenya outline map) */}
      <ContactLocation onReserveClick={(city) => openReservation(city)} />

      {/* 13. Final CTA */}
      <FinalCTA onReserveClick={() => openReservation('Nairobi')} />

      {/* 14. Footer (About, links, social links, fully validated newsletter form) */}
      <Footer />

      {/* Global Table Booking Modal popup */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCity={modalCity}
      />

      {/* EXTRA PREMIUM FEATURE: Sticky Reservation Button on Mobile devices scrolling down */}
      <AnimatePresence>
        {showMobileSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 120 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden w-[90%] max-w-sm"
          >
            <button
              onClick={() => openReservation('Nairobi')}
              className="w-full bg-charcoal text-copper hover:text-cream border border-copper px-6 py-4 flex items-center justify-center gap-3 shadow-2xl font-sans text-xs uppercase tracking-widest font-bold focus:outline-none"
            >
              <CalendarRange className="h-4 w-4 animate-pulse text-copper" />
              <span>Book Your Table Now</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
