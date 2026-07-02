'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  favoriteDish: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Wanjiku Ndwiga',
    location: 'Nairobi (Westlands)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'Ember & Oak represents the absolute pinnacle of premium charcoal gastronomy in Nairobi. The 45-day dry-aged ribeye is brushed in bone marrow butter and cooked over olive-wood coals. Simply majestic.',
    favoriteDish: '45-Day Dry-Aged Ribeye',
  },
  {
    id: 'rev-2',
    name: 'Faraj Salim',
    location: 'Mombasa (Nyali)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'A truly breathtaking experience dining under the Nyali stars on the outdoor terrace. The Swahili Coast lobster tail is perfectly seared, tender, and beautifully glazed with saffron butter.',
    favoriteDish: 'Charred Mombasa Rock Lobster',
  },
  {
    id: 'rev-3',
    name: 'Dr. Arthur Ochieng',
    location: 'Kisumu (Riat Hills)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'A long-awaited culinary masterstroke in Kisumu. The sunset views over Lake Victoria from their Riat Hills estate, combined with handmade Saffron Prawn Tagliatelle, are unforgettable.',
    favoriteDish: 'Saffron Prawn Tagliatelle',
  },
];

export function Reviews() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal text-cream relative">
      {/* Subtle copper mesh accents */}
      <div className="absolute top-0 right-0 w-[35vw] h-[35vw] bg-copper/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold">
            Diner Chronicles
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-cream mt-2 tracking-tight">
            Guest Experiences
          </h2>
          <div className="h-px w-20 bg-copper/35 mx-auto mt-5" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#1C1C1C] border border-cream/5 p-8 flex flex-col justify-between h-full relative group hover:border-copper/30 transition-all duration-500 rounded-none"
            >
              {/* Quote icon watermark */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-cream/[0.03] group-hover:text-copper/[0.05] transition-colors duration-500 stroke-[1]" />

              <div className="space-y-6">
                {/* Rating Stars (strictly SVGs, no emojis) */}
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, starIdx) => (
                    <Star key={`star-${starIdx}`} className="h-4 w-4 text-copper fill-copper" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-cream/80 text-xs sm:text-sm font-sans leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="border-t border-cream/10 pt-6 mt-8 flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-none object-cover border border-copper/30 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                
                <div className="text-left">
                  <h4 className="font-serif text-sm text-cream font-semibold">
                    {review.name}
                  </h4>
                  <span className="text-[9px] uppercase tracking-wider text-copper font-bold block mt-0.5">
                    {review.location}
                  </span>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-sans text-cream/50">
                    <span className="uppercase tracking-widest text-[8px]">Favorite:</span>
                    <span className="text-copper font-semibold">{review.favoriteDish}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
