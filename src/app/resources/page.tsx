'use client';

// Metadata: This page inherits SEO metadata from layout.tsx with title "Resources | LetRevenueFlow"
// Description: "Free B2B revenue templates, guides, and frameworks. Download checklists, audit templates, and benchmark guides to optimize your pipeline generation."

import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';
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

export default function Resources() {
  const [resourcesNewsletterSubmitted, setResourcesNewsletterSubmitted] = useState(false);
  const [resourcesNewsletterLoading, setResourcesNewsletterLoading] = useState(false);
  const resourcesNewsletterFormRef = useRef<HTMLFormElement>(null);

  const handleResourcesNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResourcesNewsletterLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    try {
      const response = await fetch('https://formsubmit.co/ajax/rmmittal@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: 'New Resources Newsletter Subscription from LetRevenueFlow',
        }),
      });

      if (response.ok) {
        setResourcesNewsletterSubmitted(true);
        if (resourcesNewsletterFormRef.current) {
          resourcesNewsletterFormRef.current.reset();
        }
        setTimeout(() => setResourcesNewsletterSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
    } finally {
      setResourcesNewsletterLoading(false);
    }
  };

  const resources = [
    {
      id: 1,
      title: 'Outbound Readiness Checklist',
      description:
        'A comprehensive checklist to ensure your team and strategy are ready to launch a successful outbound motion. Covers ICP definition, messaging, list building, tools, and KPIs.',
      category: 'Strategy',
      format: 'PDF Checklist',
      icon: FileText,
    },
    {
      id: 2,
      title: 'SaaS Pipeline Leak Audit Template',
      description:
        'Identify where your SaaS pipeline is leaking. This template helps you analyze each stage of your funnel and pinpoint where qualified opportunities are slipping away.',
      category: 'Analysis',
      format: 'Google Sheet',
      icon: FileText,
    },
    {
      id: 3,
      title: 'B2B Appointment Setting Benchmark Guide',
      description:
        'Industry benchmarks and best practices for appointment setting. Understand typical response rates, meeting rates, and show rates so you can benchmark your performance.',
      category: 'Benchmarks',
      format: 'PDF Guide',
      icon: FileText,
    },
    {
      id: 4,
      title: 'Cold Outreach Messaging Scorecard',
      description:
        'Evaluate and improve your cold outreach messaging. This scorecard breaks down what makes an effective cold email and helps you test and iterate on your message.',
      category: 'Messaging',
      format: 'PDF Worksheet',
      icon: FileText,
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-12 md:pb-24">
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Resources for B2B Revenue Teams
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              Free templates, guides, and frameworks to help you optimize your pipeline generation and revenue operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.id}
                  variants={itemVariants}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow hover:border-electric-400"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-electric-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-electric-600" />
                    </div>
                    <span className="px-3 py-1 bg-navy-100 text-navy-700 text-xs font-semibold rounded-full">
                      {resource.format}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-3">{resource.title}</h3>

                  <p className="text-navy-700 leading-relaxed mb-6">{resource.description}</p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <span className="text-sm font-semibold text-electric-600">
                      {resource.category}
                    </span>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors text-sm">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {resourcesNewsletterSubmitted ? (
              <div className="flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-electric-600 mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  You're Subscribed!
                </h2>
                <p className="text-lg text-navy-600">
                  Thanks for subscribing. New resources will be sent to your inbox.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Get New Resources
                </h2>
                <p className="text-lg text-navy-600 mb-10">
                  We release new templates, guides, and frameworks regularly. Subscribe to get them delivered to your inbox.
                </p>

                <form ref={resourcesNewsletterFormRef} onSubmit={handleResourcesNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    name="email"
                    placeholder="your@company.com"
                    className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600"
                    required
                  />
                  <button
                    type="submit"
                    disabled={resourcesNewsletterLoading}
                    className="px-6 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors whitespace-nowrap disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {resourcesNewsletterLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                <p className="text-sm text-navy-500 mt-4">
                  We'll send you resources once a week. No spam, ever. You can unsubscribe anytime.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Resource Categories Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              How to Use These Resources
            </h2>
            <p className="text-xl text-navy-600">
              Each resource is designed to solve a specific revenue challenge
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-navy-50 rounded-lg p-8 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-3">
                Readiness Checklist
              </h3>
              <p className="text-navy-700 mb-4 leading-relaxed">
                Use this before launching your outbound motion to ensure everything is in place: targeting strategy, messaging, tools, and KPIs.
              </p>
              <ul className="space-y-2 text-sm text-navy-700">
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Define your ICP</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Create your messaging</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Set up your tools</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-navy-50 rounded-lg p-8 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-3">
                Pipeline Leak Audit
              </h3>
              <p className="text-navy-700 mb-4 leading-relaxed">
                Identify where your best opportunities are being lost. Use this template to analyze each stage of your funnel and find optimization opportunities.
              </p>
              <ul className="space-y-2 text-sm text-navy-700">
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Track conversion rates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Find bottlenecks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Plan improvements</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-navy-50 rounded-lg p-8 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-3">
                Benchmark Guide
              </h3>
              <p className="text-navy-700 mb-4 leading-relaxed">
                Understand industry standards for appointment setting. Compare your metrics against typical benchmarks to identify areas for improvement.
              </p>
              <ul className="space-y-2 text-sm text-navy-700">
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Email response rates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Meeting booking rates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Show rates</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-navy-50 rounded-lg p-8 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-3">
                Messaging Scorecard
              </h3>
              <p className="text-navy-700 mb-4 leading-relaxed">
                Evaluate your cold outreach messaging against best practices. Test different versions and measure which approaches get the best response rates.
              </p>
              <ul className="space-y-2 text-sm text-navy-700">
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Subject line testing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>Value proposition clarity</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-600">✓</span>
                  <span>CTA effectiveness</span>
                </li>
              </ul>
            </motion.div>
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
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-navy-900 mb-3">
                  Are these resources really free?
                </h3>
                <p className="text-navy-700">
                  Yes. All of our resources are free to download. We believe in sharing knowledge to help B2B teams improve their revenue operations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-navy-900 mb-3">
                  Can I use these resources at my company?
                </h3>
                <p className="text-navy-700">
                  Absolutely. Feel free to customize and use these resources for your own use. We only ask that you don't redistribute them as your own or claim ownership.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-navy-900 mb-3">
                  Will you be adding more resources?
                </h3>
                <p className="text-navy-700">
                  Yes. We regularly create new templates and guides based on challenges we see our clients facing. Subscribe to our newsletter to get notified when new resources are available.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-navy-900 mb-3">
                  Do you offer customized versions?
                </h3>
                <p className="text-navy-700">
                  For Scale plan clients, we can customize these resources for your specific business, industry, or use case. Contact us to learn more.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Put These Insights Into Action?"
        description="Let's talk about how LetRevenueFlow can help you implement these strategies and build a predictable revenue pipeline."
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Get in Touch"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
