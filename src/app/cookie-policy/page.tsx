'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CookiePolicy() {
  const sections = [
    {
      title: 'What Are Cookies?',
      content:
        'Cookies are small text files stored on your device when you visit a website. They are used to remember information about you and your preferences so that subsequent visits to the site are more personalized and convenient.',
    },
    {
      title: 'Types of Cookies We Use',
      subsections: [
        {
          heading: 'Essential Cookies',
          content:
            'These cookies are necessary for the website to function properly. They enable basic functionality such as page navigation, form submission, and access to secure areas. Without these cookies, the website cannot operate effectively. You cannot opt out of essential cookies.',
        },
        {
          heading: 'Performance Cookies',
          content:
            'We use performance cookies to understand how visitors interact with our Site. These cookies collect information about page load times, browser types, and traffic sources. This information helps us improve the performance and user experience of our Site.',
        },
        {
          heading: 'Functional Cookies',
          content:
            'Functional cookies enable personalized features and functionality. They remember your preferences, such as language selection and previous searches, to provide a more customized experience on subsequent visits.',
        },
        {
          heading: 'Analytics Cookies',
          content:
            'We use analytics cookies to track website usage patterns and user behavior. This information helps us understand which features are popular and how to improve our Site. We use Google Analytics for this purpose.',
        },
        {
          heading: 'Marketing Cookies',
          content:
            'Marketing cookies track your activity across websites to build a profile of your interests. This allows us to show you relevant advertising on other platforms. You can opt out of marketing cookies through your browser settings.',
        },
      ],
    },
    {
      title: 'Third-Party Cookies',
      content:
        'Some cookies on our Site are set by third-party services, including Google Analytics, marketing platforms, and CRM integrations. These third parties have their own cookie policies and privacy practices. We recommend reviewing their policies directly. You can opt out of third-party cookies through tools like the Network Advertising Initiative (NAI) opt-out page.',
    },
    {
      title: 'How We Use Cookie Information',
      subsections: [
        {
          heading: 'Improving Our Site',
          content:
            'We use cookie data to analyze user behavior, identify technical issues, and optimize the performance and design of our Site.',
        },
        {
          heading: 'Personalization',
          content:
            'Cookies allow us to remember your preferences and provide a more personalized experience when you return to our Site.',
        },
        {
          heading: 'Marketing and Advertising',
          content:
            'We use cookies to deliver targeted advertising and measure the effectiveness of our marketing campaigns.',
        },
        {
          heading: 'Security',
          content:
            'Cookies help us detect and prevent fraudulent activity and maintain the security of our Site.',
        },
      ],
    },
    {
      title: 'Cookie Retention',
      content:
        'The duration for which cookies remain on your device varies. Session cookies expire when you close your browser. Persistent cookies remain for a specified period, ranging from days to years, depending on the cookie. You can delete cookies at any time through your browser settings.',
    },
    {
      title: 'Managing Your Cookie Preferences',
      subsections: [
        {
          heading: 'Browser Settings',
          content:
            'Most browsers allow you to control cookies through settings. You can choose to accept all cookies, accept only essential cookies, or refuse all non-essential cookies. Note that refusing cookies may affect the functionality of our Site.',
        },
        {
          heading: 'Opt-Out Tools',
          content:
            'You can use third-party opt-out tools to manage your advertising preferences across multiple websites. The NAI Opt-Out Tool and Digital Advertising Alliance (DAA) provide options to opt out of interest-based advertising.',
        },
        {
          heading: 'Disabling Cookies',
          content:
            'Disabling cookies may impair the functionality of our Site and prevent certain features from working properly. Essential cookies cannot be disabled as they are necessary for the site to function.',
        },
      ],
    },
    {
      title: 'Do Not Track Signals',
      content:
        'Some browsers include a "Do Not Track" feature. Currently, there is no industry standard for recognizing Do Not Track signals. LetRevenueFlow does not respond to or honor Do Not Track signals from browsers at this time.',
    },
    {
      title: 'Updates to This Policy',
      content:
        'We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated policy on this page with an updated revision date.',
    },
    {
      title: 'Contact Us',
      content:
        'If you have questions about our use of cookies or this Cookie Policy, please contact us at: hello@letrevenueflow.com',
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
              Cookie Policy
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
            className="mt-16 pt-8 border-t border-gray-200 bg-navy-50 rounded-lg p-6"
          >
            <h3 className="font-bold text-navy-900 mb-3">Quick Cookie Settings</h3>
            <p className="text-navy-700 text-sm mb-4">
              You can manage your cookie preferences directly through your browser settings. Most modern browsers provide options to:
            </p>
            <ul className="text-navy-700 text-sm space-y-2">
              <li>View all cookies stored on your device</li>
              <li>Accept or reject cookies by category</li>
              <li>Delete cookies manually</li>
              <li>Set preferences for new visits</li>
            </ul>
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
              <Link href="/terms" className="text-electric-600 hover:text-electric-700 font-medium">
                Terms & Conditions
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
