'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Phone,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Users,
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

export default function AppointmentSettingContent() {
  const painPoints = [
    {
      title: 'Poor Meeting Show Rates',
      description: 'Booked meetings that don\'t show kill productivity and waste sales team time',
    },
    {
      title: 'Unqualified Meetings',
      description: 'Wrong personas, unclear budget, or no real business need wastes sales conversations',
    },
    {
      title: 'Cold Call Fatigue',
      description: 'Your sales team is tired of making cold calls and wants to focus on closing deals',
    },
    {
      title: 'Long Sales Cycles',
      description: 'Early engagement and relationship building get lost in the early funnel',
    },
    {
      title: 'No Discovery Done',
      description: 'Sales reps have to rebuild rapport and discover pain points from scratch',
    },
    {
      title: 'Inconsistent Calling Quality',
      description: 'Results vary widely depending on who\'s on the phone and how they approach calls',
    },
  ];

  const whatsIncluded = [
    {
      icon: Users,
      title: 'Qualification Criteria Definition',
      description:
        'We establish clear qualification standards with you: decision-maker titles, company size, budget indicators, business need, and timeline.',
    },
    {
      icon: Phone,
      title: 'Skilled Calling & Messaging',
      description:
        'Our experienced team conducts phone calls and multi-channel outreach using proven conversation frameworks, not cold scripts.',
    },
    {
      icon: TrendingUp,
      title: 'Pain Point Discovery',
      description:
        'We conduct discovery calls to understand prospect challenges, validate business need, and establish rapport before handoff to sales.',
    },
    {
      icon: MessageSquare,
      title: 'Objection Handling & Positioning',
      description:
        'We skillfully navigate common objections and position the value proposition before transferring to your sales team.',
    },
    {
      icon: BarChart3,
      title: 'Meeting Scheduling & Confirmation',
      description:
        'Direct calendar integration, automated confirmations, and reminder sequences to maximize show rates.',
    },
    {
      icon: CheckCircle,
      title: 'Detailed Handoff Notes',
      description:
        'Each scheduled meeting includes comprehensive notes: prospect challenges, budget/timeline, key decision criteria, and sales talking points.',
    },
  ];

  const kpisMeasured = [
    {
      metric: 'Conversations Initiated',
      description: 'Total number of meaningful prospect conversations (calls, video, deep message exchanges)',
    },
    {
      metric: 'Meetings Booked',
      description: 'Qualified appointments scheduled with prospects',
    },
    {
      metric: 'Show Rate',
      description: 'Percentage of scheduled meetings that the prospect actually attends',
    },
    {
      metric: 'Cost Per Meeting',
      description: 'Total investment divided by the number of qualified meetings booked',
    },
    {
      metric: 'Meeting-to-Opportunity Rate',
      description: 'Percentage of completed meetings that convert to sales opportunities',
    },
    {
      metric: 'Deal Influence',
      description: 'Revenue influenced and closed from appointments set through our service',
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Qualification Briefing',
      description:
        'We meet with your sales team to understand qualification criteria, typical sales conversation flow, and what makes a "good" meeting.',
    },
    {
      number: '2',
      title: 'List Preparation',
      description:
        'We source and validate a targeted list of prospects that match your ICP and qualification criteria.',
    },
    {
      number: '3',
      title: 'Multi-Channel Outreach',
      description:
        'Phone calls, LinkedIn messages, and email sequences to initiate conversations and establish initial interest.',
    },
    {
      number: '4',
      title: 'Discovery & Qualification',
      description:
        'Our team conducts qualifying conversations to understand challenges, validate business need, and confirm decision-maker status.',
    },
    {
      number: '5',
      title: 'Meeting Scheduling',
      description:
        'For qualified prospects, we schedule meetings directly on your team\'s calendar with confirmed attendees.',
    },
    {
      number: '6',
      title: 'Handoff & Follow-Up',
      description:
        'Complete context notes, meeting prep material, and automated reminders to ensure high show rates and successful conversations.',
    },
  ];

  const faqItems = [
    {
      question: 'What meeting show rate do you typically achieve?',
      answer:
        'Our average show rate is 75-85% depending on industry and ICP specificity. This is significantly higher than cold outreach because we conduct discovery and build rapport before scheduling. We share weekly show rate metrics so you can see performance.',
    },
    {
      question: 'What makes your appointment setting different from outsourced call centers?',
      answer:
        'We\'re not a high-volume call center. Our team is trained in consultative selling, not transactional calling. We focus on quality conversations, discovery, and building rapport rather than just booking any meeting. Every call qualifies for business need and decision-maker fit.',
    },
    {
      question: 'What if a prospect says they\'re not interested?',
      answer:
        'We handle objections professionally and follow up when timing might be better. If genuinely not a fit, we move on rather than pushing. However, many initial "no thank you" responses become meetings once we establish value and address concerns.',
    },
    {
      question: 'Can you work with my existing CRM and calendar system?',
      answer:
        'Yes. We integrate with Salesforce, HubSpot, Outlook, Google Calendar, and other systems. Meetings are booked directly into your calendar with all prospect data and conversation notes logged in your CRM.',
    },
    {
      question: 'How do you prepare for calls if you don\'t know our business deeply?',
      answer:
        'We conduct a thorough onboarding with your team to understand your value prop, ideal customer, sales process, and common objections. We also provide call scripts and positioning frameworks that your team can review and refine.',
    },
    {
      question: 'What happens if meetings aren\'t showing up?',
      answer:
        'Low show rates usually indicate a qualification issue. We analyze the meetings and adjust our qualification criteria, outreach approach, or confirmation process. If show rates drop, we conduct a full audit and make changes at no additional cost.',
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
              Qualified Appointments That Actually Convert
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              Skilled appointment setting focused on conversation quality, discovery, and warm handoffs. High show rates. High-quality meetings.
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
            <p className="text-xl text-navy-600">The appointment setting challenges that slow down deal flow</p>
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
            <p className="text-xl text-navy-600">Our appointment setting service includes</p>
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
            <p className="text-xl text-navy-600">How we book qualified, high-show-rate meetings</p>
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

      {/* The Difference Section */}
      <section className="py-16 md:py-24 bg-electric-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">What Makes Our Approach Different</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Consultative, Not Transactional',
                  description:
                    'We conduct real discovery calls to understand prospect challenges, validate business need, and establish rapport. Not just pushing meetings onto calendars.',
                },
                {
                  title: 'High Show Rates',
                  description:
                    'Our average show rate is 75-85% because we qualify thoroughly and confirm before booking. Automated reminders and follow-up sequences keep the meeting top-of-mind.',
                },
                {
                  title: 'Warm Handoffs to Sales',
                  description:
                    'Detailed context notes, challenge summaries, and budget/timeline indicators mean your sales team walks into a warm conversation, not a cold call.',
                },
                {
                  title: 'Accountability & Reporting',
                  description:
                    'Weekly metrics on conversations, bookings, show rates, and quality indicators. Monthly reviews to adjust approach based on what\'s working.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 border border-electric-200"
                >
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-navy-700 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
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

      {/* Case Study Placeholder */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Success Stories</h2>
            <p className="text-xl text-navy-600">How our appointment setting service has improved meeting quality</p>
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
                challenge="Low show rates (55%) and unqualified meetings were wasting sales team time. Needed to improve meeting quality and predictability."
                resultMetric="Meeting Show Rate"
                resultValue="81%"
                caseStudyHref="/case-studies"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CaseStudyCard
                clientType="IT Services"
                challenge="Sales team spending 60% of time on discovery calls instead of closing. Needed pre-qualified meetings with clear budget and timeline."
                resultMetric="Sales Productivity"
                resultValue="+35%"
                caseStudyHref="/case-studies"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CaseStudyCard
                clientType="B2B SaaS"
                challenge="High volume of booked meetings but low conversion rate. Needed better qualification and discovery before handoff."
                resultMetric="Meeting-to-Opp Rate"
                resultValue="42%"
                caseStudyHref="/case-studies"
              />
            </motion.div>
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
            <p className="text-xl text-navy-600">Questions about our appointment setting service</p>
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
        headline="Ready to Book High-Quality Meetings?"
        description="Let's discuss your qualification criteria and get your first batch of qualified appointments scheduled."
        primaryButtonText="Book Strategy Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Get Free Pipeline Audit"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
