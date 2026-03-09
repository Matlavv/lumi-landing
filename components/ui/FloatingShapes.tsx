'use client';
import { motion } from 'framer-motion';

// Basic blurred glowing orb
export const BlurOrb = ({ color, className, delay = 0, duration = 8 }: { color: string, className: string, delay?: number, duration?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1, y: [0, -20, 0], x: [0, 10, -10, 0] }}
    transition={{
      opacity: { duration: 1, delay },
      scale: { duration: 1, delay },
      y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      x: { duration: duration * 1.2, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`absolute rounded-full blur-[60px] pointer-events-none opacity-50 ${color} ${className}`}
  />
);

// Four-point star
export const StarShape = ({ className, color = "text-lumi-violet", delay = 0 }: { className: string, color?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: -45 }}
    animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    className={`absolute pointer-events-none ${color} ${className}`}
  >
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0C20 11.0457 28.9543 20 40 20C28.9543 20 20 28.9543 20 40C20 28.9543 11.0457 20 0 20C11.0457 20 20 11.0457 20 0Z" />
    </svg>
  </motion.div>
);

// Glass pill shape
export const GlassPill = ({ className, delay = 0, rotate = 15 }: { className: string, delay?: number, rotate?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotate: rotate - 15 }}
    animate={{ opacity: 1, y: [0, -15, 0], rotate: [rotate, rotate + 5, rotate] }}
    transition={{
      opacity: { duration: 0.8, delay },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`absolute pointer-events-none backdrop-blur-md bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl rounded-full ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full" />
  </motion.div>
);

// Squiggle line
export const Squiggle = ({ className, color = "text-lumi-pink", delay = 0 }: { className: string, color?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, pathLength: 0 }}
    animate={{ opacity: 0.8, y: [0, -10, 0] }}
    transition={{
      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`absolute pointer-events-none ${color} ${className}`}
  >
    <svg width="44" height="42" viewBox="0 0 44 42" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M2 21C2 21 8.5 -5.5 21 12.5C33.5 30.5 42 2 42 2" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay, ease: "easeOut" }}
      />
    </svg>
  </motion.div>
);

// Abstract ring
export const RingShape = ({ className, color = "border-lumi-red", delay = 0 }: { className: string, color?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
    transition={{
      opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: 20, repeat: Infinity, ease: "linear", delay }
    }}
    className={`absolute rounded-full border-[6px] pointer-events-none ${color} ${className}`}
  />
);
