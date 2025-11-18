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
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="metrics">
        <MetricsSection />
      </div>
      
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      
      <div id="features">
        <FeaturesSection />
      </div>
      
      <div id="integrations">
        <IntegrationsSection />
      </div>
      
      <div id="trusted">
        <TrustedSection />
      </div>
      
      <div id="faq">
        <FAQSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
}
