'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'interior' | 'food' | 'drinks' | 'chef' | 'outdoors' | 'private';
  title: string;
  subtitle: string;
  image: string;
  aspect: 'aspect-square' | 'aspect-[4/3]' | 'aspect-[4/5]';
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'interior',
    title: 'The Cedar Hearth Room',
    subtitle: 'Nairobi Westlands',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gal-2',
    category: 'food',
    title: '45-Day Ribeye Sear',
    subtitle: 'Gastronomy Art',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-square',
  },
  {
    id: 'gal-3',
    category: 'drinks',
    title: 'Smoked Oak Old Fashioned',
    subtitle: 'Mixology Suite',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'gal-4',
    category: 'chef',
    title: 'Mastery of Flame',
    subtitle: 'Chef David in Action',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gal-5',
    category: 'outdoors',
    title: 'The Candle-lit Terrace',
    subtitle: 'Mombasa Nyali',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-square',
  },
  {
    id: 'gal-6',
    category: 'private',
    title: 'The Vintage Room',
    subtitle: 'Private Sanctuary',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[4/5]',
  },
];

const FILTERS = [
  { value: 'all', label: 'All Visuals' },
  { value: 'interior', label: 'Interior' },
  { value: 'food', label: 'Gastronomy' },
  { value: 'drinks', label: 'Mixology' },
  { value: 'chef', label: 'Hardfire Craft' },
  { value: 'outdoors', label: 'Outdoors' },
] as const;

export function Gallery() {
  const [activeFilter, setActiveFilter] = React.useState<string>('all');
  const [selectedImage, setSelectedImage] = React.useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold">
            The Visual Journal
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mt-2 tracking-tight">
            Ember & Oak Gallery
          </h2>
          <div className="h-px w-20 bg-copper/35 mx-auto mt-5" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest font-sans font-semibold transition-all duration-300 border ${
                activeFilter === f.value
                  ? 'bg-charcoal text-copper border-charcoal'
                  : 'bg-transparent text-charcoal/70 border-transparent hover:text-charcoal hover:border-charcoal/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto items-start">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden bg-charcoal cursor-pointer border border-copper/10 ${item.aspect}`}
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Framing border Overlay */}
                <div className="absolute inset-4 border border-cream/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Gradient Shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Text Content overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="text-left">
                    <span className="text-[8px] uppercase tracking-[0.25em] text-copper font-semibold block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-cream text-base md:text-lg mt-1">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="bg-copper/90 p-2.5 text-charcoal transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-charcoal"
                onClick={() => setSelectedImage(null)}
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-4xl w-full bg-cream border border-copper/30 shadow-2xl z-10 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal transition-colors z-20 bg-cream/90 p-2 border border-copper/10"
                  aria-label="Close lightbox"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-8 aspect-[4/3] md:aspect-auto md:h-[70vh] bg-charcoal">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="md:col-span-4 p-8 flex flex-col justify-between bg-cream">
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-copper font-bold block">
                          {selectedImage.subtitle}
                        </span>
                        <h4 className="font-serif text-2xl text-charcoal mt-1">
                          {selectedImage.title}
                        </h4>
                        <div className="h-px w-16 bg-copper mt-4" />
                      </div>

                      <p className="text-charcoal/70 text-xs font-sans leading-relaxed">
                        Shot live in our dining chambers. Every branch of Ember & Oak maintains distinct architectural nuances, reflecting local stone and hardwood motifs.
                      </p>
                    </div>

                    <div className="pt-8 border-t border-charcoal/10 flex items-center gap-3 text-charcoal/40 text-[9px] uppercase tracking-widest font-sans">
                      <Camera className="h-4 w-4 text-copper" />
                      <span>Ember & Oak Studio</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
