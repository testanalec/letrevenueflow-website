import type { Metadata } from 'next';
import AppointmentSettingContent from './content';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Phone,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Users,
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
  title: 'Appointment Setting Services — Qualified B2B Meetings',
  description: 'Skilled appointment setting that books quality meetings. High show rates, warm handoffs, and conversion-focused calling.',
  openGraph: {
    title: 'Appointment Setting — LetRevenueFlow',
    description: 'Book qualified B2B meetings through expert appointment setting.',
    url: 'https://letrevenueflow.com/services/appointment-setting',
    type: 'website',
  },
};

export default function AppointmentSetting() {
  return <AppointmentSettingContent />;
}
