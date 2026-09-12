import React, { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Living Material — WeVibed's signature interaction.
 * Light moving beneath engineered glass. Physics-driven, restrained,
 * reserved for high-intent moments. Never flashy.
 */
export function LivingMaterial({ children, className, intensity = 340, as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--lm-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--lm-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      className={cn("living-material", className)}
      style={{ "--lm-size": `${intensity}px` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default LivingMaterial;