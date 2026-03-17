'use client';
import { motion } from 'framer-motion';
import { HeartHandshake, Map, ShieldAlert } from 'lucide-react';

interface WhyLumiCityProps {
  cityName: string;
}

export function WhyLumiCity({ cityName }: WhyLumiCityProps) {
  const localBenefits = [
    {
      icon: ShieldAlert,
      title: "L'alerte immédiate",
      description: "Un bouton SOS directement accessible. Il avertit en moins d'une seconde vos proches, les utilisateurs à proximité dans votre quartier, et déclenche l'enregistrement.",
      color: "#fd3630",
      bgClass: "bg-lumi-red/10",
      borderClass: "border-lumi-red/20",
    },
    {
      icon: Map,
      title: "La carte communautaire",
      description: `Rues non éclairées, foules agitées ou incidents à ${cityName}... Consultez les signalements des autres utilisateurs avant de démarrer votre trajet.`,
      color: "#5722CF",
      bgClass: "bg-lumi-violet/10",
      borderClass: "border-lumi-violet/20",
    },
    {
      icon: HeartHandshake,
      title: "L'entraide locale",
      description: "Vous n'êtes jamais seul. En partenariat avec des structures partenaires (associations de psychologues, médecins, thérapeutes, ...), trouvez des ressources et des soutiens adaptés en cas de problème.",
      color: "#f877af",
      bgClass: "bg-lumi-pink/10",
      borderClass: "border-lumi-pink/20",
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-6xl z-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-lumi-violet/10 text-lumi-violet font-medium text-sm mb-4 border border-lumi-violet/20">
            La solution Lumi
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight">
            Pourquoi choisir <span className="text-lumi-violet">Lumi à {cityName}</span> ?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Une application simple, pensée pour réagir vite et prévenir les risques avant qu'ils n'arrivent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {localBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-zinc-50 dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder rounded-3xl p-8 hover:shadow-xl hover:dark:shadow-lumi-violet/10 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${benefit.bgClass} ${benefit.borderClass}`}>
                  <Icon size={28} color={benefit.color} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-lumi-violet transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
