'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Target } from 'lucide-react';
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

export default function BookACall() {
  const qualifications = [
    {
      icon: Target,
      title: 'Early-Stage Founders',
      description:
        'Building your first outbound motion and need guidance on targeting, messaging, and execution.',
    },
    {
      icon: Users,
      title: 'Sales & RevOps Leaders',
      description:
        'Leading a team and looking to scale lead generation or appointment setting operations.',
    },
    {
      icon: Clock,
      title: 'Busy Decision-Makers',
      description:
        'You know you need to improve pipeline generation but don\'t have the bandwidth to execute.',
    },
    {
      icon: CheckCircle,
      title: 'Growth Companies',
      description:
        'Scaling fast and need a dedicated team to handle outbound without slowing down your sales org.',
    },
  ];

  const whatToExpect = [
    {
      step: '1',
      title: 'Discovery',
      description:
        'We learn about your company, your current pipeline generation approach, and your biggest challenges.',
    },
    {
      step: '2',
      title: 'Assessment',
      description:
        'We analyze your situation against our experience with similar companies and identify quick wins.',
    },
    {
      step: '3',
      title: 'Recommendation',
      description:
        'We discuss potential next steps, answer your questions, and determine if there\'s a fit to work together.',
    },
    {
      step: '4',
      title: 'No Pressure',
      description:
        'This is a conversation, not a sales pitch. If it doesn\'t feel right, we\'ll respectfully pass and you\'ll still get value from the insights.',
    },
  ];

  const privacyPoints = [
    'Your information is confidential and will not be shared.',
    'We don\'t share your data with third parties.',
    'You can unsubscribe from future communications at any time.',
    'All conversations are protected under our privacy policy.',
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Book Your Strategy Call
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              30 minutes to discuss your pipeline goals and explore whether LetRevenueFlow is the right fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              This Call Is For You If...
            </h2>
            <p className="text-xl text-navy-600">
              These are the types of leaders and teams we work best with
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {qualifications.map((item, index) => {
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

      {/* Calendar Embed Section */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Calendar Placeholder */}
            <div className="h-[600px] bg-gradient-to-b from-navy-50 to-white flex items-center justify-center border-b border-gray-200">
              <div className="text-center">
                <Clock className="w-16 h-16 text-navy-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  Calendly Embed
                </h3>
                <p className="text-navy-600 max-w-xs">
                  Interactive calendar would be embedded here in production. Select your preferred date and time to get started.
                </p>
              </div>
            </div>

            {/* Info Text Below Calendar */}
            <div className="p-8 bg-white">
              <h3 className="font-semibold text-navy-900 mb-3">What to expect:</h3>
              <ul className="space-y-2 text-navy-700 text-sm">
                <li>⏱️ 30-minute strategy call</li>
                <li>💬 Discussion of your pipeline goals</li>
                <li>📊 Assessment of your current situation</li>
                <li>🎯 Next steps if there's mutual fit</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              What Happens During Our Call
            </h2>
            <p className="text-xl text-navy-600">
              Here's how we structure our strategy conversations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {whatToExpect.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 bg-navy-50 rounded-lg p-8 border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-electric-600 text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-navy-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meeting Expectations */}
      <section className="py-16 md:py-24 bg-electric-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              How to Prepare
            </h2>

            <div className="bg-white rounded-lg p-8 border-l-4 border-electric-600">
              <p className="text-navy-700 leading-relaxed mb-4">
                We keep these calls productive and focused. Here's what we recommend:
              </p>

              <ul className="space-y-3 text-navy-700">
                <li className="flex gap-3">
                  <span className="text-electric-600 font-bold">•</span>
                  <span>
                    <strong>Have your metrics ready.</strong> If you track them, share your current lead volume, cost per lead, and conversion rates.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-600 font-bold">•</span>
                  <span>
                    <strong>Think about your ICP.</strong> Who are your best customers? What industries, company sizes, and roles?
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-600 font-bold">•</span>
                  <span>
                    <strong>Identify your biggest pain point.</strong> Is it lead quality? Volume? Appointment setting? Pipeline visibility?
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-600 font-bold">•</span>
                  <span>
                    <strong>Be honest about your timeline.</strong> Do you need results in 30 days or are you planning 6 months out?
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Assurance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Your Privacy Matters to Us
            </h2>

            <div className="bg-navy-50 rounded-lg p-8 border border-gray-200">
              <p className="text-navy-700 leading-relaxed mb-6">
                We take your privacy seriously. Here's how we handle your information:
              </p>

              <div className="space-y-4">
                {privacyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-electric-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{point}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-navy-600 mt-6">
                For more details, see our{' '}
                <a href="/privacy-policy" className="text-electric-600 hover:text-electric-700 font-medium">
                  privacy policy
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Talk Strategy?
            </h2>
            <p className="text-lg text-navy-100 mb-10 max-w-2xl mx-auto">
              Pick a time that works for you. Our calendar is updated in real-time so you can book directly.
            </p>
            <div className="inline-block">
              <div className="px-8 py-3 bg-electric-600 text-white font-medium rounded-lg">
                Calendar loading...
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-navy-700 mb-4">
              Prefer to reach out via email? We're happy to discuss your needs.
            </p>
            <a
              href="mailto:hello@letrevenueflow.com"
              className="text-electric-600 hover:text-electric-700 font-medium"
            >
              Email us at hello@letrevenueflow.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
