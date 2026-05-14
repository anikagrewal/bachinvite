'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ScoutingReport() {
  const [answers, setAnswers] = useState({ gd: '', t: '', e: '', c: '' });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleVerify = () => {
    const isGDCorrect = answers.gd.toLowerCase().includes('day');
    const isTCorrect = answers.t.toLowerCase().includes('team');
    const isCCorrect = answers.c.toLowerCase().includes('champ') || answers.c.toLowerCase().includes('winner');
    const isEFilled = answers.e.length > 0; // Just checks if they made a guess

    if (isGDCorrect && isTCorrect && isCCorrect && isEFilled) {
      setIsUnlocked(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500); // Shakes the UI
    }
  };

  return (
    <div className="min-h-screen bg-beige text-varsity-cream flex flex-col items-center p-6 font-sans">
      <header className="text-center mt-8 mb-12">
        <h1 className="font-serif text-2xl tracking-widest uppercase">Decode the Mission</h1>
        <p className="text-[10px] opacity-40 mt-2">The stats line holds the key to the Coast to Coast Classic</p>
      </header>

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div 
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            className="w-full max-w-sm space-y-6"
          >
            {/* GD: 03 Slot */}
            <div className="flex items-center space-x-4 bg-beige p-3 rounded-lg border border-hockey-blue/20">
              <span className="font-mono text-hockey-blue font-bold w-16">GD: 03</span>
              <input 
                placeholder="What does 3 represent?"
                className="bg-transparent border-b border-zinc-700 flex-1 outline-none text-sm py-1 focus:border-varsity-cream transition-colors"
                onChange={(e) => setAnswers({...answers, gd: e.target.value})}
              />
            </div>

            {/* T: 04 Slot */}
            <div className="flex items-center space-x-4 bg-beige p-3 rounded-lg border border-hockey-blue/20">
              <span className="font-mono text-hockey-blue font-bold w-16">T: 04</span>
              <input 
                placeholder="What does 4 represent?"
                className="bg-transparent border-b border-zinc-700 flex-1 outline-none text-sm py-1 focus:border-varsity-cream transition-colors"
                onChange={(e) => setAnswers({...answers, t: e.target.value})}
              />
            </div>

            {/* E: ?? Slot */}
            <div className="flex items-center space-x-4 bg-beige p-3 rounded-lg border border-hockey-blue/20">
              <span className="font-mono text-hockey-blue font-bold w-16">E: ??</span>
              <input 
                type="number"
                placeholder="Estimate number of events"
                className="bg-transparent border-b border-zinc-700 flex-1 outline-none text-sm py-1 focus:border-varsity-cream transition-colors"
                onChange={(e) => setAnswers({...answers, e: e.target.value})}
              />
            </div>

            {/* C: 01 Slot */}
            <div className="flex items-center space-x-4 bg-beige p-3 rounded-lg border border-hockey-blue/20">
              <span className="font-mono text-hockey-blue font-bold w-16">C: 01</span>
              <input 
                placeholder="What does 1 represent?"
                className="bg-transparent border-b border-zinc-700 flex-1 outline-none text-sm py-1 focus:border-varsity-cream transition-colors"
                onChange={(e) => setAnswers({...answers, c: e.target.value})}
              />
            </div>

            <button 
              onClick={handleVerify}
              className="w-full bg-hockey-blue text-black font-bold py-4 rounded-lg active:scale-95 transition-all mt-4 shadow-lg shadow-hockey-blue/20"
            >
              INITIALIZE DECODING
            </button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <div className="bg-varsity-cream text-zinc-950 p-8 rounded-2xl shadow-2xl">
              <h2 className="font-serif text-2xl font-bold mb-4">ACCESS GRANTED</h2>
              <div className="space-y-4 text-xs uppercase tracking-widest text-left">
                <p><strong>MISSION:</strong> Consider this the official Training Camp for the Big Game. 
                     We are trading the ice for the field for a 72 hour Sports Day residency. 
                        We've found our "Line One" for life, now it's time to see who takes the Bach Cup! </p>
                <p><strong>ROSTER:</strong> You have been scouted for your elite energy and locker room presence. 
                4 Exclusive Teams will be drafted at the Opening Faceoff.
                 Your colours and captain will be revelead upon arrival.</p>
                <p><strong>THE SERIES:</strong>From the first whistle to the King's Court, every point counts toward the championship.
                This </p>
                <p className="pt-4 border-t border-zinc-300"><strong>ESTIMATE LOGGED:</strong> {answers.e} events predicted.</p>
              </div>
            </div>
            <p className="text-xs text-zinc-500 italic">"Before we walk down the aisle, we're tearing up the field. We'll see you the puck drop"</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Link href="/" className=" py-8 text-[10px] uppercase tracking-[0.3em] opacity-40">
        Return to Faceoff
      </Link>
    </div>
  );
}