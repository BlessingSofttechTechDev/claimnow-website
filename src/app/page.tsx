import HeroSection from '@/components/HeroSection'
import KeyHighlights from '@/components/KeyHighlights'
import HowItWorks from '@/components/HowItWorks'
import TechnologySection from '@/components/TechnologySection'
import ComplianceSection from '@/components/ComplianceSection'
import ResultsSection from '@/components/ResultsSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0F5FF] relative">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23C9DC69' fill-opacity='0.02'><circle cx='30' cy='30' r='1'/></g></g></svg>")`
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <KeyHighlights />
        <HowItWorks />
        <TechnologySection />
        <ComplianceSection />
        <ResultsSection />
        <FooterSection />
      </div>
    </main>
  )
}
