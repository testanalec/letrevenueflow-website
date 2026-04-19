
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  CheckCircle,
  Calendar,
  Users,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import CaseStudyCard from '@/components/CaseStudyCard';
import ServiceCard from '@/components/ServiceCard';


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
    title: 'Demo Scheduling at Scale',
    description: 'Getting prospects into demos consistently requires high-volume, targeted outreach. Cold email and LinkedIn alone won\'t cut it.',
    icon: Calendar,
  },
  {
    title: 'SQLs That Close',
    description: 'Volume of leads doesn\'t matter if they\'re not qualified. You need SQLs—Sales Qualified Leads that convert to deals.',
    icon: CheckCircle,
  },
  {
    title: 'ACV Growth Pressure',
    description: 'Higher ACV sales cycles are longer, require more stakeholder buy-in, and demand deeper prospecting into accounts.',
    icon: BarChart3,
  },
  {
    title: 'Pipeline Velocity',
    description: 'Long sales cycles mean you need consistent pipeline flow months in advance to hit quarterly targets.',
    icon: TrendingUp,
  },
];

const solutions = [
  {
    title: 'Multi-Channel Outreach',
    description: 'Combine email, LinkedIn, and phone outreach to reach decision-makers at scale.',
    benefit: 'Higher response rates and faster meeting booking compared to single-channel approaches.',
    learnMoreHref: '/services',
  },
  {
    title: 'Account-Based Prospecting',
    description: 'Target high-value accounts with coordinated, multi-touch campaigns designed to open doors.',
    benefit: 'Improve deal quality and ACV by focusing on accounts with highest revenue potential.',
    learnMoreHref: '/services',
  },
  {
    title: 'Qualification & Appointment Setting',
    description: 'We qualify opportunities and schedule only the best meetings for your reps.',
    benefit: 'Your team focuses on closing, not prospecting. Higher sales productivity and efficiency.',
    learnMoreHref: '/services',
  },
];

const faqItems = [
  {
    question: 'How do you find SaaS decision-makers?',
    answer: 'We use a combination of intent data, company research, and database intelligence to identify CFOs, CTOs, VPs of Operations, and other key stakeholders. We verify contact information and build targeted lists based on your ICP.',
  },
  {
    question: 'What\'s the typical response rate for SaaS outreach?',
    answer: 'Response rates typically range from 15-25% for well-researched, personalized outreach. SaaS buyers are engaged on their software needs, so the right message to the right person gets high engagement.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'You\'ll typically see first meetings scheduled within 2-3 weeks. Full pipeline impact takes 60-90 days as deals progress through your sales cycle.',
  },
  {
    question: 'Do you handle qualification, or just scheduling?',
    answer: 'We do both. We qualify prospects during outreach to ensure only sales-ready leads are scheduled. Your team gets demos with prospects that match your ICP and buying criteria.',
  },
  {
    question: 'How does this work for different SaaS price points?',
    answer: 'Our approach scales across enterprise, mid-market, and SMB SaaS. We adjust targeting, messaging, and discovery depth based on your deal size and sales cycle.',
  },
];

export default function SaaS() {
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
              Pipeline Growth for SaaS Companies
            </h1>
            <p className="text-xl text-navy-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Drive qualified demos, accelerate SQL conversion, and build predictable pipeline. Built for SaaS sales cycles and ACV growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-a-call"
                className="px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors shadow-lg"
              >
                Schedule a Strategy Call
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-3 border border-electric-400 text-electric-300 font-medium rounded-lg hover:bg-navy-800 transition-colors"
              >
                See SaaS Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SaaS-Specific Challenges */}
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
              SaaS-Specific Pipeline Challenges
            </h2>
            <p className="text-lg text-navy-700">
              These aren't generic sales problems. They're SaaS-specific and require SaaS-specific solutions.
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
              How LetRevenueFlow Powers SaaS Growth
            </h2>
            <p className="text-lg text-navy-700">
              Proven strategies to fill your pipeline with qualified opportunities.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 inline-block p-3 bg-electric-50 rounded-lg">
                  <Zap className="w-6 h-6 text-electric-600" />
                </div>

                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-navy-700 text-sm mb-4 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mb-6 p-4 bg-electric-50 rounded-lg border border-electric-200">
                  <p className="text-sm font-medium text-navy-900">
                    <span className="text-electric-600 font-bold">Result:</span> {solution.benefit}
                  </p>
                </div>

                <Link
                  href={solution.learnMoreHref}
                  className="inline-flex items-center text-electric-600 font-medium hover:text-electric-700 transition-colors group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SaaS Case Studies */}
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
              SaaS Success Stories
            </h2>
            <p className="text-lg text-navy-700">
              Real results from SaaS companies like yours.
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
              <CaseStudyCard
                clientType="Mid-Market SaaS"
                challenge="B2B workflow automation platform hitting plateau at 40% YoY growth. Pipeline was unpredictable and sales team buried in prospecting."
                resultMetric="Meetings Booked"
                resultValue="64 qualified demos"
                caseStudyHref="/case-studies/saas-pipeline-growth"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CaseStudyCard
                clientType="Enterprise SaaS"
                challenge="High-ACV product requiring multiple stakeholder alignment. Prospecting into accounts was inefficient and relied on inbound only."
                resultMetric="Average Deal Velocity"
                resultValue="-22 days"
                caseStudyHref="/case-studies/saas-pipeline-growth"
              />
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
              href="/case-studies"
              className="inline-flex items-center gap-2 text-electric-600 font-medium hover:text-electric-700 transition-colors group text-lg"
            >
              View All Case Studies
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
        headline="Ready to Accelerate Your SaaS Pipeline?"
        description="Let's talk about your specific challenges. Schedule a 20-minute strategy call with our team to explore what's possible."
        primaryButtonText="Book Your Strategy Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="See More SaaS Results"
        secondaryButtonHref="/case-studies"
      />
    </main>
  );
}
