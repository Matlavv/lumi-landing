'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Comment fonctionne l'alerte Lumi ?",
    answer: "En cas de danger, un simple appui sur le bouton SOS déclenche une série d'actions : l'enregistrement audio démarre, votre position est partagée en temps réel aux utilisateurs Lumi dans un rayon d'1km, à vos contacts d'urgence pré-enregistrés, et enfin aux forces de l'ordre si nécessaire."
  },
  {
    question: "Mes données de localisation sont-elles partagées en permanence ?",
    answer: "Absolument pas. Lumi est conçue pour respecter votre vie privée. Votre position n'est partagée que lorsque vous activez explicitement le mode alerte ou la navigation partagée. En dehors de ces cas, vous êtes 100% anonyme."
  },
  {
    question: "Que se passe-t-il après une agression ?",
    answer: "Lumi ne vous lâche pas une fois le danger écarté. L'application propose un onglet Ressources vous permettant d'entrer en contact facilement avec nos structures partenaires (associations de psychologues, médecins, thérapeutes, ...) ainsi que des associations d'accompagnement juridique et psychologique."
  },
  {
    question: "Est-ce que l'application est gratuite ?",
    answer: "L'application de base, incluant les fonctionnalités SOS, la carte communautaire et l'accès aux ressources, est totalement gratuite pour tous les utilisateurs. Notre priorité est la sécurité avant tout."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-black relative transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold text-sm mb-6 transition-colors">
            Questions Fréquentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight transition-colors">
            Tout ce que vous devez <span className="text-lumi-gradient">savoir</span>.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 transition-colors">
            Retrouvez ici les réponses aux questions les plus posées par notre communauté.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-zinc-50 border-lumi-violet dark:bg-zinc-900/50 dark:border-lumi-violet' : 'bg-white border-zinc-200 dark:bg-lumi-darkcard dark:border-lumi-darkborder'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white transition-colors">{faq.question}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 transform ${isOpen ? 'rotate-180 bg-lumi-violet text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
