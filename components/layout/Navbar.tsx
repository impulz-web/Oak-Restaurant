'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface NavbarProps {
  onReserveClick: () => void;
}

export function Navbar({ onReserveClick }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'The Chef', href: '#chef' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Upper Info Bar (Desktop only) */}
      <div className="hidden lg:block bg-charcoal text-cream/80 text-[10px] tracking-widest py-2 border-b border-copper/10 relative z-40">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-sans">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-copper" />
              Open Daily: 12:00 PM – 11:00 PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-copper" />
              Nairobi, Mombasa, Kisumu, Nakuru, Eldoret
            </span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-copper" />
              +254 711 000 001
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed top-0 lg:top-8 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-md lg:top-0 py-4 border-b border-copper/10'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex flex-col items-start select-none group">
            <span className="text-xl md:text-2xl font-serif tracking-[0.25em] text-charcoal font-bold group-hover:text-copper transition-colors">
              EMBER & OAK
            </span>
            <span className="text-[7px] uppercase tracking-[0.4em] text-copper -mt-0.5 font-sans font-semibold">
              Charcoal & Craft
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-widest font-sans font-semibold text-charcoal/80 hover:text-copper transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-copper after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Reserve CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Button variant="primary" size="sm" onClick={onReserveClick}>
              Reserve a Table
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-charcoal"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-cream border-l border-copper/20 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="font-serif text-lg tracking-widest font-bold">
                    EMBER & OAK
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-charcoal"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs uppercase tracking-widest font-semibold text-charcoal/80 hover:text-copper transition-colors py-1.5 border-b border-charcoal/5"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Drawer Callouts */}
              <div className="space-y-6">
                <Button
                  variant="primary"
                  className="w-full text-center"
                  onClick={() => {
                    setIsOpen(false);
                    onReserveClick();
                  }}
                >
                  Reserve Table
                </Button>

                <div className="text-[10px] text-charcoal/50 font-sans tracking-widest text-center space-y-1">
                  <p>Mwanzi Rd, Westlands, Nairobi</p>
                  <p>Daily 12:00 PM – 11:00 PM</p>
                  <p>+254 711 000 001</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
