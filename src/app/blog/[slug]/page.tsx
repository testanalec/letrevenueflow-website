import BlogPostContent from './content';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorBio: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  'cold-outreach-fundamentals': {
    id: 'cold-outreach-fundamentals',
    slug: 'cold-outreach-fundamentals',
    title: 'The Art of Cold Outreach: Building Your First Campaign',
    excerpt:
      'Learn how to build your first cold outreach campaign from scratch. We break down the essentials: targeting, messaging, cadence, and measuring success.',
    category: 'Outbound Sales',
    date: '2024-04-15',
    readTime: '8 min read',
    author: 'Rahul Mittal',
    authorBio:
      'Rahul is the founder of LetRevenueFlow and has spent 15+ years building B2B revenue engines. He specializes in outbound strategy and pipeline development.',
    content: `
      Cold outreach is not dead—it's just poorly executed. Most B2B teams approach cold outreach as a volume game: blast 1,000 emails, hope for a 2% response rate, and move on.

      That's a recipe for burnout, poor data quality, and wasted budget.

      In this post, we'll walk through how to build a cold outreach campaign that actually works. We'll cover targeting, messaging, cadence, and the metrics that matter.

      ## Step 1: Get Your Targeting Right

      The foundation of any successful cold outreach campaign is targeting. You can have the best message in the world, but if you're sending it to the wrong people, you'll get nowhere.

      Start by defining your ideal customer profile (ICP). Who are the types of companies that benefit most from your solution? What size are they? What industry? What challenges do they face?

      Once you've defined your ICP, you need to identify the decision makers within those companies. Who owns the pain point you're solving? Is it the VP of Sales? The Chief Marketing Officer? The CFO?

      The more specific your targeting, the higher your response rates will be.

      ## Step 2: Craft Your Message

      Your cold outreach message should accomplish three things:

      1. **Get attention.** Your subject line or opening sentence should be specific to the recipient. Generic openers like "I noticed you're on LinkedIn" won't cut it.

      2. **Establish credibility.** Why should they listen to you? Share a brief social proof: a relevant client win, a statistic, or an insight about their industry.

      3. **Create curiosity.** Don't pitch. Instead, ask a question that makes them want to respond. "How is [Company] approaching [Challenge]?" or "I noticed [Company] is [Action]—curious if that's working for you?"

      Here's a template that works:

      Subject: [Specific observation about their company]

      Hi [Name],

      [Specific observation about their company or role]

      [Relevant client win or insight]

      [Curious question]

      [Your name]

      ## Step 3: Set Your Cadence

      Cold outreach is a numbers game, but it's not about volume—it's about velocity. A single email has maybe a 5% response rate. But a sequence of 3-4 touches over 2-3 weeks? You'll hit 15-20% response rates.

      Here's a cadence that works:

      **Touch 1 (Day 1):** Email
      **Touch 2 (Day 3):** LinkedIn connection request
      **Touch 3 (Day 5):** Email follow-up with new angle
      **Touch 4 (Day 10):** Final email with lower-friction ask

      After 4 touches, stop. If they haven't engaged by then, they're probably not interested.

      ## Step 4: Measure What Matters

      Most teams measure response rate. But response rate is a vanity metric if the responses aren't qualified.

      Instead, measure:

      - **Reply rate:** % of emails that get a response (any response)
      - **Qualified lead rate:** % of responses from actual prospects who fit your ICP
      - **Meeting rate:** % of qualified conversations that convert to meetings
      - **Cost per meeting:** How much you're spending to book a call

      These metrics will tell you whether your campaign is working and where to optimize.

      ## Start Small, Iterate, Scale

      Don't launch with 1,000 emails. Start with 50. Test your targeting, message, and cadence. Iterate based on what you learn. Once you've found a formula that works, scale.

      The best cold outreach teams are the ones who treat their campaigns as experiments, not broadcasts.

      Start today.
    `,
  },
  'lead-scoring-strategy': {
    id: 'lead-scoring-strategy',
    slug: 'lead-scoring-strategy',
    title: 'Lead Scoring Strategies That Actually Work',
    excerpt:
      'Most B2B companies prioritize quantity over quality. In this post, we explore how to build a lead scoring model that identifies your best opportunities.',
    category: 'Lead Generation',
    date: '2024-04-12',
    readTime: '10 min read',
    author: 'Rahul Mittal',
    authorBio:
      'Rahul is the founder of LetRevenueFlow and has spent 15+ years building B2B revenue engines. He specializes in lead generation and qualification.',
    content: `
      Lead scoring is the bridge between marketing and sales. It's how you answer the question: "Which leads should my sales team chase?"

      But most lead scoring models are broken.

      They're built on gut instinct rather than data. They weight factors like "company size" and "industry" without tying them back to actual conversion rates. And they rarely get updated as your business changes.

      Here's how to build a lead scoring model that actually predicts who will convert.

      ## Understand the Difference: Fit vs. Engagement

      Before you start, understand that lead scoring has two dimensions:

      **Lead fit:** Does this company match our ideal customer profile? Do they have the problem we solve? Can they afford our solution?

      **Lead engagement:** Are they showing intent to buy? Have they visited our pricing page? Downloaded a resource? Replied to an email?

      The best leads score high on both dimensions. But many teams only track engagement and ignore fit—leading to a pipeline full of interested prospects who don't actually need your product.

      ## Build Your Fit Scoring Model

      Start with your historical data. Look at your closed-won deals. What did they have in common?

      Company size? Industry? Revenue range? Geographic location? Technology stack?

      Now score every new lead against these criteria. Assign points:

      - Company size matches ICP: +10 points
      - Industry matches ICP: +10 points
      - Revenue range matches: +10 points
      - Budget signal present: +5 points
      - Decision maker identified: +10 points

      A fit score of 30+ means this is a qualified lead worth your sales team's time.

      ## Track Engagement Signals

      Now layer in engagement. Which actions indicate buying intent?

      Common signals:
      - Pricing page visit: +5 points
      - Free trial signup: +15 points
      - Whitepaper download: +5 points
      - Email open: +1 point (automated, track over time)
      - Email click: +2 points
      - Sales call request: +20 points
      - Product demo request: +20 points

      Track these in your CRM automatically using integrations with your website, email platform, and other tools.

      ## Set Your Thresholds

      Once you're scoring, set thresholds for sales activity:

      - Score 50+: Hot lead, sales calls within 4 hours
      - Score 30-49: Warm lead, sales calls within 24 hours
      - Score 20-29: Nurture track, add to automated nurture sequence
      - Score <20: Not yet qualified, wait for more engagement

      ## Review and Adjust Quarterly

      Your scoring model should be a living document. Review it quarterly:

      - Which leads actually converted? What score did they have?
      - Which high-scoring leads never converted? Why?
      - Are you targeting the right companies? Do you need to adjust fit criteria?

      Make adjustments based on this analysis.

      ## The Goal

      A good lead scoring model does one thing: it helps your sales team spend time on the 20% of leads that will generate 80% of your revenue.

      Build one today.
    `,
  },
  'appointment-setting-guide': {
    id: 'appointment-setting-guide',
    slug: 'appointment-setting-guide',
    title: 'The Complete Guide to B2B Appointment Setting',
    excerpt:
      'Booking meetings with decision makers is an art and science. Here\'s how top outbound teams convert contacts into scheduled calls.',
    category: 'Appointment Setting',
    date: '2024-04-10',
    readTime: '12 min read',
    author: 'Rahul Mittal',
    authorBio:
      'Rahul is the founder of LetRevenueFlow and has spent 15+ years building B2B revenue engines. He specializes in appointment setting and sales enablement.',
    content: `
      Appointment setting is where most B2B outbound programs fail.

      You've done the hard work of finding the right prospects. You've crafted a compelling message. You're getting replies.

      But then: nothing. The conversation dies. They don't show up to meetings. The pipeline stalls.

      The difference between a 5% meeting rate and a 20% meeting rate comes down to one skill: how you ask for the meeting.

      Here's how top outbound teams approach appointment setting.

      ## Rule #1: Avoid Calendar Links in Cold Outreach

      I know it seems efficient. But here's the problem: a calendar link feels impersonal. It puts the burden on them to find time. And it gives them an easy out.

      Instead: Ask for time via email or message. "Would Tuesday or Thursday work better for a 15-minute call?" Give them two options. Make it easy.

      Only use calendar links after they've said yes.

      ## Rule #2: Lead with Value, Not Desperation

      Your ask should sound like: "I'd like to explore if there's a fit."

      Not: "Are you open to a call?"

      The first is confident. The second is desperate.

      Here's a template:

      "I've worked with companies like [Company A] and [Company B] on similar challenges. I have a few thoughts that might be relevant to you. Would a brief call make sense?"

      The key phrase: "I have thoughts that might be relevant." This establishes value before the meeting.

      ## Rule #3: Control Objections Before They Happen

      If your ask is too open-ended, you'll get objections. Prevent them:

      Instead of: "Are you open to a call?"

      Try: "I know you're busy. This would be a 15-minute call on [date/time]. Would that work?"

      By adding specifics (15 minutes, specific date), you remove the friction.

      ## Rule #4: Use a Two-Stage Close

      Stage 1: Get them to agree in principle
      "Does it make sense to grab 15 minutes to explore this?"

      Stage 2: Lock down the time
      Once they say yes, immediately provide calendar options:
      "Great. Tuesday at 2pm or Thursday at 10am?"

      Many teams skip stage 1 and jump straight to the calendar. That's why people flake.

      ## Rule #5: Confirm Before the Call

      24 hours before the meeting, send a confirmation email:

      "Looking forward to our call tomorrow at 2pm ET. Here's the dial-in: [link]"

      This reduces no-shows by 30%.

      ## Rule #6: Have a Clear Purpose for Every Call

      Before you get on the call, know what you're trying to accomplish:

      - **Discovery call:** Understand their situation, qualify fit, identify next steps
      - **Demo call:** Show product, see if they're interested in deeper evaluation
      - **Close call:** Address final objections, move to next stage

      Let them know which one it is when confirming:

      "Tomorrow we'll spend 15 minutes understanding your situation. If it looks like a fit, we'll schedule a more detailed demo for next week."

      Clear expectations = higher quality calls.

      ## The Numbers You Should Track

      - **Asks:** Number of times you requested a meeting
      - **Positive responses:** How many said yes or "maybe"
      - **Booked meetings:** How many actually scheduled a call
      - **Attended meetings:** How many showed up (not no-shows)
      - **Follow-up meetings:** How many turned into a next step

      Your target:
      - 50% of asks → positive response
      - 60% of positive responses → booked meeting
      - 80% of booked meetings → attended
      - 40% of attended meetings → follow-up

      If your numbers are below these benchmarks, it's time to optimize.

      ## The Bottom Line

      Appointment setting is a skill. Get better at it, and your entire pipeline improves.

      Start by implementing these rules in your next campaign.
    `,
  },
};

export function generateStaticParams() {
  return [
    { slug: 'cold-outreach-fundamentals' },
    { slug: 'lead-scoring-strategy' },
    { slug: 'appointment-setting-guide' },
  ];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  return <BlogPostContent params={params} post={post} blogPosts={blogPosts} />;
}
