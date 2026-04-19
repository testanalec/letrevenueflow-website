'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Calendar, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Define ICP',
    description: 'We identify your ideal customer profile and create detailed buyer personas for targeted outreach.',
    icon: Target,
  },
  {
    number: 2,
    title: 'Build Campaigns',
    description: 'Multi-channel campaigns across email, LinkedIn, and direct outreach personalized to each prospect.',
    icon: Zap,
  },
  {
    number: 3,
    title: 'Generate Meetings',
    description: 'Qualified prospects book meetings directly. We manage the entire process end-to-end.',
    icon: Calendar,
  },
  {
    number: 4,
    title: 'Track & Optimize',
    description: 'Monthly reviews, A/B testing, and optimization to continuously improve performance.',
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">How It Works</h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Our proven 4-step process delivers consistent, qualified pipeline growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-electric-600 to-electric-300 transform -translate-x-1/2" />
                )}

                {/* Card */}
                <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow relative z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-electric-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="inline-block p-3 bg-electric-50 rounded-lg mb-4 mt-4">
                    <Icon className="w-6 h-6 text-electric-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-navy-700 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-navy-700 text-lg mb-6">
            Ready to implement this process for your business?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Schedule Free Strategy Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
