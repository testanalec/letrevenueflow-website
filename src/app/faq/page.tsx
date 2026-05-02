'use client';

// Metadata: This page inherits SEO metadata from layout.tsx with title "FAQ | LetRevenueFlow"
// Description: "Frequently asked questions about LetRevenueFlow's B2B lead generation services, pricing, process, and results. Get answers to common questions."

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('General');

  const faqCategories = {
    General: [
      {
        question: 'What is LetRevenueFlow?',
        answer:
          'LetRevenueFlow is a B2B lead generation and pipeline management company. We help SaaS, IT services, and technology companies build predictable revenue pipelines through targeted outreach, lead qualification, and continuous optimization.',
      },
      {
        question: 'How is LetRevenueFlow different from other agencies?',
        answer:
          'We\'re not a freelancer marketplace or call center. LetRevenueFlow is a dedicated revenue partner with a stable team of B2B experts. We take ownership of your pipeline growth, operate transparently, and focus on revenue metrics—not just activity.',
      },
      {
        question: 'Who are your typical clients?',
        answer:
          'Our ideal clients are B2B SaaS companies, IT services firms, and technology companies. They typically have a team of varying sizes, are experiencing growth, and need a dedicated partner to scale outbound.',
      },
      {
        question: 'Where is LetRevenueFlow based?',
        answer:
          'We\'re based in Gurgaon, India, which allows us to serve US, UK, and EU markets with 24-hour turnaround capability. Our team works across timezones to ensure your campaigns are always moving forward.',
      },
      {
        question: 'What does your team look like?',
        answer:
          'Our team consists of experienced B2B operators with extensive combined experience in lead generation, sales enablement, and revenue operations. Everyone on our team has worked in-house at B2B companies and understands your challenges firsthand.',
      },
    ],
    Services: [
      {
        question: 'What services do you offer?',
        answer:
          'We offer lead generation, appointment setting, outbound sales campaigns, and full pipeline management. All services are available across email, LinkedIn, and phone channels.',
      },
      {
        question: 'Can you handle multi-channel outreach?',
        answer:
          'Yes. We run coordinated campaigns across email, LinkedIn, and phone. This multi-channel approach increases response rates and gives us more touchpoints to engage prospects.',
      },
      {
        question: 'Do you integrate with our CRM?',
        answer:
          'Yes. We integrate with Salesforce, HubSpot, Pipedrive, and other major CRMs. All leads are automatically synced, tagged, and tracked within your system so you have real-time visibility.',
      },
      {
        question: 'Can you handle custom workflows?',
        answer:
          'Absolutely. We work with your existing processes and CRM setup. If you need custom workflows, automations, or integrations, we can build those as part of the engagement.',
      },
      {
        question: 'What if my CRM isn\'t on your integration list?',
        answer:
          'Let us know which CRM you use. We can usually integrate via API, Zapier, or manual workflows. We\'ll figure out a solution that works for your setup.',
      },
    ],
    Pricing: [
      {
        question: 'What are your pricing tiers?',
        answer:
          'We have three tiers: Starter, Growth, and Scale (custom). Visit our pricing page for detailed features and what\'s included at each level.',
      },
      {
        question: 'What\'s included in the price?',
        answer:
          'Your monthly fee covers all service delivery, outreach execution, lead qualification, reporting, and support. Additional services like CRM setup or custom strategy sessions may have separate fees.',
      },
      {
        question: 'Do you charge setup fees?',
        answer:
          'No hidden setup fees. Some clients opt for a separate strategy consultation to accelerate onboarding, but this is optional. Contact us for details.',
      },
      {
        question: 'Are there volume commitments?',
        answer:
          'We typically recommend starting with a 30-day pilot to establish baseline metrics and validate quality. Most clients move into 3-6 month engagements after the pilot.',
      },
      {
        question: 'What if I need less than Starter tier volume?',
        answer:
          'We can work on custom arrangements for smaller volume. Contact us to discuss your specific needs and we\'ll find a solution that fits your situation.',
      },
    ],
    Process: [
      {
        question: 'What\'s your typical engagement structure?',
        answer:
          'Most engagements follow this structure: (1) Initial consultation and ICP definition, (2) 30-day pilot campaign to test and validate, (3) Monthly strategy reviews and optimization, (4) Quarterly business reviews to assess ROI and plan scaling.',
      },
      {
        question: 'How long does it take to get started?',
        answer:
          'From contract signing to first outreach typically takes a few weeks. This includes ICP definition, list building, message development, CRM setup, and campaign launch.',
      },
      {
        question: 'How do you define our ICP?',
        answer:
          'We work with you to define ideal customer profile based on (1) your best existing customers, (2) company metrics and firmographics, (3) roles and personas of decision makers. This usually takes 1-2 strategy sessions.',
      },
      {
        question: 'Can you work with our existing lead list?',
        answer:
          'Yes. If you have a list of prospects you want us to reach out to, we can work with that. We\'ll validate the list, clean it, and execute the campaigns on it.',
      },
      {
        question: 'What happens if we want to change direction?',
        answer:
          'We\'re flexible. If a campaign isn\'t working, we pivot. If your target market changes, we adjust our targeting and messaging. This is why we do frequent strategy reviews and optimization cycles.',
      },
    ],
    Results: [
      {
        question: 'What kind of results can we expect?',
        answer:
          'Results vary significantly by industry, ICP, and offer. We\'ll share specific benchmarks for your industry during the discovery call based on your market and business model.',
      },
      {
        question: 'How long until we see results?',
        answer:
          'We typically see the first responses within days of campaign launch. Meaningful pipeline impact usually takes several weeks as we test, learn, and optimize.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'Success is measured by metrics that matter to you: pipeline generated, cost per qualified lead, meeting show rate, deal close rates, and revenue influenced. We provide transparent monthly reporting on all KPIs.',
      },
      {
        question: 'What if we\'re not seeing results after a couple of months?',
        answer:
          'We focus on long-term partnerships, not quick wins. If you\'re not seeing results after a reasonable period, we\'ll conduct a free strategy audit, identify what\'s not working, and adjust your approach at no additional cost.',
      },
      {
        question: 'Do you guarantee results?',
        answer:
          'No. We can\'t guarantee results because they depend on many variables outside our control (product fit, offer, sales team quality, etc.). What we guarantee is effort, transparency, and optimization. We\'re invested in your success and will keep improving until you see results.',
      },
    ],
  };

  const categoryList = Object.keys(faqCategories);

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              Everything you need to know about LetRevenueFlow, our services, and how we work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 items-center"
          >
            {categoryList.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-electric-600 text-white'
                    : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                  {selectedCategory}
                </h2>
                <p className="text-lg text-navy-600">
                  {selectedCategory === 'General' && 'Learn about LetRevenueFlow and our mission'}
                  {selectedCategory === 'Services' && 'Questions about our service offerings'}
                  {selectedCategory === 'Pricing' && 'Questions about pricing and packages'}
                  {selectedCategory === 'Process' && 'How we work with our clients'}
                  {selectedCategory === 'Results' && 'Expectations and measurement'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <FAQAccordion items={faqCategories[selectedCategory as keyof typeof faqCategories]} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Didn't find your answer?
            </h2>
            <p className="text-lg text-navy-600 mb-10 max-w-2xl mx-auto">
              Reach out to our team. We're happy to discuss any questions you have about LetRevenueFlow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="/book-a-call"
                className="px-8 py-3 border border-electric-600 text-electric-600 font-medium rounded-lg hover:bg-white transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Start Your Pipeline Growth Journey?"
        description="Let's talk about your goals and how LetRevenueFlow can help you build a predictable, scalable revenue pipeline."
        primaryButtonText="Schedule a Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Get in Touch"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
