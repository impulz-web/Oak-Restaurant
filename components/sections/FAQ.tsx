'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How far in advance should I make a reservation?',
    answer: 'We highly recommend booking tables 7 to 14 days in advance, especially for weekend dining slots and special events. Our private dining halls and chef tasting tables should ideally be reserved 2 to 4 weeks in advance. Walk-ins are accommodated on a first-come, first-served basis, subject to table availability.',
  },
  {
    id: 'faq-2',
    question: 'Is there a dress code at Ember & Oak?',
    answer: 'Yes, we observe an elegant smart-casual to formal dress code. We kindly request that our guests refrain from wearing athletic wear, beachwear, sports jerseys, flip-flops, or casual baseball caps inside our main dining chambers. Collared shirts, sophisticated dresses, and elegant footwear are highly encouraged.',
  },
  {
    id: 'faq-3',
    question: 'Do you offer parking or valet services?',
    answer: 'We offer secure, complimentary private parking for all of our diners. Secure 24-hour valet parking service is also available at the front entrance of our Nairobi (Westlands) and Mombasa (Nyali) branches. The parking yards are guarded under continuous closed-circuit surveillance for absolute peace of mind.',
  },
  {
    id: 'faq-4',
    question: 'Can you accommodate severe allergies or strict vegan diets?',
    answer: 'Absolutely. We take food safety and dietary preferences with utmost seriousness. Our chefs are highly trained in cross-contamination prevention. Our menu features specific Gluten-Free (GF), Vegetarian (V), and Dairy-Free (DF) designations. Please specify any strict allergies or vegan requests in your reservation form so our hearth culinary team can prepare accordingly.',
  },
  {
    id: 'faq-5',
    question: 'How do I arrange a private event or corporate dinner?',
    answer: 'Ember & Oak offers dedicated, acoustically insulated private dining halls suitable for corporate conferences, family banquets, or intimate celebrations. We provide tailored multi-course tasting menus, custom wine pairings, and a private sommelier. To make arrangements, please submit a reservation request selecting "Private Event (12+)" or contact our events coordinator directly at events@emberandoak.co.ke.',
  },
  {
    id: 'faq-6',
    question: 'Are digital or physical gift cards available for purchase?',
    answer: 'Yes, we offer premium engraved physical gift cards at all our reception desks, as well as electronic gift vouchers (e-cards) delivered instantly via email. Gift cards can be loaded with custom amounts from KES 5,000 to KES 50,000 and are fully redeemable for dining, wine flights, or exclusive tasting menu events at any of our branches in Kenya.',
  },
  {
    id: 'faq-7',
    question: 'What are your operational opening hours across branches?',
    answer: 'All Ember & Oak branches in Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret are open daily from 12:00 PM to 11:00 PM. Our lunch seating operates from 12:00 PM to 4:00 PM, followed by a light twilight afternoon menu. Primary dinner seating commences from 6:00 PM onwards, with the wood-fired kitchen taking final orders at 10:00 PM daily.',
  },
  {
    id: 'faq-8',
    question: 'What is your booking cancellation and modification policy?',
    answer: 'We understand that plans can change. You can cancel or modify your table reservation free of charge up to 12 hours prior to your scheduled seating time. For premium Chef Tasting flights or groups larger than 8 guests, we request 24 hours notice for modifications. Cancellations can be performed easily online via your confirmation link or by phone.',
  },
];

export function FAQ() {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-cream text-charcoal relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold">
            Answers to Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-px w-20 bg-copper/35 mx-auto mt-5" />
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-copper/15 bg-cream hover:border-copper/45 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-charcoal font-semibold text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  
                  <div className="bg-copper/10 p-1.5 text-copper shrink-0">
                    {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </div>
                </button>

                {/* Smooth collapse animation with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans border-t border-charcoal/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Extra Info prompt */}
        <div className="text-center mt-12 bg-charcoal/[0.02] border border-charcoal/5 p-6">
          <p className="text-xs font-sans text-charcoal/60">
            Have an inquiry not addressed above? Please contact our reception desk directly. We are always happy to coordinate bespoke culinary arrangements.
          </p>
          <p className="text-xs font-sans text-copper font-bold uppercase tracking-widest mt-3">
            Hotline: +254 711 000 001
          </p>
        </div>

      </div>
    </section>
  );
}
