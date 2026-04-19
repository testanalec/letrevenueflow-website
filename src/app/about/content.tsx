'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  Zap,
  TrendingUp,
  CheckCircle,
  Globe,
  BarChart3,
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

export default function AboutContent() {
  const whyChooseReasons = [
    {
      icon: BarChart3,
      title: 'Revenue-Focused Model',
      description: 'We measure success by pipeline impact, not activity. Every action ties to your growth metrics.',
    },
    {
      icon: Users,
      title: 'Direct Access to Operators',
      description: 'Work with experienced B2B operators, not freelancers. Our team brings real GTM experience.',
    },
    {
      icon: Zap,
      title: 'CRM-Connected Workflows',
      description: 'Seamless integration with your Salesforce, HubSpot, or Pipedrive. Real-time visibility into every lead.',
    },
    {
      icon: TrendingUp,
      title: 'Process-Driven Approach',
      description: 'Repeatable, documented processes ensure consistency and predictability across all campaigns.',
    },
    {
      icon: Globe,
      title: 'Timezone-Compatible Delivery',
      description: 'India-based operations mean 24-hour turnaround on deliverables for US, UK, and EU teams.',
    },
    {
      icon: CheckCircle,
      title: 'Transparent Reporting',
      description: 'Weekly dashboards, monthly strategy reviews, and complete audit trail of every action taken.',
    },
  ];

  const faqItems = [
    {
      question: 'How is LetRevenueFlow different from freelancer platforms?',
      answer:
        'We\'re not a marketplace or staffing service. LetRevenueFlow is a dedicated revenue partner with a stable team of B2B experts. We take ownership of your pipeline growth, provide strategic guidance, and operate as an extension of your sales organization.',
    },
    {
      question: 'What experience does your team have?',
      answer:
        'Our founders and core team bring extensive combined experience in B2B revenue operations, lead generation, pipeline management, and GTM strategy. We\'ve worked across SaaS, IT services, professional services, and technology sectors.',
    },
    {
      question: 'How do you ensure lead quality?',
      answer:
        'We define ICP criteria with you, validate every lead against those criteria, and use multi-channel research to confirm decision-maker fit. Our qualification process includes email verification, LinkedIn validation, and manual research protocols.',
    },
    {
      question: 'Can you integrate with our CRM?',
      answer:
        'Yes. We integrate with Salesforce, HubSpot, Pipedrive, and other major CRM platforms. All leads are automatically synced, tagged, and tracked within your system so you have real-time visibility.',
    },
    {
      question: 'What\'s your typical engagement structure?',
      answer:
        'Most engagements begin with a 30-day pilot to define process, validate quality, and establish KPIs. Then we move into a 3-6 month commitment with monthly strategy reviews and optimization cycles.',
    },
    {
      question: 'How do you measure success?',
      answer:
        'Success is measured by the metrics that matter to you: pipeline generated, cost per qualified lead, meeting show rate, deal close rates, and revenue influenced. We provide transparent monthly reporting on all KPIs.',
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
              About LetRevenueFlow
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              A revenue partner, not a service vendor. Built on extensive B2B GTM execution experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-navy-700 leading-relaxed">
              <p>
                LetRevenueFlow was founded on a simple insight: most B2B teams are stuck between two bad choices.
              </p>
              <p>
                On one hand, freelancer platforms offer flexibility but zero accountability. You get inconsistent quality, high turnover, and no strategy. On the other hand, traditional agencies are bloated, expensive, and often treat your account like a checkbox.
              </p>
              <p>
                We saw a gap. B2B companies needed a different model: a dedicated team of experienced operators who take ownership of revenue growth, operate transparently, and scale with you.
              </p>
              <p>
                That's LetRevenueFlow. We're not a call center. We're not a freelancer network. We're a revenue partner built by people who've spent years in B2B GTM—running campaigns, managing pipelines, and building scalable processes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">Our Mission</h2>
            <p className="text-xl text-navy-700 leading-relaxed mb-8">
              Help B2B companies build predictable, scalable revenue pipelines through process-driven lead generation, targeted outreach, and continuous pipeline management.
            </p>
            <p className="text-lg text-navy-600 leading-relaxed">
              We believe that revenue growth should be predictable, not a roll of the dice. By combining data, strategy, and execution discipline, we help our clients create reliable funnels that convert consistently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">How We Operate</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Process-Driven',
                description:
                  'Every campaign follows documented, repeatable processes. No cowboy tactics. Just proven workflows that scale.',
              },
              {
                title: 'CRM-Connected',
                description:
                  'Complete integration with your CRM. Real-time visibility, automated handoffs, and full audit trails for compliance.',
              },
              {
                title: 'Transparent Reporting',
                description:
                  'Weekly dashboards, monthly strategy reviews, and direct access to your account team. No hidden metrics or vanity stats.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-navy-50 rounded-lg p-8 border border-navy-100"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-4">{item.title}</h3>
                <p className="text-navy-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Delivery Model */}
      <section className="py-16 md:py-24 bg-electric-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">Global Delivery Model</h2>
            <div className="space-y-6 text-lg text-navy-700 leading-relaxed">
              <p>
                Our operating base is in Gurgaon, India, giving us the ability to serve US, UK, and EU markets with round-the-clock delivery capability.
              </p>
              <div className="bg-white rounded-lg p-8 border-l-4 border-electric-600">
                <h3 className="font-bold text-navy-900 mb-4">What This Means for You:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-electric-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>24-hour turnaround:</strong> Submit requirements in the morning, get results by end of your business day
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-electric-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Cost efficiency:</strong> Dedicated team without enterprise agency pricing
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-electric-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Scale without risk:</strong> Ramp up capacity rapidly without geographic constraints
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-electric-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Data security:</strong> GDPR-compliant processes and secure infrastructure
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Why Clients Choose Us</h2>
            <p className="text-xl text-navy-600">Six reasons why growth-focused B2B teams trust LetRevenueFlow</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-electric-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{reason.title}</h3>
                  <p className="text-navy-700 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Office & Credibility */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-12">Office & Credibility</h2>
            <div className="bg-white rounded-lg border border-navy-100 p-8 md:p-12">
              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                LetRevenueFlow maintains a dedicated office at WeWork Gurgaon, with a full-time team of operators, strategists, and execution specialists.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-navy-600 uppercase font-bold mb-1">Address</p>
                  <p className="text-lg text-navy-900 font-medium">WeWork Gurgaon, India</p>
                </div>
                <div>
                  <p className="text-sm text-navy-600 uppercase font-bold mb-1">Get in Touch</p>
                  <p className="text-lg text-navy-900 font-medium">
                    <a href="tel:+91-XXXX-XXXX-XXXX" className="text-electric-600 hover:text-electric-700">
                      +91 (XXX) XXX-XXXX
                    </a>
                  </p>
                </div>
              </div>
            </div>
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
            <p className="text-xl text-navy-600">Common questions about LetRevenueFlow and how we work</p>
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
        description="Let's talk about your growth goals and how LetRevenueFlow can help you build a predictable, scalable pipeline."
        primaryButtonText="Talk to a Strategist"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Get Free Pipeline Audit"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
