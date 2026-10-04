export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'penthouse' | 'kitchen' | 'bedroom' | 'commercial';
  categoryLabel: string;
  location: string;
  area: string;
  timeline: string;
  style: string;
  image: string;
  beforeImage?: string;
  tagline: string;
  description: string;
  materials: string[];
  features: string[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aurora-penthouse',
    title: 'The Skyview Aurora Penthouse',
    category: 'penthouse',
    categoryLabel: 'Luxury Penthouse',
    location: 'Metropolitan Crest, Tower A',
    area: '4,850 sq.ft',
    timeline: '55 Days',
    style: 'Contemporary Minimalist & Marble Grandeur',
    image: '/images/hero_luxury_penthouse_1791094202424.jpg',
    beforeImage: '/images/project_luxury_living_1791094246614.jpg',
    tagline: 'Double-height volume with panoramic floor-to-ceiling glass and custom Italian joinery.',
    description: 'A complete turnkey transformation of a raw duplex penthouse shell into a grand, light-flooded sanctuary. Featuring acoustic wood slat ceilings, integrated cove illumination, and bookmatched Calacatta marble wall cladding.',
    materials: ['Calacatta Gold Marble', 'Natural Smoked Oak', 'Brushed Champagne Brass', 'Acoustic Fluted Panels'],
    features: ['Double-height architectural living room', 'Bespoke floating staircase with glass balustrade', 'Integrated smart mood lighting scene control', 'Concealed bar and climate-controlled wine display'],
    clientQuote: {
      text: 'Arcane Studio turned our empty concrete shell into a breathtaking masterpiece. The 45-day commitment was met to the exact hour.',
      author: 'Rajiv & Ananya Mehta',
      role: 'Owners, The Skyview Penthouse'
    }
  },
  {
    id: 'lumina-kitchen',
    title: 'Lumina Gourmet Modular Kitchen',
    category: 'kitchen',
    categoryLabel: 'Modular Kitchen',
    location: 'Altius Boulevard Residences',
    area: '420 sq.ft',
    timeline: '28 Days',
    style: 'German Engineering & Fluted Oak',
    image: '/images/project_modular_kitchen_1791094216789.jpg',
    tagline: 'Fluted wood cabinetry, quartz waterfall island, and hidden appliance pantry.',
    description: 'Precision engineered modular kitchen crafted with anti-fingerprint acrylic laminates, fluted natural oak veneers, and quartz waterfall countertops. Ergonomically designed with Blum motion hardware and sensor-driven internal drawer illumination.',
    materials: ['Silestone Quartz', 'Fluted Natural White Oak', 'Matte Anti-Scratch Acrylic', 'Satin Brass Hardware'],
    features: ['Seamless handle-less push opening profiles', 'Concealed pocket-door breakfast & coffee station', 'Zero-shadow task lighting channels', 'Integrated sub-zero refrigeration and induction cooktop'],
    clientQuote: {
      text: 'Cooking here is pure joy. Every spice pullout, pot drawer, and corner unit operates like clockwork precision.',
      author: 'Dr. Sameer Kulkarni',
      role: 'Home Chef & Neurosurgeon'
    }
  },
  {
    id: 'serenity-master-suite',
    title: 'Serenity Master Sanctuary',
    category: 'bedroom',
    categoryLabel: 'Master Suite',
    location: 'Emerald Hills Estate',
    area: '650 sq.ft',
    timeline: '32 Days',
    style: 'Warm Japandi & Acoustic Fluting',
    image: '/images/project_master_suite_1791094233175.jpg',
    tagline: 'Textured walnut paneling, diffused bedside pendants, and tinted glass wardrobe.',
    description: 'Designed as a tranquil haven away from city clamor. A continuous fluted walnut headboard wall integrates dimmable bedside drop lighting, floating nightstands, and a seamless transition into a custom bronze-framed walk-in wardrobe.',
    materials: ['Solid American Walnut', 'Belgian Woven Linen', 'Smoked Bronze Tempered Glass', 'Brushed Anthracite Metal'],
    features: ['Acoustic sound-dampening feature headboard', 'Walk-in dressing lounge with vanity backlight', 'Concealed motor-driven black-out drapery', 'Integrated discreet charging and sound dock'],
    clientQuote: {
      text: 'It feels like checking into a 5-star Tokyo boutique resort every single evening. The tactile materials are sublime.',
      author: 'Priya & Vikram Singhania',
      role: 'Homeowners, Emerald Hills'
    }
  },
  {
    id: 'paragon-living',
    title: 'Paragon Contemporary Salon',
    category: 'residential',
    categoryLabel: 'Living & Dining',
    location: 'Royal Palms Enclave',
    area: '1,200 sq.ft',
    timeline: '40 Days',
    style: 'Modern Classical & Tactile Stone',
    image: '/images/project_luxury_living_1791094246614.jpg',
    beforeImage: '/images/hero_luxury_penthouse_1791094202424.jpg',
    tagline: 'Bookmatched marble fireplace, curved bouclé seating, and open-plan dining.',
    description: 'An open-concept living and entertaining salon that balances formal grandeur with supreme residential comfort. A statement bookmatched marble feature wall houses a warm vapor linear fireplace, framed by bespoke display joinery.',
    materials: ['Bookmatched Statuario Marble', 'Bouclé Wool', 'Roman Travertine', 'Natural French Oak Parquet'],
    features: ['Bookmatched feature wall with ambient flame insert', 'Curved custom conversational furniture configuration', 'Concealed magnetic architectural track lighting', 'Integrated motorized sheer drapery pockets'],
    clientQuote: {
      text: 'Our guests are consistently mesmerized by the stone bookmatching and soft acoustic feel of the salon.',
      author: 'Kavita Chawla',
      role: 'Art Collector & Founder'
    }
  },
  {
    id: 'nexus-executive-lounge',
    title: 'The Nexus Commercial Studio & Lounge',
    category: 'commercial',
    categoryLabel: 'Commercial & Executive',
    location: 'Financial District Innovation Hub',
    area: '2,900 sq.ft',
    timeline: '48 Days',
    style: 'Boutique Corporate & Biophilic Warmth',
    image: '/images/project_commercial_lounge_1791094259478.jpg',
    tagline: 'Curved timber reception, terrazzo flooring, and private executive client lounges.',
    description: 'Transforming corporate headquarters into a welcoming, hospitality-grade spatial experience. Curvilinear timber slat partitions define private meeting pods while allowing natural light to penetrate deep into the core.',
    materials: ['Acoustic Curved Timber Slats', 'Cast Terrazzo Tiles', 'Brushed Solid Bronze', 'Architectural Moss Installations'],
    features: ['Sculptural bronze reception statement desk', 'Private video conference acoustic listening pods', 'Lush integrated indoor botanical garden wall', 'Hospitality espresso bar and client presentation lounge'],
    clientQuote: {
      text: 'Clients frequently tell us that our offices reflect the prestige and innovation of our brand before we even speak.',
      author: 'Marcus Vance',
      role: 'Managing Partner, Vance Advisory Group'
    }
  }
];
