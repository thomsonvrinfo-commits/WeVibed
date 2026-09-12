import React from "react";
import PageLayout from "@/components/PageLayout";
import Hook from "@/components/home/Hook";
import ExperienceIdea from "@/components/home/ExperienceIdea";
import Problem from "@/components/home/Problem";
import FlagshipCaseStudy from "@/components/home/FlagshipCaseStudy";
import PortfolioExplorer from "@/components/home/PortfolioExplorer";
import SystemsOS from "@/components/home/SystemsOS";
import GrowthLoopSection from "@/components/home/GrowthLoopSection";
import WhyWeVibed from "@/components/home/WhyWeVibed";
import WhoWeBuildFor from "@/components/home/WhoWeBuildFor";
import CommercialEntry from "@/components/home/CommercialEntry";
import HowToStart from "@/components/home/HowToStart";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <PageLayout>
      <Hook />
      <ExperienceIdea />
      <Problem />
      <FlagshipCaseStudy />
      <PortfolioExplorer />
      <SystemsOS />
      <GrowthLoopSection />
      <WhyWeVibed />
      <WhoWeBuildFor />
      <CommercialEntry />
      <HowToStart />
      <FinalCTA />
    </PageLayout>
  );
}