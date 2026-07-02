'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, CheckSquare, Sparkles } from 'lucide-react';

export function ReservationProcess() {
  const steps = [
    {
      id: 'step-1',
      number: '01',
      icon: Calendar,
      title: 'Choose Date',
      description: 'Select your preferred calendar date and specific Kenyan city branch.',
    },
    {
      id: 'step-2',
      number: '02',
      icon: Clock,
      title: 'Select Time',
      description: 'Pick an available lunch or dinner slot that suits your schedule.',
    },
    {
      id: 'step-3',
      number: '03',
      icon: CheckSquare,
      title: 'Reserve Table',
      description: 'Provide your name, contact, and any custom dietary requests.',
    },
    {
      id: 'step-4',
      number: '04',
      icon: Sparkles,
      title: 'Enjoy Experience',
      description: 'Arrive at our glowing hearth and immerse yourself in the gastronomy.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream text-charcoal relative border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold">
            Journey to Our Hearth
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mt-2 tracking-tight">
            How to Experience Ember & Oak
          </h2>
          <div className="h-px w-20 bg-copper/35 mx-auto mt-5" />
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Vector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-[1px] bg-copper/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center space-y-4 group"
                >
                  {/* Step Number Bubble */}
                  <span className="text-[11px] font-sans tracking-widest text-copper font-bold uppercase">
                    Step {step.number}
                  </span>

                  {/* Icon Container with border and backdrop */}
                  <div className="h-16 w-16 rounded-none border border-copper/30 bg-cream flex items-center justify-center text-copper group-hover:bg-copper group-hover:text-charcoal transition-all duration-500 shadow-sm">
                    <Icon className="h-6 w-6 stroke-[1.2]" />
                  </div>

                  {/* Text details */}
                  <div className="space-y-2 max-w-xs">
                    <h3 className="font-serif text-lg font-semibold text-charcoal tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/60 text-xs font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
