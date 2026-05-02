'use client';

// Metadata: This page inherits SEO metadata from layout.tsx with title "Professional Services Solutions | LetRevenueFlow"
// Description: "B2B lead generation for consulting and professional services. Build qualified enterprise pipeline and accelerate long sales cycles with outbound expertise."

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
  Briefcase,
  Target,
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
    title: 'Long Sales Cycles Strain Resources',
    description: 'Professional services sales take months, not weeks. Your best consultants and partners are pulled into lengthy qualification and relationship-building processes, diverting them from billable work.',
    icon: Clock,
  },
  {
    title: 'Relationship-Dependent Selling Creates Bottlenecks',
    description: 'Growth depends heavily on personal relationships and individual partner networks. When key people are busy with delivery, new business development stalls entirely.',
    icon: Handshake,
  },
  {
    title: 'Difficulty Scaling Business Development Beyond Partners',
    description: 'Your partners and principals are stretched thin. Building a systematic prospecting process that doesn\'t rely solely on them is challenging and resource-intensive.',
    icon: Briefcase,
  },
  {
    title: 'Project-Based Revenue Creates Feast-or-Famine Cycles',
    description: 'Uneven pipeline visibility leads to unpredictable revenue. One large deal closing creates gaps until the next major opportunity is ready.',
    icon: TrendingUp,
  },
];

const solutions = [
  {
    title: 'Systematic Prospecting & Qualification',
    description: 'We build and execute a consistent prospecting strategy that targets ideal client profiles in your specific vertical. Your team focuses on strategy and closing, not admin.',
    icon: Target,
  },
  {
    title: 'Executive-Level Appointment Setting',
    description: 'We set qualified meetings with decision-makers and C-suite contacts in target organizations. Your partners meet only with high-fit prospects ready to engage.',
    icon: Users,
  },
  {
    title: 'Pipeline Visibility & Predictability for Partners',
    description: 'Give your leadership team transparency into consistent pipeline flow. Reduce feast-or-famine cycles and enable confident resource planning.',
    icon: TrendingUp,
  },
];

const faqItems = [
  {
    question: 'How do you approach prospecting for different types of professional services?',
    answer: 'We customize targeting and messaging based on your service type—whether it\'s management consulting, legal, accounting, executive search, or advisory services. Each vertical has distinct buyer personas, decision-making cycles, and pain points that we research and tailor to.',
  },
  {
    question: 'What makes a "qualified" prospect for professional services?',
    answer: 'Qualification varies by service type, but typically includes company size, industry, growth stage, current challenges, and decision-maker accessibility. We work with you to define ideal client profiles and then systematically target organizations that match those criteria.',
  },
  {
    question: 'How do you handle the long sales cycles common in professional services?',
    answer: 'Long cycles are expected. We focus on early-stage relationship building and executive conversations—getting your foot in the door and identifying real opportunities early. We provide consistent pipeline flow so there\'s always activity moving through your sales cycle.',
  },
  {
    question: 'Can you help build relationships with strategic partners and referral sources?',
    answer: 'Yes. We can execute complementary outreach to other professional services firms, industry associations, and referral sources. This builds strategic relationships that generate warm introductions and partnership opportunities alongside direct client prospecting.',
  },
  {
    question: 'How do you report on professional services pipeline?',
    answer: 'We report on meetings scheduled, decision-maker meetings, opportunities in progress, and pipeline value. For professional services with longer cycles, we focus on quality metrics, relationship stage, and early-indicator activity rather than just volume metrics.',
  },
];

export default function ProfessionalServices() {
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
              Revenue Pipeline for Professional Services Firms
            </h1>
            <p className="text-xl text-navy-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build a consistent business development pipeline without diverting your delivery teams and partners. Systematic prospecting that scales your practice.
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
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Services Challenges */}
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
              The Professional Services Growth Challenge
            </h2>
            <p className="text-lg text-navy-700">
              Delivery excellence and business development are competing for the same limited resources.
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
              Systematic Pipeline That Scales Your Practice
            </h2>
            <p className="text-lg text-navy-700">
              Give your team back time to deliver. We handle systematic business development and executive outreach.
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
              What Professional Services Firms Get With Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Consistent pipeline of qualified prospects and decision-makers',
                'Executive-level appointments ready for partner engagement',
                'Time freed up for partners to focus on delivery and strategy',
                'Pipeline visibility for predictable resource planning',
                'Vertical-specific targeting and messaging for your practice',
                'Strategic relationship building with referral sources and partners',
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
        headline="Ready to Build a Predictable Growth Engine?"
        description="Let's discuss how systematic business development can free up your partners to focus on delivery and strategy."
        primaryButtonText="Book Your Strategy Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </main>
  );
}
