'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: 'newsletter' }),
      });
      if (!res.ok) throw new Error('Erreur');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    } catch {
      setError('Une erreur est survenue. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-lumi-darkbg relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-lumi-violet/30 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-lumi-violet/10 via-lumi-pink/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-lumi-violet/10 flex items-center justify-center text-lumi-violet mx-auto mb-6">
            <Sparkles size={26} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white transition-colors">
            Envie d&apos;en savoir plus ?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed transition-colors">
            Laissez-nous votre email et soyez parmi les premiers informés du lancement de Lumi. Aucun spam — uniquement les annonces importantes.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
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
                className="w-full pl-12 pr-4 py-4 bg-zinc-100 dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder rounded-xl text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-lumi-violet transition-all"
              />
            </div>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                  <Button type="button" className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 w-full h-full font-bold">
                    Inscrit !
                  </Button>
                </motion.div>
              ) : (
                <motion.div key="submit" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                  <Button variant="gradient" type="submit" disabled={loading} className="py-4 px-6 rounded-xl flex items-center justify-center gap-2 w-full h-full font-bold shadow-lg shadow-lumi-violet/20 disabled:opacity-50">
                    {loading ? 'Envoi...' : <>M&apos;avertir <ArrowRight size={18} /></>}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
          {error && <p className="text-red-500 text-sm text-center mt-3">{error}</p>}
        </motion.div>
      </div>
    </section>
  );
}
