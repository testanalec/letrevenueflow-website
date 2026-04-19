import type { Metadata } from 'next';
import RevenuePipelineManagementContent from './content';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  BarChart3,
  Zap,
  TrendingUp,
  Database,
  Eye,
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
  title: 'Revenue Pipeline Management — B2B Sales Pipeline Optimization',
  description: 'End-to-end pipeline visibility, CRM governance, lead stage management, and predictable revenue forecasting.',
  openGraph: {
    title: 'Revenue Pipeline Management — LetRevenueFlow',
    description: 'Optimize your B2B sales pipeline with professional management and governance.',
    url: 'https://letrevenueflow.com/services/revenue-pipeline-management',
    type: 'website',
  },
};

export default function RevenuePipelineManagement() {
  return <RevenuePipelineManagementContent />;
}
