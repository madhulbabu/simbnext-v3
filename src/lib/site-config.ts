export const SITE = {
  name: 'SimbNext',
  legalName: 'SimbNext',
  tagline: 'The Outsourced Digital Department for Established Businesses',
  ogTitle: 'SimbNext — Your Outsourced Digital Department',
  description:
    'SimbNext manages all your recurring digital operations under one accountable partner. Strategy, customer acquisition, 24/7 AI lead triage, content, and web infrastructure governed by guaranteed monthly SLAs.',
  url: 'https://www.simbnext.com',
  email: 'hello@simbnext.com',
  phone: '+91 91607 57505',
  phoneRaw: '919160757505',
  location: 'Hyderabad · Global Delivery',
  ctaPrimary: 'Schedule a Consultation',
  ctaSecondary: 'Explore The 6 Desks',
  logoAlt: 'SimbNext logo',
  logoSrc: '/simbnext-logo.svg',
  logoSrcDark: '/simbnext-logo-dark.svg',
};

export const NAV_LINKS = [
  { href: '/', label: 'Overview' },
  {
    href: '/#desks',
    label: 'The 6 Desks',
    children: [
      {
        href: '/services/strategy-desk',
        label: 'Strategy Desk',
        description: 'Roadmaps, OKRs, scorecards, and executive alignment.',
      },
      {
        href: '/services/growth-desk',
        label: 'Growth Desk',
        description: 'High-intent search, Google Ads, Meta Ads, and customer acquisition.',
      },
      {
        href: '/services/content-desk',
        label: 'Content Desk',
        description: 'Brand authority, short-form video reels, graphics, and publishing.',
      },
      {
        href: '/services/customer-desk',
        label: 'Customer Desk',
        description: '24/7 AI lead capture, 3.2s qualification, and CRM sync.',
      },
      {
        href: '/services/automation-desk',
        label: 'Automation Desk',
        description: 'Eliminating repetitive manual tasks and operational bottlenecks.',
      },
      {
        href: '/services/digital-desk',
        label: 'Digital Desk',
        description: 'Next.js web infrastructure, landing pages, and 99.8% uptime SLA.',
      },
    ],
  },
  {
    href: '/#solutions',
    label: 'Solutions',
    children: [
      {
        href: '/solutions/healthcare-clinics',
        label: 'Healthcare & Clinics',
        description: '24/7 patient booking, anti-no-show reminders, and local SEO.',
      },
      {
        href: '/solutions/luxury-interiors',
        label: 'Luxury Interiors & Architects',
        description: 'High-ticket design consultation bookings and video reels.',
      },
      {
        href: '/solutions/boutique-real-estate',
        label: 'Boutique Real Estate',
        description: 'Instant ad lead qualification, site visits, and CP tracking.',
      },
      {
        href: '/solutions/high-ticket-b2b',
        label: 'High-Ticket B2B',
        description: 'Automated RFQ triage and technical specification routing.',
      },
    ],
  },
  { href: '/how-we-work', label: 'How It Works' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const FOOTER_LINKS = {
  Company: [
    { href: '/about', label: 'About & Leadership' },
    { href: '/how-we-work', label: 'Operating Model & SLAs' },
    { href: '/case-studies', label: 'Verified Case Studies' },
    { href: '/contact', label: 'Schedule a Consultation' },
  ],
  Desks: [
    { href: '/services/strategy-desk', label: 'Strategy Desk' },
    { href: '/services/growth-desk', label: 'Growth Desk' },
    { href: '/services/content-desk', label: 'Content Desk' },
    { href: '/services/customer-desk', label: 'Customer Desk' },
    { href: '/services/automation-desk', label: 'Automation Desk' },
    { href: '/services/digital-desk', label: 'Digital Desk' },
  ],
  Solutions: [
    { href: '/solutions/healthcare-clinics', label: 'Healthcare & Clinics' },
    { href: '/solutions/luxury-interiors', label: 'Luxury Interiors' },
    { href: '/solutions/boutique-real-estate', label: 'Boutique Real Estate' },
    { href: '/solutions/high-ticket-b2b', label: 'High-Ticket B2B' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/refunds', label: 'Refunds & SLA Terms' },
  ],
};
