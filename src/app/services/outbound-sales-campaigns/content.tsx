'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  BarChart3,
  Zap,
  TrendingUp,
  MessageSquare,
  Users,
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

export default function OutboundSalesCampaignsContent() {
  const painPoints = [
    {
      title: 'Inconsistent Outreach Volume',
      description: 'Sales team managing campaigns ad-hoc, no coordination, no system for consistency',
    },
    {
      title: 'Low Response Rates',
      description: 'Generic messages, poor targeting, and limited follow-up result in single-digit response rates',
    },
    {
      title: 'Email Deliverability Problems',
      description: 'Bad sender reputation, spam complaints, and bounces damage your domain health',
    },
    {
      title: 'Sequence Burnout',
      description: 'Campaign fatigue because prospects get hit with repetitive, uncoordinated touches',
    },
    {
      title: 'No A/B Testing',
      description: 'Flying blind on what messaging, subject lines, and timing actually work',
    },
    {
      title: 'Siloed Channels',
      description: 'Email, phone, and LinkedIn aren\'t coordinated, so some prospects aren\'t reached effectively',
    },
  ];

  const whatsIncluded = [
    {
      icon: Users,
      title: 'Target List & Segmentation',
      description:
        'Build ICP-aligned prospect lists and segment by persona, company, geography, and business need for personalized campaigns.',
    },
    {
      icon: MessageSquare,
      title: 'Messaging & Creative Development',
      description:
        'Develop targeted value propositions, subject lines, and call scripts tailored to each segment\'s pain points and priorities.',
    },
    {
      icon: Zap,
      title: 'Multi-Channel Sequence Design',
      description:
        'Coordinate email, phone calls, and LinkedIn messages into a cohesive sequence with optimal timing and touch frequency.',
    },
    {
      icon: TrendingUp,
      title: 'A/B Testing & Optimization',
      description:
        'Continuous testing of subject lines, messaging, sending time, and sequence timing to improve response rates week-over-week.',
    },
    {
      icon: BarChart3,
      title: 'Deliverability & List Hygiene',
      description:
        'Monitor inbox placement, manage sender reputation, validate email addresses, and maintain compliance with email regulations.',
    },
    {
      icon: CheckCircle,
      title: 'Campaign Analytics & Reporting',
      description:
        'Weekly performance dashboards tracking opens, clicks, responses, conversions, and ROI by campaign and segment.',
    },
  ];

  const kpisMeasured = [
    {
      metric: 'Email Open Rate',
      description: 'Percentage of recipients who open your emails. Target: 25-35% depending on list quality',
    },
    {
      metric: 'Click-Through Rate',
      description: 'Percentage of opens that result in prospect engagement with your call-to-action',
    },
    {
      metric: 'Response Rate',
      description: 'Percentage of recipients who reply to outreach. Target: 3-8% for quality B2B lists',
    },
    {
      metric: 'Cost Per Response',
      description: 'Total campaign investment divided by number of engaged prospects',
    },
    {
      metric: 'Conversation Rate',
      description: 'Percentage of responses that convert to meaningful sales conversations',
    },
    {
      metric: 'Pipeline Generated',
      description: 'Total pipeline value influenced and opportunities created through campaign outreach',
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Campaign Strategy & Goal Setting',
      description:
        'Define campaign objectives, target list size, desired response rate, timeline, and success metrics. Establish baseline performance expectations.',
    },
    {
      number: '2',
      title: 'List Building & Segmentation',
      description:
        'Source and validate prospect lists. Segment by persona, company profile, geography, and priority to enable personalized messaging.',
    },
    {
      number: '3',
      title: 'Message Development & Testing',
      description:
        'Create value propositions and messaging tailored to each segment. Develop multiple subject line and email body variations for A/B testing.',
    },
    {
      number: '4',
      title: 'Sequence Design & Coordination',
      description:
        'Design multi-touch sequences combining email, phone, and LinkedIn. Optimize timing, frequency, and channel mix for maximum engagement.',
    },
    {
      number: '5',
      title: 'Campaign Launch & Monitoring',
      description:
        'Execute campaign with daily monitoring. Watch deliverability, bounce rates, reply rates, and engagement metrics in real time.',
    },
    {
      number: '6',
      title: 'Analysis & Optimization',
      description:
        'Weekly performance reviews, A/B test results, and optimization recommendations. Iterate on messaging, timing, and sequencing.',
    },
  ];

  const channelBreakdown = [
    {
      channel: 'Email',
      focus: 'Primary awareness and engagement driver. Subject lines, creative, and timing optimized for open and click rates.',
      metrics: 'Open rate, click rate, bounce rate, complaint rate',
    },
    {
      channel: 'Phone',
      focus: 'Personal connection and objection handling. Short, strategic calls after email engagement to warm up the relationship.',
      metrics: 'Connect rate, conversation rate, meeting bookings',
    },
    {
      channel: 'LinkedIn',
      focus: 'Social proof and relationship building. Connection requests, messages, and profile engagement to reinforce email message.',
      metrics: 'Connection acceptance, message reply rate, profile views',
    },
  ];

  const faqItems = [
    {
      question: 'How many touches should be in an outbound campaign?',
      answer:
        'Typically 5-8 touches over 3-4 weeks. This includes 3-4 email variations, 1-2 phone calls, and 1-2 LinkedIn touches. More touches improve response rates but need to be spaced correctly to avoid fatigue.',
    },
    {
      question: 'What response rate should we expect?',
      answer:
        'For quality B2B lists targeting decision-makers, expect 3-8% response rate on initial outreach. With optimization and A/B testing, this can improve to 8-12%+. Response rate depends heavily on list quality, message relevance, and offer value.',
    },
    {
      question: 'How do you maintain email deliverability?',
      answer:
        'We monitor sender reputation, manage bounce rates, handle unsubscribe requests, comply with GDPR/CAN-SPAM, and use authentication protocols (SPF, DKIM, DMARC). We also segment campaigns to manage sending volume and frequency.',
    },
    {
      question: 'Can you personalize emails at scale?',
      answer:
        'Yes. We use dynamic personalization for names, company info, and segment-specific messaging. Each email feels personalized without losing efficiency. Personalization significantly improves open and response rates.',
    },
    {
      question: 'How long should a campaign run?',
      answer:
        'Most campaigns run 4-6 weeks minimum to allow for full sequence execution and optimization cycles. Longer campaigns can run 8-12 weeks. We establish timeline based on your sales cycle and business goals.',
    },
    {
      question: 'How do you handle objections and non-responders?',
      answer:
        'Non-responders get strategic follow-up touches with different messaging and timing. For objections, we address common concerns in email variations and train our calling team on objection handling scripts.',
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
              Multi-Channel Outbound Campaigns That Drive Pipeline
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              Coordinated email, phone, and LinkedIn campaigns with tested messaging, optimized sequences, and continuous improvement. Consistent deal flow at scale.
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
            <p className="text-xl text-navy-600">Campaign execution challenges that limit your outreach effectiveness</p>
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
            <p className="text-xl text-navy-600">Our comprehensive outbound campaign service</p>
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

      {/* Multi-Channel Breakdown */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Multi-Channel Coordination</h2>
            <p className="text-xl text-navy-600">How we coordinate email, phone, and LinkedIn for maximum impact</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {channelBreakdown.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg border border-navy-100 p-8"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-4">{item.channel}</h3>
                <p className="text-navy-700 mb-4 leading-relaxed">{item.focus}</p>
                <div className="pt-4 border-t border-navy-100">
                  <p className="text-sm text-navy-600 font-bold mb-2">Key Metrics</p>
                  <p className="text-sm text-navy-700">{item.metrics}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Process</h2>
            <p className="text-xl text-navy-600">How we execute and optimize outbound campaigns</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">KPIs We Measure</h2>
            <p className="text-xl text-navy-600">How we define and track campaign success</p>
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
            <p className="text-xl text-navy-600">How our outbound campaigns have driven pipeline growth</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-electric-50 to-blue-50 rounded-lg border border-electric-300 p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-2">SaaS Success</h3>
                <p className="text-navy-700 leading-relaxed mb-4">
                  Scattered, inconsistent campaigns coordinated into strategic, multi-touch outreach with clear ownership and accountability.
                </p>
                <p className="text-sm font-medium text-electric-600">
                  Improved response rates and engagement through coordinated campaigns.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-electric-50 to-blue-50 rounded-lg border border-electric-300 p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-2">IT Services Success</h3>
                <p className="text-navy-700 leading-relaxed mb-4">
                  Email delivery challenges resolved through list quality improvements and sender reputation management across campaigns.
                </p>
                <p className="text-sm font-medium text-electric-600">
                  Strong inbox placement and reduced bounce rates achieved.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-electric-50 to-blue-50 rounded-lg border border-electric-300 p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-2">B2B SaaS Success</h3>
                <p className="text-navy-700 leading-relaxed mb-4">
                  Ad-hoc outreach transformed into a disciplined, tested approach with ongoing optimization and learning cycles.
                </p>
                <p className="text-sm font-medium text-electric-600">
                  Significant pipeline impact and conversion improvements delivered.
                </p>
              </div>
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
            <p className="text-xl text-navy-600">Questions about our outbound campaign service</p>
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
        headline="Ready to Launch Your Outbound Campaign?"
        description="Let's design and execute a multi-channel campaign tailored to your target market and sales goals."
        primaryButtonText="Book Strategy Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
      />
    </div>
  );
}
