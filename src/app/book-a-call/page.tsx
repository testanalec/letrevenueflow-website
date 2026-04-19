'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Target, AlertCircle } from 'lucide-react';
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

function StrategyCallForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', service: '', preferredTime: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    try {
      const res = await fetch('https://formsubmit.co/ajax/rmmittal@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ _subject: 'New Strategy Call Request from LetRevenueFlow', ...formData }),
      });
      if (res.ok) { setSubmitted(true); } else { setError(true); }
    } catch { setError(true); } finally { setIsLoading(false); }
  };

  if (submitted) {
    return (
      <section id="strategy-form" className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-navy-900 mb-4">Request Received!</h3>
          <p className="text-lg text-navy-700">Thank you for your interest. We will review your details and get back to you within 24 hours to schedule your strategy call.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="strategy-form" className="py-16 md:py-24 bg-navy-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3 text-center">Request Your Strategy Call</h2>
          <p className="text-lg text-navy-600 mb-10 text-center">Fill out the form below and we will reach out within 24 hours to schedule your call.</p>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1.5">Full Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1.5">Work Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@company.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1.5">Company Name *</label>
                <input required type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1.5">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-1.5">Service Interested In *</label>
              <select required name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600">
                <option value="">Select a service...</option>
                <option value="Lead Generation">Lead Generation</option>
                <option value="Appointment Setting">Appointment Setting</option>
                <option value="Outbound Sales Campaigns">Outbound Sales Campaigns</option>
                <option value="Revenue Pipeline Management">Revenue Pipeline Management</option>
                <option value="Not Sure">Not Sure Yet</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-1.5">Preferred Date / Time</label>
              <input type="text" name="preferredTime" value={formData.preferredTime} onChange={handleChange} placeholder="e.g., Weekdays after 2pm IST" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-1.5">Message / Notes</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us briefly about your goals or challenges..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600 resize-none" />
            </div>
            {error && <p className="text-red-600 text-sm flex items-center gap-1"><AlertCircle className="w-4 h-4" />Something went wrong. Please try again or email us directly.</p>}
            <button type="submit" disabled={isLoading} className="w-full px-6 py-4 bg-electric-600 text-white font-bold rounded-lg hover:bg-electric-700 transition-colors disabled:opacity-50 text-lg">{isLoading ? 'Sending...' : 'Request Strategy Call'}</button>
            <p className="text-xs text-navy-500 text-center">We respect your privacy. Your information will never be shared with third parties.</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

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

      {/* Strategy Call Request Form */}
      <StrategyCallForm />

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
              Fill out the form above and we will get back to you within 24 hours to schedule your call.
            </p>
            <a href="#strategy-form" className="inline-block px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors">
              Fill Out the Form
            </a>
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
