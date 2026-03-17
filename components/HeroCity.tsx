'use client';
import { motion } from 'framer-motion';
import { ArrowDown, ClipboardList } from 'lucide-react';
import { Button } from './ui/Button';
import { GlassPill, RingShape, Squiggle, StarShape } from './ui/FloatingShapes';

export function HeroCity({ cityName }: { cityName: string }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden flex flex-col items-center justify-center bg-white dark:bg-transparent transition-colors duration-500">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-lumi-darkbg dark:via-[#0F0A1A] dark:to-lumi-darkbg -z-20 transition-colors duration-500" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lumi-violet/15 dark:bg-lumi-violet/15 rounded-full blur-[150px] pointer-events-none -z-10 transition-colors duration-500" />

      {/* Floating Decorative Elements */}
      <StarShape className="top-[15%] left-[10%] w-8 h-8 hidden md:block" color="text-lumi-violet" delay={0.2} />
      <GlassPill className="top-[25%] right-[15%] w-16 h-8 hidden md:block" delay={0.5} rotate={-20} />
      <RingShape className="bottom-[25%] left-[20%] w-12 h-12 border-[4px] hidden lg:block" color="border-lumi-pink/40" delay={0.8} />
      <Squiggle className="top-[45%] right-[8%] w-10 h-10 hidden lg:block" color="text-lumi-violet/30" delay={1} />
      <StarShape className="bottom-[15%] right-[10%] w-6 h-6 hidden md:block" color="text-yellow-400" delay={1.2} />
      <GlassPill className="bottom-[30%] left-[5%] w-12 h-6 hidden xl:block" delay={1.5} rotate={45} />

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.8 }}
          className="max-w-4xl mx-auto relative"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-lumi-violet/10 text-lumi-violet font-semibold text-sm mb-6 border border-lumi-violet/20 shadow-sm">
            Bientôt disponible
          </span>
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white mb-6 leading-[1.1] tracking-tight transition-colors duration-500">
            Votre <span className="text-lumi-gradient">sécurité</span> à {cityName}, à portée de main.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 transition-colors duration-500 leading-relaxed">
            Sortez l'esprit tranquille à {cityName}. Lumi vous protège lors de vos déplacements grâce à notre système d'alerte et la force de la communauté.
          </p>

          {/* Two CTA buttons side by side */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto">
            <Button
              variant="gradient"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-lumi-violet/20 font-bold text-base"
              onClick={() => window.open('https://forms.gle/T78gS1ZM8Zs3kq3e9', '_blank')}
            >
              <ClipboardList size={20} />
              Participer au sondage
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl flex items-center justify-center gap-3 border-zinc-300 dark:border-lumi-darkborder text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold text-base"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir l&apos;application
              <ArrowDown size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
