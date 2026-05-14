'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InvitationCard from '@/components/InvitationCard/InvitationCard';
import Countdown from '@/components/Countdown/Countdown';

export default function Home() {
  const [view, setView] = useState<'intro' | 'invite'>('intro');

  return (
    <main className={`min-h-screen p-8 flex flex-col items-center text-varsity-cream bg-white mt-7`}>
      <AnimatePresence mode="wait">
        {view === 'intro' ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            onClick={() => setView('invite')}
            className="cursor-pointer flex flex-col items-center"
          >
            <img src="/bach_logo.svg" alt="Logo" className="h-logo animate-pulse" />
            <p className="mt-8 font-serif text-varsity-cream/60 tracking-widest uppercase text-xs">
              Tap to Enter Center Ice
            </p>
          </motion.div>
        ) : (
       
<motion.div
  key="invite"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="w-full flex flex-col items-center"
>
  <Countdown targetDate="2027-04-25T17:00:00" /> {/* Location Reveal Date */}
  <InvitationCard />
</motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
