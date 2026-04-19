'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';
import CTASection from '@/components/CTASection';

interface CaseStudyContentProps {
  slug: string;
}

// Case study data
const caseStudiesData: Record<string, any> = {
  'saas-pipeline-growth': {
    title: 'Mid-Market SaaS Drives 64 Qualified Demos in 90 Days',
    clientName: 'B2B Workflow Automation Platform',
    industry: 'SaaS',
    service: 'Lead Generation & Appointment Setting',

    clientProfile: {
      description: 'Mid-market SaaS company providing workflow automation solutions to enterprise operations teams. Average deal size $60K ACV, 8-10 week sales cycle.',
      employees: '50-100',
      location: 'US-based',
      website: 'www.example.com',
    },

    challenge: `The company had achieved product-market fit and was growing at 40% YoY. However, pipeline growth wasn't keeping pace with revenue targets.

Their sales team of 4 was spending 70% of their time prospecting and only 30% closing deals. Cold email was generating leads but response rates were declining. LinkedIn outreach was inconsistent.

The core problem: They needed a higher volume of qualified opportunities, but didn't have the resources to prospect effectively without pulling reps away from closing.`,

    objectives: [
      'Generate 60+ qualified demos scheduled within 90 days',
      'Free up sales team to focus on closing deals',
      'Maintain 20%+ response rate on outreach',
      'Build sustainable pipeline that extends 6+ months out',
      'Target specific buyer personas: VP Operations, Director of Process Improvement',
    ],

    strategy: `We developed a multi-channel prospecting approach tailored to their ICP:

Account Selection: Identified 500 target accounts in manufacturing, healthcare, and financial services—industries with high workflow optimization needs.

Buyer Research: Mapped decision-makers at each account (VP Operations, CRO, Director of Process) and verified contact information.

Messaging Framework: Developed personalized messaging around operational efficiency, process standardization, and time-to-value. The core insight: workflow automation ROI is fastest in operations with 50-500 employees.

Multi-Channel Execution: Coordinated email, LinkedIn, and phone outreach to break through noise and get meetings scheduled.

Qualification Framework: Every lead was pre-qualified on budget, authority, need, and timeline before scheduling a demo.`,

    execution: {
      weeks_1_2: {
        title: 'Research & Setup',
        items: [
          'Built target account list of 500 companies',
          'Created ICPs and buyer personas',
          'Developed email templates and LinkedIn sequences',
          'Set up tracking and reporting dashboard',
        ],
      },
      weeks_3_8: {
        title: 'Outreach & Testing',
        items: [
          'Launched email sequences with 5 variations',
          'Phone prospecting to top 100 accounts',
          'LinkedIn campaigns to decision-maker audience',
          'A/B testing on subject lines, messaging, CTA timing',
          'Weekly optimization based on response data',
        ],
      },
      weeks_9_12: {
        title: 'Scale & Refinement',
        items: [
          'Scaled highest-performing sequences',
          'Expanded phone prospecting',
          'Refined qualification criteria based on deal quality',
          'Built pipeline forecast model',
          'Transitioned leads to client sales team',
        ],
      },
    },

    metrics: {
      meetings_booked: '64 qualified demos',
      reply_rate: '23% (up from 8% on prior cold email)',
      qualified_rate: '67% (met or exceeded ICP criteria)',
      qualified_opportunities: '43 SQLs created',
      pipeline_generated: '$2.58M (based on 64 demos × $60K ACV × 67% conversion rate)',
      time_to_first_meeting: '12 days average',
      meeting_quality: 'Average deal size: $58K (within ICP target)',
    },

    timeline: [
      { phase: 'Week 0-2', milestone: 'Research, targeting, messaging', status: 'Complete' },
      { phase: 'Week 3-4', milestone: 'First email sequence launch', status: 'Complete' },
      { phase: 'Week 5-6', milestone: 'Phone outreach begins', status: 'Complete' },
      { phase: 'Week 7-8', milestone: 'Hit 30 demos booked', status: 'Complete' },
      { phase: 'Week 9-10', milestone: 'Hit 50 demos booked, refine approach', status: 'Complete' },
      { phase: 'Week 11-12', milestone: 'Final push, 64 total demos booked', status: 'Complete' },
      { phase: 'Week 13+', milestone: 'Transition to ongoing retainer', status: 'Active' },
    ],

    keyTakeaways: [
      'Multi-channel outreach (email + phone + LinkedIn) outperforms single-channel by 3.5x',
      'Personalization based on company research increased response rate from 8% to 23%',
      'Phone follow-up to top accounts increased demo quality—43 of 64 became SQLs (67%)',
      'Weekly optimization and A/B testing improved performance by 35% over 12 weeks',
      'Freed up sales team to close more deals—closed 12 of 43 SQLs within 90 days ($720K revenue)',
    ],

    outcome: `Results exceeded expectations. The company booked 64 qualified demos, 43 of which met SQL criteria. 12 of the 43 SQLs converted to closed deals within the first 90 days—representing $720K in incremental revenue.

Most importantly, the sales team went from spending 70% of their time prospecting to 20%. They're now focused on closing deals instead of hunting for them.

We've transitioned to an ongoing retainer to maintain pipeline flow and continue optimizing based on deal outcomes.`,
  },

  'it-services-enterprise-outreach': {
    title: 'Enterprise MSP Reaches C-Level IT Decision-Makers',
    clientName: 'Managed Services Provider',
    industry: 'IT Services',
    service: 'Enterprise Outreach & Account-Based Prospecting',

    clientProfile: {
      description: 'Mid-market managed services provider offering infrastructure management, security, and cloud services to enterprise customers. Average deal size $180K, 5-7 month sales cycle.',
      employees: '75-150',
      location: 'US-based',
      website: 'www.example.com',
    },

    challenge: `The MSP had strong service delivery capabilities but struggled with enterprise pipeline. Their sales process relied heavily on inbound leads and existing customer referrals. When they tried outbound prospecting, they were hitting gatekeepers and technical staff instead of decision-makers.

Enterprise IT deals require getting in front of CIOs, infrastructure directors, and security leaders—roles that are notoriously difficult to reach.

Additionally, enterprise IT budgets and purchasing cycles are different from mid-market. A generic prospecting approach doesn't work.`,

    objectives: [
      'Reach 25+ C-level IT decision-makers (CIO, VP Infrastructure, Director of IT)',
      'Generate 20+ qualified enterprise meetings',
      'Build account map for top 50 target prospects',
      'Shorten sales cycle through early-stage relationship building',
      'Establish credibility on enterprise IT challenges',
    ],

    strategy: `We built an account-based prospecting program focused on enterprise decision-makers:

Target Account Selection: Identified 150 enterprise companies with 500+ employees in industries with high IT infrastructure complexity (financial services, healthcare, manufacturing, insurance).

Decision-Maker Research: Deep research to identify CIOs, VPs of Infrastructure, and Security Directors at each account. Verified contact information through multiple sources.

Executive Messaging: Developed messaging around enterprise IT challenges—infrastructure modernization, cloud migration, security posture, operational efficiency. Not about our services, about their business outcomes.

Multi-Touch Campaign: Coordinated outreach across email, LinkedIn, and executive phone lines. Each touchpoint was personalized to their specific role and industry.

Relationship Building: Goal wasn't to pitch, but to establish credibility and get a discovery conversation.`,

    execution: {
      weeks_1_4: {
        title: 'Research & Account Selection',
        items: [
          'Identified 150 enterprise target accounts',
          'Built 200+ contact records (multiple stakeholders per account)',
          'Developed account profiles with IT infrastructure details',
          'Created decision-maker org chart for top 50 accounts',
        ],
      },
      weeks_5_12: {
        title: 'Outreach & Relationship Building',
        items: [
          'Executive-level email outreach to CIOs and VPs',
          'LinkedIn messaging from founders/leadership',
          'Strategic phone outreach to warm up relationships',
          'Thought leadership positioning (relevant articles, insights)',
          'Industry event networking strategy',
        ],
      },
      weeks_13_16: {
        title: 'Discovery & Pipeline',
        items: [
          'Booked discovery calls with 20+ decision-makers',
          'Qualified enterprise opportunities',
          'Built pipeline forecast',
          'Transitioned qualified accounts to sales team',
        ],
      },
    },

    metrics: {
      decision_makers_reached: '28 C-level IT executives',
      enterprise_meetings: '28 qualified discovery calls',
      average_deal_size: '$185K',
      reply_rate: '35% (from CIOs/VPs)',
      qualified_pipeline: '$3.6M',
      account_penetration: '18 of 150 target accounts had active deals',
    },

    timeline: [
      { phase: 'Week 0-4', milestone: 'Account research and targeting', status: 'Complete' },
      { phase: 'Week 5-8', milestone: 'Initial outreach to 150 accounts', status: 'Complete' },
      { phase: 'Week 9-10', milestone: 'Hit 15 meetings booked', status: 'Complete' },
      { phase: 'Week 11-16', milestone: 'Hit 28 meetings booked, build pipeline', status: 'Complete' },
      { phase: 'Week 17+', milestone: 'Transition to account management, ongoing outreach', status: 'Active' },
    ],

    keyTakeaways: [
      'Enterprise decision-makers respond better to relationship-focused outreach than transactional pitches',
      '35% response rate from C-level IT executives when messaging is personalized to their challenges',
      'Account-based approach generates higher-quality meetings—95% of 28 meetings led to qualification conversations',
      'Executive involvement in outreach increases credibility and meeting quality by 4x',
      'Enterprise pipeline built in 16 weeks translated to 6 closed deals ($1.1M) within 6 months',
    ],

    outcome: `The MSP successfully penetrated enterprise IT market with a strategic, account-based outreach program. 28 qualified meetings were scheduled with CIOs, VPs, and IT Directors at target enterprises.

More importantly, they established credibility with enterprise decision-makers. 6 of the 18 accounts with active deals closed, representing $1.1M in new enterprise revenue—a significant expansion of their customer base.

The program demonstrated that enterprise IT prospecting works when it's strategic, personalized, and focused on building relationships with actual decision-makers.`,
  },

  'agency-partnership-pipeline': {
    title: 'Digital Agency Builds 3X Partnership Pipeline',
    clientName: 'Digital Marketing & Creative Agency',
    industry: 'Agency / Consultancy',
    service: 'Partnership Pipeline & Business Development',

    clientProfile: {
      description: 'Mid-size digital marketing agency specializing in brand strategy and digital campaigns. Services include strategy, creative, web development, and paid media. ~$3M annual revenue.',
      employees: '25-40',
      location: 'US-based',
      website: 'www.example.com',
    },

    challenge: `The agency had strong delivery capabilities and a solid base of direct clients. However, partnership and referral pipeline was unpredictable. Principals were spending significant time on business development, which pulled them away from strategy and delivery.

They wanted to grow, but without hiring a dedicated business development person. Growth came in waves—periods of feast when referrals came through, followed by famine when deal flow dried up.

The challenge: How to build predictable partnership and client pipeline without diverting leadership from core business?`,

    objectives: [
      'Build partnership pipeline with 15+ complementary agencies',
      'Generate 8+ net new direct clients',
      'Create 60+ qualified opportunities in 90 days',
      'Free up principals from prospecting activities',
      'Establish systematic business development process',
      'Build predictable, recurring pipeline',
    ],

    strategy: `We developed a two-pronged business development strategy:

Partnership Channel: Targeted complementary agencies that refer work or partner with the agency (e.g., web design firms, PR agencies, management consulting firms that need digital support).

Direct Client Channel: Targeted companies with specific need for digital strategy and brand work—companies in growth phase or going through rebrand/repositioning.

Messaging Strategy: Positioned the agency as strategic partner, not vendor. Focus on outcomes: brand strategy that drives revenue, campaigns that convert, not just creative.

Outreach Model: Personalized research on prospects, warm introductions where possible, consultative discovery calls rather than pitches.`,

    execution: {
      weeks_1_2: {
        title: 'Target List & Research',
        items: [
          'Built partnership target list (100 complementary agencies)',
          'Built direct client target list (150 companies in growth stage)',
          'Researched decision-makers at each target',
          'Developed partnership value proposition',
        ],
      },
      weeks_3_10: {
        title: 'Outreach & Relationship Building',
        items: [
          'Launched partnership outreach (email, LinkedIn, phone)',
          'Launched direct client outreach',
          'Personalized research for each prospect',
          'Educational content and resources positioning agency expertise',
          'Warm introductions where possible',
        ],
      },
      weeks_11_16: {
        title: 'Pipeline Building & Closure',
        items: [
          'Booked 30+ partnership and client discovery meetings',
          'Qualified opportunities based on fit and budget',
          'Built 6-month pipeline forecast',
          'Started closing direct clients and partnerships',
        ],
      },
    },

    metrics: {
      opportunities_generated: '62 qualified opportunities',
      partnership_deals: '12 formal referral partnerships established',
      direct_clients_signed: '8 net new clients',
      total_pipeline: '$1.2M (based on 8 clients × $150K average project value)',
      response_rate: '28% on partnership outreach, 18% on direct outreach',
      meeting_to_client_conversion: '8 of 30 meetings = 27% close rate',
    },

    timeline: [
      { phase: 'Week 0-2', milestone: 'Target list creation and research', status: 'Complete' },
      { phase: 'Week 3-6', milestone: 'Initial outreach to partnerships and clients', status: 'Complete' },
      { phase: 'Week 7-10', milestone: 'Hit 30 meetings booked', status: 'Complete' },
      { phase: 'Week 11-14', milestone: '5 clients signed, 10 partnerships established', status: 'Complete' },
      { phase: 'Week 15-16', milestone: '8 total clients signed, 12 partnerships', status: 'Complete' },
      { phase: 'Week 17+', milestone: 'Transition to account management', status: 'Active' },
    ],

    keyTakeaways: [
      'Agencies can build predictable pipeline through outsourced business development',
      'Partnership channel has faster close rate (40%) vs. direct clients (27%)',
      'Personalized research and warm introductions increased response rate from 5% to 28%',
      'Educational positioning (not pitching) increased meeting quality and conversion',
      'Freed up principals to focus on delivery—net result is better client satisfaction and higher margins',
      'Systematic pipeline building created foundation for 35% YoY growth',
    ],

    outcome: `The agency successfully built predictable pipeline through strategic partnership and client development. 8 new direct clients were signed, representing $1.2M in project value. 12 strategic partnerships were established, creating ongoing referral channel.

Most importantly, principals were freed from prospecting responsibilities. They focused on delivering excellent work for clients, which increased satisfaction scores and led to more referrals.

The agency moved from feast-or-famine cycle to systematic, predictable business development. First-year partnership results exceeded expectations.`,
  },
};

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

