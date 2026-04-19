'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: string;
  learnMoreHref: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  benefit,
  learnMoreHref,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow"
    >
      <div className="mb-4">
        <div className="inline-block p-3 bg-electric-50 rounded-lg">
          <Icon className="w-6 h-6 text-electric-600" />
        </div>
      </div>

      <h3 className="text-lg font-bold text-navy-900 mb-3">{title}</h3>
      <p className="text-navy-700 text-sm mb-4 leading-relaxed">{description}</p>

      <div className="mb-6 p-4 bg-electric-50 rounded-lg border border-electric-200">
        <p className="text-sm font-medium text-navy-900">
          <span className="text-electric-600 font-bold">Benefit:</span> {benefit}
        </p>
      </div>

      <Link
        href={learnMoreHref}
        className="inline-flex items-center text-electric-600 font-medium hover:text-electric-700 transition-colors group"
      >
        Learn More
        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </motion.div>
  );
}
