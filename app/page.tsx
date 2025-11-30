import { Hero } from "@/components/Hero";
import { MetricsSection } from "@/components/MetricsSection";
import { TrustedSection } from "@/components/TrustedSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SideNav } from "@/components/SideNav";
import { FloatingDemoButton } from "@/components/FloatingDemoButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SideNav />
      <FloatingDemoButton />
      
      <main>
        <header id="hero">
          <Hero />
        </header>
        
        <section id="metrics" aria-label="Performance Metrics">
          <MetricsSection />
        </section>
        
        <section id="how-it-works" aria-label="How ClaimNow AI Works">
          <HowItWorksSection />
        </section>
        
        <section id="features" aria-label="ClaimNow AI Features">
          <FeaturesSection />
        </section>
        
        <section id="integrations" aria-label="Integrations and Partnerships">
          <IntegrationsSection />
        </section>
        
        <section id="trusted" aria-label="Trusted by Leading Organizations">
          <TrustedSection />
        </section>
        
        <section id="faq" aria-label="Frequently Asked Questions">
          <FAQSection />
        </section>
        
        <section id="contact" aria-label="Contact Us">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
