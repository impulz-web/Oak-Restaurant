'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
}

export function Hero({ onReserveClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-24 lg:pt-36 flex flex-col justify-center bg-cream overflow-hidden">
      {/* Absolute Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-copper/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-charcoal/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 py-12">
        
        {/* Left Column: Premium Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.35em] text-copper font-bold">
              The Epitome of Charcoal Gastronomy in Kenya
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal tracking-tight leading-[1.05] mt-4 mb-6 font-bold"
          >
            Where Wood Fire <br />
            <span className="italic text-copper font-medium">Meets Modern Art</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-charcoal/70 text-sm sm:text-base font-sans max-w-xl leading-relaxed mb-10"
          >
            Ember & Oak delivers a sensory fine dining experience across Kenya. Combining 100-day dry-aged prime cuts, hand-sourced seasonal ingredients, and live wood-fire cooking with Michelin-star discipline.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button variant="primary" size="lg" onClick={onReserveClick}>
              Reserve a Table
            </Button>
            <a href="#menu" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full">
                Explore The Menu
              </Button>
            </a>
          </motion.div>

          {/* Quick Stats or Highlights Bar (Inline) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-charcoal/10 pt-8 mt-12 w-full text-charcoal/80"
          >
            <div>
              <p className="text-2xl font-serif text-copper font-semibold">100%</p>
              <p className="text-[9px] uppercase tracking-wider text-charcoal/50 font-sans mt-1">Wood-fired</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-copper font-semibold">45 Days</p>
              <p className="text-[9px] uppercase tracking-wider text-charcoal/50 font-sans mt-1">Dry Aged Beef</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-copper font-semibold">5 Branches</p>
              <p className="text-[9px] uppercase tracking-wider text-charcoal/50 font-sans mt-1">In Kenyan Cities</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-copper font-semibold">A+ Rating</p>
              <p className="text-[9px] uppercase tracking-wider text-charcoal/50 font-sans mt-1">Gourmet Standard</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Featured Dish Masterpiece */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative w-full max-w-md aspect-[4/5] overflow-hidden border border-copper/20"
          >
            {/* Fine dining background representation */}
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
              alt="Ember and Oak signature dry aged wood fire ribeye steak"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay border decoration */}
            <div className="absolute inset-4 border border-cream/20 pointer-events-none" />

            {/* Subtle recommendation badge */}
            <div className="absolute top-6 left-6 bg-charcoal text-cream px-3.5 py-1.5 border border-copper/30 text-[8px] uppercase tracking-[0.2em] font-sans font-semibold">
              Chef Recommendation
            </div>

            {/* Price tag badge */}
            <div className="absolute bottom-6 right-6 bg-cream text-charcoal px-4 py-2 border border-copper/20 font-serif text-xs">
              45-Day Ribeye – KES 4,800
            </div>
          </motion.div>
        </div>
      </div>

      {/* Info Reservation Quick Card at Hero Bottom */}
      <div className="bg-charcoal text-cream py-10 border-t border-copper/15 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 font-sans">
          
          <div className="flex items-start gap-4 border-b md:border-b-0 md:border-r border-cream/10 pb-6 md:pb-0">
            <Calendar className="h-6 w-6 text-copper stroke-[1.2]" />
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-copper font-bold">Open Today</h4>
              <p className="text-xs text-cream/80 mt-1 uppercase font-semibold">Daily Bookings Open</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b md:border-b-0 md:border-r border-cream/10 pb-6 md:pb-0">
            <Clock className="h-6 w-6 text-copper stroke-[1.2]" />
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-copper font-bold">Opening Hours</h4>
              <p className="text-xs text-cream/80 mt-1">12:00 PM – 11:00 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b md:border-b-0 md:border-r border-cream/10 pb-6 md:pb-0">
            <MapPin className="h-6 w-6 text-copper stroke-[1.2]" />
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-copper font-bold">Primary Branch</h4>
              <p className="text-xs text-cream/80 mt-1">Mwanzi Road, Westlands, Nairobi</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-copper stroke-[1.2]" />
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-copper font-bold">Contact Number</h4>
              <p className="text-xs text-cream/80 mt-1 font-semibold">+254 711 000 001</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
