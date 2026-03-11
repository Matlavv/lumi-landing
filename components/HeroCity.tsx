'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ClipboardList, Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';
import { GlassPill, RingShape, Squiggle, StarShape } from './ui/FloatingShapes';

export function HeroCity({ cityName }: { cityName: string }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

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
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white mb-6 leading-[1.1] tracking-tight transition-colors duration-500">
            Votre <span className="text-lumi-gradient">sécurité</span> à {cityName}, à portée de main.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 transition-colors duration-500 leading-relaxed">
            Sortez l'esprit tranquille à {cityName}. Lumi vous protège lors de vos déplacements grâce à notre système d'alerte et la force de la communauté.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto mb-8">
            <form onSubmit={handleSubmit} className="flex-1 w-full relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-zinc-400" />
              </div>
              <input
                type="email"
                required
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-32 py-4 bg-zinc-100 dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder rounded-2xl text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-lumi-violet transition-all shadow-inner"
              />
              <div className="absolute inset-y-1.5 right-1.5 flex items-center">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <Button type="button" className="bg-green-500 hover:bg-green-600 text-white h-full px-4 py-2 rounded-xl flex items-center gap-2">
                        Inscrit !
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="submit"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <Button variant="gradient" type="submit" className="h-full px-5 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-lumi-violet/20 font-semibold">
                        S'inscrire <ArrowRight size={18} />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center mt-6">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 font-medium transition-colors">
              Aidez-nous à co-construire Lumi en donnant votre avis :
            </p>
            <Button 
              variant="outline" 
              className="group border-zinc-300 dark:border-lumi-darkborder hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium px-6 py-6 h-auto flex items-center gap-3 rounded-2xl"
              onClick={() => window.open('https://forms.google.com/', '_blank')}
            >
              <div className="bg-lumi-violet/10 p-2 rounded-lg group-hover:bg-lumi-violet/20 transition-colors">
                <ClipboardList className="w-5 h-5 text-lumi-violet" />
              </div>
              <div className="text-left">
                <div className="text-base font-semibold">Participer au sondage</div>
                <div className="text-xs text-zinc-500">2 minutes pour nous aider</div>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
