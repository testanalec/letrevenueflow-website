'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Terms() {
  const sections = [
    {
      title: 'Agreement to Terms',
      content:
        'By accessing and using the LetRevenueFlow website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    },
    {
      title: 'License Grant',
      content:
        'LetRevenueFlow grants you a limited, non-exclusive, non-transferable license to access and use the Site for lawful purposes in accordance with these Terms. You agree not to reproduce, distribute, transmit, or otherwise exploit any content on the Site without prior written permission from LetRevenueFlow.',
    },
    {
      title: 'Service Description',
      subsections: [
        {
          heading: 'Our Services',
          content:
            'LetRevenueFlow provides B2B lead generation, appointment setting, outbound sales campaign execution, and pipeline management services. All services are delivered as described in the engagement agreement between you and LetRevenueFlow.',
        },
        {
          heading: 'No Guarantee',
          content:
            'LetRevenueFlow does not guarantee specific results, including lead volume, response rates, or revenue. We commit to best efforts execution and continuous optimization, but results depend on multiple factors outside our control.',
        },
        {
          heading: 'Service Modifications',
          content:
            'We reserve the right to modify or discontinue services at any time. We will provide reasonable notice of material changes to our services.',
        },
      ],
    },
    {
      title: 'Intellectual Property Rights',
      subsections: [
        {
          heading: 'Our IP',
          content:
            'All content on the Site, including text, graphics, logos, images, and software, is the property of LetRevenueFlow or our content suppliers and is protected by international copyright laws.',
        },
        {
          heading: 'Your Data',
          content:
            'You retain ownership of any data you provide to us. You grant LetRevenueFlow a license to use your data for the purposes of delivering services, including conducting campaigns on your behalf.',
        },
        {
          heading: 'Feedback',
          content:
            'Any feedback, suggestions, or ideas you provide to LetRevenueFlow may be used by us without any obligation to compensate you.',
        },
      ],
    },
    {
      title: 'User Responsibilities',
      subsections: [
        {
          heading: 'Accurate Information',
          content:
            'You agree to provide accurate, current, and complete information when using our services. You are responsible for maintaining the confidentiality of your account information.',
        },
        {
          heading: 'Prohibited Activities',
          content:
            'You agree not to: (1) violate any applicable laws or regulations, (2) infringe on intellectual property rights, (3) transmit harmful or malicious code, (4) harass or defame others, (5) engage in fraudulent activities, (6) interfere with our operations.',
        },
        {
          heading: 'Compliance',
          content:
            'You are responsible for ensuring that our services are used in compliance with all applicable laws, including data protection regulations such as GDPR and CCPA.',
        },
      ],
    },
    {
      title: 'Data and Content',
      subsections: [
        {
          heading: 'Data Security',
          content:
            'LetRevenueFlow implements security measures to protect your data. However, no system is completely secure. We are not responsible for unauthorized access to your data beyond our reasonable control.',
        },
        {
          heading: 'Data Retention',
          content:
            'We retain your data for the duration of our engagement and for the period required by law. You may request deletion of your data at any time, subject to legal retention obligations.',
        },
        {
          heading: 'Third-Party Services',
          content:
            'Our services integrate with third-party platforms such as CRMs and email providers. Your use of these services is governed by their terms and privacy policies, not ours.',
        },
      ],
    },
    {
      title: 'Limitation of Liability',
      content:
        'To the maximum extent permitted by law, LetRevenueFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or services, even if we have been advised of the possibility of such damages.',
    },
    {
      title: 'Indemnification',
      content:
        'You agree to indemnify, defend, and hold harmless LetRevenueFlow from any claims, damages, or costs arising out of: (1) your violation of these Terms, (2) your violation of any applicable law, (3) your use of our services in violation of our instructions, (4) your infringement of any third-party rights.',
    },
    {
      title: 'Dispute Resolution',
      subsections: [
        {
          heading: 'Governing Law',
          content:
            'These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.',
        },
        {
          heading: 'Arbitration',
          content:
            'Any dispute arising out of or related to these Terms shall be resolved through binding arbitration administered by a mutually agreed arbitrator, rather than in court.',
        },
        {
          heading: 'Contact for Disputes',
          content:
            'Before initiating formal dispute resolution, you agree to contact LetRevenueFlow and attempt to resolve the matter informally.',
        },
      ],
    },
    {
      title: 'Termination',
      content:
        'Either party may terminate the engagement with written notice. Upon termination, your right to use our services ceases immediately. We will provide access to your data for 30 days after termination to allow for retrieval.',
    },
    {
      title: 'Amendments',
      content:
        'LetRevenueFlow reserves the right to modify these Terms at any time. Material changes will be posted on this page with an updated revision date. Your continued use of the Site constitutes acceptance of the modified Terms.',
    },
    {
      title: 'Contact Us',
      content:
        'If you have any questions about these Terms and Conditions, please contact us at: hello@letrevenueflow.com',
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-20 pb-12 md:pb-24">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Terms and Conditions
            </h1>
            <p className="text-lg text-navy-100">
              Last updated: April 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-navy max-w-none"
          >
            {sections.map((section, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">{section.title}</h2>

                {section.content && (
                  <p className="text-navy-700 leading-relaxed mb-6">{section.content}</p>
                )}

                {section.subsections && (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, subIdx) => (
                      <div key={subIdx}>
                        <h3 className="text-xl font-bold text-navy-900 mb-3">
                          {subsection.heading}
                        </h3>
                        <p className="text-navy-700 leading-relaxed">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <p className="text-navy-600 text-sm">
              By using our services, you acknowledge that you have read and understood these Terms and Conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 bg-navy-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-navy-600 mb-4">Related Policies</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/privacy-policy" className="text-electric-600 hover:text-electric-700 font-medium">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-electric-600 hover:text-electric-700 font-medium">
                Cookie Policy
              </Link>
              <Link href="/contact" className="text-electric-600 hover:text-electric-700 font-medium">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
