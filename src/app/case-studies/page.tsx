import type { Metadata } from 'next';
import CaseStudiesPage from './client';

export const metadata: Metadata = {
  title: 'Case Studies — LetRevenueFlow B2B Pipeline Results',
  description: 'Real results from SaaS, IT Services, and Agency campaigns. See how we\'ve helped companies build predictable pipeline and accelerate revenue growth.',
  openGraph: {
    title: 'Case Studies — LetRevenueFlow',
    description: 'Real results from B2B lead generation and pipeline building campaigns.',
    url: 'https://letrevenueflow.com/case-studies',
    type: 'website',
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
