'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  BarChart3,
  CheckCircle,
  Zap,
} from 'lucide-react';

interface ValueProp {
  title: string;
  description: string;
  icon: typeof TrendingUp;
}

const valueProps: ValueProp[] = [
  {
    title: 'Battle-Tested Experience',
    description: 'Over a decade of B2B revenue execution across industries',
    icon: TrendingUp,
  },
  {
    title: 'Proven Campaign Frameworks',
    description: 'Repeatable systems that deliver consistent pipeline',
    icon: BarChart3,
  },
  {
    title: 'Qualified Meeting Focus',
    description: 'Every conversation is vetted and show-ready',
    icon: CheckCircle,
  },
  {
    title: 'Measurable Pipeline Impact',
    description: 'Full visibility from outreach to closed revenue',
    icon: Zap,
  },
];

export default function MetricsStrip() {
  return (
    <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8 text-electric-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {prop.title}
                </h3>
                <p className="text-navy-300 text-sm md:text-base font-medium leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
