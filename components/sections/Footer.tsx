'use client';

import * as React from 'react';
import { Mail, ArrowRight, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'validating' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter an email address');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('validating');
    // Simulate premium registration
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setErrorMessage('');
    }, 1200);
  };

  return (
    <footer className="bg-charcoal text-cream/70 border-t border-copper/15 pt-20 pb-10 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-cream/10">
        
        {/* Column 1: About Brand */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#home" className="flex flex-col items-start select-none">
            <span className="text-xl md:text-2xl font-serif tracking-[0.25em] text-cream font-bold">
              EMBER & OAK
            </span>
            <span className="text-[7px] uppercase tracking-[0.4em] text-copper -mt-0.5 font-sans font-semibold">
              Charcoal & Craft
            </span>
          </a>
          <p className="text-xs text-cream/50 leading-relaxed max-w-sm">
            Primal wood-fired fine dining with Michelin-level precision. Relish Dry-aged steaks and Swahili ocean seafood seared over olive-wood fire, hosted beautifully in Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com" className="hover:text-copper transition-colors p-2 bg-cream/5 border border-cream/5 hover:border-copper/30" aria-label="Ember and Oak Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" className="hover:text-copper transition-colors p-2 bg-cream/5 border border-cream/5 hover:border-copper/30" aria-label="Ember and Oak Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" className="hover:text-copper transition-colors p-2 bg-cream/5 border border-cream/5 hover:border-copper/30" aria-label="Ember and Oak Twitter">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-copper font-bold">Explorer</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#home" className="hover:text-cream transition-colors">Home</a></li>
            <li><a href="#menu" className="hover:text-cream transition-colors">Gastronomy Menu</a></li>
            <li><a href="#story" className="hover:text-cream transition-colors">Our Story</a></li>
            <li><a href="#chef" className="hover:text-cream transition-colors">The Chef</a></li>
            <li><a href="#gallery" className="hover:text-cream transition-colors">Gallery Journal</a></li>
          </ul>
        </div>

        {/* Column 3: Utility / Careers / Info */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-copper font-bold">Dining Info</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#events" className="hover:text-cream transition-colors">Upcoming Events</a></li>
            <li><a href="#faq" className="hover:text-cream transition-colors">FAQ & Support</a></li>
            <li><span className="hover:text-cream transition-colors cursor-pointer">Careers / Join Us</span></li>
            <li><span className="hover:text-cream transition-colors cursor-pointer">Private Dining Room</span></li>
            <li><a href="#contact" className="hover:text-cream transition-colors">Contact Registry</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter signup with validation */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-copper font-bold">The Registry Newsletter</h4>
            <p className="text-xs text-cream/50 leading-relaxed">
              Subscribe to unlock early access to seasonal menu arrivals, wine pairing dinners, and secret table bookings in major Kenyan cities.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="relative flex items-center border border-cream/15 hover:border-copper/40 focus-within:border-copper transition-colors bg-cream/[0.02]">
              <Mail className="absolute left-3.5 h-4 w-4 text-copper stroke-[1.2]" />
              <input
                type="email"
                placeholder="E.g. wanjiku@domain.co.ke"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                disabled={status === 'validating' || status === 'success'}
                className="w-full bg-transparent pl-11 pr-24 py-3.5 text-cream text-xs font-sans outline-none placeholder-cream/20"
              />
              <button
                type="submit"
                disabled={status === 'validating' || status === 'success'}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-copper text-charcoal font-sans text-[9px] uppercase tracking-widest font-bold px-3 py-2 border border-copper hover:bg-transparent hover:text-copper transition-colors disabled:opacity-50"
              >
                {status === 'validating' ? 'Adding...' : 'Subscribe'}
              </button>
            </div>

            {/* Newsletter Validation Feedback */}
            {status === 'error' && (
              <p className="text-red-400 text-[10px] uppercase tracking-widest font-semibold">{errorMessage}</p>
            )}

            {status === 'success' && (
              <div className="p-3 bg-copper/10 border border-copper/35 flex items-center gap-2 text-copper">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <p className="text-[10px] uppercase tracking-widest leading-relaxed">
                  Registered successfully. Welcome to the registry.
                </p>
              </div>
            )}
          </form>
        </div>

      </div>

      {/* Sub-footer Bottom Credits */}
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-cream/30 uppercase tracking-widest font-sans font-semibold">
        <p className="text-center md:text-left">
          © 2026 EMBER & OAK RESTAURANTS KENYA. ALL RIGHTS RESERVED.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <span className="hover:text-copper cursor-pointer">Nairobi</span>
          <span>•</span>
          <span className="hover:text-copper cursor-pointer">Mombasa</span>
          <span>•</span>
          <span className="hover:text-copper cursor-pointer">Kisumu</span>
          <span>•</span>
          <span className="hover:text-copper cursor-pointer">Nakuru</span>
          <span>•</span>
          <span className="hover:text-copper cursor-pointer">Eldoret</span>
        </div>
      </div>
    </footer>
  );
}
