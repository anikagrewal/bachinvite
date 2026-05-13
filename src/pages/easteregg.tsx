'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Easteregg() {
  const [guess, setGuess] = useState('');
  const [tries, setTries] = useState(5);
  const [unlocked, setUnlocked] = useState(false);

  const handleCheck = () => {
    if (guess.toLowerCase().includes('sports day')) {
      setUnlocked(true);
    } else {
      setTries(t => Math.max(0, t - 1));
    }
  };

  return (
    <div className={'min-h-screen p-8 flex flex-col items-center text-varsity-cream bg-beige'}>
      <h2 className="font-serif text-2xl uppercase mb-8">Decode the Play</h2>
      
      {unlocked ? (
        <div className="text-center bg-hockey-blue/20 p-6 rounded-xl border border-hockey-blue">
          <h3 className="text-xl text-league-gold font-bold mb-4">PLAYBOOK DECODED</h3>
          <p>The Varsity Social Weekend: 4 Teams. 3 Days. 1 Champion.</p>
          <p className="mt-4 text-sm opacity-60 italic">Location revealed in April 2027.</p>
        </div>
      ) : (
        <div className="w-full max-w-sm space-y-4">
          <p className="text-center text-sm">Tries remaining: <span className="text-red-500 font-bold">{tries}</span></p>
          <input 
            className="w-full bg-beige border border-zinc-800 p-3 rounded text-center"
            placeholder="What is the theme?"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button 
            onClick={handleCheck}
            disabled={tries === 0}
            className="w-full bg-varsity-cream text-zinc-950 font-bold p-3 rounded"
          >
            SUBMIT GUESS
          </button>
        </div>
      )}

      <Link href="/" className="mt-12 text-xs opacity-50 underline">Back to Invitation</Link>
    </div>
  );
}