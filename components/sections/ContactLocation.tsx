'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ContactLocationProps {
  onReserveClick: (city?: string) => void;
}

interface BranchInfo {
  id: string;
  cityName: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { x: number; y: number }; // Relative SVG positions for Kenya outline
}

const BRANCHES_DATA: BranchInfo[] = [
  {
    id: 'br-nairobi',
    cityName: 'Nairobi',
    district: 'Westlands',
    address: 'Ember & Oak Building, Mwanzi Road, Westlands, Nairobi',
    phone: '+254 711 000 001',
    email: 'nairobi@emberandoak.co.ke',
    hours: 'Daily 12:00 PM – 11:00 PM',
    coordinates: { x: 48, y: 72 }, // Westlands
  },
  {
    id: 'br-mombasa',
    cityName: 'Mombasa',
    district: 'Nyali',
    address: 'Ocean Crest Plaza, Links Road, Nyali, Mombasa',
    phone: '+254 711 000 002',
    email: 'mombasa@emberandoak.co.ke',
    hours: 'Daily 12:00 PM – 11:00 PM',
    coordinates: { x: 74, y: 88 }, // Nyali
  },
  {
    id: 'br-kisumu',
    cityName: 'Kisumu',
    district: 'Riat Hills',
    address: 'Sunset Ridge, Riat Hills Estate, Kisumu',
    phone: '+254 711 000 003',
    email: 'kisumu@emberandoak.co.ke',
    hours: 'Daily 12:00 PM – 11:00 PM',
    coordinates: { x: 26, y: 64 }, // Riat
  },
  {
    id: 'br-nakuru',
    cityName: 'Nakuru',
    district: 'Milimani',
    address: 'Highlands Retreat, Milimani Estate Road, Nakuru',
    phone: '+254 711 000 004',
    email: 'nakuru@emberandoak.co.ke',
    hours: 'Daily 12:00 PM – 11:00 PM',
    coordinates: { x: 38, y: 66 }, // Nakuru
  },
  {
    id: 'br-eldoret',
    cityName: 'Eldoret',
    district: 'Kapsoya',
    address: 'Hearth Wood Villa, Kapsoya Road, Eldoret',
    phone: '+254 711 000 005',
    email: 'eldoret@emberandoak.co.ke',
    hours: 'Daily 12:00 PM – 11:00 PM',
    coordinates: { x: 30, y: 56 }, // Eldoret
  },
];

