'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface EventsProps {
  onReserveClick: () => void;
}

interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  price: string;
  image: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Old World Wine Tasting',
    date: 'Thursday, July 16, 2026',
    time: '07:00 PM',
    description: 'A curated flight of six vintage French and South African reserve wines, guided by our head sommelier and paired with aged artisanal cheeses from Limuru.',
    price: 'KES 8,500 per guest',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'evt-2',
    title: 'Live Acoustic Jazz Night',
    date: 'Saturday, July 18, 2026',
    time: '08:00 PM',
    description: 'Enjoy smooth jazz and deep soul from Kenya’s top acoustic instrumentalists. Savor our signature wood-fired plates and hand-crafted botanical mixology cocktails.',
    price: 'A La Carte Dinner Booking',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'evt-3',
    title: "Executive Chef's Tasting Flight",
    date: 'Wednesday, July 22, 2026',
    time: '07:30 PM',
    description: 'An ultimate, multi-sensory 7-course charcoal gastronomy voyage hosted live at the hearth by Chef David Mwangi. Highly exclusive, strictly limited to 12 diners.',
    price: 'KES 15,000 per guest',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'evt-4',
    title: 'Seasonal Rift Celebration Dinner',
    date: 'Friday, July 31, 2026',
    time: '07:00 PM',
    description: 'A wood-fired tribute to the organic mid-year harvests of the Central Rift Valley. Featuring dry-aged premium beef cuts, native root tubers, and hand-foraged herbs.',
    price: 'KES 12,000 per guest',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  },
];

export function Events({ onReserveClick }: EventsProps) {
  return (
    <section id="events" className="py-24 lg:py-32 bg-charcoal text-cream relative overflow-hidden border-t border-cream/10">
      {/* Decorative backdrop glow */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-copper/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold">
            Exclusive Gatherings
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-cream mt-2 tracking-tight">
            Upcoming Gastronomy Events
          </h2>
          <div className="h-px w-20 bg-copper/35 mx-auto mt-5" />
        </div>

        {/* Events Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENTS_DATA.map((evt, index) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1C1C1C] border border-cream/5 flex flex-col md:flex-row group overflow-hidden relative rounded-none hover:border-copper/35 transition-all duration-500"
            >
              {/* Left Side: Photo with Hover Zoom */}
              <div className="md:w-[40%] aspect-[16/10] md:aspect-auto overflow-hidden relative border-b md:border-b-0 md:border-r border-cream/5">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Right Side: Event Details */}
              <div className="md:w-[60%] p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-copper text-[9px] uppercase tracking-widest font-sans font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {evt.date}
                    </span>
                    <span className="hidden sm:inline text-cream/30">|</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {evt.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-cream font-semibold tracking-tight group-hover:text-copper transition-colors duration-300">
                    {evt.title}
                  </h3>

                  <p className="text-cream/70 text-xs font-sans leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                {/* Event Price & CTA action */}
                <div className="flex items-center justify-between pt-4 border-t border-cream/10">
                  <span className="text-[10px] uppercase tracking-wider text-cream/40 font-semibold font-sans">
                    {evt.price}
                  </span>
                  
                  <button
                    onClick={onReserveClick}
                    className="text-[10px] uppercase tracking-widest text-copper font-sans font-bold flex items-center gap-1 group/btn hover:text-cream transition-colors"
                  >
                    Reserve Spot
                    <ArrowRight className="h-3.5 w-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
