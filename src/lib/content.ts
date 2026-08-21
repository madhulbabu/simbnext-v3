export interface Desk {
  id: string;
  index: string;
  name: string;
  category: string;
  slug: string;
  tagline: string;
  description: string;
  sla: string;
  deliverables: string[];
  outcomes: string[];
}

export const DESKS: Desk[] = [
  {
    id: 'strategy',
    index: '01',
    name: 'Strategy Desk',
    category: 'Executive Systems',
    slug: 'strategy-desk',
    tagline: '90-Day digital roadmaps, OKRs, and executive unit economics.',
    description:
      'We align your digital investments directly with revenue targets, preventing ad waste and operational bottlenecks.',
    sla: 'Monthly Business Review (MBR) delivered by the 3rd business day.',
    deliverables: [
      'Quarterly 90-Day Digital Roadmap & OKRs',
      'Monthly Executive Performance Scorecard',
      'Competitor Benchmarking & Tech Audits',
    ],
    outcomes: [
      'Eliminates random marketing spend',
      'Complete executive visibility on customer acquisition cost',
    ],
  },
  {
    id: 'growth',
    index: '02',
    name: 'Growth Desk',
    category: 'Demand & Inbound',
    slug: 'growth-desk',
    tagline: 'High-intent search, paid acquisition, and CRO funnels.',
    description:
      'Systematic paid campaigns on Google & Meta engineered to capture in-market buyers at the lowest cost per booked lead.',
    sla: '48-hour campaign iteration and daily budget pacing governance.',
    deliverables: [
      'High-Intent Google Ads & Meta Funnels',
      'Landing Page CRO & A/B Split Testing',
      'Creative Refresh & Audience Optimization',
    ],
    outcomes: [
      'Consistent inbound consultation volume',
      'Lower CAC through high-converting funnel design',
    ],
  },
  {
    id: 'content',
    index: '03',
    name: 'Content Desk',
    category: 'Brand Authority',
    slug: 'content-desk',
    tagline: 'Short-form video reels, brand graphics, and authority publishing.',
    description:
      'Turn site walkthroughs, client transformations, and leadership insights into high-converting video reels and design assets.',
    sla: '48-hour editorial turnaround for short-form video assets.',
    deliverables: [
      '8x Short-Form Reels/Video Assets per month',
      '12x High-Impact Visual Carousel Creatives',
      'Multi-Channel Distribution & Copywriting',
    ],
    outcomes: [
      'Established industry leadership in your local market',
      'High organic trust before sales conversations begin',
    ],
  },
  {
    id: 'customer',
    index: '04',
    name: 'Customer Desk',
    category: '24/7 AI Lead Ops',
    slug: 'customer-desk',
    tagline: '3.2s WhatsApp lead triage, CRM sync, and automated site visits.',
    description:
      'Zero lead leakage. Our bilingual AI triage agents engage 100% of inquiries in 3.2 seconds, qualifying buyers and syncing to your CRM 24/7.',
    sla: 'Average Speed-to-Lead WhatsApp response latency under 5 seconds.',
    deliverables: [
      '24/7 WhatsApp & Web AI Triage Agent',
      'Instant Calendar & Site Visit Booking',
      'Anti-No-Show WhatsApp Reminders & CRM Sync',
    ],
    outcomes: [
      '3x more booked consultations captured after hours',
      'Zero lead drop-off from delayed manual follow-ups',
    ],
  },
  {
    id: 'automation',
    index: '05',
    name: 'Automation Desk',
    category: 'Operations Efficiency',
    slug: 'automation-desk',
    tagline: 'Eliminate repetitive manual tasks and disjointed tools.',
    description:
      'Custom webhook integrations, lead routing, document generators, and automated invoicing that save your team 40+ hours every month.',
    sla: '99.9% uptime on active automations and 4-hour break-fix SLA.',
    deliverables: [
      'CRM, WhatsApp & WhatsApp API Webhook Pipelines',
      'Automated Quotation & PDF Invoice Routing',
      'Internal Task Alerts & Escalation Bots',
    ],
    outcomes: [
      'Saves 40+ staff hours monthly on data entry',
      'Seamless data flow across all your sales tools',
    ],
  },
  {
    id: 'digital',
    index: '06',
    name: 'Digital Desk',
    category: 'Web & Infrastructure',
    slug: 'digital-desk',
    tagline: 'Next.js edge hosting, 1.2s Core Web Vitals, and 99.8% uptime.',
    description:
      'Enterprise-grade web architecture built for speed and security. Fast-loading landing pages that never crash during high-traffic ad spikes.',
    sla: '99.8% infrastructure uptime guarantee & 1-hour critical response.',
    deliverables: [
      'High-Performance Next.js / Astro Web Infrastructure',
      'Sub-1.5s Core Web Vitals Optimization',
      'Security Monitoring, SSL & Continuous Backups',
    ],
    outcomes: [
      'Highest conversion rates via instant page load speeds',
      'Zero downtime or server maintenance headaches',
    ],
  },
];

