'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InvitationCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      {/* - w-full: takes up full width of the container
          - max-w-[min(90vw,400px)]: ensures it never gets too big on desktop but stays large on mobile
          - aspect-[1/1.41]: ensures the ratio matches your Canva export 
      */}
      <div 
        className="relative w-full max-w-[min(90vw,400px)] aspect-[1/1.41] cursor-pointer [perspective:1500px]"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 200, damping: 25 }}
          className="w-full h-full relative [transform-style:preserve-3d]"
        >
          {/* FRONT FACE: Page 1 SVG */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl shadow-2xl overflow-hidden bg-varsity-cream ring-1 ring-black/5">
            <img 
              src="/invite_sideone.svg" 
              alt="The Faceoff Society Front" 
              className="w-full h-full object-fill" 
            />
            
            {/* INVISIBLE OVERLAY FOR THE EASTER EGG LINK */}
            <Link 
              href="/easteregg" 
              onClick={(e) => e.stopPropagation()} 
              className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[70%] h-[8%] z-20"
            >
              <span className="sr-only">Enter Guessing Game</span>
            </Link>
          </div>

          {/* BACK FACE: Page 2 SVG */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl shadow-2xl overflow-hidden bg-varsity-cream ring-1 ring-black/5">
            <img 
              src="/invite_sidetwo.svg" 
              alt="The Scouting Report Back" 
              className="w-full h-full object-fill"
            />
          </div>
        </motion.div>
      </div>

      <p className="mt-8 text-zinc-500 text-[11px] uppercase tracking-[0.2em] font-sans opacity-60">
        {isFlipped ? "Tap to view cover" : "Tap to open report"}
      </p>
    </div>
    );
}