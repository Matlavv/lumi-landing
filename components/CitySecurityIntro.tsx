'use client';
import { motion } from 'framer-motion';
import { MapPin, Moon } from 'lucide-react';
import { IconBadge } from './ui/IconBadge';

interface CitySecurityIntroProps {
  cityName: string;
  quartiers: string[];
}

export function CitySecurityIntro({ cityName, quartiers }: CitySecurityIntroProps) {
  const quartierHighlight = quartiers.length >= 2 
    ? <><span className="font-semibold text-lumi-violet dark:text-lumi-pink">{quartiers[0]}</span> et <span className="font-semibold text-lumi-violet dark:text-lumi-pink">{quartiers[1]}</span></>
    : <span className="font-semibold text-lumi-violet dark:text-lumi-pink">le centre-ville</span>;

  return (
    <section className="py-24 bg-zinc-50 dark:bg-[#0F0A1A] transition-colors duration-500 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-lumi-violet/10 to-transparent -z-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-lumi-pink/10 to-transparent -z-10 blur-3xl" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className="flex gap-4 mb-6">
              <IconBadge icon={MapPin} colorTheme="violet" />
              <IconBadge icon={Moon} colorTheme="pink" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight">
              La réalité de <span className="text-lumi-gradient">la ville, la nuit.</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Vivre à {cityName}, c’est profiter de son dynamisme. Mais parfois, rentrer d’une soirée, quitter le travail tard, ou simplement se promener entre {quartierHighlight} peut susciter de l'appréhension.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              Chez Lumi, nous croyons qu'aucun espace public de {cityName} ne devrait être source d'angoisse. 
              C'est pourquoi nous mettons la puissance de la bienveillance collective dans votre poche.
            </p>
          </motion.div>

          {/* Visual element representing a city map/mesh */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder rounded-[2.5rem] shadow-xl overflow-hidden p-8 flex flex-col justify-center">
              
              <div className="absolute inset-0 bg-grid-zinc-200/50 dark:bg-grid-zinc-800/30 opacity-50 bg-[length:30px_30px]" />
              
              <div className="relative z-10 space-y-6">
                 {/* Simulated notification blocks */}
                 <div className="bg-zinc-50 dark:bg-[#151525] p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-lumi-violet/20 flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-lumi-violet animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Zone signalée • {quartiers[0] ?? 'Centre'}</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Éclairage public en panne sur cet axe. Soyez prudents.</p>
                    </div>
                 </div>

                 <div className="bg-lumi-pink/5 dark:bg-lumi-pink/10 p-5 rounded-2xl border border-lumi-pink/20 shadow-sm flex items-start gap-4 ml-8">
                    <div className="w-10 h-10 rounded-full bg-lumi-pink/20 flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-lumi-pink animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lumi-pink text-sm">Trajet sécurisé • {quartiers[1] ?? 'Gare'}</h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Rentrez groupés avec 3 autres utilisateurs Lumi ce soir.</p>
                    </div>
                 </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