export const WHY_CHOOSE = [
  {
    title: 'One Accountable Partner',
    description:
      'Replace 4 to 6 disconnected agencies with a single integrated digital department directed under one monthly retainer.',
  },
  {
    title: '20+ Years Systems Rigor',
    description:
      'Direct oversight from corporate systems veterans—ensuring enterprise discipline with zero junior staff learning on your dime.',
  },
  {
    title: '3.2s Speed-to-Lead SLA',
    description:
      'Proprietary AI triage agents engage every buyer inquiry in seconds on WhatsApp, eliminating lead loss after hours.',
  },
  {
    title: 'Strict Service Level Agreements',
    description:
      'Every desk operates under written monthly delivery SLAs, guaranteed turnaround windows, and transparent scorecards.',
  },
  {
    title: '5-Day Setup Sprint',
    description:
      'From discovery consultation to live digital operations in just five days, delivering immediate operational relief.',
  },
  {
    title: 'Zero Long-Term Lock-in',
    description:
      'We earn our partnership every single month. Flexible month-to-month retainers with complete intellectual property ownership.',
  },
];

export const SOLUTIONS = [
  {
    slug: 'healthcare-clinics',
    title: 'Healthcare & Aesthetic Clinics',
    eyebrow: 'Dental, Derma & Surgical',
    description:
      '24/7 AI patient triage, automated appointment booking, anti-no-show reminders, and Google Maps 3-Pack SEO.',
    stat: '+180%',
    statLabel: 'Consultation Booking Lift',
    deliverables: [
      '24/7 WhatsApp Patient Triage',
      'Automated Anti-No-Show Reminders',
      'Local Healthcare SEO & Google Maps',
    ],
  },
  {
    slug: 'luxury-interiors',
    title: 'Luxury Interiors & Architects',
    eyebrow: 'High-Ticket Design Studios',
    description:
      'Convert portfolio walkthroughs into qualified design consultation bookings with automated budget screening.',
    stat: '40+ hrs',
    statLabel: 'Management Time Saved / mo',
    deliverables: [
      'Architectural Reel Production',
      'Budget-Qualified Lead Funnels',
      'Automated Portfolio PDF Dispatch',
    ],
  },
  {
    slug: 'boutique-real-estate',
    title: 'Boutique Real Estate & Builders',
    eyebrow: 'Developers & Channel Partners',
    description:
      '3.2s ad inquiry response, automated site visit booking, bilingual qualification, and Channel Partner tracking.',
    stat: '3.2s',
    statLabel: 'Average Speed-to-Lead',
    deliverables: [
      'Instant Meta Ad WhatsApp Triage',
      'Automated Site Visit Scheduling',
      'Channel Partner Attribution Sync',
    ],
  },
  {
    slug: 'high-ticket-b2b',
    title: 'High-Ticket B2B & Industrial',
    eyebrow: 'Manufacturers & Enterprises',
    description:
      'Automated technical RFQ intake, spec sheet dispatch, executive roadmaps, and custom workflow automations.',
    stat: '90%',
    statLabel: 'Faster RFQ Triage',
    deliverables: [
      'Technical RFQ Intake Pipelines',
      'Buyer Specification Routing',
      'Executive 90-Day Growth Audits',
    ],
  },
];

export const AGENCY_COMPARISON = [
  {
    feature: 'Accountability',
    conventional: '4–6 fragmented vendors pointing fingers when leads drop',
    simbnext: 'Single senior digital department taking end-to-end ownership',
  },
  {
    feature: 'Speed-to-Lead',
    conventional: 'Manual replies taking 4 to 12 hours (lost leads)',
    simbnext: '3.2-second 24/7 AI lead qualification on WhatsApp',
  },
  {
    feature: 'Team Seniority',
    conventional: 'Pitched by executives, handed off to junior interns',
    simbnext: 'Directed by 20+ year systems veterans on every desk',
  },
  {
    feature: 'Contracts & SLAs',
    conventional: 'Long-term lock-in contracts with zero delivery guarantees',
    simbnext: 'Month-to-month retainers backed by written monthly SLAs',
  },
];

