'use client';
import { motion } from 'framer-motion';
import { MapPin, Moon, ShieldCheck } from 'lucide-react';
import { IconBadge } from './ui/IconBadge';

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-lumi-violet/10 text-lumi-violet font-semibold text-sm mb-6 border border-lumi-violet/20 shadow-sm">
            Notre Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight transition-colors duration-500">
            Parce que la rue appartient <span className="text-lumi-gradient">à tout le monde</span>.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-500">
            Lumi est née d'un constat simple : l'espace public devrait être sûr pour toutes et tous. Notre mission est d'améliorer la sécurité des utilisateurs dans la rue, pour que sortir le soir redevienne un plaisir, et non plus une source d'angoisse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="group bg-zinc-50 dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-lumi-violet/10 dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-lumi-violet/10 rounded-full blur-3xl group-hover:bg-lumi-violet/20 transition-colors duration-500" />
            <IconBadge icon={Moon} colorTheme="violet" size="md" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 transition-colors relative z-10">Sortir sans crainte</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors relative z-10">
              Que vous rentriez de soirée, d'un dîner ou du travail, Lumi veille sur vos trajets nocturnes pour vous offrir une véritable tranquillité d'esprit.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="group bg-zinc-50 dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-lumi-pink/10 dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-lumi-pink/10 rounded-full blur-3xl group-hover:bg-lumi-pink/20 transition-colors duration-500" />
            <IconBadge icon={ShieldCheck} colorTheme="pink" size="md" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 transition-colors relative z-10">Sécurité proactive</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors relative z-10">
              Nous misons sur la prévention et l'action rapide. L'application est conçue pour réagir instantanément en cas d'urgence, sans frictions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="group bg-zinc-50 dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-lumi-red/10 dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-lumi-red/10 rounded-full blur-3xl group-hover:bg-lumi-red/20 transition-colors duration-500" />
            <IconBadge icon={MapPin} colorTheme="red" size="md" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 transition-colors relative z-10">Force communautaire</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors relative z-10">
              Ensemble, nous cartographions et sécurisons la ville. Les signalements de chacun permettent d'informer et de protéger la communauté entière.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
