'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface IndustryTab {
  name: string;
  icon: string;
  painPoints: string[];
  offerFit: string;
  cta: {
    text: string;
    href: string;
  };
}

const industries: IndustryTab[] = [
  {
    name: 'SaaS',
    icon: '🚀',
    painPoints: [
      'Long sales cycles with multiple stakeholders',
      'High CAC, need for consistent qualified pipeline',
      'Competitive landscape, hard to stand out',
      'Need for technical buyer engagement early',
    ],
    offerFit:
      'We specialize in building ICP-focused campaigns that reach technical buyers and economic buyers simultaneously, reducing sales cycles and maximizing conversion rates.',
    cta: {
      text: 'Learn SaaS Solutions',
      href: '/industries/saas',
    },
  },
  {
    name: 'IT Services',
    icon: '💻',
    painPoints: [
      'Highly competitive bid landscape',
      'Decision makers are hard to reach',
      'Need for account-based approach for enterprise',
      'Building proof-of-concept requirements early',
    ],
    offerFit:
      'Our ABM strategies help you penetrate enterprise accounts with personalized outreach, building relationships with key decision-makers before procurement cycles start.',
    cta: {
      text: 'Learn IT Services Solutions',
      href: '/industries/it-services',
    },
  },
  {
    name: 'Professional Services',
    icon: '📊',
    painPoints: [
      'Relationship-driven business, trust is critical',
      'Complex decision-making processes',
      'Need for subject matter expert positioning',
      'Limited pipeline visibility and predictability',
    ],
    offerFit:
      'We build thought leadership campaigns paired with warm introductions that position your experts as trusted advisors, creating pipeline that converts at higher rates.',
    cta: {
      text: 'Learn Professional Services Solutions',
      href: '/industries/professional-services',
    },
  },
];

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Different industries have different challenges. We tailor our approach to your unique
            market dynamics.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-3 mb-8 justify-center flex-wrap">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === index
                  ? 'bg-electric-600 text-white shadow-lg'
                  : 'bg-gray-100 text-navy-900 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{industry.icon}</span>
              {industry.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg border border-gray-200 p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Pain Points */}
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-6">Common Pain Points</h3>
              <ul className="space-y-4">
                {industries[activeTab].painPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-electric-600 font-bold flex-shrink-0">•</span>
                    <span className="text-navy-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offer Fit */}
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-6">How We Help</h3>
              <p className="text-navy-700 leading-relaxed mb-8">
                {industries[activeTab].offerFit}
              </p>

              <Link
                href={industries[activeTab].cta.href}
                className="inline-block px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors"
              >
                {industries[activeTab].cta.text}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