export default function CaseStudyContent({ slug }: CaseStudyContentProps) {
  const caseStudy = caseStudiesData[slug];

  if (!caseStudy) {
    return (
      <main className="bg-white">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-navy-900 mb-4">Case Study Not Found</h1>
            <p className="text-navy-700 mb-8">
              The case study you're looking for doesn't exist.
            </p>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-electric-600 font-medium hover:text-electric-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Back Button */}
      <section className="pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-electric-600 font-medium hover:text-electric-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-electric-50 text-electric-700 text-xs font-bold uppercase rounded-full">
                {caseStudy.industry}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-navy-700 mb-6">{caseStudy.clientName}</p>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <p className="text-sm font-bold text-navy-600 uppercase mb-1">Service</p>
                <p className="text-navy-900 font-medium">{caseStudy.service}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-navy-600 uppercase mb-1">Industry</p>
                <p className="text-navy-900 font-medium">{caseStudy.industry}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Profile */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Client Profile</h2>
            <p className="text-lg text-navy-700 leading-relaxed mb-6">
              {caseStudy.clientProfile.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-navy-50 rounded-lg p-6">
                <p className="text-sm font-bold text-navy-600 uppercase mb-2">Company Size</p>
                <p className="text-xl font-bold text-navy-900">{caseStudy.clientProfile.employees}</p>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <p className="text-sm font-bold text-navy-600 uppercase mb-2">Location</p>
                <p className="text-xl font-bold text-navy-900">{caseStudy.clientProfile.location}</p>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <p className="text-sm font-bold text-navy-600 uppercase mb-2">Industry</p>
                <p className="text-xl font-bold text-navy-900">{caseStudy.industry}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">The Challenge</h2>
            <div className="prose prose-lg max-w-none text-navy-700 space-y-4">
              {caseStudy.challenge.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Objectives</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {caseStudy.objectives.map((objective: string, idx: number) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-electric-600 flex-shrink-0 mt-1" />
                  <p className="text-navy-700 text-lg">{objective}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Strategy</h2>
            <div className="prose prose-lg max-w-none text-navy-700 space-y-4">
              {caseStudy.strategy.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Execution */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Execution</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {Object.entries(caseStudy.execution).map(([key, phase]: [string, any], idx: number) => (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="bg-electric-50 rounded-lg p-8 border border-electric-200"
                >
                  <h3 className="text-xl font-bold text-navy-900 mb-4">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx} className="flex gap-3">
                        <span className="text-electric-600 font-bold">•</span>
                        <span className="text-navy-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Results & Metrics</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {Object.entries(caseStudy.metrics).map(([key, value]: [string, any], idx: number) => (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:border-electric-300 transition-colors"
                >
                  <p className="text-sm font-bold text-navy-600 uppercase mb-2">
                    {key.replace(/_/g, ' ')}
                  </p>
                  <p className="text-3xl font-bold text-electric-600">{value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Timeline</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {caseStudy.timeline.map((entry: any, idx: number) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      entry.status === 'Complete' ? 'bg-green-500' : 'bg-electric-600'
                    }`}></div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-baseline gap-4">
                      <p className="font-bold text-navy-900 w-24">{entry.phase}</p>
                      <p className="text-navy-700">{entry.milestone}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-electric-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Key Takeaways</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {caseStudy.keyTakeaways.map((takeaway: string, idx: number) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <TrendingUp className="w-6 h-6 text-electric-600 flex-shrink-0 mt-1" />
                  <p className="text-navy-700 text-lg">{takeaway}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Outcome</h2>
            <div className="prose prose-lg max-w-none text-navy-700 space-y-4">
              {caseStudy.outcome.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} className="leading-relaxed text-lg">{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Build Your Success Story?"
        description="Let's discuss your specific challenges and explore how we can help you achieve similar results."
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Explore Other Case Studies"
        secondaryButtonHref="/case-studies"
      />
    </main>
  );
}
