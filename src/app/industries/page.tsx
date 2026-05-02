'use client';

// Metadata: This page inherits SEO metadata from layout.tsx with title "Industries | LetRevenueFlow"
// Description: "Industry-specific B2B lead generation solutions for SaaS, IT services, and agencies. Proven strategies to accelerate pipeline growth in your market."

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  Briefcase,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
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

const industries = [
  {
    id: 'saas',
    title: 'SaaS Companies',
    subtitle: 'Pipeline Growth for Recurring Revenue',
    description: 'Drive qualified demos, accelerate SQLs, and build predictable pipeline with targeted lead generation designed for SaaS sales cycles.',
    icon: Code2,
    href: '/industries/saas',
    metrics: ['Increased demo bookings', 'Improved SQL conversion', 'Faster sales cycles'],
    color: 'blue',
  },
  {
    id: 'it-services',
    title: 'IT Services Firms',
    subtitle: 'Enterprise Outreach & Decision-Maker Access',
    description: 'Access C-level decision-makers and technical buyers. Build enterprise pipeline with consultative prospecting and relationship mapping.',
    icon: Briefcase,
    href: '/industries/it-services',
    metrics: ['Higher engagement rates', 'Enterprise-tier meetings', 'Executive access'],
    color: 'indigo',
  },
  {
    id: 'agencies',
    title: 'Agencies & Consultancies',
    subtitle: 'Partnership Pipeline & Growth Outsourcing',
    description: 'Scale your business development team. Generate qualified partner and client pipeline while you focus on delivery excellence.',
    icon: Zap,
    href: '/industries/agencies',
    metrics: ['Expanded partner pipeline', 'Outsourced SDR support', 'Faster appointment cycles'],
    color: 'cyan',
  },
];

const commonChallenges = [
  {
    title: 'Pipeline Predictability',
    description: 'Inconsistent lead quality and unpredictable sales cycles create revenue volatility and missed quota attainment.',
    icon: TrendingUp,
  },
  {
    title: 'Decision-Maker Access',
    description: 'Reaching qualified decision-makers is time-consuming. Cold outreach gets low engagement and falls flat at the executive level.',
    icon: Briefcase,
  },
  {
    title: 'Sales Team Bandwidth',
    description: 'Your reps are buried in prospecting instead of closing. Building pipeline diverts focus from high-value selling activities.',
    icon: Zap,
  },
  {
    title: 'Outbound Expertise',
    description: 'Effective B2B outbound requires deep expertise, testing, and iteration. Building in-house capability is expensive and slow.',
    icon: Code2,
  },
];

export default function Industries() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-electric-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-electric-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pipeline Solutions Built for Your Industry
            </h1>
            <p className="text-xl text-navy-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you're scaling SaaS, landing enterprise IT services, or building agency partnerships—we have industry-specific strategies proven to accelerate your revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* Card Header */}
                  <div className="h-2 bg-gradient-to-r from-electric-600 to-electric-400"></div>

                  <div className="p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-block p-3 bg-electric-50 rounded-lg">
                        <Icon className="w-7 h-7 text-electric-600" />
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-navy-900 mb-2">
                      {industry.title}
                    </h2>
                    <p className="text-electric-600 font-medium text-sm mb-4">
                      {industry.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-navy-700 text-sm leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-2 mb-8 pb-8 border-b border-gray-100">
                      {industry.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-navy-700">{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <Link
                      href={industry.href}
                      className="inline-flex items-center gap-2 text-electric-600 font-medium hover:text-electric-700 transition-colors group"
                    >
                      Explore {industry.title}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 md:py-24 bg-navy-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Challenges Every B2B Business Faces
            </h2>
            <p className="text-lg text-navy-700">
              Regardless of industry, these revenue challenges are universal—and solvable.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {commonChallenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-8 border border-gray-200 hover:border-electric-300 transition-colors"
                >
                  <div className="mb-4">
                    <div className="inline-block p-3 bg-electric-50 rounded-lg">
                      <Icon className="w-6 h-6 text-electric-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-navy-700 leading-relaxed">
                    {challenge.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Build Your Industry-Winning Pipeline?"
        description="Start with a no-pressure consultation to understand your challenges and explore the best strategy for your business."
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </main>
  );
}
