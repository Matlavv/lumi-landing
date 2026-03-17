'use client';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';
import dynamic from 'next/dynamic';
import { GlassPill, RingShape, Squiggle } from './ui/FloatingShapes';

const MapWrapper = dynamic(() => import('./MapWrapper'), { ssr: false, loading: () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-lumi-darkbg">
    <div className="w-8 h-8 rounded-full border-2 border-lumi-violet border-t-transparent animate-spin mb-3" />
    <span className="text-zinc-500 text-sm">Chargement de la carte...</span>
  </div>
) });

export function MapFeature() {
  const mockReports = [
    { id: '1', latitude: 50.6370, longitude: 3.0700, type: 'agression', typeLabel: "Agression", description: "Harcèlement devant la gare de Lille Flandres.", time: "22:45" },
    { id: '2', latitude: 50.6270, longitude: 3.0580, type: 'eclairage', typeLabel: "Zone mal éclairée", description: "Lampadaires éteints dans cette rue.", time: "21:30" },
    { id: '3', latitude: 50.6234, longitude: 3.0450, type: 'autre', typeLabel: "Groupe suspect", description: "Groupe agressif à l'angle.", time: "23:10" },
    { id: '4', latitude: 50.6320, longitude: 3.0630, type: 'vol', typeLabel: "Vol", description: "Vol à l'arraché signalé près de la place de la République.", time: "20:15" },
    { id: '5', latitude: 50.6400, longitude: 3.0750, type: 'harcelement', typeLabel: "Harcèlement", description: "Harcèlement de rue signalé à plusieurs reprises.", time: "23:30" },
    { id: '6', latitude: 50.6290, longitude: 3.0720, type: 'agression', typeLabel: "Agression", description: "Tentative d'agression à la sortie du métro.", time: "01:15" },
    { id: '7', latitude: 50.6350, longitude: 3.0520, type: 'info', typeLabel: "Information", description: "Présence policière renforcée ce week-end.", time: "18:00" },
    { id: '8', latitude: 50.6310, longitude: 3.0810, type: 'eclairage', typeLabel: "Éclairage défaillant", description: "Passage piéton très sombre, aucun éclairage.", time: "22:00" },
    { id: '9', latitude: 50.6380, longitude: 3.0550, type: 'vol', typeLabel: "Vol", description: "Vol de téléphone signalé dans le parc.", time: "19:45" },
    { id: '10', latitude: 50.6255, longitude: 3.0670, type: 'info', typeLabel: "Information", description: "Caméra de surveillance installée récemment.", time: "14:30" },
  ];

  return (
    <section id="map" className="py-24 bg-zinc-50 dark:bg-lumi-darkbg relative overflow-hidden transition-colors duration-500">
      <GlassPill className="top-[10%] left-[8%] w-16 h-8 hidden lg:block" delay={0.3} rotate={15} />
      <Squiggle className="bottom-[15%] right-[5%] w-12 h-12 hidden lg:block" color="text-lumi-violet/30" delay={0.6} />
      <RingShape className="top-[40%] right-[10%] w-10 h-10 border-[4px] hidden lg:block" color="border-lumi-red/30" delay={0.9} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Interactive Map UI matching the mobile app */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative h-[600px] w-full max-w-[400px] mx-auto bg-white dark:bg-lumi-darkcard rounded-3xl border border-zinc-200 dark:border-lumi-darkborder shadow-xl hover:shadow-2xl dark:shadow-2xl flex flex-col overflow-hidden transition-all duration-500 lg:order-1 order-2 group"
          >
            {/* Map Area */}
            <div className="flex-1 relative bg-zinc-100 dark:bg-[#09090b] transition-colors duration-500">
              <MapWrapper reports={mockReports} />
              
              {/* Recenter Button over map */}
              <button className="absolute bottom-6 right-4 z-[400] w-12 h-12 rounded-full bg-lumi-violet flex items-center justify-center shadow-[0_4px_12px_rgba(87,34,207,0.4)] hover:bg-[#6c3df2] transition-colors group-hover:scale-110 duration-300">
                <Navigation color="white" size={20} />
              </button>
              
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-100 dark:from-lumi-darkbg to-transparent pointer-events-none z-[300] transition-colors duration-500" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="lg:order-2 order-1 relative"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-lumi-violet/10 text-lumi-violet font-medium text-sm mb-6 border border-lumi-violet/20">
              Navigation sécurisée
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight transition-colors duration-500">
              Une carte communautaire<br/>pour <span className="text-lumi-gradient">anticiper</span>.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed transition-colors duration-500">
              Repérez les zones à risque signalées par les autres utilisateurs et évitez les désagréments. Contribuez à la sécurité de tous en signalant vous aussi les problèmes rencontrés.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder px-3 py-1.5 rounded-lg transition-colors duration-500 shadow-sm">
                <div className="w-3 h-3 rounded bg-lumi-red" />
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">Agression</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder px-3 py-1.5 rounded-lg transition-colors duration-500 shadow-sm">
                <div className="w-3 h-3 rounded bg-yellow-400 dark:bg-[#ebf067]" />
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">Vol</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder px-3 py-1.5 rounded-lg transition-colors duration-500 shadow-sm">
                <div className="w-3 h-3 rounded bg-lumi-pink" />
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">Harcèlement</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder px-3 py-1.5 rounded-lg transition-colors duration-500 shadow-sm">
                <div className="w-3 h-3 rounded bg-zinc-400 dark:bg-white" />
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">Éclairage</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-lumi-darkcard border border-zinc-200 dark:border-lumi-darkborder px-3 py-1.5 rounded-lg transition-colors duration-500 shadow-sm">
                <div className="w-3 h-3 rounded bg-blue-500" />
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">Information</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
