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
  image: string;
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
    image: '/blog/cold-outreach-fundamentals.jpg',
    author: 'Rahul Mittal',
    authorBio:
      'Rahul is the founder of LetRevenueFlow and has extensive experience building B2B revenue engines. He specializes in outbound strategy and pipeline development.',
    content: `
      Cold outreach is not dead—it is just poorly executed. Most B2B teams approach cold outreach as a volume game: blast 1,000 emails, hope for a 2% response rate, and move on.

      That is a recipe for burnout, poor data quality, and wasted budget.

      In this post, we will walk through how to build a cold outreach campaign that actually works. We will cover targeting, messaging, cadence, and the metrics that matter.

      ## Step 1: Get Your Targeting Right

      The foundation of any successful cold outreach campaign is targeting. You can have the best message in the world, but if you are sending it to the wrong people, you will get nowhere.

      Start by defining your ideal customer profile (ICP). Who are the types of companies that benefit most from your solution? What size are they? What industry? What challenges do they face?

      Once you have defined your ICP, you need to identify the decision makers within those companies. Who owns the pain point you are solving? Is it the VP of Sales? The Chief Marketing Officer? The CFO?

      The more specific your targeting, the higher your response rates will be.

      ## Step 2: Craft Your Message

      Your cold outreach message should accomplish three things:

      1. **Get attention.** Your subject line or opening sentence should be specific to the recipient. Generic openers will not cut it.

      2. **Establish credibility.** Why should they listen to you? Share a brief social proof: a relevant client win, a statistic, or an insight about their industry.

      3. **Create curiosity.** Do not pitch. Instead, ask a question that makes them want to respond.

      Here is a template that works:

      Subject: [Specific observation about their company]

      Hi [Name],

      [Specific observation about their company or role]

      [Relevant client win or insight]

      [Curious question]

      [Your name]

      ## Step 3: Set Your Cadence

      Cold outreach is a numbers game, but it is not about volume—it is about velocity. A single email has a low response rate. But a sequence of 3-4 touches over 2-3 weeks? You will see significantly higher engagement.

      Here is a cadence that works:

      **Touch 1 (Day 1):** Email
      **Touch 2 (Day 3):** LinkedIn connection request
      **Touch 3 (Day 5):** Email follow-up with new angle
      **Touch 4 (Day 10):** Final email with lower-friction ask

      After 4 touches, stop. If they have not engaged by then, they are probably not interested.

      ## Step 4: Measure What Matters

      Most teams measure response rate. But response rate is a vanity metric if the responses are not qualified.

      Instead, measure:

      - **Reply rate:** % of emails that get a response (any response)
      - **Qualified lead rate:** % of responses from actual prospects who fit your ICP
      - **Meeting rate:** % of qualified conversations that convert to meetings
      - **Cost per meeting:** How much you are spending to book a call

      These metrics will tell you whether your campaign is working and where to optimize.

      ## Start Small, Iterate, Scale

      Do not launch with 1,000 emails. Start with 50. Test your targeting, message, and cadence. Iterate based on what you learn. Once you have found a formula that works, scale.

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
    image: '/blog/lead-scoring-strategy.jpg',
    author: 'Rahul Mittal',
    authorBio:
      'Rahul is the founder of LetRevenueFlow and has extensive experience building B2B revenue engines. He specializes in lead generation and qualification.',
    content: `
      Lead scoring is the bridge between marketing and sales. It is how you answer the question: "Which leads should my sales team chase?"

      But most lead scoring models are broken.

      They are built on gut instinct rather than data. They weight factors without tying them back to actual conversion rates. And they rarely get updated as your business changes.

      Here is how to build a lead scoring model that actually predicts who will convert.

      ## Understand the Difference: Fit vs. Engagement

      Before you start, understand that lead scoring has two dimensions:

      **Lead fit:** Does this company match our ideal customer profile? Do they have the problem we solve? Can they afford our solution?

      **Lead engagement:** Are they showing intent to buy? Have they visited our pricing page? Downloaded a resource? Replied to an email?

      The best leads score high on both dimensions. But many teams only track engagement and ignore fit—leading to a pipeline full of interested prospects who do not actually need your product.

      ## Build Your Fit Scoring Model

      Start with your historical data. Look at your closed-won deals. What did they have in common?

      Company size? Industry? Revenue range? Geographic location? Technology stack?

      Now score every new lead against these criteria. Assign points based on how closely they match your ideal profile.

      A strong fit score means this is a qualified lead worth your sales team's time.

      ## Track Engagement Signals

      Now layer in engagement. Which actions indicate buying intent?

      Common signals include pricing page visits, free trial signups, whitepaper downloads, email opens and clicks, sales call requests, and product demo requests.

      Track these in your CRM automatically using integrations with your website, email platform, and other tools.

      ## Set Your Thresholds

      Once you are scoring, set thresholds for sales activity. Hot leads should get immediate attention. Warm leads should be contacted within 24 hours. Lower-scoring leads can be placed in nurture tracks until they show more engagement.

      ## Review and Adjust Quarterly

      Your scoring model should be a living document. Review it quarterly:

      - Which leads actually converted? What score did they have?
      - Which high-scoring leads never converted? Why?
      - Are you targeting the right companies? Do you need to adjust fit criteria?

      Make adjustments based on this analysis.

      ## The Goal

      A good lead scoring model does one thing: it helps your sales team spend time on the leads that will generate the most revenue.

      Build one today.
    `,
  },
  'appointment-setting-guide': {
    id: 'appointment-setting-guide',
    slug: 'appointment-setting-guide',
    title: 'The Complete Guide to B2B Appointment Setting',
    excerpt:
      'Booking meetings with decision makers is an art and science. Here is how top outbound teams convert contacts into scheduled calls.',
    category: 'Appointment Setting',
    date: '2024-04-10',
    readTime: '12 min read',
    image: '/blog/appointment-setting-guide.jpg',
    author: 'Rahul Mittal',
    authorBio:
      'Rahul is the founder of LetRevenueFlow and has extensive experience building B2B revenue engines. He specializes in appointment setting and sales enablement.',
    content: `
      Appointment setting is where most B2B outbound programs fail.

      You have done the hard work of finding the right prospects. You have crafted a compelling message. You are getting replies.

      But then: nothing. The conversation dies. They do not show up to meetings. The pipeline stalls.

      The difference between a low meeting rate and a high meeting rate comes down to one skill: how you ask for the meeting.

      Here is how top outbound teams approach appointment setting.

      ## Rule #1: Avoid Calendar Links in Cold Outreach

      It seems efficient. But here is the problem: a calendar link feels impersonal. It puts the burden on them to find time. And it gives them an easy out.

      Instead: Ask for time via email or message. "Would Tuesday or Thursday work better for a 15-minute call?" Give them two options. Make it easy.

      Only use calendar links after they have said yes.

      ## Rule #2: Lead with Value, Not Desperation

      Your ask should sound like: "I would like to explore if there is a fit."

      Not: "Are you open to a call?"

      The first is confident. The second is desperate.

      The key phrase: "I have thoughts that might be relevant." This establishes value before the meeting.

      ## Rule #3: Control Objections Before They Happen

      If your ask is too open-ended, you will get objections. Prevent them by adding specifics—the time commitment and a specific date—to remove friction.

      ## Rule #4: Use a Two-Stage Close

      Stage 1: Get them to agree in principle.
      "Does it make sense to grab 15 minutes to explore this?"

      Stage 2: Lock down the time.
      Once they say yes, immediately provide calendar options.

      Many teams skip stage 1 and jump straight to the calendar. That is why people flake.

      ## Rule #5: Confirm Before the Call

      24 hours before the meeting, send a confirmation email with the dial-in link. This significantly reduces no-shows.

      ## Rule #6: Have a Clear Purpose for Every Call

      Before you get on the call, know what you are trying to accomplish:

      - **Discovery call:** Understand their situation, qualify fit, identify next steps
      - **Demo call:** Show product, see if they are interested in deeper evaluation
      - **Close call:** Address final objections, move to next stage

      Let them know which one it is when confirming. Clear expectations lead to higher quality calls.

      ## The Numbers You Should Track

      Track: asks made, positive responses, booked meetings, attended meetings, and follow-up meetings. Monitor these ratios to optimize your process.

      ## The Bottom Line

      Appointment setting is a skill. Get better at it, and your entire pipeline improves.

      Start by implementing these rules in your next campaign.
    `,
  },
  'saas-pipeline-leak': {
    id: 'saas-pipeline-leak',
    slug: 'saas-pipeline-leak',
    title: 'Why SaaS Companies Are Leaking Pipeline (And How to Fix It)',
    excerpt:
      'Revenue leakage at every stage of the funnel is costing SaaS companies millions. We identify the biggest culprits and share solutions that work.',
    category: 'SaaS Growth',
    date: '2024-04-08',
    readTime: '9 min read',
    image: '/blog/saas-pipeline-leak.jpg',
    author: 'Rahul Mittal',
    authorBio:
      'Rahul is the founder of LetRevenueFlow and has extensive experience building B2B revenue engines. He specializes in SaaS pipeline strategy.',
    content: `
      Every SaaS company has pipeline leaks. The question is whether you know where yours are.

      Pipeline leakage happens when qualified opportunities fall out of your funnel before they convert. It is invisible, gradual, and expensive. And most teams do not realize how much revenue they are losing until they audit their process.

      Here is where the biggest leaks happen—and how to fix them.

      ## Leak #1: Poor Lead Qualification

      The most common leak starts at the top. Marketing generates leads, but the qualification criteria are loose. Leads get passed to sales that are not ready to buy, do not fit the ICP, or do not have budget authority.

      The fix: Align marketing and sales on a shared definition of a qualified lead. Build a scoring model and only pass leads that meet the threshold.

      ## Leak #2: Slow Response Times

      Research consistently shows that responding to inbound leads quickly dramatically increases conversion rates. Yet most B2B companies take hours or even days to follow up.

      The fix: Set up automated alerts. Assign a dedicated person or team to handle inbound leads in real time. Use tools that notify reps instantly when a high-value lead comes in.

      ## Leak #3: No Follow-Up Cadence

      A single email is not enough. Most deals require multiple touchpoints before a prospect engages. But many sales teams send one email, get no response, and move on.

      The fix: Build a structured follow-up cadence. We recommend several touchpoints across email, phone, and LinkedIn over a 2-3 week period. Persistence pays off—as long as each touch adds value.

      ## Leak #4: Misaligned Messaging

      Your outbound messaging promises one thing; your product delivers another. Or worse, your messaging is generic and does not speak to the specific pain points of your ICP.

      The fix: Interview your best customers. What problem did they have? What language do they use to describe it? Mirror that language in your outreach. Specificity wins.

      ## Leak #5: No Pipeline Visibility

      You cannot fix what you cannot see. Many SaaS companies lack a clear view of their pipeline: where deals are, how long they have been there, and what the next step is.

      The fix: Invest in your CRM hygiene. Require reps to update deal stages, log activities, and set next steps. Run weekly pipeline reviews where every deal is discussed and action items are assigned.

      ## Leak #6: Handoff Failures

      The transition from SDR to AE, or from marketing to sales, is where many deals die. Information gets lost. Context disappears. The prospect has to repeat themselves.

      The fix: Document every interaction. Use your CRM to capture notes, call recordings, and email threads. When handing off a deal, include a brief that summarizes everything the prospect has shared.

      ## How to Audit Your Pipeline

      Start with these questions:

      - What is your lead-to-opportunity conversion rate?
      - What is your average deal cycle length?
      - At which stage do most deals stall or die?
      - What percentage of qualified leads never receive a follow-up?
      - How quickly do you respond to inbound leads?

      Answer these honestly, and you will find your leaks.

      ## The Bottom Line

      Pipeline leakage is a solvable problem. It requires discipline, process, and visibility. Fix the leaks, and you will see a meaningful impact on revenue without generating a single additional lead.
    `,
  },
  'revenue-ops-framework': {
    id: 'revenue-ops-framework',
    slug: 'revenue-ops-framework',
    title: 'Building a Revenue Operations Framework That Scales',
    excerpt:
      'Revenue Ops is about alignment, automation, and measurement. Learn the framework we use to help B2B teams scale their operations.',
    category: 'Revenue Operations',
    date: '2024-04-05',
    readTime: '11 min read',
    image: '/blog/revenue-ops-framework.jpg',
    author: 'Rahul Mittal',
    authorBio:
      'Rahul is the founder of LetRevenueFlow and has extensive experience building B2B revenue engines. He specializes in revenue operations and growth strategy.',
    content: `
      Revenue Operations—RevOps for short—is the connective tissue between marketing, sales, and customer success. When it works well, every team is aligned around the same goals, using the same data, and moving in the same direction.

      When it does not work, you get silos, finger-pointing, and missed targets.

      Here is the framework we use to build RevOps functions that scale.

      ## Pillar 1: Alignment

      The first pillar is getting everyone on the same page. This means:

      **Shared definitions.** What is a qualified lead? What is an opportunity? What counts as a closed deal? These definitions must be consistent across marketing, sales, and CS.

      **Shared goals.** Revenue is the shared goal. Marketing should not optimize for MQLs if those MQLs do not convert. Sales should not chase deals that do not fit the ICP. CS should not renew accounts that are a bad fit.

      **Shared process.** From lead to close to renewal, everyone should understand the full journey and their role in it.

      ## Pillar 2: Process

      Once you have alignment, you need process. Process is how work gets done consistently and predictably.

      Key processes to define:

      - **Lead routing:** How do leads get assigned? By territory? By round-robin? By deal size?
      - **Deal stages:** What are the stages of your sales process? What criteria must be met to move a deal forward?
      - **Handoffs:** How does a lead move from marketing to sales? From SDR to AE? From sales to CS?
      - **Forecasting:** How do you predict revenue? What data do you use? How often do you review?

      Document these processes. Train your team. Review and iterate quarterly.

      ## Pillar 3: Technology

      Your tech stack should support your process—not the other way around.

      The core RevOps stack includes your CRM as the single source of truth, marketing automation for nurture campaigns and lead scoring, sales engagement tools for cadence management and tracking, analytics for dashboards and pipeline visibility, and an integration layer to connect everything.

      Do not buy tools to solve people problems. Fix the process first, then choose the tools that support it.

      ## Pillar 4: Data

      Data is the foundation of everything. Bad data leads to bad decisions.

      RevOps must own data quality. Standardize inputs using picklists instead of free text. Clean regularly by deduplicating contacts and archiving stale deals. Measure what matters—not everything that can be measured should be measured.

      Key metrics for RevOps include pipeline coverage ratio, lead-to-opportunity conversion rate, average deal cycle length, win rate by segment, customer acquisition cost, and net revenue retention.

      ## Pillar 5: Continuous Improvement

      RevOps is never done. The best teams treat their operations as a product: always iterating, always improving.

      Run quarterly reviews asking what worked, where you fell short, what process changes to make, and what tools to add, remove, or replace.

      Make RevOps a strategic function, not a support function. Give it a seat at the leadership table.

      ## Getting Started

      You do not need a massive team or a huge budget to start building RevOps. Start with alignment. Define your shared goals and metrics. Document your core processes. Clean your data.

      Then iterate.

      The companies that build a strong RevOps foundation early are the ones that scale predictably.
    `,
  },
  'personalization-at-scale': {
    id: 'personalization-at-scale',
    slug: 'personalization-at-scale',
    title: 'How to Personalize Outreach Without Losing Scale',
    excerpt:
      'Personalization increases response rates, but how do you personalize at scale? We share the techniques that balance quality and velocity.',
    category: 'Outbound Sales',
    date: '2024-04-01',
    readTime: '7 min read',
    image: '/blog/personalization-at-scale.jpg',
    author: 'Rahul Mittal',
    authorBio:
      'Rahul is the founder of LetRevenueFlow and has extensive experience building B2B revenue engines. He specializes in outbound strategy and personalization.',
    content: `
      Everyone knows personalization works. A personalized email gets higher open rates, higher reply rates, and higher conversion rates than a generic blast.

      But here is the problem: personalization takes time. And when you are trying to reach hundreds or thousands of prospects, spending 15 minutes researching each one is not sustainable.

      So how do you personalize at scale? Here is our framework.

      ## The Personalization Spectrum

      Not all personalization is equal. Think of it as a spectrum:

      **Level 1: Segment-level.** Group prospects by industry, company size, or role. Customize your messaging for each segment. This is the minimum viable personalization.

      **Level 2: Company-level.** Reference something specific about their company: a recent funding round, a product launch, a hiring spree. This takes a few minutes of research per company.

      **Level 3: Person-level.** Reference something specific about the individual: a LinkedIn post, a conference talk, a shared connection. This is the most effective but also the most time-consuming.

      The key is knowing when to use each level.

      ## When to Use Each Level

      **Level 1 (Segment)** for high-volume prospecting. When you are reaching out to many contacts in a similar segment, segment-level personalization is sufficient. Create 3-5 message variations per segment.

      **Level 2 (Company)** for target accounts. When you have identified specific companies you want to win, invest in company-level research. Spend a few minutes per company gathering relevant context.

      **Level 3 (Person)** for executive outreach. When you are reaching out to C-level or VP-level decision makers, go deep. These are your highest-value prospects and deserve the extra effort.

      ## Practical Techniques for Scale

      Here are the techniques we use to personalize without slowing down:

      **1. Build research templates.** Create a checklist of what to look for: recent news, job postings, tech stack, social media activity. Having a template makes research faster and more consistent.

      **2. Use trigger events.** Set up alerts for key events: funding rounds, leadership changes, product launches, hiring sprees. These are natural conversation starters that require minimal research.

      **3. Create modular messages.** Build your emails in blocks: a personalized opener, a value proposition middle, and a standard CTA. Only the opener needs to change for each prospect.

      **4. Batch your research.** Do not switch between research and writing. Research a batch of prospects at once, then write all the emails. Batching reduces context-switching and increases speed.

      **5. Leverage your CRM.** Tag prospects with relevant attributes during research. When it is time to follow up or send a new campaign, you already have the context you need.

      ## The 80/20 Rule of Personalization

      Here is the truth: you do not need to personalize everything. The opening line of your email does most of the heavy lifting. If your first sentence is specific and relevant, the rest of the email can be more templated.

      Focus your personalization efforts on the subject line, the opening sentence, and the CTA (make it relevant to their situation). Everything in between can follow a proven template.

      ## Measuring What Works

      Track these metrics to evaluate your personalization efforts:

      - **Open rate by personalization level:** Are deeper-personalized emails getting higher opens?
      - **Reply rate by personalization level:** Where is the biggest jump in engagement?
      - **Time per email by level:** How much extra time does each level cost?
      - **Meetings booked per hour of outreach:** This is the ultimate efficiency metric.

      Use these numbers to find your sweet spot: the level of personalization that maximizes meetings booked per hour invested.

      ## Start Today

      You do not need to personalize every email to every prospect. Start with segment-level personalization for your volume plays, and invest deeper personalization in your highest-value targets.

      The goal is not perfect personalization. The goal is relevant personalization at a pace that moves the needle.
    `,
  },
};

export function generateStaticParams() {
  return [
    { slug: 'cold-outreach-fundamentals' },
    { slug: 'lead-scoring-strategy' },
    { slug: 'appointment-setting-guide' },
    { slug: 'saas-pipeline-leak' },
    { slug: 'revenue-ops-framework' },
    { slug: 'personalization-at-scale' },
  ];
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  return <BlogPostContent params={{ slug }} post={post} blogPosts={blogPosts} />;
}
