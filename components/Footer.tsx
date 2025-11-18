'use client';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-forest text-forest-foreground py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* -------- ABOUT -------- */}
        <div>
          <h3 className="text-xl font-semibold text-white">About ClaimNow AI</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            ClaimNow AI provides the most advanced AI-powered platform for medical 
            claims automation. We help hospitals, TPAs, and insurance partners 
            streamline workflows, reduce manual effort, and achieve accuracy above 99%.
          </p>
        </div>

        {/* -------- COMPANY (Navigation Links) -------- */}
        <div>
          <h3 className="text-xl font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer text-left"
              >
                How It Works
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('features')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer text-left"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('integrations')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer text-left"
              >
                Integrations
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('trusted')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer text-left"
              >
                Trust & Security
              </button>
            </li>

            <li className="pt-3 text-white/70">
              IN: +91 70205 29191
            </li>
          </ul>
        </div>

        {/* -------- RESOURCES -------- */}
        <div>
          <h3 className="text-xl font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <button
                onClick={() => scrollToSection('metrics')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer text-left"
              >
                Metrics
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer text-left"
              >
                FAQ
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer text-left"
              >
                Contact Us
              </button>
            </li>
            <li>
              <a
                href="https://blessingsofttech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors inline-block"
              >
                Partners
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer text-left"
              >
                Home
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* -------- BOTTOM -------- */}
      <div className="mt-12 border-t border-white/20 pt-6 px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} ClaimNow AI — All rights reserved.
          </p>
          
          {/* Blessing Softtech Logo & Link */}
          <a
            href="https://blessingsofttech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span>Powered by</span>
            <img 
              src="/BST-logo.png" 
              alt="Blessing Softtech" 
              className="h-8 w-auto"
            />
            <p>Blessing Softtech</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
