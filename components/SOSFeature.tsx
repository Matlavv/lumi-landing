'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Mic, Phone, Shield, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SOSFeature() {
  const [alertStep, setAlertStep] = useState<'idle' | 'users' | 'police' | 'contacts' | 'recording' | 'active'>('idle');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [recordingTime, setRecordingTime] = useState(0);

  const isAlertActive = alertStep !== 'idle';

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (alertStep === 'users') {
      timer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, 'users']);
        setAlertStep('police');
      }, 2000);
    } else if (alertStep === 'police') {
      timer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, 'police']);
        setAlertStep('contacts');
      }, 2000);
    } else if (alertStep === 'contacts') {
      timer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, 'contacts']);
        setAlertStep('recording');
      }, 2000);
    } else if (alertStep === 'recording') {
      timer = setTimeout(() => {
        setAlertStep('active');
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [alertStep]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (alertStep === 'recording' || alertStep === 'active') {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(interval);
  }, [alertStep]);

  const triggerAlert = () => {
    if (!isAlertActive) {
      setAlertStep('users');
      setCompletedSteps([]);
    }
  };

  const cancelAlert = () => {
    setAlertStep('idle');
    setCompletedSteps([]);
  };

  const stepsParam = [
    { key: 'users', label: 'Alerte utilisateurs (1km)', icon: Users, color: '#ebf067', bg: 'rgba(235, 240, 103, 0.2)' },
    { key: 'police', label: 'Alerte police', icon: Shield, color: '#fd3630', bg: 'rgba(253, 54, 48, 0.2)' },
    { key: 'contacts', label: "Alerte contacts", icon: Phone, color: '#f877af', bg: 'rgba(248, 119, 175, 0.2)' },
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="sos" className="py-24 bg-zinc-50 dark:bg-lumi-darkbg transition-colors duration-500 overflow-hidden relative border-t border-zinc-200 dark:border-lumi-darkborder">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="w-full lg:w-1/2 relative"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-lumi-red/10 text-lumi-red font-medium text-sm mb-6 border border-lumi-red/20">
            Design pensé pour l'urgence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight transition-colors duration-500">
            L'alerte en un seul geste, <span className="text-lumi-red">où que vous soyez</span>.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed transition-colors duration-500">
            L'application mobile a été conçue pour déclencher des actions en cascade immédiatement : prévenir les utilisateurs Lumi environnants, vos proches, et dans le pire des cas, les forces de l'ordre.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">Bouton toujours accessible</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">Enregistrement audio automatique</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">Tracking de position sécurisé</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative flex items-center">
            {/* The test me arrow outside the phone on the left */}
            {!isAlertActive && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute right-full mr-4 pointer-events-none z-20 hidden md:flex flex-col items-end"
              >
                 <motion.span 
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-lumi-violet dark:text-lumi-pink font-bold text-2xl -rotate-12 mb-2 whitespace-nowrap bg-white/50 dark:bg-black/20 px-4 py-2 rounded-2xl backdrop-blur border border-white/20 dark:border-white/10 shadow-sm"
                >
                  Teste-moi !
                </motion.span>
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="text-lumi-violet dark:text-lumi-pink mt-2">
                  <path d="M10 10 Q 40 30 70 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="transparent"/>
                  <path d="M55 12 L 72 18 L 63 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
                </svg>
              </motion.div>
            )}

            <div className="relative w-[340px] h-[680px] bg-black rounded-[3rem] border-8 border-zinc-900 shadow-2xl overflow-hidden flex flex-col z-10">
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
              <div className="w-32 h-6 bg-zinc-900 rounded-b-2xl"></div>
            </div>

            {/* Simulated App Background with more depth/relief */}
            <div className="absolute inset-0 bg-[#090514] shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]" />
            
            {/* Ambient gradients for relief */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-lumi-violet/20 rounded-full blur-[80px] pointer-events-none" />

            {/* App Header */}
            <div className="relative z-10 pt-16 px-6 pb-8 text-center text-white">
               {!isAlertActive ? (
                <>
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-md">Sécurité Urbaine</h3>
                  <p className="text-sm text-zinc-400">Appuyez en cas d'urgence</p>
                </>
              ) : (
                <div className="inline-flex items-center bg-lumi-red/20 px-3 py-1.5 rounded-full border border-lumi-red/30 mt-2 shadow-[0_0_15px_rgba(253,54,48,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-lumi-red animate-pulse mr-2" />
                  <span className="text-lumi-red font-bold text-xs tracking-widest">ALERTE EN COURS</span>
                </div>
              )}
            </div>

            {/* Interactive SOS Button Area */}
            <div className="relative flex-1 flex flex-col items-center justify-center p-6 mt-[-40px]">
              
              <AnimatePresence>
                {isAlertActive && (
                  <>
                    {[0, 1].map((i) => (
                      <motion.div
                        key={`ring-${i}`}
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 1,
                          ease: "easeOut"
                        }}
                        className="absolute w-[140px] h-[140px] rounded-full border-2 border-lumi-red pointer-events-none"
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={!isAlertActive ? { scale: 1.05 } : {}}
                whileTap={!isAlertActive ? { scale: 0.95 } : {}}
                animate={!isAlertActive ? {
                  scale: [1, 1.05, 1]
                } : {}}
                transition={!isAlertActive ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : {}}
                onClick={triggerAlert}
                className={`relative z-10 w-36 h-36 rounded-[2rem] flex items-center justify-center shadow-[0_8px_32px_rgba(169,73,242,0.4)] ${isAlertActive ? 'bg-gradient-to-br from-lumi-red to-[#CC2020]' : 'bg-lumi-gradient'}`}
                style={{ pointerEvents: isAlertActive ? 'none' : 'auto' }}
              >
                {alertStep === 'recording' || alertStep === 'active' ? (
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Mic color="white" size={40} strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <span className="text-white text-4xl font-black tracking-widest">SOS</span>
                )}
              </motion.button>

            </div>

             {/* Animated Alert Steps Card */}
             <AnimatePresence>
              {isAlertActive && (
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  className="absolute bottom-0 inset-x-0 bg-[#151525] border-t border-[#22223a] rounded-t-3xl pt-5 pb-8 px-5 z-20 shadow-2xl"
                >
                  <div className="flex flex-col gap-2.5">
                    {stepsParam.map((step) => {
                      const isCompleted = completedSteps.includes(step.key);
                      const isCurrent = alertStep === step.key;
                      const IconComponent = step.icon;

                      return (
                        <div 
                          key={step.key} 
                          className={`flex flex-row items-center rounded-xl p-2.5 transition-colors ${
                            isCurrent ? 'bg-lumi-red/10 border border-lumi-red/40' : 
                            isCompleted ? 'bg-green-500/10 border border-green-500/30' : 
                            'bg-[#0d0d1a] border border-[#22223a]'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: isCompleted ? 'rgba(34, 197, 94, 0.2)' : step.bg }}>
                            {isCompleted ? <CheckCircle color="#22c55e" size={16} /> : <IconComponent color={step.color} size={16} />}
                          </div>
                          <div className="flex-1">
                            <p className={`font-semibold text-[13px] ${isCurrent ? 'text-white' : isCompleted ? 'text-green-500' : 'text-zinc-400'}`}>
                              {step.label}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                    {(alertStep === 'recording' || alertStep === 'active') && (
                      <div className="flex flex-row items-center rounded-xl p-2.5 border bg-lumi-red/10 border-lumi-red/40">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-lumi-red/20">
                          <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <Mic color="#fd3630" size={16} />
                          </motion.div>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-[13px] text-white flex justify-between">
                            Enregistrement
                            <span className="font-mono text-lumi-red">{formatTime(recordingTime)}</span>
                          </p>
                        </div>
                      </div>
                    )}

                    <button 
                      onClick={cancelAlert} 
                      className="mt-3 flex items-center justify-center w-full py-2.5 rounded-xl bg-white/5 gap-2 text-zinc-400 hover:text-white transition-colors"
                    >
                      <X size={16} />
                      <span className="font-medium text-[13px]">Annuler</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Inactive State bottom info */}
            {!isAlertActive && (
                 <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="absolute bottom-16 inset-x-0 flex flex-col items-center pointer-events-none"
               >
                 <div className="flex items-center gap-2 mb-1">
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                   <span className="text-sm font-semibold text-green-500">Protection active</span>
                 </div>
                 <span className="text-xs text-zinc-500">Prêt à emettre</span>
               </motion.div>
            )}

            {/* Virtual Home Bar */}
            <div className="absolute bottom-2 inset-x-0 h-1 flex justify-center z-50">
              <div className="w-32 h-1 bg-zinc-600 rounded-full"></div>
            </div>
          </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
