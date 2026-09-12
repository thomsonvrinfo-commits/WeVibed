import React from "react";
import LivingSystem from "@/components/home/LivingSystem";
import { PrimaryCTA, SecondaryCTA } from "@/components/primitives";
import Reveal from "@/components/Reveal";

export default function Hook() {
  return (
    <>
      <LivingSystem />
      <Reveal className="relative py-16 md:py-20 text-center px-5">
        <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-8">
          WeVibed builds connected digital systems around real businesses.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PrimaryCTA to="/start">Build My Business System</PrimaryCTA>
          <SecondaryCTA to="/work">Explore Our Work</SecondaryCTA>
        </div>
      </Reveal>
    </>
  );
}