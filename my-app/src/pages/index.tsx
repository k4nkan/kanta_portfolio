import React from "react";
import { TopButton } from "@/components/TopPageComponent/TopButton";
import FirstView from "@/components/TopPageComponent/FirstView";
import About from "@/components/TopPageComponent/About";
import SkillsSection from "@/components/TopPageComponent/SkillsSection";
import ProductSection from "@/components/TopPageComponent/ProductSection";
import FooterSection from "@/components/TopPageComponent/FooterSection";

export default function Home() {
  return (
    <>
      <TopButton />
      <FirstView />
      <About />
      <SkillsSection />
      <ProductSection />
      <FooterSection />
    </>
  );
}
