'use client';

import { Cloud, Server, Shield, Zap } from "lucide-react";

export const IntegrationsSection = () => {
  const features = [
    {
      icon: Server,
      title: "On-Premise Deployment",
      description: "Complete control with traditional infrastructure deployment for maximum security and compliance"
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      description: "Turnkey cloud service with instant access to create, test, deploy, and manage applications"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-forest leading-tight mb-6">
            Adapt and comply with
            <span className="block text-green-800 mt-2">on-premise or on cloud</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            With ClaimNow, develop a claims processing capability that reflects your business 
            while supporting HIPAA compliance. Choose the deployment option that works best for you.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-800 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-green-800 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-forest mb-3 group-hover:text-green-800 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full border border-green-200">
            <Shield className="w-5 h-5 text-green-800" />
            <span className="text-green-800 font-medium">
              Enterprise-grade security and compliance built-in
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
