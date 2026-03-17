'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { HeartHandshake, Mail, ShieldCheck, Stethoscope, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';
import { BlurOrb, StarShape } from './ui/FloatingShapes';
import { IconBadge } from './ui/IconBadge';

export function Professionals() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Erreur lors de l\'envoi');
      setSent(true);
      setTimeout(() => { setSent(false); setModalOpen(false); setForm({ nom: '', prenom: '', email: '', message: '' }); }, 2000);
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="professionals" className="py-24 bg-lumi-violet/5 dark:bg-lumi-violet/10 relative overflow-hidden transition-colors duration-500">
      <BlurOrb color="bg-lumi-violet" className="-top-42 -left-32 md:top-20 md:left-10 w-96 h-96" delay={0.2} duration={10} />
      <BlurOrb color="bg-lumi-pink" className="bottom-40 right-10 w-80 h-80" delay={0.5} duration={12} />
      <StarShape className="top-32 right-32 w-8 h-8 hidden lg:block" color="text-lumi-violet/40" delay={1} />
      <StarShape className="bottom-32 left-32 w-10 h-10 hidden lg:block" color="text-lumi-pink/40" delay={1.5} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-lumi-violet/10 text-lumi-violet font-semibold text-sm mb-6 border border-lumi-violet/20 shadow-sm">
            Espace Pro
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight transition-colors duration-500">
            Rejoignez notre réseau <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-lumi-violet to-lumi-pink">d&apos;accompagnement</span>.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-500 relative z-10">
            Lumi ne s&apos;arrête pas au moment de l&apos;urgence. Nous mettons en relation nos utilisateurs victimes d&apos;agression avec des structures partenaires (associations de psychologues, médecins, thérapeutes, ...) pour un suivi post-traumatique adapté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="group bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-lumi-pink/10 dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-lumi-pink/10 rounded-full blur-3xl group-hover:bg-lumi-pink/20 transition-colors duration-500" />
            <IconBadge icon={HeartHandshake} colorTheme="pink" size="lg" className="mb-2" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 transition-colors relative z-10">Utilité Publique</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors relative z-10">
              Apportez votre expertise à des personnes qui en ont réellement besoin, au moment où elles sont le plus vulnérables.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="group bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-yellow-400/10 dark:hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-colors duration-500" />
            <IconBadge icon={ShieldCheck} colorTheme="yellow" size="lg" className="mb-2" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 transition-colors relative z-10">Réseau Vérifié</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors relative z-10">
              Vous intégrez un annuaire certifié, rassurant pour l&apos;utilisateur, et vous êtes mis en avant directement dans l&apos;application.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="group bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-lumi-violet/10 dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-lumi-violet/10 rounded-full blur-3xl group-hover:bg-lumi-violet/20 transition-colors duration-500" />
            <IconBadge icon={Stethoscope} colorTheme="violet" size="lg" className="mb-2" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 transition-colors relative z-10">Soutien Global</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors relative z-10">
              Faites partie d&apos;un écosystème bienveillant qui repense la sécurité urbaine de bout en bout.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 via-lumi-violet to-orange-500 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-4">Vous êtes une structure d'accompagnement ?</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl">
              Vous êtes une structure pouvant accompagner des personnes victimes d'agression ? Un professionnel de santé ? 
              Contactez-nous pour échanger sur un partenariat. Nous cherchons constamment à enrichir notre réseau d&apos;accompagnants pour proposer la meilleure aide possible à notre communauté.
            </p>
            <Button 
              variant="outline" 
              className="bg-white text-orange-600 hover:bg-zinc-50 border-white h-12 px-8 font-bold text-base flex items-center gap-2 dark:text-black-600 dark:bg-black dark:hover:bg-gray-900"
              onClick={() => setModalOpen(true)}
            >
              <Mail size={18} />
              Devenir Partenaire
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Partner Contact Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
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

              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Devenir Partenaire</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">Remplissez ce formulaire et nous reviendrons vers vous rapidement.</p>

              <form onSubmit={handleSend} className="flex flex-col gap-4">
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
                <textarea
                  required placeholder="Votre message" rows={4}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="py-3 px-4 bg-zinc-50 dark:bg-[#151525] border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-lumi-violet transition-all resize-none"
                />
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Button type="button" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold">
                        Message envoyé ✓
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Button variant="gradient" type="submit" disabled={loading} className="w-full py-3 rounded-xl font-bold shadow-lg shadow-lumi-violet/20 disabled:opacity-50">
                        {loading ? 'Envoi en cours...' : 'Envoyer'}
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