export function ContactLocation({ onReserveClick }: ContactLocationProps) {
  const [activeBranchId, setActiveBranchId] = React.useState<string>('br-nairobi');

  const activeBranch = BRANCHES_DATA.find((b) => b.id === activeBranchId) || BRANCHES_DATA[0];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-charcoal text-cream relative border-t border-cream/10">
      {/* Decorative copper backdrop mesh */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[40vw] h-[40vw] bg-copper/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold">
            Branch Directory
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-cream mt-2 tracking-tight">
            Contact & Locations
          </h2>
          <div className="h-px w-20 bg-copper/35 mx-auto mt-5" />
          <p className="text-cream/60 text-xs sm:text-sm font-sans mt-5">
            Ember & Oak graces five premier locations across Kenya. Select a city branch below to explore its tailored location coordinates and hotline contacts.
          </p>
        </div>

        {/* City Select Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto border-b border-cream/10 pb-6">
          {BRANCHES_DATA.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranchId(branch.id)}
              className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-sans font-semibold transition-all duration-300 border ${
                activeBranchId === branch.id
                  ? 'bg-copper text-charcoal border-copper'
                  : 'bg-transparent text-cream/70 border-transparent hover:text-cream hover:border-cream/20'
              }`}
            >
              {branch.cityName}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Active Branch Info Display */}
          <div className="lg:col-span-6 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranch.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-left"
              >
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-copper font-bold block">
                    Active Hearth Branch
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-cream mt-1 font-bold">
                    Ember & Oak {activeBranch.cityName}
                  </h3>
                  <p className="text-cream/50 text-xs font-sans mt-0.5 uppercase tracking-widest font-semibold">
                    {activeBranch.district} District
                  </p>
                  <div className="h-px w-16 bg-copper mt-4" />
                </div>

                <div className="space-y-4 text-xs sm:text-sm font-sans text-cream/85">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="h-5 w-5 text-copper shrink-0 stroke-[1.2]" />
                    <p className="leading-relaxed">{activeBranch.address}</p>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <Phone className="h-5 w-5 text-copper shrink-0 stroke-[1.2]" />
                    <p className="font-semibold">{activeBranch.phone}</p>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <Mail className="h-5 w-5 text-copper shrink-0 stroke-[1.2]" />
                    <p>{activeBranch.email}</p>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <Clock className="h-5 w-5 text-copper shrink-0 stroke-[1.2]" />
                    <p>{activeBranch.hours}</p>
                  </div>
                </div>

                {/* Local Security Commitment banner */}
                <div className="p-4 bg-cream/[0.03] border border-cream/5 flex items-center gap-3 text-cream/60 max-w-md">
                  <ShieldCheck className="h-5 w-5 text-copper shrink-0" />
                  <p className="text-[10px] uppercase tracking-wider leading-relaxed">
                    Valet services & private security active 24/7. Fully secure premises.
                  </p>
                </div>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onReserveClick(activeBranch.cityName)}
                  >
                    Reserve at {activeBranch.cityName}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 2: Elegant Custom Vector Map of Kenya with Pulse Pins */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-[#1C1C1C] border border-cream/5 p-8 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-4 left-4 flex flex-col">
                <span className="text-[8px] uppercase tracking-[0.2em] text-copper font-bold">
                  Interactive Vector
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] text-cream/40 font-sans font-semibold">
                  Ember & Oak Kenya Network
                </span>
              </div>

              {/* Styled SVG Map representation of Kenya outline */}
              <div className="w-full h-full min-h-[300px] relative mt-6 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-[85%] h-[85%] text-cream/5 fill-none stroke-copper/25 stroke-[0.4]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Stylized geometric outline representing Kenya */}
                  <polygon points="15,40 25,30 45,28 65,35 85,50 90,70 70,88 50,92 35,82 20,78 10,65" />
                  <polygon points="25,30 35,20 40,22 45,28" />
                  <polygon points="45,28 50,15 58,18 65,35" />
                  
                  {/* Subtle Grid Lines inside map */}
                  <line x1="10" y1="50" x2="90" y2="50" className="stroke-cream/[0.02]" />
                  <line x1="50" y1="10" x2="50" y2="90" className="stroke-cream/[0.02]" />
                </svg>

                {/* Glowing Pulsing Branch Pins */}
                {BRANCHES_DATA.map((branch) => {
                  const isActive = branch.id === activeBranchId;
                  return (
                    <button
                      key={branch.id}
                      onClick={() => setActiveBranchId(branch.id)}
                      className="absolute group/pin focus:outline-none transition-all duration-300"
                      style={{
                        left: `${branch.coordinates.x}%`,
                        top: `${branch.coordinates.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <span className="relative flex h-5 w-5 items-center justify-center">
                        {/* Outer Pulse */}
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isActive ? 'bg-copper' : 'bg-cream/40'
                          }`}
                        />
                        {/* Middle Ring */}
                        <span
                          className={`absolute inline-flex rounded-full h-3 w-3 border ${
                            isActive ? 'bg-charcoal border-copper' : 'bg-charcoal border-cream/45'
                          }`}
                        />
                        {/* Inner Core */}
                        <span
                          className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                            isActive ? 'bg-copper' : 'bg-cream/60'
                          }`}
                        />
                      </span>

                      {/* Micro floating text tooltip on pin hover */}
                      <span className="absolute left-1/2 -translate-x-1/2 -translate-y-6 bg-charcoal text-cream text-[7px] uppercase tracking-widest font-bold px-1.5 py-0.5 border border-copper/30 whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300 z-20">
                        {branch.cityName}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Map Footer label */}
              <div className="text-[9px] text-cream/40 font-sans tracking-widest text-center mt-2 uppercase">
                Tap points to traverse branches dynamically
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
