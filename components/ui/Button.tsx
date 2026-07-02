'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', isLoading, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 rounded-none focus:outline-none focus:ring-1 focus:ring-copper disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group';
    
    const variants = {
      primary: 'bg-copper text-charcoal hover:text-cream border border-copper',
      secondary: 'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-cream',
      outline: 'bg-transparent text-copper border border-copper hover:bg-copper hover:text-charcoal',
      dark: 'bg-charcoal text-cream border border-charcoal hover:border-copper hover:text-copper',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs uppercase tracking-widest',
      md: 'px-6 py-3.5 text-xs uppercase tracking-widest font-semibold',
      lg: 'px-8 py-5 text-sm uppercase tracking-widest font-bold',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Subtle sliding background transition */}
        <span className={cn(
          "absolute inset-0 w-full h-full transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0 z-0",
          variant === 'primary' && 'bg-charcoal',
          variant === 'secondary' && 'bg-charcoal',
          variant === 'outline' && 'bg-copper',
          variant === 'dark' && 'bg-copper'
        )} />
        
        {/* Button content */}
        <span className="relative z-10 flex items-center gap-2">
          {isLoading ? (
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : null}
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
