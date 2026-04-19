'use client';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorBio: string;
  content: string;
  image: string;
}

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

interface BlogPostContentProps {
  params: { slug: string };
  post?: BlogPost;
  blogPosts?: Record<string, BlogPost>;
}

export default function BlogPostContent({ params, post: initialPost, blogPosts: allPosts }: BlogPostContentProps) {
  const post = initialPost;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Post Not Found</h1>
          <p className="text-navy-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-electric-600 font-medium hover:text-electric-700">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = allPosts ? Object.values(allPosts)
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3) : [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-gray-200 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-electric-600 hover:text-electric-700">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      {post.image && (
        <section className="relative w-full h-64 md:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </section>
      )}

      {/* Post Header */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-electric-100 text-electric-700 text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-navy-600 border-b border-gray-200 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-none"
          >
            <div className="text-lg text-navy-700 leading-relaxed space-y-4">
              {post.content.split('\n').map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return null;
                if (trimmed.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl md:text-3xl font-bold text-navy-900 mt-10 mb-4">{trimmed.replace('## ', '')}</h2>;
                }
                if (trimmed.startsWith('- **')) {
                  const match = trimmed.match(/^- \*\*(.+?)\*\*(.*)$/);
                  if (match) {
                    return <li key={i} className="ml-6 list-disc"><strong className="text-navy-900">{match[1]}</strong>{match[2]}</li>;
                  }
                }
                if (trimmed.startsWith('- ')) {
                  return <li key={i} className="ml-6 list-disc">{trimmed.replace('- ', '')}</li>;
                }
                // Handle bold text within paragraphs
                const parts = trimmed.split(/\*\*(.+?)\*\*/g);
                if (parts.length > 1) {
                  return <p key={i}>{parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-navy-900">{part}</strong> : part)}</p>;
                }
                return <p key={i}>{trimmed}</p>;
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 md:py-16 bg-navy-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-6"
          >
            <div className="w-16 h-16 bg-electric-600 rounded-full flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{post.author}</h3>
              <p className="text-navy-700 leading-relaxed">{post.authorBio}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Related Reading</h2>
              <p className="text-lg text-navy-600">Check out these related posts</p>
            </motion.div>

            <motion.div
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-electric-700 uppercase">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3 line-clamp-2">
                    <Link href={`/blog/${relatedPost.slug}`} className="hover:text-electric-600">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="inline-flex items-center gap-2 text-electric-600 font-medium hover:text-electric-700 text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

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
