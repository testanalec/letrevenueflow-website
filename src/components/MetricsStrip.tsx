'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Metric {
  label: string;
  value: string;
}

const metrics: Metric[] = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Campaigns Managed', value: '500+' },
  { label: 'Meetings Booked', value: '50,000+' },
  { label: 'Pipeline Influenced', value: '$200M+' },
];

function AnimatedCounter({ value }: { value: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-electric-600">
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {value}
        </motion.div>
      ) : (
        value
      )}
    </div>
  );
}

export default function MetricsStrip() {
  return (
    <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter value={metric.value} />
              <p className="text-navy-300 text-sm md:text-base mt-3 font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
