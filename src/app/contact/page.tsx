'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';

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

export default function Contact() {
  const faqItems = [
    {
      question: 'How long does it take to get a response?',
      answer:
        'We typically respond to inquiries within 24 hours on business days. If you need a faster response, feel free to call or schedule a call directly via our calendar.',
    },
    {
      question: 'What information should I provide in my inquiry?',
      answer:
        'The more details you provide about your situation, goals, and timeline, the better we can prepare for our conversation. Share your company size, current lead generation approach, and key metrics if possible.',
    },
    {
      question: 'Do you offer a free consultation?',
      answer:
        'Yes. We typically start with a 30-minute discovery call to understand your situation, discuss your goals, and determine if there\'s a fit. There\'s no obligation.',
    },
    {
      question: 'What if I need someone to call me instead of scheduling a call?',
      answer:
        'If you prefer to be called, let us know in the message form and provide your phone number and preferred time. We\'ll reach out to you directly.',
    },
    {
      question: 'Can I contact you with questions about your services?',
      answer:
        'Absolutely. Whether you have questions about pricing, our process, or how we work, please reach out. We\'re happy to discuss how we might be able to help.',
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Let's Talk About Your Pipeline
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              Questions about our services? Want to discuss your revenue goals? Reach out—we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
                Send us a message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold text-navy-900 mb-8">Get in Touch</h3>

                {/* Contact Methods */}
                <div className="space-y-8 mb-12">
                  {/* Email */}
                  <motion.div
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-electric-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-electric-600" />
                    </div>
                    <div>
                      <p className="text-sm text-navy-600 mb-1 font-semibold">Email</p>
                      <a
                        href="mailto:hello@letrevenueflow.com"
                        className="text-navy-900 font-medium hover:text-electric-600"
                      >
                        hello@letrevenueflow.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-electric-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-electric-600" />
                    </div>
                    <div>
                      <p className="text-sm text-navy-600 mb-1 font-semibold">Phone</p>
                      <a
                        href="tel:+91-XXXX-XXXX-XXXX"
                        className="text-navy-900 font-medium hover:text-electric-600"
                      >
                        +91 (XXX) XXX-XXXX
                      </a>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-electric-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-electric-600" />
                    </div>
                    <div>
                      <p className="text-sm text-navy-600 mb-1 font-semibold">Office</p>
                      <p className="text-navy-900 font-medium">
                        WeWork Gurgaon<br />
                        Gurgaon, India
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-navy-100 rounded-lg h-64 flex items-center justify-center border border-gray-300"
                >
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-navy-600 mx-auto mb-3" />
                    <p className="text-navy-600 font-medium">Interactive map would go here</p>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-8"
                >
                  <p className="text-sm text-navy-600 mb-4">
                    Prefer a phone call? Schedule a time that works for you.
                  </p>
                  <Link
                    href="/book-a-call"
                    className="inline-block px-6 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors w-full text-center"
                  >
                    Schedule a Call
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Contact FAQ
            </h2>
            <p className="text-xl text-navy-600">
              Quick answers to questions about getting in touch
            </p>
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
    </div>
  );
}
