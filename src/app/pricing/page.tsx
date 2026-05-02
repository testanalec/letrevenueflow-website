'use client';

// Metadata: This page inherits SEO metadata from layout.tsx with title "Pricing | LetRevenueFlow"
// Description: "Flexible engagement models for B2B lead generation and outbound sales. Custom pricing based on your goals, team, and growth stage. Talk to us about pricing."

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function Pricing() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        body: JSON.stringify({ _subject: 'Pricing Inquiry from LetRevenueFlow', ...formData }),
      });
      if (res.ok) { setSubmitted(true); } else { setError(true); }
    } catch { setError(true); } finally { setIsLoading(false); }
  };

  const faqItems = [
    {
      question: 'How is pricing structured?',
      answer: 'We offer flexible engagement models tailored to your goals, team size, and growth stage. Every engagement is custom-scoped after an initial discovery call.',
    },
    {
      question: 'Is there a minimum commitment?',
      answer: 'We typically recommend a minimum engagement period to allow campaigns to ramp up and optimize. The specifics depend on your goals and the services selected.',
    },
    {
      question: 'What is included in every engagement?',
      answer: 'Every engagement includes campaign strategy, ICP definition, targeting, outreach execution, qualification, and regular reporting. The scope and channels vary based on your needs.',
    },
    {
      question: 'Do you offer performance-based pricing?',
      answer: 'We can discuss performance-based or hybrid models depending on the engagement scope. We believe in aligning incentives with your revenue goals.',
    },
    {
      question: 'Can I start small and scale up?',
      answer: 'Absolutely. Many of our clients start with a focused engagement and expand as they see results. We design our services to be modular and scalable.',
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Custom Engagement Models for Predictable Growth
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Every business is different. We design outbound programs tailored to your goals, industry, and growth stage — not one-size-fits-all packages.
            </p>
            <a href="#pricing-contact" className="inline-block px-8 py-4 bg-electric-600 text-white font-bold rounded-lg hover:bg-electric-700 transition-colors shadow-xl text-lg">
              Talk to Us About Pricing
            </a>
          </motion.div>
        </div>
      </section>

      {/* What Every Engagement Includes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">What Every Engagement Includes</h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">Regardless of scope, every client gets the strategic foundation needed for predictable pipeline growth.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'ICP Definition & Targeting Strategy',
              'Campaign Design & Messaging',
              'Multi-Channel Outreach Execution',
              'Lead Qualification & Handoff',
              'Regular Reporting & Analytics',
              'Dedicated Account Management',
              'CRM Integration Support',
              'Continuous Campaign Optimization',
              'Transparent Communication',
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-navy-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-electric-600 flex-shrink-0 mt-0.5" />
                <span className="text-navy-900 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">How We Scope Engagements</h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">We start with understanding your goals and design a program that fits.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Discovery Call', desc: 'We learn about your business, goals, current pipeline, and challenges. No obligation.' },
              { step: '02', title: 'Custom Proposal', desc: 'Based on our conversation, we design a tailored engagement with clear deliverables and expectations.' },
              { step: '03', title: 'Launch & Optimize', desc: 'We execute, measure, report, and continuously improve. You see exactly what is happening and why.' },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-electric-600 text-white font-bold text-xl mb-5">{item.step}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-navy-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Pricing */}
      <section id="pricing-contact" className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3 text-center">Get a Custom Quote</h2>
            <p className="text-lg text-navy-600 mb-10 text-center">Tell us about your goals and we will put together a proposal that fits.</p>

            {submitted ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Thank You!</h3>
                <p className="text-navy-700 text-lg">We have received your inquiry and will get back to you within 24 hours.</p>
              </div>
            ) : (
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
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1.5">Company Name *</label>
                  <input required type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1.5">Tell us about your goals</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="What services are you interested in? What are your pipeline goals?" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600 resize-none" />
                </div>
                {error && <p className="text-red-600 text-sm flex items-center gap-1"><AlertCircle className="w-4 h-4" />Something went wrong. Please try again.</p>}
                <button type="submit" disabled={isLoading} className="w-full px-6 py-4 bg-electric-600 text-white font-bold rounded-lg hover:bg-electric-700 transition-colors disabled:opacity-50 text-lg">{isLoading ? 'Sending...' : 'Request Custom Quote'}</button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Pricing FAQ</h2>
          </motion.div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Discuss Your Growth Goals?</h2>
            <p className="text-xl text-navy-200 mb-10 max-w-2xl mx-auto">Book a call with our team to explore how we can help build your revenue pipeline.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-a-call" className="inline-flex items-center gap-2 px-8 py-4 bg-electric-600 text-white font-bold rounded-lg hover:bg-electric-700 transition-colors text-lg">Book Strategy Call <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