export const PACKAGES = [
  {
    tier: 'Tier 1',
    name: 'Essential Desk',
    desksIncluded: '1–2 Dedicated Desks',
    recommendedFor: 'Businesses needing focused help with AI Lead Triage or Web Infrastructure.',
    highlights: [
      'Choice of 1 or 2 core operational desks',
      '3.2s Speed-to-Lead WhatsApp AI setup',
      'Standard delivery SLAs & monthly report',
    ],
    ctaText: 'Request Tier 1 Proposal',
    featured: false,
  },
  {
    tier: 'Tier 2 · Most Popular',
    name: 'Growth Partner',
    desksIncluded: '3–4 Integrated Desks',
    recommendedFor: 'Owner-led companies scaling inbound leads and authority without agency chaos.',
    highlights: [
      'Growth Desk + Customer Desk + Content Desk',
      'Full 24/7 AI lead triage & ad management',
      '8x monthly short-form video reels',
      'Priority 48-hour turnarounds & Monthly MBR',
    ],
    ctaText: 'Request Growth Proposal',
    featured: true,
    badge: 'Recommended',
  },
  {
    tier: 'Tier 3',
    name: 'Complete Partner',
    desksIncluded: 'All 6 Dedicated Desks',
    recommendedFor: 'Established enterprises replacing their entire fragmented vendor ecosystem.',
    highlights: [
      'All 6 Desks fully active (Strategy to Digital)',
      'Dedicated Senior Operations Director',
      'Enterprise 99.8% uptime & 1-hour critical SLA',
      'Complete custom webhook & CRM automations',
    ],
    ctaText: 'Request Enterprise Proposal',
    featured: false,
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Discovery Consultation',
    description:
      'We evaluate your current lead response latency, ad funnels, and tech stack to identify immediate high-ROI operational opportunities.',
    deliverables: ['Operational Scope', '90-Day Roadmap', 'Custom SLA Proposal'],
  },
  {
    step: '02',
    title: '5-Day Setup Sprint',
    description:
      'We configure your active Desks, deploy your 24/7 AI lead triage agents, and integrate your CRM pipelines.',
    deliverables: ['AI Agent Deployment', 'CRM & WhatsApp Setup', 'Baseline Testing'],
  },
  {
    step: '03',
    title: 'Monthly SLA Operations',
    description:
      'Your desks execute monthly deliverables with strict SLAs, weekly monitoring, and executive scorecards.',
    deliverables: ['Guaranteed Deliverables', 'Weekly Optimization', 'Monthly MBR Scorecard'],
  },
];

export const CASE_STUDIES = [
  {
    client: 'Apex Health Clinics',
    sector: 'Healthcare & Aesthetics',
    location: 'Hyderabad',
    stat: '+180%',
    statLabel: 'Consultation Lift',
    quote:
      'Our 24/7 AI triage agent captures 3x more patient consultations after clinic hours with zero additional staff overhead.',
    author: 'Dr. Radhika V.',
    role: 'Clinical Director & Founder',
  },
  {
    client: 'V-Design Architects',
    sector: 'Luxury Interiors',
    location: 'Jubilee Hills',
    stat: '40+ hrs',
    statLabel: 'Saved Monthly',
    quote:
      'Eliminated the chaos of managing three separate agencies. Complete accountability under one monthly retainer.',
    author: 'Vikram M.',
    role: 'Principal Architect',
  },
  {
    client: 'Urban Living Realty',
    sector: 'Boutique Real Estate',
    location: 'Gachibowli',
    stat: '3.2s',
    statLabel: 'Lead Response SLA',
    quote:
      'Zero lead loss after hours. Ad clicks get qualified and booked for site visits automatically across WhatsApp and web.',
    author: 'Ananya S.',
    role: 'Head of Sales',
  },
  {
    client: 'Precision Gears Ltd',
    sector: 'Industrial Manufacturing',
    location: 'Sanath Nagar',
    stat: '90%',
    statLabel: 'Faster RFQ Triage',
    quote:
      'Automated our technical specifications routing. High-ticket B2B buyers now receive instant spec sheets and quotes.',
    author: 'K. S. Rao',
    role: 'Managing Director',
  },
];

export const FAQS = [
  {
    q: 'How does SimbNext differ from a typical digital marketing agency?',
    a: 'Traditional agencies sell disconnected tasks with junior staff and no accountability. SimbNext functions as your dedicated digital operations department—combining strategy, customer acquisition, 24/7 AI lead operations, and web infrastructure under written monthly SLAs directed by 20+ year systems veterans.',
  },
  {
    q: 'What is the 3.2-second Speed-to-Lead SLA?',
    a: 'When an inquiry arrives from Google Ads, Meta Ads, or your website, our proprietary AI triage agent engages the buyer on WhatsApp in 3.2 seconds average—answering questions, qualifying budget/intent, and booking meetings directly into your calendar 24/7.',
  },
  {
    q: 'How fast is onboarding?',
    a: 'Following your discovery consultation, our 5-Day Setup Sprint configures your active desks, deploys trained AI lead agents, and connects your CRM pipelines so you start seeing results within the first week.',
  },
  {
    q: 'Are there long-term lock-in contracts?',
    a: 'No. All partnerships operate on flexible month-to-month retainers. We earn our partnership every single month through SLA delivery and transparent Monthly Business Reviews (MBRs).',
  },
  {
    q: 'Who owns the website code and creative assets?',
    a: 'You do. 100% of custom code, trained knowledge base prompts, video creatives, and landing pages created for your business belong entirely to you.',
  },
];
