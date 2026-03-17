'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ClipboardList, Rocket, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';
import { GlassPill, RingShape, Squiggle, StarShape } from './ui/FloatingShapes';

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ nom: '', prenom: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, type: 'beta', nom: form.nom, prenom: form.prenom }),
      });
      if (!res.ok) throw new Error('Erreur');
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); setModalOpen(false); setForm({ nom: '', prenom: '', email: '' }); }, 2500);
    } catch {
      setError('Une erreur est survenue. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden flex flex-col items-center justify-center bg-white dark:bg-transparent transition-colors duration-500">
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
            Sortir en <span className="text-lumi-gradient">sécurité</span>, avec Lumi.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 transition-colors duration-500 leading-relaxed">
            Lumi protège vos déplacements en ville grâce à un système d&apos;alerte rapide, une cartographie collaborative des zones à risque et un accompagnement post-agression complet.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto mb-5">
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl flex items-center justify-center gap-3 border-zinc-300 dark:border-lumi-darkborder text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold text-base"
              onClick={() => window.open('https://forms.google.com/', '_blank')}
            >
              <ClipboardList size={20} />
              Participer au sondage
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl flex items-center justify-center gap-3 border-zinc-300 dark:border-lumi-darkborder text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold text-base"
              onClick={() => document.getElementById('sos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir l&apos;application
              <ArrowDown size={18} />
            </Button>
          </div>
          <Button
            variant="gradient"
            className="mt-8 px-8 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-lumi-violet/20 font-bold text-base"
            onClick={() => setModalOpen(true)}
          >
            <Rocket size={18} />
            S&apos;inscrire à la beta Lumi
          </Button>
        </motion.div>
      </div>

      {/* Beta signup modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder rounded-3xl p-8 md:p-10 w-full max-w-lg shadow-2xl z-10"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-14 h-14 rounded-full bg-lumi-violet/10 flex items-center justify-center text-lumi-violet mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Rejoindre la beta Lumi</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">Soyez parmi les premiers à tester Lumi et à contribuer à la sécurité urbaine.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text" required placeholder="Nom"
                    value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="py-3 px-4 bg-zinc-50 dark:bg-[#151525] border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-lumi-violet transition-all"
                  />
                  <input
                    type="text" required placeholder="Prénom"
                    value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    className="py-3 px-4 bg-zinc-50 dark:bg-[#151525] border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-lumi-violet transition-all"
                  />
                </div>
                <input
                  type="email" required placeholder="Email"
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="py-3 px-4 bg-zinc-50 dark:bg-[#151525] border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-lumi-violet transition-all"
                />
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Button type="button" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold">
                        Inscription confirmée ✓
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div key="confirm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Button variant="gradient" type="submit" disabled={loading} className="w-full py-3 rounded-xl font-bold shadow-lg shadow-lumi-violet/20 disabled:opacity-50">
                        {loading ? 'Envoi...' : 'Confirmer'}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
