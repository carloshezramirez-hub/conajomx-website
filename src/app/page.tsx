import { HeroSection } from "@/components/sections/hero-section"
import { AreasSection } from "@/components/sections/areas-section"
import { AboutSection } from "@/components/sections/about-section"
import { GlobeSection } from "@/components/sections/globe-section"
import { AgendaSection } from "@/components/sections/agenda-section"
import { LeadershipSection } from "@/components/sections/leadership-section"
import { CNEMSection } from "@/components/sections/cnem-section"
import { SpainSection } from "@/components/sections/spain-section"
import { LegislatorsSection } from "@/components/sections/legislators-section"
import { NewsSection } from "@/components/sections/news-section"
import { AnniversaryCountdown } from "@/components/sections/anniversary-countdown"
import { AffiliationForm } from "@/components/sections/affiliation-form"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AreasSection />
      <AboutSection />
      <GlobeSection />
      <AgendaSection />
      <LeadershipSection />
      <CNEMSection />
      <SpainSection />
      <LegislatorsSection />
      <NewsSection />
      <AnniversaryCountdown />
      <AffiliationForm />
      <ContactSection />
    </>
  )
}
