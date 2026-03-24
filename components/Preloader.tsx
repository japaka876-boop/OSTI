"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Simulate loading time for luxury effect
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 2500); // 2.5 seconds of luxury intro

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a2540] text-white overflow-hidden"
        >
          {/* Background Ambient Video slightly overlaid */}
          <div className="absolute inset-0 opacity-20 transform scale-105 pointer-events-none">
            <video
              src="/hero-background1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540] via-transparent to-[#0a2540]/80 pointer-events-none" />

          {/* Top Title */}
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 text-2xl md:text-4xl font-semibold tracking-[0.2em] uppercase mb-16 text-white drop-shadow-lg text-center px-4"
          >
            Aquatic Pool Systems
          </motion.h1>

          {/* Animated Water-like Ring Main Element */}
          <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mb-16">
            {/* Outer ripples */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border border-[#00d4ff]/30 shadow-[0_0_50px_rgba(0,212,255,0.2)]"
            />
             <motion.div
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute inset-0 rounded-full border border-white/20 blur-[2px]"
            />

            {/* Inner spinning gradient ring (simulate the 3D water ring) */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-[#00d4ff] via-white/50 to-blue-500 shadow-[0_0_40px_rgba(0,212,255,0.5)]"
            >
              <div className="w-full h-full bg-[#0a2540] rounded-full flex items-center justify-center p-2">
                 <motion.div
                   animate={{ scale: [0.95, 1.05, 0.9] }}
                   transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                   className="w-full h-full rounded-full border border-[#00d4ff]/40 shadow-inner"
                 />
              </div>
            </motion.div>
          </div>

          {/* Loading Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative z-10 flex flex-col items-center"
          >
             <p className="text-sm md:text-lg font-medium tracking-[0.15em] text-white/90 uppercase text-center">
               Loading your relaxation experience<span className="animate-[ping_1.5s_infinite] inline-block w-1.5 h-1.5 bg-[#00d4ff] rounded-full mx-0.5" /><span className="animate-[ping_1.5s_1s_infinite] inline-block w-1.5 h-1.5 bg-[#00d4ff] rounded-full mx-0.5" /><span className="animate-[ping_1.5s_2s_infinite] inline-block w-1.5 h-1.5 bg-[#00d4ff] rounded-full mx-0.5" />
             </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
