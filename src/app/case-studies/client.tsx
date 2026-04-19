'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CaseStudyCard from '@/components/CaseStudyCard';
import CTASection from '@/components/CTASection';

const caseStudies = [
  {
    id: 'saas-pipeline-growth',
    clientType: 'SaaS',
    service: 'Lead Generation',
    company: 'Mid-Market SaaS (Anonymous)',
    challenge: 'B2B workflow automation platform struggling to scale demos and SQLs. Sales team was spending 70% of time prospecting instead of closing.',
    resultMetric: 'Meetings Booked',
    resultValue: '64 qualified demos',
    secondaryMetric: 'Reply Rate',
    secondaryValue: '23%',
    href: '/case-studies/saas-pipeline-growth',
  },
  {
    id: 'it-services-enterprise-outreach',
    clientType: 'IT Services',
    service: 'Enterprise Outreach',
    company: 'Enterprise MSP (Anonymous)',
    challenge: 'Mid-market managed services provider unable to reach C-level IT decision-makers. Enterprise pipeline was unpredictable and heavily dependent on inbound.',
    resultMetric: 'Enterprise Meetings',
    resultValue: '28 qualified',
    secondaryMetric: 'Average Deal Size',
    secondaryValue: '$185K',
    href: '/case-studies/it-services-enterprise-outreach',
  },
  {
    id: 'agency-partnership-pipeline',
    clientType: 'Agency',
    service: 'Partnership Pipeline',
    company: 'Digital Marketing Agency (Anonymous)',
    challenge: 'Growing creative agency needed to build partnership and referral pipeline. Principals were spending too much time on business development instead of delivering for clients.',
    resultMetric: 'New Clients',
    resultValue: '8 signed',
    secondaryMetric: 'Pipeline Built',
    secondaryValue: '$1.2M',
    href: '/case-studies/agency-partnership-pipeline',
  },
  {
    id: 'saas-enterprise-expansion',
    clientType: 'SaaS',
    service: 'Account-Based Marketing',
    company: 'Enterprise SaaS (Anonymous)',
    challenge: 'High-ACV SaaS product struggling with long sales cycles. Needed to get in front of more C-level buyers earlier in the buying process.',
    resultMetric: 'Sales Cycle Reduction',
    resultValue: '-22 days',
    secondaryMetric: 'Win Rate Increase',
    secondaryValue: '+18%',
    href: '/case-studies/saas-pipeline-growth',
  },
  {
    id: 'it-services-pipeline-velocity',
    clientType: 'IT Services',
    service: 'Lead Generation',
    company: 'Systems Integrator (Anonymous)',
    challenge: 'Complex enterprise IT deals with long sales cycles. Pipeline forecasting was unreliable. Needed more consistent meeting flow to improve forecast accuracy.',
    resultMetric: 'Pipeline Generated',
    resultValue: '$4.2M',
    secondaryMetric: 'Deal Velocity',
    secondaryValue: '5.2 months',
    href: '/case-studies/it-services-enterprise-outreach',
  },
  {
    id: 'agency-client-acquisition',
    clientType: 'Agency',
    service: 'Lead Generation',
    company: 'Consulting Firm (Anonymous)',
    challenge: 'Boutique consulting firm wanting to scale. Relied heavily on referrals and inbound. Needed outbound channel to build predictable pipeline.',
    resultMetric: 'Pipeline Built',
    resultValue: '$2.1M',
    secondaryMetric: 'Meetings',
    secondaryValue: '32 qualified',
    href: '/case-studies/agency-partnership-pipeline',
  },
];

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'SaaS', value: 'saas' },
  { label: 'IT Services', value: 'it-services' },
  { label: 'Agencies', value: 'agency' },
];

const serviceFilterOptions = [
  { label: 'All Services', value: 'all' },
  { label: 'Lead Generation', value: 'lead-generation' },
  { label: 'Enterprise Outreach', value: 'enterprise-outreach' },
  { label: 'Account-Based Marketing', value: 'account-based-marketing' },
  { label: 'Partnership Pipeline', value: 'partnership-pipeline' },
];

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

export default function CaseStudiesPage() {
  const [industryFilter, setIndustryFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');

  const filteredCaseStudies = caseStudies.filter((study) => {
    const industryMatch =
      industryFilter === 'all' ||
      study.clientType.toLowerCase() === industryFilter;
    const serviceMatch =
      serviceFilter === 'all' ||
      study.service.toLowerCase().replace(' ', '-') === serviceFilter;
    return industryMatch && serviceMatch;
  });

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-electric-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-electric-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Real Results from Real Campaigns
            </h1>
            <p className="text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
              Proven pipeline growth across SaaS, IT Services, and Agencies. See how we've helped companies accelerate revenue and scale predictable pipeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-electric-400 mb-2">
                {caseStudies.length}
              </div>
              <p className="text-navy-300">Case Studies</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-electric-400 mb-2">
                15,000+
              </div>
              <p className="text-navy-300">Meetings Booked</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-electric-400 mb-2">
                $52M+
              </div>
              <p className="text-navy-300">Pipeline Generated</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {/* Industry Filter */}
            <div>
              <h3 className="text-sm font-bold text-navy-900 uppercase mb-4">
                By Industry
              </h3>
              <div className="flex flex-wrap gap-3">
                {filterOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIndustryFilter(option.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      industryFilter === option.value
                        ? 'bg-electric-600 text-white shadow-lg'
                        : 'bg-gray-100 text-navy-900 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Service Filter */}
            <div>
              <h3 className="text-sm font-bold text-navy-900 uppercase mb-4">
                By Service
              </h3>
              <div className="flex flex-wrap gap-3">
                {serviceFilterOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setServiceFilter(option.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      serviceFilter === option.value
                        ? 'bg-electric-600 text-white shadow-lg'
                        : 'bg-gray-100 text-navy-900 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredCaseStudies.length > 0 ? (
              <motion.div
                key="case-studies"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCaseStudies.map((study) => (
                  <motion.div
                    key={study.id}
                    variants={itemVariants}
                    layout
                  >
                    <CaseStudyCard
                      clientType={study.clientType}
                      challenge={study.challenge}
                      resultMetric={study.resultMetric}
                      resultValue={study.resultValue}
                      caseStudyHref={study.href}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <p className="text-lg text-navy-700">
                  No case studies found matching your filters. Try a different combination.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Build Your Success Story?"
        description="Let's discuss your revenue challenges and explore how we can help you build predictable pipeline and accelerate growth."
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Explore by Industry"
        secondaryButtonHref="/industries"
      />
    </main>
  );
}
