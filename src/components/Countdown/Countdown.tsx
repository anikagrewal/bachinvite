'use client';
import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null); // Time is up!
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return <div className="text-league-gold font-bold uppercase tracking-widest animate-pulse">Location Unlocked</div>;

  return (
    <div className="flex flex-col items-center mb-8">
      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 font-sans">Location Intel Released In</p>
      <div className="flex space-x-4 font-serif text-varsity-cream">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{timeLeft.days}</span>
          <span className="text-[8px] uppercase tracking-tighter opacity-50">Days</span>
        </div>
        <span className="text-2xl opacity-30">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-[8px] uppercase tracking-tighter opacity-50">Hrs</span>
        </div>
        <span className="text-2xl opacity-30">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-[8px] uppercase tracking-tighter opacity-50">Min</span>
        </div>
        <span className="text-2xl opacity-30">:</span>
        <div className="flex flex-col items-center w-8">
          <span className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-[8px] uppercase tracking-tighter opacity-50">Sec</span>
        </div>
      </div>
    </div>
  );
}