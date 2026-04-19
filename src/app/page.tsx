'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target,
  Zap,
  TrendingUp,
  BarChart3,
  Users,
  Calendar,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import MetricsStrip from '@/components/MetricsStrip';
import ServiceCard from '@/components/ServiceCard';
import HowItWorks from '@/components/HowItWorks';
import TestimonialCard from '@/components/TestimonialCard';
import IndustryTabs from '@/components/IndustryTabs';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import TrustBar from '@/components/TrustBar';

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

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 md:pb-24">
        {/* Background Gradient */}
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

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We Build Revenue Pipelines, Not Just Lead Lists
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              LetRevenueFlow helps SaaS, IT services firms, and agencies generate qualified
              opportunities through lead generation, appointment setting, outbound sales campaigns,
              and pipeline management.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/book-a-call"
                className="inline-block px-8 py-4 bg-electric-600 text-white font-bold rounded-lg hover:bg-electric-700 transition-colors shadow-xl hover:shadow-2xl text-lg"
              >
                Book Strategy Call
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg"
              >
                Get Free Pipeline Audit
              </Link>
            </div>

            {/* Trust Bar */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <p className="text-navy-200 text-sm font-medium">
                ✓ Trusted by B2B growth teams across the US, UK, and Europe
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust/Metrics Strip */}
      <MetricsStrip />

      {/* Value Proposition Strip */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-electric-50 to-white rounded-xl border border-electric-200 p-8 hover:shadow-xl transition-shadow"
            >
              <div className="inline-block p-3 bg-electric-600 rounded-lg mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Qualified Leads</h3>
              <p className="text-navy-700 leading-relaxed">
                Targeted prospecting aligned with your ICP. We don't send volume—we send conversions.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-electric-50 to-white rounded-xl border border-electric-200 p-8 hover:shadow-xl transition-shadow"
            >
              <div className="inline-block p-3 bg-electric-600 rounded-lg mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Booked Meetings</h3>
              <p className="text-navy-700 leading-relaxed">
                Appointment setting focused on show-ready conversations. Every booking is qualified.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-electric-50 to-white rounded-xl border border-electric-200 p-8 hover:shadow-xl transition-shadow"
            >
              <div className="inline-block p-3 bg-electric-600 rounded-lg mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Revenue Visibility</h3>
              <p className="text-navy-700 leading-relaxed">
                Pipeline tracking, reporting, and optimization. Know exactly what's coming.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Outbound Fails When Activity Isn't Tied to Revenue
            </h2>
            <p className="text-lg text-navy-700">
              Most outbound programs measure activity, not outcomes. We flip the script.
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: AlertCircle,
                title: 'Quantity Over Quality',
                description: 'Sending hundreds of emails with low conversion rates and high unsubscribe rates.',
              },
              {
                icon: Users,
                title: 'Wrong Decision Makers',
                description: 'Reaching prospects who cannot buy, leading to longer sales cycles and wasted effort.',
              },
              {
                icon: TrendingUp,
                title: 'No Pipeline Visibility',
                description: 'Cannot track which campaigns drive revenue. Spending without accountability.',
              },
              {
                icon: Zap,
                title: 'Reactive Adjustments',
                description: 'Making changes based on gut feeling instead of data. No framework for improvement.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:border-electric-300 transition-colors"
                >
                  <Icon className="w-8 h-8 text-electric-600 mb-4" />
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-navy-700">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="#contact"
              className="inline-block px-8 py-3 bg-electric-600 text-white font-bold rounded-lg hover:bg-electric-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Fix Your Pipeline Flow
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Our Services</h2>
            <p className="text-lg text-navy-700">
              End-to-end solutions that turn outbound into outcome.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={Target}
              title="Lead Generation"
              description="Data-driven prospecting to build qualified lead lists aligned with your ICP."
              benefit="Fill your pipeline with the right prospects"
              learnMoreHref="/services/lead-generation"
            />
            <ServiceCard
              icon={Calendar}
              title="Appointment Setting"
              description="End-to-end outreach campaigns that book qualified meetings on your calendar."
              benefit="Get show-ready conversations scheduled"
              learnMoreHref="/services/appointment-setting"
            />
            <ServiceCard
              icon={Zap}
              title="Outbound Sales Campaigns"
              description="Multi-channel campaigns across email, LinkedIn, and phone with personalized sequences."
              benefit="Convert prospects across multiple touchpoints"
              learnMoreHref="/services/outbound-campaigns"
            />
            <ServiceCard
              icon={BarChart3}
              title="Pipeline Management"
              description="Tracking, reporting, and optimization of your entire outbound pipeline."
              benefit="Predict revenue with confidence"
              learnMoreHref="/services/pipeline-management"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* What We Deliver Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              What We Deliver
            </h2>
            <p className="text-lg text-navy-700">
              Outcomes that align with your revenue goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Increased Pipeline Value', description: 'Consistent growth in qualified opportunities', icon: TrendingUp },
              { title: 'Strong Campaign ROI', description: 'Outbound programs that pay for themselves', icon: BarChart3 },
              { title: 'High Show Rates', description: 'Meetings that actually happen', icon: Calendar },
              { title: 'Better Conversion', description: 'From opportunity to closed deal', icon: CheckCircle },
              { title: 'Faster Pipeline Velocity', description: 'Shorter sales cycles through better targeting', icon: Zap },
              { title: 'Scalable Revenue Growth', description: 'Systems that grow with your team', icon: TrendingUp },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 text-electric-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-navy-700">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to See Results Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Ready to See Results?
            </h2>
            <p className="text-xl text-navy-700 mb-10 leading-relaxed">
              We work with SaaS companies, IT services firms, and agencies to build predictable, scalable revenue pipelines. Let's talk about your specific situation and explore what's possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-a-call"
                className="inline-block px-8 py-4 bg-electric-600 text-white font-bold rounded-lg hover:bg-electric-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Schedule a Strategy Call
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-electric-600 text-electric-600 font-bold rounded-lg hover:bg-electric-50 transition-colors"
              >
                Get Free Pipeline Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Tabs Section */}
      <section className="bg-gray-50">
        <IndustryTabs />
      </section>

      {/* Why LetRevenueFlow Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Why LetRevenueFlow
            </h2>
            <p className="text-lg text-navy-700">
              What sets us apart from traditional lead gen agencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Revenue-Focused Metrics',
                description:
                  'We measure success by pipeline value and closed revenue, not just meetings booked or emails sent.',
              },
              {
                title: 'Data-Driven Prospecting',
                description:
                  'Every campaign is built on your ICP. We target the right people at the right companies.',
              },
              {
                title: 'Full-Cycle Ownership',
                description:
                  'From list building to meeting booking to pipeline tracking. We own the entire process.',
              },
              {
                title: 'Transparent Reporting',
                description:
                  'Monthly dashboards showing pipeline value, conversion rates, and ROI on every campaign.',
              },
              {
                title: 'Expert Team',
                description:
                  'Former sales VPs, founders, and revenue ops leaders. We speak your language.',
              },
              {
                title: 'Proven Playbooks',
                description:
                  'Tested frameworks across SaaS, IT Services, and Professional Services. We know what works.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-navy-50 to-white rounded-lg border border-navy-100 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-2 h-2 bg-electric-600 rounded-full mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-navy-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="LetRevenueFlow transformed our outbound approach. Pipeline went from unpredictable to predictable. ROI has been exceptional."
              name="Sarah Chen"
              title="VP Sales"
              company="TechVenture SaaS"
              rating={5}
            />
            <TestimonialCard
              quote="The team understands enterprise sales. They built a playbook that works for our complex deals. Highly recommend."
              name="Michael Rodriguez"
              title="CEO"
              company="Enterprise IT Solutions"
              rating={5}
            />
            <TestimonialCard
              quote="Finally, someone who gets that lead gen is about quality, not quantity. Our show rate improved dramatically in just a few months."
              name="Jennifer Walsh"
              title="Managing Director"
              company="Grant Thornton Advisory"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Free Audit Offer Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start with a Free Pipeline Audit
            </h2>
            <p className="text-xl text-navy-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              We'll analyze your current pipeline, identify where leads are dropping off, and show you
              exactly where you're losing revenue. No strings attached.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                'Pipeline Health Analysis',
                'Lead Source Performance Review',
                'Revenue Leakage Identification',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 justify-center text-navy-100"
                >
                  <CheckCircle className="w-5 h-5 text-electric-400" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-electric-600 text-white font-bold rounded-lg hover:bg-electric-700 transition-colors shadow-xl hover:shadow-2xl text-lg"
            >
              Claim Free Audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FAQAccordion
              items={[
                {
                  question: 'How long does it take to see results?',
                  answer:
                    'Most clients see their first meetings scheduled within 3-4 weeks of campaign launch. Meaningful pipeline impact typically appears within 8-12 weeks as campaigns optimize. We focus on quality over speed—the goal is sustainable, repeatable pipeline growth.',
                },
                {
                  question: 'How do you ensure leads are actually qualified?',
                  answer:
                    'We build campaigns around your specific ICP. That means we target the right job titles, company sizes, industries, and buying stages. We also validate data before outreach and refine targeting based on which prospects engage.',
                },
                {
                  question: 'What if our sales team is not ready for more leads?',
                  answer:
                    'Great question. If your sales process is the bottleneck, we adjust. We might focus on appointment setting and pre-qualification, or help your team implement better follow-up systems. Our goal is pipeline, not chaos.',
                },
                {
                  question: 'Can you work with our existing lead list?',
                  answer:
                    'Absolutely. We can append data to your existing list, validate data quality, and build campaigns around prospects you already have. We can also enrich your list with additional personas we identify based on your ICP.',
                },
                {
                  question: 'How do you measure success?',
                  answer:
                    'We measure pipeline value, conversion rates, and ROI. Every month you get a dashboard showing: meetings booked, show rates, opportunities created, and revenue influenced. We hold ourselves accountable to your revenue goals.',
                },
                {
                  question: 'What is your pricing model?',
                  answer:
                    'We offer flexible engagement models tailored to your goals and scale. Options include retainer-based pricing, performance-based models, or custom arrangements depending on your needs. Let us talk about what makes sense for you.',
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection
        headline="Ready to Build a More Predictable Revenue Pipeline?"
        description="Let's start with a conversation about your goals, your current challenges, and where you want to go. No pressure, just honest talk about what's possible."
        primaryButtonText="Book Your Strategy Call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Get Your Free Pipeline Audit"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
