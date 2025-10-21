import HeroSection from '@/components/HeroSection'
import KeyHighlights from '@/components/KeyHighlights'
import HowItWorks from '@/components/HowItWorks'
import TechnologySection from '@/components/TechnologySection'
import ComplianceSection from '@/components/ComplianceSection'
import ResultsSection from '@/components/ResultsSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0F5FF]">
      <HeroSection />
      <KeyHighlights />
      <HowItWorks />
      <TechnologySection />
      <ComplianceSection />
      <ResultsSection />
      <FooterSection />
    </main>
  )
}
