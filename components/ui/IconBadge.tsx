'use client';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface IconBadgeProps {
  icon: LucideIcon;
  colorTheme: 'violet' | 'pink' | 'red' | 'yellow' | 'blue';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const themeStyles = {
  violet: {
    wrapper: 'bg-lumi-violet/10 border-lumi-violet/20',
    inner: 'bg-gradient-to-br from-lumi-violet to-[#8C4Af2]',
    icon: 'text-white',
    glow: 'shadow-[0_8px_24px_rgba(139,92,246,0.3)]',
    dot: 'bg-lumi-violet'
  },
  pink: {
    wrapper: 'bg-lumi-pink/10 border-lumi-pink/20',
    inner: 'bg-gradient-to-br from-lumi-pink to-[#ff8cb8]',
    icon: 'text-white',
    glow: 'shadow-[0_8px_24px_rgba(236,72,153,0.3)]',
    dot: 'bg-lumi-pink'
  },
  red: {
    wrapper: 'bg-lumi-red/10 border-lumi-red/20',
    inner: 'bg-gradient-to-br from-lumi-red to-[#ff5c58]',
    icon: 'text-white',
    glow: 'shadow-[0_8px_24px_rgba(239,68,68,0.3)]',
    dot: 'bg-lumi-red'
  },
  yellow: {
    wrapper: 'bg-yellow-400/10 border-yellow-400/20',
    inner: 'bg-gradient-to-br from-yellow-400 to-[#fde047]',
    icon: 'text-yellow-900',
    glow: 'shadow-[0_8px_24px_rgba(250,204,21,0.3)]',
    dot: 'bg-yellow-400'
  },
  blue: {
    wrapper: 'bg-blue-500/10 border-blue-500/20',
    inner: 'bg-gradient-to-br from-blue-500 to-[#60a5fa]',
    icon: 'text-white',
    glow: 'shadow-[0_8px_24px_rgba(59,130,246,0.3)]',
    dot: 'bg-blue-500'
  }
};

const sizeStyles = {
  sm: { wrapper: 'w-12 h-12 rounded-xl border-2', icon: 20 },
  md: { wrapper: 'w-16 h-16 rounded-2xl border-2', icon: 28 },
  lg: { wrapper: 'w-20 h-20 rounded-[1.25rem] border-[3px]', icon: 34 }
};

export function IconBadge({ icon: Icon, colorTheme, className = '', size = 'md' }: IconBadgeProps) {
  const theme = themeStyles[colorTheme];
  const sizing = sizeStyles[size];

  return (
    <div className={`relative flex items-center justify-center mb-6 group ${className}`}>
      {/* Outer subtle glow/wrapper */}
      <motion.div 
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center justify-center overflow-hidden transition-shadow duration-300 group-hover:${theme.glow} ${sizing.wrapper} ${theme.wrapper}`}
      >
        {/* Abstract shape within the border */}
        <div className={`absolute -inset-2 rounded-full opacity-20 blur-md ${theme.inner}`} />
        
        {/* Core solid container */}
        <div className={`relative flex items-center justify-center w-full h-full rounded-[inherit] border border-white/20 dark:border-white/10 ${theme.inner} shadow-inner`}>
          <Icon size={sizing.icon} className={theme.icon} strokeWidth={2.5} />
        </div>
        
        {/* Overlay glass glare */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-[inherit]" />
      </motion.div>

      {/* Floating decorative dot */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-1 -right-2 w-3 h-3 rounded-full border-2 border-white dark:border-lumi-darkcard ${theme.dot}`}
      />
    </div>
  );
}
