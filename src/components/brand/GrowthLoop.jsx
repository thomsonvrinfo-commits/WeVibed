import React from "react";
import { LogoInfinity } from "@/components/brand/Logo";

const STEPS = [
  { n: "01", label: "Built" },
  { n: "02", label: "Used" },
  { n: "03", label: "Measured" },
  { n: "04", label: "Improved" },
  { n: "05", label: "Expanded" },
];

const R = 145;
const C = 200;
const PERIOD = 16;
const positions = STEPS.map((_, i) => {
  const a = (i * (360 / 5) - 90) * (Math.PI / 180);
  return {
    left: (C + R * Math.cos(a)) / 4,
    top: (C + R * Math.sin(a)) / 4,
  };
});
const CIRCLE_PATH = `M ${C},${C - R} A ${R},${R} 0 0 1 ${C},${C + R} A ${R},${R} 0 0 1 ${C},${C - R}`;

export default function GrowthLoop({ className }) {
  return (
    <div className={`relative aspect-square w-full max-w-[460px] mx-auto ${className || ""}`}>
      <style>{`
        @keyframes gl-pulse {
          0% { opacity: 0.15; transform: scale(1); }
          3% { opacity: 0.9; transform: scale(1.15); }
          10% { opacity: 0.4; transform: scale(1.05); }
          20% { opacity: 0.15; transform: scale(1); }
          100% { opacity: 0.15; transform: scale(1); }
        }
        .gl-node-glow {
          animation: gl-pulse ${PERIOD}s linear infinite;
          transform-origin: center;
          will-change: opacity, transform;
        }
        @keyframes gl-dot-fade { from { opacity: 0; } to { opacity: 1; } }
        .gl-dot-group { animation: gl-dot-fade .6s ease both; }
      `}</style>

      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" fill="none" aria-hidden="true">
        <defs>
          <filter id="gl-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <circle cx={C} cy={C} r={R} stroke="rgba(245,243,239,0.1)" strokeWidth="1.5" strokeDasharray="3 6" />
        <g className="gl-dot-group">
          <circle r="9" fill="#E8A04A" opacity="0.35" filter="url(#gl-blur)">
            <animateMotion dur={`${PERIOD}s`} repeatCount="indefinite" path={CIRCLE_PATH} rotate="0" />
          </circle>
          <circle r="4" fill="#F5F3EF">
            <animateMotion dur={`${PERIOD}s`} repeatCount="indefinite" path={CIRCLE_PATH} rotate="0" />
          </circle>
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <LogoInfinity size={64} className="drop-shadow-[0_0_16px_rgba(232,160,74,0.3)]" />
      </div>

      {STEPS.map((s, i) => (
        <div
          key={s.label}
          className="absolute z-20"
          style={{ left: `${positions[i].left}%`, top: `${positions[i].top}%`, transform: "translate(-50%,-50%)" }}
        >
          <div className="relative flex flex-col items-center">
            <div
              className="gl-node-glow absolute rounded-full"
              style={{
                width: 52, height: 52,
                background: "radial-gradient(circle, rgba(232,160,74,0.4), transparent 65%)",
                animationDelay: `${i * (PERIOD / 5)}s`,
                top: -26, left: -26,
              }}
            />
            <div className="relative h-11 w-11 rounded-full glass-strong flex items-center justify-center border border-foreground/10">
              <span className="text-[9px] font-mono font-bold text-primary">{s.n}</span>
            </div>
            <span className="mt-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-muted-foreground whitespace-nowrap">
              {s.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}