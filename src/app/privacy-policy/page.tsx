'use client';

// Metadata: This page inherits SEO metadata from layout.tsx with title "Privacy Policy | LetRevenueFlow"
// Description: "LetRevenueFlow privacy policy. Learn how we collect, use, and protect your personal data. GDPR compliant and transparent data handling practices."

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Introduction',
      content:
        'LetRevenueFlow ("Company", "we", "our", or "us") operates the letrevenueflow.com website (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.',
    },
    {
      title: 'Information Collection',
      subsections: [
        {
          heading: 'Personal Data We Collect',
          content:
            'We collect various types of information in connection with the services we provide, including: Name, email address, company information, job title, phone number, company website, and any other information you voluntarily provide through contact forms or inquiries.',
        },
        {
          heading: 'Automatic Collection',
          content:
            'When you visit our Site, we automatically collect certain information about your device, including browser type, operating system, referring URLs, and pages visited. We use this information to improve our Site and understand user behavior.',
        },
        {
          heading: 'Cookies',
          content:
            'We use cookies and similar tracking technologies to track activity on our Site and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
        },
      ],
    },
    {
      title: 'How We Use Your Information',
      subsections: [
        {
          heading: 'Service Delivery',
          content:
            'We use your information to provide, maintain, and improve our services, including lead generation, outreach, and pipeline management.',
        },
        {
          heading: 'Communication',
          content:
            'We may use your contact information to respond to your inquiries, send you updates about our services, and provide customer support.',
        },
        {
          heading: 'Analytics',
          content:
            'We use analytics tools to understand how our Site is used and to improve our services. This information is aggregated and does not personally identify you.',
        },
        {
          heading: 'Legal Compliance',
          content:
            'We may process your information where required by law or to protect the rights and safety of our company, employees, and users.',
        },
      ],
    },
    {
      title: 'Data Sharing',
      subsections: [
        {
          heading: 'Third-Party Service Providers',
          content:
            'We may share your information with third-party service providers who perform services on our behalf, such as email providers, CRM integrations, and analytics services. These providers are contractually obligated to maintain the confidentiality and security of your information.',
        },
        {
          heading: 'No Sale of Data',
          content:
            'We do not sell, trade, or share your personal information with third parties for their marketing purposes without your consent.',
        },
        {
          heading: 'Legal Requirements',
          content:
            'We may disclose your information when required by law, such as in response to lawful requests by public authorities or to comply with legal processes.',
        },
      ],
    },
    {
      title: 'Data Security',
      content:
        'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your information.',
    },
    {
      title: 'Your Rights',
      subsections: [
        {
          heading: 'Access and Portability',
          content:
            'You have the right to access, review, and receive a copy of your personal information that we hold.',
        },
        {
          heading: 'Correction and Deletion',
          content:
            'You have the right to request correction of inaccurate or incomplete information and to request deletion of your information, subject to legal obligations.',
        },
        {
          heading: 'Opt-Out',
          content:
            'You can opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails or by contacting us directly.',
        },
        {
          heading: 'Restrictions',
          content:
            'You may request that we restrict the processing of your information in certain circumstances.',
        },
      ],
    },
    {
      title: 'GDPR Compliance',
      content:
        'If you are located in the EU, you have rights under the General Data Protection Regulation (GDPR). We process your data on the basis of your consent or for the performance of our contract with you. You have the right to lodge a complaint with a supervisory authority if you believe your rights have been violated.',
    },
    {
      title: 'Cookies Policy',
      content:
        'Our Site uses cookies to enhance your experience. You can control cookie settings through your browser preferences. For more information about our use of cookies, please see our Cookie Policy.',
    },
    {
      title: 'Changes to This Policy',
      content:
        'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our Site. Your continued use of the Site following the posting of changes constitutes your acceptance of those changes.',
    },
    {
      title: 'Contact Us',
      content:
        'If you have any questions about this Privacy Policy or our privacy practices, please contact us at: hello@letrevenueflow.com or LetRevenueFlow, WeWork Gurgaon, Gurgaon, India.',
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
              Privacy Policy
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
              For questions or concerns, please contact us at{' '}
              <a href="mailto:hello@letrevenueflow.com" className="text-electric-600 hover:text-electric-700 font-medium">
                hello@letrevenueflow.com
              </a>
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
              <Link href="/terms" className="text-electric-600 hover:text-electric-700 font-medium">
                Terms & Conditions
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
