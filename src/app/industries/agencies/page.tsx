
'use client';

// Metadata: This page inherits SEO metadata from layout.tsx with title "Agencies & Consultancies Solutions | LetRevenueFlow"
// Description: "Partnership and client pipeline generation for agencies. Scale business development with outsourced lead generation and appointment setting."

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Zap,
  Users,
  CheckCircle,
  TrendingUp,
  Handshake,
  Clock,
  ArrowRight,
} from 'lucide-react';
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

const challenges = [
  {
    title: 'Business Development Takes Away From Delivery',
    description: 'Building new business takes time away from client work and delivery. Your best people should be closing deals and delivering results, not prospecting.',
    icon: Clock,
  },
  {
    title: 'Partnership Pipeline Is Unpredictable',
    description: 'Finding and nurturing agency partnerships is slow. Relationships take time, and deals slip when you\'re focused on delivering for existing clients.',
    icon: Handshake,
  },
  {
    title: 'Inconsistent Client Acquisition',
    description: 'Over-reliance on referrals and inbound creates feast-or-famine pipeline cycles. Building predictable outbound is resource-intensive.',
    icon: TrendingUp,
  },
  {
    title: 'High-Touch Sales Cycles Require Expertise',
    description: 'Agency sales require relationship-building, industry knowledge, and consultative selling—skills that take time to develop internally.',
    icon: Users,
  },
];

const solutions = [
  {
    title: 'Outsourced Business Development',
    description: 'We handle prospecting, outreach, and qualification—giving your team back time to focus on delivery and strategy.',
    icon: Users,
  },
  {
    title: 'Partnership Pipeline Building',
    description: 'Dedicated outreach to complementary agencies and reseller partners. Build relationships at scale without diverting your sales team.',
    icon: Handshake,
  },
  {
    title: 'Appointment-Ready Meetings',
    description: 'We qualify and schedule only high-fit client opportunities. Your team gets in-the-door meetings ready to close.',
    icon: Clock,
  },
];

const faqItems = [
  {
    question: 'How do you identify good partnership and client fit for agencies?',
    answer: 'We work with you to define your ideal partner and client profiles. We then research and target organizations that match those criteria, looking at industry, size, services offered, and growth stage.',
  },
  {
    question: 'What\'s the difference between partnership outreach and client outreach?',
    answer: 'Partnership outreach targets complementary agencies and resellers for referral relationships and co-selling opportunities. Client outreach targets companies that need your core services. We can handle both or either.',
  },
  {
    question: 'How do you handle outreach for different agency service types?',
    answer: 'We customize messaging and targeting based on your service offering—whether it\'s creative, digital strategy, marketing, tech development, etc. Each vertical has different buyer personas and pain points.',
  },
  {
    question: 'Can you handle both inbound and outbound, or just outbound?',
    answer: 'We focus on outbound prospecting and appointment setting. We work alongside your existing inbound efforts to create a balanced pipeline that\'s not dependent on any single source.',
  },
  {
    question: 'What metrics matter most for agency pipeline?',
    answer: 'For agencies, we focus on: meetings scheduled (quality, not just volume), average deal size, sales cycle length, and close rate. We report on pipeline value and opportunity quality, not just activity metrics.',
  },
];

export default function Agencies() {
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
              Growth Pipeline for Agencies and Consultancies
            </h1>
            <p className="text-xl text-navy-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build partnership and client pipelines without diverting your team from delivery. Outsourced business development that actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-a-call"
                className="px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors shadow-lg"
              >
                Schedule a Strategy Call
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-electric-400 text-electric-300 font-medium rounded-lg hover:bg-navy-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agency Challenges */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              The Agency Growth Challenge
            </h2>
            <p className="text-lg text-navy-700">
              Growth and delivery excellence are competing priorities—unless you outsource one of them.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-8 border border-gray-200 hover:border-electric-300 transition-colors"
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

      {/* How We Solve It */}
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
              Outsourced Growth That Works
            </h2>
            <p className="text-lg text-navy-700">
              Give your team back time to deliver amazing results. We handle business development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <div className="inline-block p-3 bg-electric-50 rounded-lg">
                      <Icon className="w-6 h-6 text-electric-600" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-navy-700 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-electric-50 to-blue-50 rounded-xl p-8 border border-electric-200"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-4">
              What Agencies Get With Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Qualified client pipeline on-demand',
                'Partnership and referral relationship building',
                'Time freed up for your team to focus on delivery',
                'Predictable, repeatable pipeline flow',
                'Industry-specific targeting and messaging',
                'Appointment-ready meetings (not just leads)',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-600 flex-shrink-0 mt-1" />
                  <span className="text-navy-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agency Case Studies */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Agency Success Stories
            </h2>
            <p className="text-lg text-navy-700">
              How agencies are scaling without stretching their teams.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-electric-50 to-blue-50 rounded-lg border border-electric-300 p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-2">Digital Marketing Agency Success</h3>
                <p className="text-navy-700 leading-relaxed mb-4">
                  Agency eliminated feast-and-famine pipeline cycles and stabilized cash flow by establishing predictable, outsourced business development.
                </p>
                <p className="text-sm font-medium text-electric-600">
                  Successfully scaled client acquisition without overextending internal resources.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-electric-50 to-blue-50 rounded-lg border border-electric-300 p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-2">Consulting Firm Success</h3>
                <p className="text-navy-700 leading-relaxed mb-4">
                  Consulting firm built a strong partnership and referral pipeline, enabling organic growth without sacrificing delivery excellence.
                </p>
                <p className="text-sm font-medium text-electric-600">
                  Scaled pipeline while keeping team focused on client delivery.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-electric-600 font-medium hover:text-electric-700 transition-colors group text-lg"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-navy-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Scale Without Stretching Your Team?"
        description="Let's discuss how outsourced business development can free up your team to focus on what they do best."
        primaryButtonText="Book Your Strategy Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </main>
  );
}
