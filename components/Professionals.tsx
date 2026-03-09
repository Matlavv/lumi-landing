'use client';
import { motion } from 'framer-motion';
import { HeartHandshake, Mail, ShieldCheck, Stethoscope } from 'lucide-react';
import { Button } from './ui/Button';
import { BlurOrb, StarShape } from './ui/FloatingShapes';
import { IconBadge } from './ui/IconBadge';

export function Professionals() {
  return (
    <section id="professionals" className="py-24 bg-lumi-violet/5 dark:bg-lumi-violet/10 relative overflow-hidden transition-colors duration-500">
      <BlurOrb color="bg-lumi-violet" className="top-20 left-10 w-96 h-96" delay={0.2} duration={10} />
      <BlurOrb color="bg-lumi-pink" className="bottom-40 right-10 w-80 h-80" delay={0.5} duration={12} />
      <StarShape className="top-32 right-32 w-8 h-8 hidden lg:block" color="text-lumi-violet/40" delay={1} />
      <StarShape className="bottom-32 left-32 w-10 h-10 hidden lg:block" color="text-lumi-pink/40" delay={1.5} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-lumi-violet/10 text-lumi-violet font-semibold text-sm mb-6 border border-lumi-violet/20 shadow-sm">
            Espace Professionnels
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight transition-colors duration-500">
            Rejoignez notre réseau <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-lumi-violet to-lumi-pink">d'accompagnement</span>.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-500 relative z-10">
            Lumi ne s'arrête pas au moment de l'urgence. Nous mettons en relation nos utilisateurs victimes d'agression avec des professionnels de santé qualifiés (psychologues, thérapeutes, médecins) pour un suivi post-traumatique adapté.
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
              Vous intégrez un annuaire certifié, rassurant pour l'utilisateur, et vous êtes mis en avant directement dans l'application.
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
              Faites partie d'un écosystème bienveillant qui repense la sécurité féminine et urbaine de bout en bout.
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
            <h3 className="text-3xl font-bold mb-4">Vous êtes professionnel de santé ?</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl">
              Contactez-nous pour échanger sur un partenariat. Nous cherchons constamment à enrichir notre réseau d'accompagnants pour proposer la meilleure aide possible à notre communauté.
            </p>
            <Button 
              variant="outline" 
              className="bg-white text-orange-600 hover:bg-zinc-50 border-white h-12 px-8 font-bold text-base flex items-center gap-2 dark:text-black-600 dark:bg-black dark:hover:bg-gray-900"
              onClick={() => window.location.href = 'mailto:contact@lumi-app.fr'}
            >
              <Mail size={18} />
              Devenir Partenaire
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
