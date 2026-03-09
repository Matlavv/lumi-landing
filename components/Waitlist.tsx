'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Bell, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: May 20, 2026
    const targetDate = new Date('2026-05-20T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-zinc-50 dark:bg-[#09090b] relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-lumi-violet/30 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder rounded-[3rem] p-10 md:p-16 text-center max-w-4xl w-full flex flex-col items-center shadow-xl dark:shadow-2xl relative overflow-hidden transition-all duration-300"
        >
          {/* Ambient Glow inside card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-lumi-violet/10 via-transparent to-lumi-pink/10 pointer-events-none" />

          <div className="w-16 h-16 rounded-full bg-lumi-violet/10 flex items-center justify-center text-lumi-violet mb-8 relative z-10">
            <Bell size={28} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight transition-colors z-10">
            Lumi arrive le <span className="text-lumi-gradient">20 Mai 2026</span>.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-10 transition-colors z-10">
            Inscrivez-vous sur notre liste d'attente pour être notifié de la sortie de l'application et rejoindre la communauté dès le premier jour.
          </p>

          <div className="flex gap-4 md:gap-8 justify-center mb-12 relative z-10 w-full max-w-xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-2xl md:text-3xl font-black text-lumi-violet shadow-sm mb-2 font-mono">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Jours</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-zinc-300 dark:text-zinc-700 mt-4">:</div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-2xl md:text-3xl font-black text-lumi-violet shadow-sm mb-2 font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Heures</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-zinc-300 dark:text-zinc-700 mt-4">:</div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-2xl md:text-3xl font-black text-lumi-violet shadow-sm mb-2 font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Minutes</span>
            </div>
          </div>

          <div className="w-full max-w-lg mx-auto relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-zinc-400" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zinc-50 dark:bg-[#151525] border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-lumi-violet transition-all"
                />
              </div>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="sm:w-auto"
                  >
                    <Button type="button" className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 w-full h-full font-bold">
                      Inscrit !
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="submit"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="sm:w-auto"
                  >
                    <Button variant="gradient" type="submit" className="py-4 px-6 rounded-xl flex items-center justify-center gap-2 w-full h-full font-bold shadow-lg shadow-lumi-violet/20">
                      M'avertir <ArrowRight size={18} />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
            <p className="mt-4 text-xs text-zinc-500 transition-colors">
              Nous promettons de ne pas vous envoyer de spam. Seulement les annonces importantes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
