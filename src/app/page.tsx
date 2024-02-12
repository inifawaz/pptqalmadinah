import AdvantageSection from "@/components/advantage-section";
import ConsiderationSection from "@/components/consideration-section";
import CtaSection from "@/components/cta-section";
import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import TeachersSection from "@/components/teachers-section";
import TestimonySection from "@/components/testimony-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AdvantageSection />
      <ConsiderationSection />
      <TeachersSection />
      <TestimonySection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
