export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrLocation: string;
  projectName: string;
  projectType: string;
  squareFeet: string;
  handoverDuration: string;
  rating: number;
  quote: string;
  detailedReview: string;
  highlights: string[];
  avatarInitial: string;
  verified: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Arjun & Meera Nambiar',
    roleOrLocation: 'The Regency Terraces, Penthouse 18',
    projectName: 'Regency Duplex Skyhome',
    projectType: '4BHK Duplex Penthouse',
    squareFeet: '4,400 sq.ft',
    handoverDuration: '44 Days (1 day ahead)',
    rating: 5,
    quote: 'Arcane Studio transformed our vision into an architectural work of art without a single delay or unexpected surcharge.',
    detailedReview: 'We had heard endless horror stories about interior contractors missing deadlines by months and ballooning budgets. From day one, Arcane Studio presented a clear 3D render, transparent BOM (Bill of Materials), and a fixed handover date. Their factory-manufactured modular woodwork snapped together on-site with zero dust and surgical precision.',
    highlights: ['Zero budget overrun', 'Factory-finished precision', '10-Year warranty certificate provided'],
    avatarInitial: 'AN',
    verified: true,
  },
  {
    id: 'test-2',
    clientName: 'Dr. Sunita Varma',
    roleOrLocation: 'Crestline Villa 42',
    projectName: 'Crestline Contemporary Villa',
    projectType: 'Turnkey Luxury Villa',
    squareFeet: '5,200 sq.ft',
    handoverDuration: '45 Days Handover',
    rating: 5,
    quote: 'The modular kitchen and walk-in wardrobes are built to German standards. The soft-close Blum fittings and lighting are extraordinary.',
    detailedReview: 'Being a surgeon, my schedule left me zero time to supervise site work. Arcane Studio assigned a dedicated Project Lead who sent daily WhatsApp video walkthroughs and weekly milestone sign-offs. The acoustic bedroom paneling gives me complete deep rest even in the middle of noisy city afternoons.',
    highlights: ['Daily video walkthroughs', 'Acoustic sound-proofing', 'Flawless stone fabrication'],
    avatarInitial: 'SV',
    verified: true,
  },
  {
    id: 'test-3',
    clientName: 'Farhan & Natasha Merchant',
    roleOrLocation: 'Marina Bay Boulevard',
    projectName: 'Marina Bay Modern Apartment',
    projectType: '3BHK Sea-Facing Residence',
    squareFeet: '2,800 sq.ft',
    handoverDuration: '38 Days Total',
    rating: 5,
    quote: 'Every visitor to our apartment is in awe of the bookmatched marble wall and concealed bar unit. They are true interior artists.',
    detailedReview: 'The team treated every millimeter of our apartment with immense care. They designed concealed storage everywhere without making the rooms feel heavy. The warm 2700K lighting design they planned creates such an inviting, serene evening ambiance.',
    highlights: ['Concealed storage innovations', '2700K architectural lighting', 'Turnkey deep-clean handover'],
    avatarInitial: 'FM',
    verified: true,
  },
  {
    id: 'test-4',
    clientName: 'Devendra Patel',
    roleOrLocation: 'Director, Zenith Ventures',
    projectName: 'Zenith Commercial Headquarters',
    projectType: 'Executive Office & Boardroom',
    squareFeet: '3,600 sq.ft',
    handoverDuration: '42 Days Complete',
    rating: 5,
    quote: 'Our new corporate office has directly boosted client impressions and team productivity. Delivered on time and within budget.',
    detailedReview: 'Commercial projects demand strict adherence to building management fire codes and acoustic requirements. Arcane Studio handled all approvals seamlessly while executing curved timber acoustic walls and high-tech videoconference lounges.',
    highlights: ['Commercial compliance', 'Hospitality-grade finishes', 'Acoustic meeting pods'],
    avatarInitial: 'DP',
    verified: true,
  }
];

export const TRUST_METRICS = [
  { value: '1,200+', label: 'Luxury Homes Delivered' },
  { value: '45 Days', label: 'Guaranteed Turnkey Handover' },
  { value: '10 Years', label: 'Comprehensive Warranty' },
  { value: '4.9 / 5', label: 'Client Satisfaction (480+ Reviews)' }
];
