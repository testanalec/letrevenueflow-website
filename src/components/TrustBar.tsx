'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'Client 1', initials: 'C1' },
  { name: 'Client 2', initials: 'C2' },
  { name: 'Client 3', initials: 'C3' },
  { name: 'Client 4', initials: 'C4' },
  { name: 'Client 5', initials: 'C5' },
  { name: 'Client 6', initials: 'C6' },
];

export default function TrustBar() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-navy-600 font-medium text-sm md:text-base">
            Trusted by B2B growth teams across the US, UK, and Europe
          </p>
        </div>

        {/* Scrolling Logo Bar */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -1000 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-12 md:gap-16"
          >
            {/* First set */}
            {logos.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 hover:border-electric-300 hover:bg-electric-50 transition-all">
                  <span className="text-sm md:text-base font-bold text-navy-600">
                    {logo.initials}
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, idx) => (
              <div key={`dup-${idx}`} className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 hover:border-electric-300 hover:bg-electric-50 transition-all">
                  <span className="text-sm md:text-base font-bold text-navy-600">
                    {logo.initials}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <p className="text-navy-600 text-sm">
            Your company could be next.{' '}
            <a href="#contact" className="text-electric-600 font-medium hover:text-electric-700">
              Let's talk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
