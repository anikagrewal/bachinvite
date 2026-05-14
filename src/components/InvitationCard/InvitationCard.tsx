'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InvitationCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 bg:light ">
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
          {/* SUBTLE INTERACTIVE FRAME - Positioned over bottom right stats */}
  <div className="absolute bottom-[4%] right-[2%] w-[50%] h-[6%] pointer-events-none flex items-center justify-center">
    {/* - border-varsity-cream/20: creates a very faint, almost invisible edge 
        - shadow-[0_0_10px_rgba(255,255,255,0.4)]: adds a soft "lit from within" glow
    */}
    <div className="w-full h-full border border-white/50 rounded-md animate-[pulse_3s_infinite] shadow-[0_0_50px_rgba(255,255,255,0.2)]">
    </div>
  </div>

  {/* INVISIBLE OVERLAY LINK - Matches the position of the frame */}
  <Link 
    href="/easteregg" 
    onClick={(e) => e.stopPropagation()} 
    className="absolute bottom-[4%] right-[4%] w-[48%] h-[8%] z-20 cursor-pointer"
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
        {isFlipped ? "Tap on Report" : "Tap on Invite"}
      </p>
        {/* Place this right below your <InvitationCard /> or the "Tap on Invite" text */}
<div className="mt-12 flex flex-col items-center space-y-4">
  <a 
    href="/BACH.pdf" // Make sure your PDF is in the /public folder
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-varsity-cream/60 hover:text-varsity-cream transition-colors group"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="14" height="14" 
      viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      className="group-hover:translate-y-0.5 transition-transform"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
    <span>Download Official Intel</span>
  </a>

  <p className="text-[9px] text-varsity-cream/30 italic">
    For high-resolution scouting and offline access.
  </p>
</div>
    </div>
    );
}