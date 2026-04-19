'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, CheckCircle } from 'lucide-react';
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

export default function Blog() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const newsletterFormRef = useRef<HTMLFormElement>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    try {
      const response = await fetch('https://formsubmit.co/ajax/rmmittal@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: 'New Newsletter Subscription from LetRevenueFlow',
        }),
      });

      if (response.ok) {
        setNewsletterSubmitted(true);
        if (newsletterFormRef.current) {
          newsletterFormRef.current.reset();
        }
        setTimeout(() => setNewsletterSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
    } finally {
      setNewsletterLoading(false);
    }
  };

  const categories = [
    'All',
    'Lead Generation',
    'Outbound Sales',
    'Appointment Setting',
    'Revenue Operations',
    'SaaS Growth',
  ];

  const blogPosts = [
    {
      id: 'cold-outreach-fundamentals',
      slug: 'cold-outreach-fundamentals',
      title: 'The Art of Cold Outreach: Building Your First Campaign',
      excerpt:
        'Learn how to build your first cold outreach campaign from scratch. We break down the essentials: targeting, messaging, cadence, and measuring success.',
      category: 'Outbound Sales',
      date: '2024-04-15',
      readTime: '8 min read',
      image: '/blog/cold-outreach-fundamentals.jpg',
    },
    {
      id: 'lead-scoring-strategy',
      slug: 'lead-scoring-strategy',
      title: 'Lead Scoring Strategies That Actually Work',
      excerpt:
        'Most B2B companies prioritize quantity over quality. In this post, we explore how to build a lead scoring model that identifies your best opportunities.',
      category: 'Lead Generation',
      date: '2024-04-12',
      readTime: '10 min read',
      image: '/blog/lead-scoring-strategy.jpg',
    },
    {
      id: 'appointment-setting-guide',
      slug: 'appointment-setting-guide',
      title: 'The Complete Guide to B2B Appointment Setting',
      excerpt:
        'Booking meetings with decision makers is an art and science. Here\'s how top outbound teams convert contacts into scheduled calls.',
      category: 'Appointment Setting',
      date: '2024-04-10',
      readTime: '12 min read',
      image: '/blog/appointment-setting-guide.jpg',
    },
    {
      id: 'saas-pipeline-leak',
      slug: 'saas-pipeline-leak',
      title: 'Why SaaS Companies Are Leaking Pipeline (And How to Fix It)',
      excerpt:
        'Revenue leakage at every stage of the funnel is costing SaaS companies millions. We identify the biggest culprits and share solutions that work.',
      category: 'SaaS Growth',
      date: '2024-04-08',
      readTime: '9 min read',
      image: '/blog/saas-pipeline-leak.jpg',
    },
    {
      id: 'revenue-ops-framework',
      slug: 'revenue-ops-framework',
      title: 'Building a Revenue Operations Framework That Scales',
      excerpt:
        'Revenue Ops is about alignment, automation, and measurement. Learn the framework we use to help B2B teams scale their operations.',
      category: 'Revenue Operations',
      date: '2024-04-05',
      readTime: '11 min read',
      image: '/blog/revenue-ops-framework.jpg',
    },
    {
      id: 'personalization-at-scale',
      slug: 'personalization-at-scale',
      title: 'How to Personalize Outreach Without Losing Scale',
      excerpt:
        'Personalization increases response rates, but how do you personalize at scale? We share the techniques that balance quality and velocity.',
      category: 'Outbound Sales',
      date: '2024-04-01',
      readTime: '7 min read',
      image: '/blog/personalization-at-scale.jpg',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

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
              Insights for B2B Revenue Teams
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 leading-relaxed max-w-2xl">
              Strategies, frameworks, and tactics to help you build predictable revenue pipelines.
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
            {categories.map((category) => (
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

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="flex flex-col overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  {/* Blog Image */}
                  <Link href={`/blog/${post.slug}`} className="block h-48 overflow-hidden relative">
                    <Image
                      src={(post as any).image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-electric-100 text-electric-700 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-900 mb-3 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-electric-600">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-navy-700 text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-navy-600 mb-4 border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-electric-600 font-medium hover:text-electric-700 text-sm"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {newsletterSubmitted ? (
              <div className="flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-electric-600 mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  You're Subscribed!
                </h2>
                <p className="text-lg text-navy-600">
                  Thanks for subscribing. Check your inbox for our latest content.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-lg text-navy-600 mb-8">
                  Get the latest strategies, frameworks, and tactics delivered to your inbox every week.
                </p>

                <form ref={newsletterFormRef} onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="your@company.com"
                    className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-600"
                    required
                  />
                  <button
                    type="submit"
                    disabled={newsletterLoading}
                    className="px-6 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors whitespace-nowrap disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                <p className="text-sm text-navy-500 mt-4">
                  We'll send you valuable content once a week. No spam, ever.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Implement These Strategies?"
        description="Let's talk about how LetRevenueFlow can help you execute on the tactics and frameworks you're learning about."
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Get in Touch"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
