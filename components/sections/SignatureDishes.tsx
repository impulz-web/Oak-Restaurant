'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Leaf, Award, Compass, Wine, Star } from 'lucide-react';

interface SignatureDishesProps {
  onReserveClick: () => void;
}

interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Steaks' | 'Seafood' | 'Pasta' | 'Desserts' | 'Wine Pairings' | 'Chef Specials';
  dietary: ('V' | 'GF' | 'DF' | 'Chef Choice')[];
  image: string;
  badge?: string;
}

const DISHES_DATA: Dish[] = [
  {
    id: 'steak-1',
    name: '45-Day Dry-Aged Ribeye',
    description: 'Oak-fired prime grass-fed Angus beef ribeye, brushed with smoked bone marrow butter and served with wild sea salt crystals.',
    price: 'KES 4,800',
    category: 'Steaks',
    dietary: ['GF', 'Chef Choice'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    badge: 'Signature Selection',
  },
  {
    id: 'steak-2',
    name: 'The Oak Wood T-Bone',
    description: '600g dry-aged prime beef t-bone steak seared over wild rosemary coals, accompanied by charred herb chimichurri.',
    price: 'KES 5,600',
    category: 'Steaks',
    dietary: ['GF', 'DF'],
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'seafood-1',
    name: 'Charred Mombasa Rock Lobster',
    description: 'Fresh Swahili coast lobster tail roasted over hot charcoal, glazed with saffron butter and accompanied by crisp garden asparagus.',
    price: 'KES 6,200',
    category: 'Seafood',
    dietary: ['GF'],
    image: 'https://images.unsplash.com/photo-1559742811-824132a5c3ca?q=80&w=800&auto=format&fit=crop',
    badge: 'Mombasa Fresh',
  },
  {
    id: 'seafood-2',
    name: 'Wild-Caught Nile Perch',
    description: 'Crisp oak-grilled Lake Victoria Nile Perch fillet, resting on wilted organic baby spinach with charred lemon emulsion.',
    price: 'KES 3,100',
    category: 'Seafood',
    dietary: ['GF', 'DF'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'pasta-1',
    name: 'Black Truffle Pappardelle',
    description: 'Fresh hand-milled egg pasta tossed with grated black winter truffles, aged parmigiano-reggiano, and organic wild mushrooms.',
    price: 'KES 3,400',
    category: 'Pasta',
    dietary: ['V', 'Chef Choice'],
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop',
    badge: 'Handcrafted',
  },
  {
    id: 'pasta-2',
    name: 'Saffron Prawn Tagliatelle',
    description: 'Artisanal saffron-infused pasta ribbons sautéed with ocean king prawns, garlic slivers, and premium dry white wine.',
    price: 'KES 3,600',
    category: 'Pasta',
    dietary: ['DF'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dessert-1',
    name: 'Single-Origin Chocolate Sphere',
    description: '72% dark cocoa Belgian chocolate shell, melted table-side with hot organic salted caramel to reveal fresh wild mountain berries.',
    price: 'KES 1,800',
    category: 'Desserts',
    dietary: ['V'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dessert-2',
    name: 'Whiskey Highlands Soufflé',
    description: 'Airy hot soufflé infused with premium single malt whiskey and rich organic Kenyan coffee bean essence, served with vanilla bean ice.',
    price: 'KES 1,900',
    category: 'Desserts',
    dietary: ['V'],
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'wine-1',
    name: 'Vintner Ribeye & Cabernet Pair',
    description: 'Charcoal Wagyu beef slice paired with a tasting glass of vintage 2018 Napa Valley Cabernet Sauvignon.',
    price: 'KES 3,900',
    category: 'Wine Pairings',
    dietary: ['GF'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
    badge: 'Curated Pairing',
  },
  {
    id: 'wine-2',
    name: 'Pinot & Wood-Fired Mushroom',
    description: 'French Burgundy Pinot Noir paired alongside wood-oven wild pine mushroom tartlet and organic goat cheese crumble.',
    price: 'KES 3,200',
    category: 'Wine Pairings',
    dietary: ['V'],
    image: 'https://images.unsplash.com/photo-1553187624-4b97d2d7f293?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'special-1',
    name: 'Laikipia Smoked Lamb Rack',
    description: 'Herb-crusted premium Laikipia lamb rack, slowly roasted under wild-olive wood smoke, served with organic parsnip purée.',
    price: 'KES 4,500',
    category: 'Chef Specials',
    dietary: ['GF', 'Chef Choice'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    badge: 'Chef Masterpiece',
  },
  {
    id: 'special-2',
    name: 'Smoked Honey Duck Breast',
    description: 'Wood-smoked farm duck breast glazed with organic forest honey, resting on a pool of sour mountain cherry reduction.',
    price: 'KES 4,200',
    category: 'Chef Specials',
    dietary: ['GF', 'DF'],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop',
  },
];

const CATEGORIES = [
  'All',
  'Steaks',
  'Seafood',
  'Pasta',
  'Desserts',
  'Wine Pairings',
  'Chef Specials',
] as const;

export function SignatureDishes({ onReserveClick }: SignatureDishesProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<typeof CATEGORIES[number]>('All');
  const [loading, setLoading] = React.useState(false);
  const [filteredDishes, setFilteredDishes] = React.useState<Dish[]>(() =>
    DISHES_DATA.filter((_, idx) => idx % 2 === 0)
  );

  // Trigger loading skeleton on category change for premium digital application feel
  const handleCategoryChange = (category: typeof CATEGORIES[number]) => {
    if (category === selectedCategory) return;
    setLoading(true);
    setSelectedCategory(category);
    
    setTimeout(() => {
      if (category === 'All') {
        // Show first 6 signature dishes of different types for balanced layout
        setFilteredDishes(DISHES_DATA.filter((_, idx) => idx % 2 === 0));
      } else {
        setFilteredDishes(DISHES_DATA.filter((dish) => dish.category === category));
      }
      setLoading(false);
    }, 600);
  };

  return (
    <section id="menu" className="py-24 lg:py-32 bg-cream relative border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold">
            The Gastronomy Collection
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mt-2 tracking-tight">
            Our Signature Dishes
          </h2>
          <div className="h-px w-24 bg-copper/35 mx-auto mt-6 mb-4" />
          <p className="text-charcoal/60 text-xs sm:text-sm font-sans">
            Every dish is prepared using indigenous hardwood charcoal fire, elevating natural flavors to extraordinary heights. Explore curated selections below.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto border-b border-charcoal/10 pb-6">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest font-sans font-semibold transition-all duration-300 rounded-none border ${
                selectedCategory === category
                  ? 'bg-charcoal text-copper border-charcoal'
                  : 'bg-transparent text-charcoal/70 border-transparent hover:text-charcoal hover:border-charcoal/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dishes Showcase Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {loading ? (
              /* Beautiful Loading Skeletons for premium digital app feel */
              <motion.div
                key="skeleton-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={`skeleton-${index}`} className="border border-charcoal/5 bg-charcoal/[0.02] p-4 flex flex-col space-y-4 animate-pulse">
                    <div className="aspect-[4/3] bg-charcoal/10 w-full" />
                    <div className="h-4 bg-charcoal/10 w-3/4" />
                    <div className="space-y-2">
                      <div className="h-3 bg-charcoal/10 w-full" />
                      <div className="h-3 bg-charcoal/10 w-5/6" />
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <div className="h-5 bg-charcoal/10 w-1/4" />
                      <div className="h-10 bg-charcoal/10 w-1/3" />
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              /* Active Dishes Grid */
              <motion.div
                key="dishes-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredDishes.map((dish) => (
                  <motion.div
                    key={dish.id}
                    layoutId={dish.id}
                    className="group bg-[#F4EFE7]/40 border border-copper/15 hover:border-copper/45 hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden relative"
                  >
                    {/* Dish Image Container */}
                    <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-copper/10">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Interactive Badge overlay */}
                      {dish.badge && (
                        <div className="absolute top-4 left-4 bg-charcoal text-cream text-[8px] uppercase tracking-widest font-sans font-bold px-3 py-1 border border-copper/30">
                          {dish.badge}
                        </div>
                      )}

                      {/* Floating Dietary tags */}
                      <div className="absolute bottom-4 right-4 flex gap-1.5">
                        {dish.dietary.map((diet) => (
                          <span
                            key={diet}
                            title={diet === 'GF' ? 'Gluten Free' : diet === 'V' ? 'Vegetarian' : diet === 'DF' ? 'Dairy Free' : 'Chef Choice'}
                            className="bg-[#FAF6F0]/90 backdrop-blur-sm border border-copper/20 text-charcoal text-[8px] uppercase tracking-wider font-sans font-semibold px-2 py-0.5"
                          >
                            {diet === 'Chef Choice' ? <Star className="h-2 w-2 text-copper inline mr-1" fill="currentColor" /> : null}
                            {diet}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dish Content Body */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex justify-between items-baseline gap-4">
                          <h3 className="font-serif text-lg md:text-xl text-charcoal font-semibold tracking-tight group-hover:text-copper transition-colors">
                            {dish.name}
                          </h3>
                        </div>
                        <p className="text-charcoal/70 text-xs font-sans mt-3 leading-relaxed">
                          {dish.description}
                        </p>
                      </div>

                      {/* Footer Actions inside Card */}
                      <div className="flex items-center justify-between border-t border-charcoal/5 pt-5 mt-6">
                        <span className="font-serif text-charcoal font-bold text-base">
                          {dish.price}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          className="py-2.5 text-[9px]"
                          onClick={onReserveClick}
                        >
                          Book Experience
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* View Full Menu Invitation */}
        <div className="text-center mt-16">
          <p className="text-xs text-charcoal/50 font-sans tracking-wide">
            * We accommodate all custom nutritional alignments. Inform our servers of dietary requirements upon booking.
          </p>
          <div className="mt-6">
            <Button variant="secondary" onClick={onReserveClick}>
              Download Wine List & Full Menu
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
