import type { Metadata } from 'next';
import ServicesContent from './content';

export const metadata: Metadata = {
  title: 'Services — Lead Generation, Appointment Setting & Pipeline Management',
  description: 'Revenue-focused services built for B2B growth. Lead generation, appointment setting, outbound sales campaigns, and pipeline management.',
  openGraph: {
    title: 'Services — Revenue Pipeline Solutions',
    description: 'Lead generation, appointment setting, outbound campaigns, and pipeline management services for B2B teams.',
    url: 'https://letrevenueflow.com/services',
    type: 'website',
  },
};

export default function Services() {
  return <ServicesContent />;
}
