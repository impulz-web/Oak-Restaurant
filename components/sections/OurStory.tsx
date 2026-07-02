'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';

interface OurStoryProps {
  onReserveClick: () => void;
}

export function OurStory({ onReserveClick }: OurStoryProps) {
  return (
    <section id="story" className="py-24 lg:py-32 bg-charcoal text-cream relative overflow-hidden">
      {/* Decorative copper backdrop mesh */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-copper/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Column 1: Philosophy and Sourcing Text */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold">
              Culinary Heritage & Smoke
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-cream mt-2 tracking-tight">
              Our Story
            </h2>
            <div className="h-px w-20 bg-copper mt-5 mb-8" />
          </div>

          <p className="text-cream/80 text-sm leading-relaxed font-sans">
            Ember & Oak was born out of a desire to return to the primal foundations of cooking—harnessing live hardwood flames and native smoke—while infusing it with refined global techniques. Founded by culinary visionaries, we reject gas ovens and electric stoves. Our hearth is a living, breathing installation fueled exclusively by local olive wood and oak timbers.
          </p>

          <p className="text-cream/80 text-sm leading-relaxed font-sans">
            Our commitment is to absolute seasonal integrity. We partner directly with organic family farms in the Kenya Highlands, artisanal cheese makers in Limuru, and sustainable fishermen along the Indian Ocean coast. Every ingredient is sourced daily, ensuring that what arrives on your plate is a pristine reflection of Kenya’s diverse micro-climates.
          </p>

          <div className="grid grid-cols-2 gap-6 border-y border-cream/10 py-6 my-6">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-copper font-bold">100% Wood Hearth</h4>
              <p className="text-[11px] text-cream/60 mt-1 leading-relaxed">No gas, no short-cuts. Primal cooking refined.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-copper font-bold">Highlands Sourcing</h4>
              <p className="text-[11px] text-cream/60 mt-1 leading-relaxed">Local, sustainable, and organic organic farms.</p>
            </div>
          </div>

          <div className="pt-4">
            <Button variant="outline" size="md" onClick={onReserveClick}>
              Explore Our Philosophy
            </Button>
          </div>
        </div>

        {/* Column 2: Premium Restaurant Interior Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden border border-copper/20">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
              alt="Ember and Oak warm luxury dining room interior"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Overlay border framing */}
            <div className="absolute inset-4 border border-copper/10 pointer-events-none" />
            
            {/* Inner Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-cream text-charcoal p-4 border border-copper/20 max-w-xs hidden sm:block">
              <span className="text-[9px] uppercase tracking-widest text-copper font-bold block">
                The Environment
              </span>
              <p className="font-serif text-xs text-charcoal/80 mt-1 leading-relaxed">
                A carefully balanced acoustic space with hand-carved indigenous cedar furniture, glowing fireplaces, and soft twilight illumination.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
