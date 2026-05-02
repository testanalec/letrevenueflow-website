'use client';

// Metadata: This page inherits SEO metadata from layout.tsx with title "Thank You | LetRevenueFlow"
// Description: "Thank you for your inquiry. We've received your information and will be in touch within 24 hours to schedule your strategy call."

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Mail, Calendar, FileText } from 'lucide-react';
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

export default function ThankYou() {
  const whatHappensNext = [
    {
      icon: Mail,
      step: '1',
      title: 'Confirmation Email',
      description:
        'You\'ll receive a confirmation email within a few minutes with a summary of your inquiry and next steps.',
      timeline: 'Immediately',
    },
    {
      icon: Clock,
      step: '2',
      title: 'Review Your Information',
      description:
        'Our team will review your information, understand your goals, and prepare for our initial conversation.',
      timeline: '24 hours',
    },
    {
      icon: Calendar,
      step: '3',
      title: 'Schedule a Call',
      description:
        'We\'ll reach out to schedule a 30-minute strategy call. You can also book directly on our calendar if you prefer.',
      timeline: '24-48 hours',
    },
    {
      icon: FileText,
      step: '4',
      title: 'Strategy Discussion',
      description:
        'During our call, we\'ll discuss your pipeline goals, assess your current situation, and determine if there\'s a fit to work together.',
      timeline: 'Scheduled',
    },
  ];

  const resources = [
    {
      title: 'Pipeline Leak Audit Template',
      description: 'Identify where you\'re losing deals at every stage of your pipeline.',
      icon: FileText,
      href: '/resources',
    },
    {
      title: 'B2B Outbound Playbook',
      description: 'A complete framework for building and scaling your outbound motion.',
      icon: FileText,
      href: '/resources',
    },
    {
      title: 'Lead Scoring Workbook',
      description: 'Build a data-driven lead scoring model that actually works.',
      icon: FileText,
      href: '/resources',
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 pb-12 md:pb-24">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Thank You!
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Your inquiry has been received. We're excited to explore how LetRevenueFlow can help you build a predictable revenue pipeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">What Happens Next</h2>
            <p className="text-xl text-navy-600">
              Here's how we'll move forward with your inquiry
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {whatHappensNext.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-6 bg-navy-50 rounded-lg p-8 border border-gray-200"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-electric-100">
                      <Icon className="w-7 h-7 text-electric-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                      <span className="text-sm font-semibold text-electric-600 whitespace-nowrap ml-4">
                        {item.timeline}
                      </span>
                    </div>
                    <p className="text-navy-700 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              While You Wait, Learn
            </h2>
            <p className="text-xl text-navy-600">
              Check out these free resources to improve your pipeline generation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-electric-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{resource.title}</h3>
                  <p className="text-navy-700 mb-6 leading-relaxed">{resource.description}</p>
                  <Link
                    href={resource.href}
                    className="inline-block px-4 py-2 border border-electric-600 text-electric-600 font-medium rounded-lg hover:bg-electric-50 transition-colors text-sm"
                  >
                    View Resource
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Explore More
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/pricing"
                className="p-6 bg-navy-50 rounded-lg hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-navy-900 mb-2 group-hover:text-electric-600">
                  Pricing Plans
                </h3>
                <p className="text-sm text-navy-600">See our service tiers and features</p>
              </Link>

              <Link
                href="/blog"
                className="p-6 bg-navy-50 rounded-lg hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-navy-900 mb-2 group-hover:text-electric-600">
                  Blog
                </h3>
                <p className="text-sm text-navy-600">Read strategies and best practices</p>
              </Link>

              <Link
                href="/resources"
                className="p-6 bg-navy-50 rounded-lg hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-navy-900 mb-2 group-hover:text-electric-600">
                  Resources
                </h3>
                <p className="text-sm text-navy-600">Download templates and guides</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 md:py-24 bg-electric-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Questions in the meantime?
            </h2>
            <p className="text-lg text-navy-700 mb-10 max-w-2xl mx-auto">
              Feel free to reach out anytime. We're here to help.
            </p>
            <a
              href="mailto:hello@letrevenueflow.com"
              className="inline-block px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors"
            >
              Email Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
