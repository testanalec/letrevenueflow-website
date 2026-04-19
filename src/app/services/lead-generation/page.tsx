import type { Metadata } from 'next';
import LeadGenerationContent from './content';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Database,
  Users,
  BarChart3,
  Zap,
  TrendingUp,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import CaseStudyCard from '@/components/CaseStudyCard';

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
  title: 'Lead Generation Services — Targeted B2B Lead Lists & Qualification',
  description: 'ICP-aligned lead sourcing, validation, and qualification. Fill your pipeline with decision-makers ready to engage.',
  openGraph: {
    title: 'Lead Generation — LetRevenueFlow',
    description: 'Targeted lead sourcing and qualification for B2B sales teams.',
    url: 'https://letrevenueflow.com/services/lead-generation',
    type: 'website',
  },
};

export default function LeadGeneration() {
  return <LeadGenerationContent />;
}
