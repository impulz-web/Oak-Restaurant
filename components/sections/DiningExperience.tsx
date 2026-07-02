'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Sparkles, GlassWater, Trophy, Trees, Award } from 'lucide-react';

export function DiningExperience() {
  const experiences = [
    {
      id: 'exp-1',
      icon: Sparkles,
      title: 'Fine Dining',
      description: 'An meticulously structured multisensory evening seared by firewood charcoal. Relish tailored tasting flights, dry-aged beef, and michelin-grade tableside carving services.',
    },
    {
      id: 'exp-2',
      icon: Trophy,
      title: 'Private Events',
      description: 'Host custom milestones in our fully acoustic private halls. Specially curated menus, dedicated sommelier guides, and private fireplaces in Westlands & Nyali.',
    },
    {
      id: 'exp-3',
      icon: GlassWater,
      title: 'Wine Collection',
      description: 'Browse our climate-controlled cellars containing over 350 curated vintages. Explore Pinot Noirs, Napa Cabernet Sauvignons, and indigenous South African selections.',
    },
    {
      id: 'exp-4',
      icon: Trees,
      title: 'Outdoor Terrace',
      description: 'Breathe in the cool evening breeze under starry African skies. Candle-lit dining tables nestled within lush vertical gardens and flickering fire pits.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-charcoal text-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold">
            Tailored Elegance
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-cream mt-2 tracking-tight">
            The Dining Experience
          </h2>
          <div className="h-px w-20 bg-copper/35 mx-auto mt-5" />
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-cream/10 bg-cream/[0.02] hover:border-copper/40 hover:bg-cream/[0.04] transition-all duration-500 rounded-none relative overflow-hidden"
              >
                {/* Floating Corner Border */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-copper/30 transition-all duration-500 group-hover:w-full group-hover:h-1 z-0" />

                <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                  <div className="flex flex-col items-start">
                    <div className="bg-copper/10 p-4 border border-copper/20 group-hover:bg-copper group-hover:text-charcoal transition-all duration-500 text-copper inline-block">
                      <Icon className="h-6 w-6 stroke-[1.2]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl text-cream font-semibold tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-cream/60 text-xs font-sans leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elegant Statistics Section (Years in Business, Happy Guests, Signature Dishes, Awards) */}
        <div className="border-t border-cream/10 mt-24 pt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-3xl md:text-5xl font-serif text-copper font-bold block">12+</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/50 font-sans block mt-2">Years of Hearth Craft</span>
          </div>
          <div>
            <span className="text-3xl md:text-5xl font-serif text-copper font-bold block">80K+</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/50 font-sans block mt-2">Discerning Diners</span>
          </div>
          <div>
            <span className="text-3xl md:text-5xl font-serif text-copper font-bold block">45+</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/50 font-sans block mt-2">Signature Vintages</span>
          </div>
          <div>
            <span className="text-3xl md:text-5xl font-serif text-copper font-bold block">15</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/50 font-sans block mt-2">National Awards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
