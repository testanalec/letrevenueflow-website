'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  clientType: string;
  challenge: string;
  resultMetric: string;
  resultValue: string;
  caseStudyHref: string;
}

export default function CaseStudyCard({
  clientType,
  challenge,
  resultMetric,
  resultValue,
  caseStudyHref,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-all group"
    >
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-electric-50 text-electric-700 text-xs font-bold uppercase rounded-full">
          {clientType}
        </span>
      </div>

      <h3 className="text-lg font-bold text-navy-900 mb-3">Challenge</h3>
      <p className="text-navy-700 text-sm mb-6 leading-relaxed">{challenge}</p>

      <div className="bg-navy-50 rounded-lg p-4 mb-6 border border-navy-100">
        <p className="text-xs uppercase text-navy-600 font-bold mb-2">{resultMetric}</p>
        <p className="text-3xl font-bold text-electric-600">{resultValue}</p>
      </div>

      <Link
        href={caseStudyHref}
        className="inline-flex items-center gap-2 text-electric-600 font-medium hover:text-electric-700 transition-colors"
      >
        View Case Study
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
