import type { Metadata } from 'next';
import AboutContent from './content';

export const metadata: Metadata = {
  title: 'About LetRevenueFlow — B2B Lead Generation & Pipeline Growth',
  description: 'Learn about LetRevenueFlow, the B2B revenue partner built on 15+ years of expertise in pipeline development, lead generation, and sales enablement.',
  openGraph: {
    title: 'About LetRevenueFlow',
    description: 'B2B revenue partner with 15+ years of expertise in pipeline development and lead generation.',
    url: 'https://letrevenueflow.com/about',
    type: 'website',
  },
};

export default function About() {
  return <AboutContent />;
}
