import type { Metadata } from 'next';
import OutboundSalesCampaignsContent from './content';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  BarChart3,
  Zap,
  TrendingUp,
  MessageSquare,
  Users,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, easing: 'easeOut' },
  },
};

export const metadata: Metadata = {
  title: 'Outbound Sales Campaigns — Multi-Channel B2B Outreach',
  description: 'Coordinated multi-channel campaigns combining email, calling, and LinkedIn. Tested messaging, optimized sequences, high deliverability.',
  openGraph: {
    title: 'Outbound Sales Campaigns — LetRevenueFlow',
    description: 'Multi-channel outbound campaigns designed for consistent deal flow and pipeline growth.',
    url: 'https://letrevenueflow.com/services/outbound-sales-campaigns',
    type: 'website',
  },
};

export default function OutboundSalesCampaigns() {
  return <OutboundSalesCampaignsContent />;
}
