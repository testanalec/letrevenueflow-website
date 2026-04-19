'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  BarChart3,
  Zap,
  TrendingUp,
  Database,
  Eye,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import CaseStudyCard from '@/components/CaseStudyCard';

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

export default function RevenuePipelineManagementContent() {
  const painPoints = [
    {
      title: 'Pipeline Visibility Crisis',
      description: 'No clear picture of what\'s in your pipeline or when deals will close',
    },
    {
      title: 'CRM Data Chaos',
      description: 'Inconsistent data entry, missing information, and duplicate records make reporting unreliable',
    },
    {
      title: 'Inaccurate Forecasting',
      description: 'Deals slipping stages, wrong close dates, and management surprises month after month',
    },
    {
      title: 'Lost Leads & Opportunities',
      description: 'Deals fall through the cracks because no one is tracking follow-ups and next steps',
    },
    {
      title: 'Stage Definition Confusion',
      description: 'Sales team uses different criteria for stages, making pipeline reports inconsistent',
    },
    {
      title: 'Weak Handoff Process',
      description: 'Marketing passes leads to sales with no context. Leads disappear into the CRM black hole',
    },
  ];

  const whatsIncluded = [
    {
      icon: Database,
      title: 'CRM Audit & Setup',
      description:
        'Complete audit of your existing CRM configuration, data quality, and workflows. Fix data issues and establish a clean foundation.',
    },
    {
      icon: Eye,
      title: 'Pipeline Dashboarding',
      description:
        'Custom dashboards showing pipeline by stage, owner, industry, close date, and other critical dimensions. Real-time visibility.',
    },
    {
      icon: CheckCircle,
      title: 'Stage Governance & Definitions',
      description:
        'Document clear criteria for each pipeline stage. Sales team alignment on what it takes to move deals forward.',
    },
    {
      icon: TrendingUp,
      title: 'Lead Routing & Nurture',
      description:
        'Establish criteria for lead assignment. Automated workflows to nurture stalled opportunities and prevent deals from getting lost.',
    },
    {
      icon: Zap,
      title: 'Deal Velocity Analysis',
      description:
        'Track average days in each stage, conversion rates between stages, and identify bottlenecks in your sales process.',
    },
    {
      icon: BarChart3,
      title: 'Monthly Business Reviews & Reporting',
      description:
        'Monthly pipeline reviews, forecast accuracy analysis, and strategic recommendations to improve pipeline health.',
    },
  ];

  const kpisMeasured = [
    {
      metric: 'Pipeline Size',
      description: 'Total dollar value of open opportunities in all stages',
    },
    {
      metric: 'Pipeline by Stage',
      description: 'Breakdown of pipeline across each stage to understand distribution and balance',
    },
    {
      metric: 'Deal Velocity',
      description: 'Average days to close and conversion rates between stages',
    },
    {
      metric: 'Forecast Accuracy',
      description: 'Actual closed revenue vs. forecasted revenue to measure predictability',
    },
    {
      metric: 'Lead-to-Opportunity Conversion',
      description: 'Percentage of leads that convert to qualified opportunities',
    },
    {
      metric: 'Sales Cycle Length',
      description: 'Average time from lead source to closed deal by sales stage and rep',
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Current State Assessment',
      description:
        'Audit your existing CRM, pipeline structure, data quality, and current reporting. Identify gaps and opportunities.',
    },
    {
      number: '2',
      title: 'Stage Definition & Governance',
      description:
        'Define clear, measurable criteria for each pipeline stage. Build sales team alignment on what moves a deal forward.',
    },
    {
      number: '3',
      title: 'CRM Optimization',
      description:
        'Clean up existing data, set up custom fields, establish lead scoring, and configure workflows and automation.',
    },
    {
      number: '4',
      title: 'Dashboard & Reporting Setup',
      description:
        'Build custom dashboards for real-time pipeline visibility. Create weekly and monthly reporting templates.',
    },
    {
      number: '5',
      title: 'Team Training & Adoption',
      description:
        'Train sales team on new processes, CRM best practices, and how to maintain pipeline health consistently.',
    },
    {
      number: '6',
      title: 'Ongoing Monitoring & Optimization',
      description:
        'Weekly check-ins, monthly business reviews, continuous process improvement, and quarterly strategy sessions.',
    },
  ];

  const componentServices = [
    {
      title: 'CRM Hygiene Management',
      description:
        'Ongoing data quality management. Duplicate record merging, field validation, and quarterly deep cleans to maintain accuracy.',
      metrics: 'Data completeness %, duplicate rate, field error rate',
    },
    {
      title: 'Lead Scoring & Qualification',
      description:
        'Implement lead scoring model to identify high-priority prospects. Automatic routing based on score and fit.',
      metrics: 'Scoring accuracy, lead-to-opportunity conversion',
    },
    {
      title: 'Pipeline Forecasting',
      description:
        'Weighted pipeline forecasting based on historical conversion rates. Monthly forecast vs. actual analysis and variance investigation.',
      metrics: 'Forecast accuracy %, revenue predictability',
    },
    {
      title: 'Opportunity Management',
      description:
        'Standardized opportunity qualification and tracking. Competition analysis, win/loss analysis, and deal review process.',
      metrics: 'Average deal size, win rate, deal velocity',
    },
  ];

  const faqItems = [
    {
      question: 'How long does it take to set up proper pipeline management?',
      answer:
        'Initial setup (audit, stage definition, CRM configuration) typically takes 4-6 weeks. Full adoption and optimization takes 8-12 weeks as the sales team adjusts to new processes. Ongoing management is continuous.',
    },
    {
      question: 'Will this require changes to our current CRM?',
      answer:
        'Not necessarily major changes, but we may optimize fields, workflows, and data structure. We work with your existing CRM (Salesforce, HubSpot, Pipedrive, etc.) and avoid disruption to existing workflows.',
    },
    {
      question: 'How much time does the sales team need to invest?',
      answer:
        'Minimal once trained. The new process requires the same time and activity, just captured and structured consistently. We often reduce data entry work through automation.',
    },
    {
      question: 'Can you help us improve our sales process, not just report on it?',
      answer:
        'Absolutely. Pipeline analysis often reveals bottlenecks and opportunities. We provide strategic recommendations on qualification, stage criteria, follow-up processes, and sales methodology.',
    },
    {
      question: 'How often do you provide reporting and reviews?',
      answer:
        'Weekly pipeline reviews, monthly business reviews with full reporting and analysis, and quarterly strategy sessions to discuss trends and optimization opportunities.',
    },
    {
      question: 'What if our pipeline is currently a mess?',
      answer:
        'That\'s actually common and exactly what we solve. We start with a data cleanup, establish new governance, and build processes to keep it clean going forward. It takes effort upfront but pays dividends immediately.',
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
              End-to-End Pipeline Visibility and Management
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              Professional pipeline governance, CRM hygiene, stage-gate management, and accurate revenue forecasting. Build a predictable sales operation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-electric-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Pain Points We Solve</h2>
            <p className="text-xl text-navy-600">Pipeline management challenges that hurt visibility and forecasting</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg border border-electric-200 p-6"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-2">{point.title}</h3>
                <p className="text-navy-700 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">What's Included</h2>
            <p className="text-xl text-navy-600">Our comprehensive pipeline management service</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whatsIncluded.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-electric-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-navy-700 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Component Services */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Component Services</h2>
            <p className="text-xl text-navy-600">Specialized pipeline management services we provide</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {componentServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg border border-navy-100 p-8"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-navy-700 mb-4 leading-relaxed">{service.description}</p>
                <div className="pt-4 border-t border-navy-100">
                  <p className="text-sm text-navy-600 font-bold mb-1">Key Metrics</p>
                  <p className="text-sm text-navy-700">{service.metrics}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Implementation Process</h2>
            <p className="text-xl text-navy-600">How we establish pipeline governance and management systems</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg border border-gray-200 p-8 flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-electric-600 text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-navy-700 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KPIs Measured */}
      <section className="py-16 md:py-24 bg-electric-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">KPIs We Monitor</h2>
            <p className="text-xl text-navy-600">The metrics that define pipeline health</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {kpisMeasured.map((kpi, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg border border-electric-200 p-8"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-3">{kpi.metric}</h3>
                <p className="text-navy-700 leading-relaxed">{kpi.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Placeholder */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Success Stories</h2>
            <p className="text-xl text-navy-600">How pipeline management has transformed operations</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <CaseStudyCard
                clientType="SaaS"
                challenge="Sales team had no visibility into when deals would close. Forecasting was a guessing game. Management needed to clean up data and establish clear stage definitions."
                resultMetric="Forecast Accuracy"
                resultValue="92%"
                caseStudyHref="/case-studies"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CaseStudyCard
                clientType="IT Services"
                challenge="Pipeline was healthy on paper but deals were stalling in later stages. Needed clear stage criteria and governance to prevent slippage."
                resultMetric="Deal Velocity"
                resultValue="+28 days faster"
                caseStudyHref="/case-studies"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CaseStudyCard
                clientType="B2B SaaS"
                challenge="CRM was a mess with duplicates, incomplete records, and inconsistent data. Marketing and sales couldn't work together effectively."
                resultMetric="Data Quality"
                resultValue="98.5%"
                caseStudyHref="/case-studies"
              />
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
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-navy-600">Questions about pipeline management services</p>
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

      {/* CTA Section */}
      <CTASection
        headline="Ready to Take Control of Your Pipeline?"
        description="Let's audit your current pipeline, define clear stage criteria, and build the governance system that keeps revenue predictable and growing."
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Get Free Pipeline Audit"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
