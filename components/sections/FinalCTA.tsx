'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';

interface FinalCTAProps {
  onReserveClick: () => void;
}

export function FinalCTA({ onReserveClick }: FinalCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-cream text-charcoal relative overflow-hidden">
      {/* Decorative copper backdrop blur */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-copper/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] bg-copper/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="border border-copper/15 bg-[#F4EFE7]/40 p-12 md:p-20 relative">
          {/* Accent corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-copper" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-copper" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-copper" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-copper" />

          <span className="text-[10px] uppercase tracking-[0.35em] text-copper font-bold block mb-4">
            An Unforgettable Evening Awaits
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-charcoal tracking-tight leading-tight max-w-3xl mx-auto font-bold mb-6">
            Secure Your Seat at the <br />
            <span className="italic text-copper font-medium">Ember & Oak Hearth</span>
          </h2>

          <p className="text-charcoal/70 text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed mb-10">
            Immerse yourself in dry-aged charcoal gastronomy, vintage wine flights, and sensory luxury in Nairobi, Mombasa, Kisumu, Nakuru, or Eldoret. Reservations fill rapidly.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xs sm:max-w-md mx-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={() => onReserveClick()}>
              Reserve Now
            </Button>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full">
                View Contact Info
              </Button>
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-charcoal/5 grid grid-cols-2 sm:grid-cols-3 gap-6 text-[10px] uppercase tracking-widest text-charcoal/50 font-sans">
            <div>
              <span className="text-copper font-bold block text-sm">Complimentary</span>
              Valet Parking
            </div>
            <div>
              <span className="text-copper font-bold block text-sm">Customized</span>
              Dietary Flights
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-copper font-bold block text-sm">12:00 PM – 11:00 PM</span>
              Operational Hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
