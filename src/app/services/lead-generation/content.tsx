'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Database,
  Users,
  BarChart3,
  Zap,
  TrendingUp,
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

export default function LeadGenerationContent() {
  const painPoints = [
    {
      title: 'No Clear ICP Definition',
      description: 'You know your best customers, but defining their exact profile is messy',
    },
    {
      title: 'Data Quality Issues',
      description: 'Free databases are full of wrong emails, bad titles, and outdated contact info',
    },
    {
      title: 'Manual Research Burden',
      description: 'Your team spends hours researching prospects instead of selling',
    },
    {
      title: 'Low Lead Engagement Rates',
      description: 'Untargeted lists result in low response rates and wasted outreach effort',
    },
    {
      title: 'Channel Fit Uncertainty',
      description: 'You don\'t know if prospects prefer email, phone, or LinkedIn engagement',
    },
    {
      title: 'Qualification Inconsistency',
      description: 'Sales team wastes time on leads that don\'t meet basic criteria',
    },
  ];

  const whatsIncluded = [
    {
      icon: Database,
      title: 'ICP Definition & Refinement',
      description:
        'We work with you to define your ideal customer profile: company size, industry, geography, revenue range, tech stack, and pain points.',
    },
    {
      icon: Users,
      title: 'Data Sourcing & Validation',
      description:
        'Using proprietary tools and manual research, we build lists of decision-makers. Every email and phone number is verified for accuracy.',
    },
    {
      icon: Zap,
      title: 'Channel Strategy',
      description:
        'We determine the best channel for each prospect: email, phone call, LinkedIn message, or multi-touch sequences.',
    },
    {
      icon: TrendingUp,
      title: 'Outreach Sequencing',
      description:
        'Each lead gets a tailored engagement sequence based on their role, company, and channel preference.',
    },
    {
      icon: CheckCircle,
      title: 'Qualification Logic',
      description:
        'We establish clear qualification criteria and conduct preliminary outreach to validate fit before passing to your sales team.',
    },
    {
      icon: BarChart3,
      title: 'Reporting & Analytics',
      description:
        'Weekly dashboards showing list quality, response rates, conversion metrics, and ROI by campaign and industry segment.',
    },
  ];

  const kpisMeasured = [
    {
      metric: 'Cost Per Lead',
      description: 'Total investment divided by number of qualified leads generated',
    },
    {
      metric: 'Lead-to-Conversation Rate',
      description: 'Percentage of leads that result in a meaningful sales conversation',
    },
    {
      metric: 'Lead Quality Score',
      description: 'Qualification rating based on ICP fit and decision-maker status',
    },
    {
      metric: 'Data Accuracy',
      description: 'Email deliverability rate and phone number accuracy',
    },
    {
      metric: 'Time-to-First-Contact',
      description: 'Average days from lead generation to initial outreach',
    },
    {
      metric: 'Pipeline Contribution',
      description: 'Revenue influenced by leads sourced through our service',
    },
  ];

  const useCasesByIndustry = [
    {
      industry: 'SaaS',
      example:
        'Lead generation targeting IT directors and finance managers at mid-market software companies. Ideal for companies selling infrastructure, security, or operational tools.',
    },
    {
      industry: 'IT Services & Consulting',
      example:
        'Building lists of procurement managers and IT decision-makers at enterprise accounts. Perfect for managed services, consulting, and digital transformation services.',
    },
    {
      industry: 'Professional Services',
      example:
        'Sourcing partners and practice leaders at other agencies and consulting firms. Works for white-label services, subcontracting, and specialized expertise.',
    },
    {
      industry: 'Enterprise Software',
      example:
        'Multi-stakeholder targeting across technology, business, and procurement functions. Essential for complex solutions with long sales cycles.',
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Discovery & ICP Alignment',
      description:
        'We conduct a strategy call to understand your target market, sales process, and success criteria. Together we define the exact ICP for list building.',
    },
    {
      number: '2',
      title: 'List Construction',
      description:
        'Using a combination of proprietary tools, public databases, and manual research, we build a targeted list of prospects matching your ICP.',
    },
    {
      number: '3',
      title: 'Data Validation & Enrichment',
      description:
        'Every contact is validated: email verification, title confirmation, decision-maker status, LinkedIn profiling, and company research.',
    },
    {
      number: '4',
      title: 'Segmentation & Sequencing',
      description:
        'We segment the list by persona, company size, geography, and industry. Each segment gets a tailored outreach approach.',
    },
    {
      number: '5',
      title: 'Preliminary Engagement',
      description:
        'Our team conducts initial outreach (email, phone, or LinkedIn) to qualify leads, confirm fit, and warm them up for your sales team.',
    },
    {
      number: '6',
      title: 'CRM Import & Handoff',
      description:
        'All qualified leads are imported into your CRM with full context, engagement history, and next-step recommendations.',
    },
  ];

  const faqItems = [
    {
      question: 'How long does it take to build my first list?',
      answer:
        'Typically 2-3 weeks from ICP definition to first list delivery. This includes research, validation, and segmentation. Ongoing list building and refinement happen continuously.',
    },
    {
      question: 'What quality control measures do you use?',
      answer:
        'We use email verification tools to confirm deliverability, LinkedIn validation to confirm titles and roles, phone number validation, and manual research to verify company fit and decision-maker status. All leads are sampled and audited weekly.',
    },
    {
      question: 'Can I adjust the ICP after we start?',
      answer:
        'Absolutely. Your market and business priorities evolve. We build in monthly ICP reviews where you can refine criteria based on sales results and what you\'re learning about your best customers.',
    },
    {
      question: 'Do you provide warm introductions or just lists?',
      answer:
        'Both. For lead generation, we provide validated lists. For appointment setting (separate service), we conduct initial outreach and qualify before handoff. Many clients use both services together.',
    },
    {
      question: 'How many leads can you generate per month?',
      answer:
        'Depends on your market size, ICP specificity, and sales capacity. Most clients start with 50-100 qualified leads per month and scale from there. We focus on quality over quantity.',
    },
    {
      question: 'What happens if the data quality is bad?',
      answer:
        'If email deliverability falls below 90% or response rates are significantly below benchmark, we conduct a full audit and rebuild the list with updated criteria.',
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
              Targeted Lead Generation That Fills Your Pipeline
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              ICP-aligned sourcing, multi-layer validation, and qualification. Get a steady stream of decision-makers ready to engage with your sales team.
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
            <p className="text-xl text-navy-600">The lead generation challenges most B2B teams face</p>
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
            <p className="text-xl text-navy-600">Our comprehensive lead generation package</p>
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
            <p className="text-xl text-navy-600">How we build and deliver your lead lists</p>
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
                className="bg-white rounded-lg border border-navy-100 p-8 flex gap-8"
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">KPIs We Measure</h2>
            <p className="text-xl text-navy-600">How we define and track success</p>
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
                className="bg-navy-50 rounded-lg border border-navy-100 p-8"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-3">{kpi.metric}</h3>
                <p className="text-navy-700 leading-relaxed">{kpi.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-16 md:py-24 bg-electric-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Use Cases By Industry</h2>
            <p className="text-xl text-navy-600">How lead generation works across different markets</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {useCasesByIndustry.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg border border-electric-200 p-8"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-4">{useCase.industry}</h3>
                <p className="text-navy-700 leading-relaxed">{useCase.example}</p>
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
            <p className="text-xl text-navy-600">How our lead generation service has helped B2B teams</p>
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
                challenge="Low-quality lead lists from freelancers were costing the sales team hours of time. Needed to ramp pipeline for Series B fundraising."
                resultMetric="Qualified Leads Generated"
                resultValue="320 leads"
                caseStudyHref="/case-studies"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CaseStudyCard
                clientType="IT Services"
                challenge="Enterprise sales team had weak pipeline visibility and long lead research time. Needed standardized, ICP-aligned targeting."
                resultMetric="Cost Per Lead"
                resultValue="$45"
                caseStudyHref="/case-studies"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CaseStudyCard
                clientType="B2B SaaS"
                challenge="Manual lead research bottleneck limiting outreach. CRM hygiene was poor with inconsistent qualification."
                resultMetric="Pipeline Growth"
                resultValue="$850K"
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
            <p className="text-xl text-navy-600">Questions about our lead generation service</p>
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
        headline="Ready to Fill Your Pipeline?"
        description="Let's schedule a 20-minute strategy call to discuss your ICP, define success metrics, and get started on your first lead list."
        primaryButtonText="Book Strategy Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Get Free Pipeline Audit"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
