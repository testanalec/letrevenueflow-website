
'use client';

// Metadata: This page inherits SEO metadata from layout.tsx with title "IT Services Solutions | LetRevenueFlow"
// Description: "B2B lead generation for IT services firms. Access C-level decision-makers and build enterprise pipeline with consultative prospecting and relationship mapping."

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Zap,
  Users,
  CheckCircle,
  TrendingUp,
  Building2,
  Shield,
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
    title: 'C-Level & Decision-Maker Access',
    description: 'IT contracts are decided by CIOs, CTOs, and IT directors—and they\'re notoriously hard to reach. Decision-maker gatekeeping is a major barrier.',
    icon: Users,
  },
  {
    title: 'Long, Complex Enterprise Sales Cycles',
    description: 'Enterprise IT deals involve multiple stakeholders, RFP processes, and extended evaluation periods. You need enterprise-grade prospecting.',
    icon: Building2,
  },
  {
    title: 'Differentiation in a Crowded Market',
    description: 'IT services is fragmented and competitive. Standing out requires consultative, targeted outreach—not generic cold email.',
    icon: Zap,
  },
  {
    title: 'Outbound Prospecting Expertise',
    description: 'Building enterprise relationships requires deep knowledge of IT buyer behavior, pain points, and decision processes.',
    icon: Shield,
  },
];

const solutions = [
  {
    title: 'Executive Targeting & Mapping',
    description: 'We identify and prospect C-suite decision-makers across target accounts with personalized, consultative outreach.',
    icon: Users,
  },
  {
    title: 'Enterprise Account Strategy',
    description: 'Multi-touch campaigns coordinated across multiple stakeholders in high-value accounts to accelerate enterprise deals.',
    icon: Building2,
  },
  {
    title: 'Consultative Prospecting',
    description: 'Our outreach educates prospects on relevant IT challenges and solutions—positioning your team as strategic partners, not vendors.',
    icon: Shield,
  },
];

const faqItems = [
  {
    question: 'How do you access C-level IT decision-makers?',
    answer: 'We use a combination of direct research, verified contact databases, and relationship mapping to identify CIOs, CTOs, and IT directors. We validate decision authority and buying authority before outreach.',
  },
  {
    question: 'What kind of response rates do you get for IT services outreach?',
    answer: 'Enterprise IT decision-makers respond at 20-30% rates when outreach is personalized and relevant to their infrastructure challenges. The key is targeting real problems, not generic pitches.',
  },
  {
    question: 'How long does the enterprise sales cycle typically take?',
    answer: 'IT services deals typically range from 4-8 months depending on deal size and complexity. Our role is to get qualified meetings early in the buying cycle and keep the deal moving.',
  },
  {
    question: 'Do you handle RFP support or just initial outreach?',
    answer: 'We focus on pipeline development and early-stage relationship building. Once meetings are established, your team takes over the RFP process and closing activities.',
  },
  {
    question: 'How do you approach IT services firms with different service offerings?',
    answer: 'We customize prospecting by service type—managed services, cloud migration, security, infrastructure, etc. We research relevant buyer personas and pain points for each service vertical.',
  },
];

export default function ITServices() {
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
              Revenue Pipeline for IT Services Firms
            </h1>
            <p className="text-xl text-navy-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Reach enterprise IT decision-makers. Build predictable pipeline with strategic prospecting designed for complex B2B IT sales.
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

      {/* IT Services Challenges */}
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
              Enterprise Prospecting Challenges
            </h2>
            <p className="text-lg text-navy-700">
              Building enterprise pipeline requires different strategies, deeper research, and executive-level credibility.
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
              How We Build Enterprise Pipeline
            </h2>
            <p className="text-lg text-navy-700">
              Consultative, strategic prospecting that opens doors with C-level IT buyers.
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
              Our Enterprise Prospecting Process
            </h3>
            <div className="space-y-4">
              {[
                { num: '1', label: 'Account Research', desc: 'Identify high-fit target accounts based on IT infrastructure, technology stack, and growth signals.' },
                { num: '2', label: 'Stakeholder Mapping', desc: 'Build detailed org charts and identify decision-makers, influencers, and technical evaluators.' },
                { num: '3', label: 'Personalized Outreach', desc: 'Develop consultative messaging focused on their specific IT challenges and business drivers.' },
                { num: '4', label: 'Multi-Touch Campaigns', desc: 'Execute coordinated outreach across multiple stakeholders to accelerate deal momentum.' },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-electric-600 text-white font-bold">
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">{step.label}</h4>
                    <p className="text-navy-700 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* IT Services Case Studies */}
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
              Enterprise Success Stories
            </h2>
            <p className="text-lg text-navy-700">
              How IT services firms are building enterprise pipeline with strategic prospecting.
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
                <h3 className="text-lg font-bold text-navy-900 mb-2">Managed Services Provider Success</h3>
                <p className="text-navy-700 leading-relaxed mb-4">
                  Mid-market MSP transformed from reactive, inbound-dependent sales to a proactive enterprise pipeline builder with consistent C-level engagement.
                </p>
                <p className="text-sm font-medium text-electric-600">
                  Successfully accessed previously unreachable enterprise decision-makers.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-electric-50 to-blue-50 rounded-lg border border-electric-300 p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-2">Systems Integrator Success</h3>
                <p className="text-navy-700 leading-relaxed mb-4">
                  High-value infrastructure company gained the ability to coordinate multi-stakeholder campaigns and accelerate deal cycles through strategic prospecting.
                </p>
                <p className="text-sm font-medium text-electric-600">
                  Built a predictable, scalable enterprise pipeline.
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
        headline="Ready to Build Enterprise IT Pipeline?"
        description="Schedule a consultation to discuss your target market, decision-maker access challenges, and how we can help you build predictable enterprise pipeline."
        primaryButtonText="Book Your Strategy Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </main>
  );
}
