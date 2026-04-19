'use client';

import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  company,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
      {/* Stars */}
      {rating && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-navy-900 font-medium mb-6 text-lg leading-relaxed border-l-4 border-electric-600 pl-4">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div>
        <p className="font-bold text-navy-900">{name}</p>
        <p className="text-sm text-navy-600">{title}</p>
        <p className="text-sm text-electric-600 font-medium">{company}</p>
      </div>
    </div>
  );
}
