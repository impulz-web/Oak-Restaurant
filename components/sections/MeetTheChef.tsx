'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Star, ChevronRight } from 'lucide-react';

export function MeetTheChef() {
  return (
    <section id="chef" className="py-24 lg:py-32 bg-cream text-charcoal relative border-t border-charcoal/5">
      {/* Accent vector grids */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[30vw] h-[30vw] bg-copper/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold">
            The Visionary Mastermind
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mt-2 tracking-tight">
            Meet Our Executive Chef
          </h2>
          <div className="h-px w-20 bg-copper/35 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Portrait with Animated Spinning Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden border border-copper/20 shadow-xl bg-charcoal">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                alt="Executive Chef David Mwangi at work"
                className="object-cover w-full h-full object-top transform hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Image Frame Accent */}
              <div className="absolute inset-4 border border-cream/20 pointer-events-none" />

              {/* Animated Chef recommendation badge: circular rotation */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 hidden md:block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                  className="relative w-full h-full bg-charcoal border border-copper text-cream rounded-full flex items-center justify-center p-2"
                >
                  <svg className="absolute w-full h-full fill-current" viewBox="0 0 100 100">
                    <path
                      id="textPath"
                      d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text className="text-[7.5px] uppercase tracking-[0.24em] font-sans font-semibold text-copper">
                      <textPath href="#textPath" startOffset="0%">
                        • CHEF DAVID MWANGI • HARDFIRE MASTERY
                      </textPath>
                    </text>
                  </svg>
                  <Star className="h-6 w-6 text-copper fill-copper" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Column 2: Chef Bio, Philosophy & Awards */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-copper font-bold block">
                Executive Chef & Founder
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-charcoal mt-1">
                David Mwangi
              </h3>
              <p className="text-charcoal/50 text-xs font-sans mt-1">
                Formerly Chef de Cuisine at Le Diamant, Paris & Tokyo
              </p>
              <div className="h-px w-20 bg-copper/35 mt-5" />
            </div>

            {/* Biography */}
            <p className="text-charcoal/80 text-sm leading-relaxed font-sans">
              With over eighteen years of culinary practice across Paris, Tokyo, and London, Chef David Mwangi returned to Kenya to craft a dining experience that honors his heritage. Drawing inspiration from traditional open-flame cooking and marrying it with the hyper-precise, multi-sensory techniques of international Michelin-starred establishments.
            </p>

            {/* Culinary Philosophy */}
            <blockquote className="border-l-2 border-copper pl-5 py-2 my-4 bg-charcoal/[0.02]">
              <p className="font-serif italic text-charcoal/90 text-sm leading-relaxed">
                &ldquo;Fire is not just a source of heat&mdash;it is a living, temperamental ingredient. Each wood variety has a voice, and our job is to orchestrate those voices to create clean, complex harmony.&rdquo;
              </p>
            </blockquote>

            {/* Achievements and awards list */}
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-charcoal font-bold border-b border-charcoal/10 pb-2">
                Distinctions & Accolades
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-copper shrink-0" />
                  <div>
                    <strong className="text-charcoal font-semibold block">Chef of the Year 2024</strong>
                    <span className="text-charcoal/60 text-[11px]">East African Gastronomy Union</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-copper shrink-0" />
                  <div>
                    <strong className="text-charcoal font-semibold block">Top 50 Discovery</strong>
                    <span className="text-charcoal/60 text-[11px]">Global Fine Dining Review</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="h-5 w-5 text-copper shrink-0" />
                  <div>
                    <strong className="text-charcoal font-semibold block">Culinary Pioneer Award</strong>
                    <span className="text-charcoal/60 text-[11px]">Kenyan Food & Wine Council</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-copper shrink-0" />
                  <div>
                    <strong className="text-charcoal font-semibold block">Sustainable Kitchen</strong>
                    <span className="text-charcoal/60 text-[11px]">Eco-Culinary Alliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fictional signature dishes chef notes */}
            <div className="pt-2 border-t border-charcoal/10">
              <span className="text-[9px] uppercase tracking-widest text-charcoal/50 font-bold block">
                David&apos;s Recommended Flight:
              </span>
              <p className="text-xs font-sans text-charcoal/80 mt-1.5 flex flex-wrap items-center gap-1.5">
                <span className="font-semibold text-copper">45-Day Ribeye</span>
                <ChevronRight className="h-3 w-3 text-charcoal/30 inline" />
                <span className="font-semibold text-copper">Mombasa Lobster Tail</span>
                <ChevronRight className="h-3 w-3 text-charcoal/30 inline" />
                <span className="font-semibold text-copper">Whiskey Soufflé</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
