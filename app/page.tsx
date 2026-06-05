import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import UpcomingMeetingsSection from "@/components/sections/UpcomingMeetingsSection";
import ParticipateSection from "@/components/sections/ParticipateSection";
import NewsSection from "@/components/sections/NewsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import InstitutionalTrustSection from "@/components/sections/InstitutionalTrustSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Acción por los Derechos Fundamentales, A.C. — Asociación civil apartidista en Tijuana, Baja California. Participación ciudadana, formación cívica y defensa de derechos fundamentales.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <WhatWeDoSection />
      <ProgramsSection />
      <UpcomingMeetingsSection />
      <ParticipateSection />
      <NewsSection />
      <CommunitySection />
      <InstitutionalTrustSection />
      <FaqSection />
      <CtaSection />
      <ContactFormSection />
    </>
  );
}
