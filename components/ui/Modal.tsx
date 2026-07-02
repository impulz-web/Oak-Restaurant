'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Clock, MapPin, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCity?: string;
}

export function ReservationModal({ isOpen, onClose, initialCity = 'Nairobi' }: ReservationModalProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    city: initialCity,
    guests: '2',
    date: '',
    time: '19:30',
    requests: '',
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Sync initialCity if it changes
  React.useEffect(() => {
    if (initialCity) {
      Promise.resolve().then(() => {
        setFormData((prev) => {
          if (prev.city === initialCity) return prev;
          return { ...prev, city: initialCity };
        });
      });
    }
  }, [initialCity]);

  // Handle closing modal and resetting states
  const handleClose = () => {
    onClose();
    // Keep success state for a moment, then reset
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: initialCity,
        guests: '2',
        date: '',
        time: '19:30',
        requests: '',
      });
      setErrors({});
    }, 300);
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.replace(/\s/g, ''))) {
      tempErrors.phone = 'Please enter a valid Kenyan or international number';
    }
    if (!formData.date) tempErrors.date = 'Reservation date is required';
    if (!formData.time) tempErrors.time = 'Preferred time slot is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate luxury API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-charcoal"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl bg-cream border border-copper/30 shadow-2xl overflow-hidden z-10"
          >
            {/* Top Border Accent */}
            <div className="h-1.5 w-full bg-copper" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal transition-colors p-1"
              aria-label="Close dialog"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>

            {/* Content Area */}
            <div className="p-8 md:p-10 max-h-[85vh] overflow-y-auto">
              {!isSuccess ? (
                <div>
                  <div className="text-center mb-8">
                    <span className="text-[10px] uppercase tracking-widest text-copper font-semibold">
                      Fine Dining Reservation
                    </span>
                    <h3 className="text-3xl font-serif text-charcoal mt-2">
                      Secure Your Table
                    </h3>
                    <p className="text-charcoal/60 text-xs font-sans mt-2 max-w-md mx-auto">
                      Join us for an unforgettable wood-fired sensory experience. Please provide your dining details below.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Location Branch */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-charcoal/80 font-semibold mb-2">
                        Ember & Oak Branch
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-copper" />
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-transparent border border-charcoal/20 text-charcoal px-10 py-3.5 font-sans text-xs uppercase tracking-wider focus:border-copper outline-none transition-colors appearance-none cursor-pointer rounded-none"
                        >
                          <option value="Nairobi" className="bg-cream text-charcoal">Nairobi – Westlands (Mwanzi Road)</option>
                          <option value="Mombasa" className="bg-cream text-charcoal">Mombasa – Nyali (Links Road)</option>
                          <option value="Kisumu" className="bg-cream text-charcoal">Kisumu – Riat Hills</option>
                          <option value="Nakuru" className="bg-cream text-charcoal">Nakuru – Milimani</option>
                          <option value="Eldoret" className="bg-cream text-charcoal">Eldoret – Kapsoya</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="h-4 w-4 text-charcoal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Booking Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Date selection */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-charcoal/80 font-semibold mb-2">
                          Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-copper" />
                          <input
                            type="date"
                            value={formData.date}
                            min={new Date().toISOString().split('T')[0]}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full bg-transparent border border-charcoal/20 text-charcoal pl-10 pr-3 py-3.5 font-sans text-xs focus:border-copper outline-none transition-colors rounded-none"
                          />
                        </div>
                        {errors.date && (
                          <p className="text-red-800 text-[10px] mt-1 uppercase tracking-wider">{errors.date}</p>
                        )}
                      </div>

                      {/* Time Slot Selection */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-charcoal/80 font-semibold mb-2">
                          Time Slot
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-copper" />
                          <select
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full bg-transparent border border-charcoal/20 text-charcoal px-10 py-3.5 font-sans text-xs focus:border-copper outline-none transition-colors appearance-none cursor-pointer rounded-none"
                          >
                            <option value="12:00" className="bg-cream text-charcoal">12:00 PM (Lunch)</option>
                            <option value="13:30" className="bg-cream text-charcoal">01:30 PM (Lunch)</option>
                            <option value="15:00" className="bg-cream text-charcoal">03:00 PM (Lunch)</option>
                            <option value="18:00" className="bg-cream text-charcoal">06:00 PM (Dinner)</option>
                            <option value="19:30" className="bg-cream text-charcoal">07:30 PM (Dinner)</option>
                            <option value="20:30" className="bg-cream text-charcoal">08:30 PM (Dinner)</option>
                            <option value="21:30" className="bg-cream text-charcoal">09:30 PM (Dinner)</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="h-4 w-4 text-charcoal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {errors.time && (
                          <p className="text-red-800 text-[10px] mt-1 uppercase tracking-wider">{errors.time}</p>
                        )}
                      </div>

                      {/* Guest Count */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-charcoal/80 font-semibold mb-2">
                          Party Size
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-copper" />
                          <select
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            className="w-full bg-transparent border border-charcoal/20 text-charcoal px-10 py-3.5 font-sans text-xs focus:border-copper outline-none transition-colors appearance-none cursor-pointer rounded-none"
                          >
                            <option value="1" className="bg-cream text-charcoal">1 Guest</option>
                            <option value="2" className="bg-cream text-charcoal">2 Guests</option>
                            <option value="4" className="bg-cream text-charcoal">4 Guests</option>
                            <option value="6" className="bg-cream text-charcoal">6 Guests</option>
                            <option value="8" className="bg-cream text-charcoal">8 Guests</option>
                            <option value="10" className="bg-cream text-charcoal">10 Guests</option>
                            <option value="12+" className="bg-cream text-charcoal">Private Event (12+)</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="h-4 w-4 text-charcoal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-charcoal/80 font-semibold mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="E.g. Mwangi Kamau"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border border-charcoal/20 text-charcoal px-4 py-3.5 font-sans text-xs focus:border-copper outline-none transition-colors rounded-none placeholder-charcoal/30"
                        />
                        {errors.name && (
                          <p className="text-red-800 text-[10px] mt-1 uppercase tracking-wider">{errors.name}</p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-charcoal/80 font-semibold mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="E.g. mwangi@domain.co.ke"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border border-charcoal/20 text-charcoal px-4 py-3.5 font-sans text-xs focus:border-copper outline-none transition-colors rounded-none placeholder-charcoal/30"
                        />
                        {errors.email && (
                          <p className="text-red-800 text-[10px] mt-1 uppercase tracking-wider">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-charcoal/80 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="E.g. +254 711 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border border-charcoal/20 text-charcoal px-4 py-3.5 font-sans text-xs focus:border-copper outline-none transition-colors rounded-none placeholder-charcoal/30"
                      />
                      {errors.phone && (
                        <p className="text-red-800 text-[10px] mt-1 uppercase tracking-wider">{errors.phone}</p>
                      )}
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-charcoal/80 font-semibold mb-2">
                        Special Requests / Dietary Accommodation (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="E.g. Vegetarian diet, gluten-free accommodations, celebrating a wedding anniversary..."
                        value={formData.requests}
                        onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                        className="w-full bg-transparent border border-charcoal/20 text-charcoal px-4 py-3 font-sans text-xs focus:border-copper outline-none transition-colors rounded-none placeholder-charcoal/30 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        isLoading={isSubmitting}
                      >
                        Complete Reservation
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4"
                >
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-copper stroke-[1.2]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-copper font-semibold">
                    Reservation Confirmed
                  </span>
                  <h3 className="text-3xl font-serif text-charcoal mt-3">
                    Welcome to Ember & Oak
                  </h3>
                  <p className="text-charcoal/70 text-xs font-sans mt-4 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-charcoal font-medium">{formData.name}</strong>. A confirmation email and SMS have been dispatched with reservation details for <strong className="text-charcoal font-medium">{formData.date}</strong> at <strong className="text-charcoal font-medium">{formData.time}</strong> at our <strong className="text-charcoal font-medium">{formData.city}</strong> branch.
                  </p>
                  
                  <div className="mt-8 p-4 bg-charcoal/5 border border-charcoal/10 inline-block text-left max-w-sm w-full mx-auto">
                    <div className="grid grid-cols-2 gap-y-2 text-[11px] font-sans">
                      <span className="text-charcoal/50 uppercase tracking-wider">Location:</span>
                      <span className="text-charcoal font-semibold text-right">{formData.city}</span>
                      <span className="text-charcoal/50 uppercase tracking-wider">Date:</span>
                      <span className="text-charcoal font-semibold text-right">{formData.date}</span>
                      <span className="text-charcoal/50 uppercase tracking-wider">Time:</span>
                      <span className="text-charcoal font-semibold text-right">{formData.time}</span>
                      <span className="text-charcoal/50 uppercase tracking-wider">Party Size:</span>
                      <span className="text-charcoal font-semibold text-right">{formData.guests} Guest(s)</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button variant="secondary" size="sm" onClick={handleClose}>
                      Close Window
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
