'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, easing: 'easeOut' },
  },
};

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'For early-stage companies getting started with outbound.',
      features: [
        { name: '1 Outbound Channel', included: true },
        { name: '500 Prospects/Month', included: true },
        { name: 'Weekly Reporting', included: true },
        { name: 'Email Support', included: true },
        { name: 'CRM Integration', included: false },
        { name: 'Dedicated SDR', included: false },
        { name: 'Strategy Calls', included: false },
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$5,000',
      period: '/month',
      description: 'For scaling teams expanding their pipeline generation.',
      features: [
        { name: 'Multi-Channel Outbound', included: true },
        { name: '1,500 Prospects/Month', included: true },
        { name: 'Bi-Weekly Strategy Calls', included: true },
        { name: 'CRM Integration', included: true },
        { name: 'Dedicated SDR', included: true },
        { name: 'Weekly Reporting', included: true },
        { name: 'Priority Support', included: true },
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      period: 'pricing',
      description: 'Full outbound engine with unlimited capacity and support.',
      features: [
        { name: 'Unlimited Channels', included: true },
        { name: 'Custom Volume', included: true },
        { name: 'Daily Reporting & Dashboards', included: true },
        { name: 'Multiple Dedicated SDRs', included: true },
        { name: 'Full Pipeline Management', included: true },
        { name: 'Direct Leadership Access', included: true },
        { name: 'Custom SLAs', included: true },
      ],
      cta: 'Talk to Sales',
      highlighted: false,
    },
  ];

  const comparisonFeatures = [
    {
      category: 'Outreach',
      items: [
        { name: 'Email Outreach', starter: true, growth: true, scale: true },
        { name: 'LinkedIn Outreach', starter: false, growth: true, scale: true },
        { name: 'Phone Calling', starter: false, growth: true, scale: true },
        { name: 'Multi-Channel Sequences', starter: false, growth: true, scale: true },
      ],
    },
    {
      category: 'Pipeline Management',
      items: [
        { name: 'Lead Qualification', starter: true, growth: true, scale: true },
        { name: 'CRM Sync', starter: false, growth: true, scale: true },
        { name: 'Automated Follow-ups', starter: false, growth: true, scale: true },
        { name: 'Pipeline Reporting', starter: true, growth: true, scale: true },
      ],
    },
    {
      category: 'Support & Strategy',
      items: [
        { name: 'Monthly Strategy Review', starter: false, growth: true, scale: true },
        { name: 'Dedicated Account Manager', starter: false, growth: true, scale: true },
        { name: 'Direct Leadership Access', starter: false, growth: false, scale: true },
        { name: 'Bi-Weekly Optimization Calls', starter: false, growth: true, scale: true },
      ],
    },
  ];

  const faqItems = [
    {
      question: 'What if I need a custom volume between tiers?',
      answer:
        'No problem. We offer custom configurations at every level. Contact our sales team to discuss your specific needs and we\'ll create a plan that fits your goals and budget.',
    },
    {
      question: 'Is there a setup fee?',
      answer:
        'No hidden fees. Your monthly fee covers all service delivery, CRM integration, reporting, and support. Some clients opt for a separate strategy consultation ($2,000-$5,000) to accelerate onboarding.',
    },
    {
      question: 'What\'s the minimum commitment?',
      answer:
        'We recommend starting with a 30-day pilot to establish baseline metrics, validate quality, and refine targeting. Most clients move into 3-6 month engagements after the pilot.',
    },
    {
      question: 'Can I upgrade or downgrade during my contract?',
      answer:
        'Yes. We understand your needs may change. You can upgrade anytime. Downgrades require 30 days notice to adjust your account structure.',
    },
    {
      question: 'What metrics are included in reporting?',
      answer:
        'All plans include emails sent, open rates, response rates, qualified leads generated, cost per lead, and pipeline value created. Growth and Scale plans include deeper analytics on campaign performance and conversion funnels.',
    },
    {
      question: 'Do you offer a money-back guarantee?',
      answer:
        'We focus on long-term partnerships, not quick wins. If you\'re not seeing results after 60 days, we\'ll conduct a free strategy audit and adjust your approach at no additional cost.',
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 pb-12 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 z-0">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="1200" height="800" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transparent Engagement Models for Predictable Growth
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed">
              Choose the plan that fits your team size, goals, and growth stage. All plans include dedicated support and transparent reporting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-lg border-2 p-8 md:p-10 flex flex-col ${
                  tier.highlighted
                    ? 'border-electric-600 bg-electric-50 shadow-xl'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {tier.highlighted && (
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-electric-600 text-white text-sm font-bold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-navy-900 mb-2">{tier.name}</h3>
                <p className="text-navy-600 text-sm mb-6 min-h-[2.5rem]">{tier.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-navy-900">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-navy-600 font-medium">{tier.period}</span>
                    )}
                  </div>
                </div>

                <Link
                  href={tier.name === 'Scale' ? '/book-a-call' : '/contact'}
                  className={`w-full py-3 px-6 font-medium rounded-lg text-center transition-all mb-8 ${
                    tier.highlighted
                      ? 'bg-electric-600 text-white hover:bg-electric-700'
                      : 'border border-electric-600 text-electric-600 hover:bg-electric-50'
                  }`}
                >
                  {tier.cta}
                </Link>

                <div className="space-y-4 flex-grow">
                  <p className="font-semibold text-navy-900 text-sm">What's included:</p>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-electric-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={
                          feature.included ? 'text-navy-700' : 'text-gray-400'
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-navy-600">See exactly what's included in each plan</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200 bg-navy-50">
                  <th className="px-6 py-4 text-left font-bold text-navy-900">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-navy-900">Starter</th>
                  <th className="px-6 py-4 text-center font-bold text-navy-900">Growth</th>
                  <th className="px-6 py-4 text-center font-bold text-navy-900">Scale</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, catIdx) => (
                  <div key={catIdx}>
                    {category.items.map((item, itemIdx) => (
                      <tr
                        key={itemIdx}
                        className="border-b border-gray-200 hover:bg-navy-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-navy-900 font-medium">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.starter ? (
                            <Check className="w-5 h-5 text-electric-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.growth ? (
                            <Check className="w-5 h-5 text-electric-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.scale ? (
                            <Check className="w-5 h-5 text-electric-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                    {catIdx < comparisonFeatures.length - 1 && (
                      <tr>
                        <td colSpan={4} className="h-2 bg-gray-100" />
                      </tr>
                    )}
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Inquiry CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Need a Custom Outbound Engine?
            </h2>
            <p className="text-xl text-navy-600 mb-10 max-w-2xl mx-auto">
              Running a high-volume operation or need a fully custom solution? Our Scale plan can be tailored to your exact specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors shadow-lg"
              >
                Get a Custom Quote
              </Link>
              <Link
                href="/book-a-call"
                className="px-8 py-3 border border-electric-400 text-electric-600 font-medium rounded-lg hover:bg-navy-50 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Pricing Questions
            </h2>
            <p className="text-xl text-navy-600">
              Answers to common questions about pricing and our engagement model
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to Build Your Outbound Machine?"
        description="Let's talk about which plan fits your team and how we can help you build a predictable pipeline."
        primaryButtonText="Schedule a Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Get in Touch"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
