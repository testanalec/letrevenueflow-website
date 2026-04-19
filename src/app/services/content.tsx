'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target,
  Zap,
  TrendingUp,
  BarChart3,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
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

export default function ServicesContent() {
  const services = [
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Targeted lead sourcing, validation, and qualification for your ideal customer profile.',
      benefit: 'Fill your pipeline with pre-qualified leads ready for sales conversations.',
      learnMoreHref: '/services/lead-generation',
    },
    {
      icon: Zap,
      title: 'Appointment Setting',
      description: 'Skilled conversations that convert interest into committed sales meetings.',
      benefit: 'Qualified appointments with decision-makers who are ready to talk to your sales team.',
      learnMoreHref: '/services/appointment-setting',
    },
    {
      icon: TrendingUp,
      title: 'Outbound Sales Campaigns',
      description: 'Multi-channel outbound campaigns combining email, calling, and LinkedIn messaging.',
      benefit: 'Consistent deal flow from coordinated, sequenced outreach campaigns.',
      learnMoreHref: '/services/outbound-sales-campaigns',
    },
    {
      icon: BarChart3,
      title: 'Revenue Pipeline Management',
      description: 'End-to-end pipeline visibility, CRM hygiene, and stage-gate management.',
      benefit: 'Complete control over your pipeline health and predictable revenue forecasting.',
      learnMoreHref: '/services/revenue-pipeline-management',
    },
  ];

  const problemsSolved = [
    {
      icon: AlertCircle,
      problem: 'Inconsistent Lead Flow',
      solution:
        'We establish repeatable, process-driven lead generation that fills your pipeline consistently.',
    },
    {
      icon: CheckCircle,
      problem: 'Poor Lead Quality',
      solution:
        'ICP-aligned sourcing, multi-layer validation, and qualification criteria ensure every lead fits your profile.',
    },
    {
      icon: AlertCircle,
      problem: 'Long Sales Cycles',
      solution:
        'Early engagement and relationship building reduce time-to-close and improve deal velocity.',
    },
    {
      icon: CheckCircle,
      problem: 'CRM Data Chaos',
      solution:
        'Clean, organized pipeline data with consistent tagging, stage definitions, and reporting.',
    },
    {
      icon: AlertCircle,
      problem: 'Lost Opportunities',
      solution:
        'Pipeline nurturing and follow-up sequences ensure no lead falls through the cracks.',
    },
    {
      icon: CheckCircle,
      problem: 'Sales Team Burnout',
      solution:
        'Pre-qualified leads and streamlined processes free up your team to focus on closing deals.',
    },
  ];

  const whoItIsFor = [
    {
      title: 'B2B SaaS',
      description: 'Companies with 10-500 employees and annual contract values of $25K-$500K+',
    },
    {
      title: 'IT Services & Consulting',
      description: 'Services firms targeting enterprise accounts and large mid-market clients',
    },
    {
      title: 'Professional Services',
      description: 'Legal, accounting, management consulting, and specialized service providers',
    },
    {
      title: 'Enterprise Software',
      description: 'Complex B2B solutions with long sales cycles and multiple stakeholders',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Strategy & ICP Definition',
      description:
        'We work with you to define your ideal customer profile, value proposition, and campaign objectives.',
    },
    {
      number: '02',
      title: 'Research & Sourcing',
      description:
        'Using proprietary tools and manual research, we build targeted lists of decision-makers that match your ICP.',
    },
    {
      number: '03',
      title: 'Validation & Enrichment',
      description:
        'Every prospect is validated for accuracy, decision-maker status, and channel fit before outreach begins.',
    },
    {
      number: '04',
      title: 'Outreach & Sequencing',
      description:
        'Multi-channel campaigns combine email, cold calling, LinkedIn messaging, and follow-up sequences.',
    },
    {
      number: '05',
      title: 'Qualification & Handoff',
      description:
        'Our team qualifies opportunities and hands off warm leads directly to your sales team via your CRM.',
    },
    {
      number: '06',
      title: 'Reporting & Optimization',
      description:
        'Weekly metrics, monthly strategy reviews, and continuous testing to improve campaign performance.',
    },
  ];

  const faqItems = [
    {
      question: 'How quickly can you fill my pipeline?',
      answer:
        'Most clients see the first leads delivered within 2-3 weeks. A full pipeline typically takes 6-8 weeks depending on your market complexity and sales cycle length. We structure engagements as 30-day pilots followed by 3-6 month commitments to ensure sustainable growth.',
    },
    {
      question: 'What defines a "qualified" lead from LetRevenueFlow?',
      answer:
        'We define qualification criteria with you based on your ICP. This typically includes verified decision-maker title, company size/industry alignment, budget indicators, and demonstrated business need. All leads are validated before delivery.',
    },
    {
      question: 'Do you work with existing CRMs like Salesforce or HubSpot?',
      answer:
        'Yes. We integrate with all major CRMs (Salesforce, HubSpot, Pipedrive, etc.) and ensure all leads are automatically logged, tagged, and assigned according to your workflow.',
    },
    {
      question: 'What if we want to scale up or down quickly?',
      answer:
        'Our model is built for flexibility. You can increase or decrease your engagement based on pipeline needs. We maintain capacity to ramp up campaigns within days if needed.',
    },
    {
      question: 'How are results measured?',
      answer:
        'Results are measured by your KPIs: cost per lead, lead-to-meeting conversion rate, meeting show rate, cost per qualified opportunity, and pipeline generated. We provide transparent weekly metrics and monthly strategy reviews.',
    },
    {
      question: 'Can you work with our existing marketing/sales tools?',
      answer:
        'Absolutely. We integrate with LinkedIn Sales Navigator, email sequences platforms, calling tools, and your CRM. We use whatever tech stack you already have in place.',
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Revenue-Focused Services Built for B2B Growth
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              Lead generation, appointment setting, outbound campaigns, and pipeline management designed to build predictable revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  benefit={service.benefit}
                  learnMoreHref={service.learnMoreHref}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Who It's For</h2>
            <p className="text-xl text-navy-600">LetRevenueFlow works best with B2B teams that have:</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {whoItIsFor.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 border border-navy-100"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-navy-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 bg-white rounded-lg p-8 border border-navy-100"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-4">Ideal Characteristics</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-electric-600 flex-shrink-0 mt-0.5" />
                <span className="text-navy-700">Clear ICP definition (or willing to define one together)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-electric-600 flex-shrink-0 mt-0.5" />
                <span className="text-navy-700">Sales cycles of 30+ days (B2B, not consumer)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-electric-600 flex-shrink-0 mt-0.5" />
                <span className="text-navy-700">Willingness to commit to a 3-6 month engagement</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-electric-600 flex-shrink-0 mt-0.5" />
                <span className="text-navy-700">Active CRM (Salesforce, HubSpot, Pipedrive, or similar)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-electric-600 flex-shrink-0 mt-0.5" />
                <span className="text-navy-700">Accountability culture (we thrive in data-driven orgs)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Problems We Solve</h2>
            <p className="text-xl text-navy-600">
              The revenue challenges keeping B2B founders and sales leaders awake at night
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {problemsSolved.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-4 mb-4">
                    <Icon className="w-6 h-6 text-electric-600 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold text-navy-900">{item.problem}</h3>
                  </div>
                  <p className="text-navy-700 leading-relaxed">
                    <strong>We solve this by:</strong> {item.solution}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Process</h2>
            <p className="text-xl text-navy-600">How we take your vision and turn it into pipeline results</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 border border-navy-100"
              >
                <div className="mb-4">
                  <span className="inline-block text-3xl font-bold text-electric-600 mb-2">{step.number}</span>
                  <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                </div>
                <p className="text-navy-700 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-navy-600">Questions about our service offerings and how we work</p>
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
        headline="Ready to Build Your Revenue Pipeline?"
        description="Let's discuss which service mix is right for your business and get your first results within 30 days."
        primaryButtonText="Book Strategy Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
      />
    </div>
  );
}
