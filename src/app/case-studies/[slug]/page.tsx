import type { Metadata } from 'next';
import CaseStudyContent from './content';

const caseStudyMetadata: Record<string, { title: string; description: string }> = {
  'saas-pipeline-growth': {
    title: 'SaaS Pipeline Growth Case Study — LetRevenueFlow',
    description: 'See how we helped a mid-market SaaS company book 64 qualified demos and accelerate their sales pipeline.',
  },
  'it-services-enterprise-outreach': {
    title: 'Enterprise IT Services Outreach Case Study — LetRevenueFlow',
    description: 'How an MSP reached C-level IT decision-makers and built enterprise pipeline.',
  },
  'agency-partnership-pipeline': {
    title: 'Agency Partnership Pipeline Case Study — LetRevenueFlow',
    description: 'How a digital agency scaled without stretching their team using outsourced business development.',
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const meta = caseStudyMetadata[slug];

  return {
    title: meta?.title || 'Case Study — LetRevenueFlow',
    description: meta?.description || 'Real results from B2B lead generation campaigns.',
    openGraph: {
      title: meta?.title || 'Case Study',
      description: meta?.description || 'Real results from B2B lead generation campaigns.',
      url: `https://letrevenueflow.com/case-studies/${slug}`,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return [
    { slug: 'saas-pipeline-growth' },
    { slug: 'it-services-enterprise-outreach' },
    { slug: 'agency-partnership-pipeline' },
  ];
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseStudyContent slug={slug} />;
}
