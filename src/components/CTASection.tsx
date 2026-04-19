'use client';

import Link from 'next/link';

interface CTASectionProps {
  headline: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  headline,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: CTASectionProps) {
  return (
    <section className="bg-navy-900 text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{headline}</h2>
        <p className="text-lg text-navy-300 mb-10 max-w-2xl mx-auto">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={primaryButtonHref}
            className="px-8 py-3 bg-electric-600 text-white font-medium rounded-lg hover:bg-electric-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {primaryButtonText}
          </Link>

          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className="px-8 py-3 border border-electric-400 text-electric-300 font-medium rounded-lg hover:bg-navy-800 transition-colors"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
