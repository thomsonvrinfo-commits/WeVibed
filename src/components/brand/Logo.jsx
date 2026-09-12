import React, { useId } from "react";
import { cn } from "@/lib/utils";

const INFINITY_PATH = "M 60,30 C 60,6 24,6 24,30 C 24,54 60,54 60,30 C 60,6 96,6 96,30 C 96,54 60,54 60,30";
const NODES = [[30, 16], [30, 44], [90, 16], [90, 44]];

export function LogoInfinity({ size = 40, className, animated = false }) {
  const id = useId().replace(/:/g, "");
  return (
    <div className={cn("wv-logo relative inline-flex", className)}>
      <svg viewBox="0 0 120 60" width={size} height={size * 0.5} fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F5F3EF" />
            <stop offset="100%" stopColor="#E8A04A" />
          </linearGradient>
        </defs>
        <path
          d={INFINITY_PATH}
          stroke={`url(#g-${id})`}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {NODES.map(([cx, cy], i) => (
          <circle
            key={i}
            className="wv-node"
            cx={cx}
            cy={cy}
            r="5"
            fill="#E8A04A"
            style={{ animationDelay: `${i * 0.16}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

export function Logo({ variant = "full", className, iconSize }) {
  if (variant === "icon") {
    return <LogoInfinity size={iconSize || 36} className={className} animated />;
  }

  if (variant === "compact") {
    return (
      <div className={cn("inline-flex items-center gap-2.5", className)}>
        <LogoInfinity size={iconSize || 28} animated />
        <span className="text-base font-bold tracking-[-0.03em] text-foreground">WeVibed</span>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <LogoInfinity size={iconSize || 52} animated />
      <div className="mt-3 text-xl font-bold tracking-[-0.03em] text-foreground">WeVibed</div>
      <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-primary">
        Digital Business Systems
      </div>
    </div>
  );
}

export default Logo;