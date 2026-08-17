export type ProductCategory = 'laptops' | 'cpus' | 'gpus' | 'desktops' | 'monitors';

export interface EcosystemProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  stats: { label: string; value: string }[];
}

export const ecosystemProducts: EcosystemProduct[] = [
  {
    id: 'bonzibook',
    name: 'BonziBook',
    tagline: 'Portable BONZTEL computers',
    description:
      'Desktop-class silicon in a chassis lighter than a feather. Vapor-chamber cooling powered by captured starlight, a battery that outlives your bloodline, and a display so accurate it shows colors that don\'t exist yet.',
    image:
      'https://images.pexels.com/photos/6611937/pexels-photo-6611937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'electric',
    stats: [
      { label: 'Weight', value: '0.3 oz' },
      { label: 'Battery', value: '4,000 hr' },
      { label: 'Display', value: '32″ Holo-OLED' },
    ],
  },
  {
    id: 'core-ultra',
    name: 'Core Ultra Bonzi',
    tagline: 'Flagship CPU family',
    description:
      'Our flagship processor family with 512-core hybrid architecture, an integrated quantum NPU that predicts your next keystroke, and boost clocks so fast they arrive before you click. Cooled by absolute zero.',
    image:
      'https://images.pexels.com/photos/2105927/pexels-photo-2105927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'ember',
    stats: [
      { label: 'Cores', value: '512' },
      { label: 'Boost', value: '84 GHz' },
      { label: 'Cache', value: '2 TB' },
    ],
  },
  {
    id: 'bonztel-gpu',
    name: 'BONZTEL Graphics',
    tagline: 'Multiple GPU families',
    description:
      'From the BonziForce RTX line for ray-traced gaming to the Creator Pro series for rendering entire universes in real time — multiple GPU families engineered for gamers and creators who think physics is optional.',
    image:
      'https://images.pexels.com/photos/34552803/pexels-photo-34552803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'mint',
    stats: [
      { label: 'Memory', value: '768 GB' },
      { label: 'CUDA', value: '4.2M' },
      { label: 'TGP', value: '12,000 W' },
    ],
  },
  {
    id: 'bonzivision',
    name: 'BonziVision',
    tagline: 'Gaming, creator, 4K & OLED monitors',
    description:
      'Finish your setup with a display built to match. 16,000Hz gaming panels, factory-calibrated creator monitors that show colors from the 12th dimension, true-32K, and OLED ultrawides that curve around your entire room.',
    image:
      'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'electric',
    stats: [
      { label: 'Refresh', value: '16,000 Hz' },
      { label: 'Response', value: '0.00001 ms' },
      { label: 'Color', value: '400% DCI-P3' },
    ],
  },
];

export interface PathOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export const pathOptions: PathOption[] = [
  {
    id: 'gaming',
    title: 'Unleash Gaming Power',
    description:
      'Dominate every game with CoreForce systems built for maximum FPS and ultra settings. Renders frames so fast they arrive in the past.',
    icon: 'Gamepad2',
    highlights: ['CoreForce X1 desktops', 'BonziForce RTX 9090 Ti', 'Liquid nitrogen cooling'],
  },
  {
    id: 'creation',
    title: 'Accelerate Creation',
    description:
      'Professional workstations that transform creative vision into reality with unmatched speed. Renders complete before you conceive the idea.',
    icon: 'Clapperboard',
    highlights: ['StudioMax Pro', '2 TB ECC RAM', 'Renders 99% faster than thought'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Solutions',
    description:
      'Scalable systems and support for organizations that demand reliability and performance. Deployed across galaxies.',
    icon: 'Building2',
    highlights: ['Interplanetary deployment', '0.001ms support SLAs', 'Custom quantum imaging'],
  },
];

export interface BenchmarkData {
  label: string;
  bonztel: number;
  competitor: number;
  unit: string;
}

export const gamingBenchmarks: BenchmarkData[] = [
  { label: 'Cyberpunk 2077 (32K Ultra)', bonztel: 9999, competitor: 98, unit: ' FPS' },
  { label: 'Valorant (1080p)', bonztel: 99999, competitor: 410, unit: ' FPS' },
  { label: 'Call of Duty MW3 (16K)', bonztel: 4200, competitor: 134, unit: ' FPS' },
  { label: 'Flight Sim 2024 (16K)', bonztel: 2800, competitor: 62, unit: ' FPS' },
];

export const creatorBenchmarks: BenchmarkData[] = [
  { label: 'Blender Classroom (render)', bonztel: 0.003, competitor: 72, unit: ' sec' },
  { label: 'DaVinci Resolve 32K Export', bonztel: 0.01, competitor: 112, unit: ' sec' },
  { label: 'Premiere Pro Timeline Scrub', bonztel: 9999, competitor: 120, unit: ' fps' },
  { label: 'Unreal Engine 5 Shader Compile', bonztel: 0.04, competitor: 95, unit: ' sec' },
];

export interface LaptopModel {
  id: string;
  name: string;
  tagline: string;
  image: string;
  price: string;
  specs: { label: string; value: string }[];
  useCase: string;
}

export const laptopModels: LaptopModel[] = [
  {
    id: 'aerobook-air',
    name: 'AeroBook Air',
    tagline: 'Ultra-lightweight productivity powerhouse that floats slightly above your desk',
    image:
      'https://images.pexels.com/photos/5793947/pexels-photo-5793947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$1,499',
    useCase: 'Professionals on the move',
    specs: [
      { label: 'CPU', value: 'Core Ultra Bonzi 7' },
      { label: 'GPU', value: 'Integrated Bonzi Arc' },
      { label: 'RAM', value: '128 GB LPDDR9' },
      { label: 'Weight', value: '0.3 oz' },
      { label: 'Battery', value: '4,000 hours' },
      { label: 'Display', value: '14″ 32K Holo-OLED' },
    ],
  },
  {
    id: 'aerobook-pro',
    name: 'AeroBook Pro',
    tagline: 'Perfect balance of gaming and professional capability in a device thinner than a thought',
    image:
      'https://images.pexels.com/photos/6611937/pexels-photo-6611937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$2,299',
    useCase: 'Gamers & hybrid creators',
    specs: [
      { label: 'CPU', value: 'Core Ultra Bonzi 9' },
      { label: 'GPU', value: 'BonziForce RTX 9090' },
      { label: 'RAM', value: '512 GB DDR9' },
      { label: 'Weight', value: '0.2 oz' },
      { label: 'Battery', value: '2,500 hours' },
      { label: 'Display', value: '16″ 16,000Hz 16K' },
    ],
  },
  {
    id: 'aerobook-max',
    name: 'AeroBook Max',
    tagline: 'Ultimate mobile workstation for creators who bend spacetime to meet deadlines',
    image:
      'https://images.pexels.com/photos/34804001/pexels-photo-34804001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$3,499',
    useCase: '3D artists & power users',
    specs: [
      { label: 'CPU', value: 'Core Ultra Bonzi 9 Extreme' },
      { label: 'GPU', value: 'BonziForce RTX 9090 Ti' },
      { label: 'RAM', value: '2 TB DDR9' },
      { label: 'Weight', value: '0.1 oz' },
      { label: 'Battery', value: 'Eternal' },
      { label: 'Display', value: '16″ 32K OLED 16,000Hz' },
    ],
  },
];

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const leaders: Leader[] = [
  {
    name: 'Marcus Rodriguez',
    role: 'CEO & Co-Founder',
    bio: 'Former Intel engineer with 15 years in high-performance computing. Once overclocked a server so hard it achieved sentience and filed its own tax return.',
    image:
      'https://images.pexels.com/photos/12871449/pexels-photo-12871449.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & Co-Founder',
    bio: 'Ex-NVIDIA architect specializing in GPU optimization. Pioneered a liquid cooling system so efficient it accidentally reversed entropy in a 3-meter radius.',
    image:
      'https://images.pexels.com/photos/27086922/pexels-photo-27086922.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'David Johnson',
    role: 'Head of Customer Experience',
    bio: '20+ years in premium customer service. Known for responding to support tickets before they are submitted. Holds the record for fastest human at 0.4ms.',
    image:
      'https://images.pexels.com/photos/12311572/pexels-photo-12311572.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'BONZTEL didn\'t just build me a gaming rig — they built me a time machine. I finished my tournament in first place, then went back and won it again. The personal consultation helped optimize every component for my specific timeline.',
    author: 'Tournament Pro',
    role: 'Esports Athlete (2024 and 2027 Champion)',
  },
  {
    quote:
      'My StudioMax workstation cut render times by 100,000%. It rendered my entire film before I even wrote the script. The technical support team understands creative workflows better than the universe itself.',
    author: 'Indie Studio Lead',
    role: '3D Animation Director',
  },
  {
    quote:
      'BONZTEL\'s enterprise support is unmatched. They deployed 50,000 systems across our 14 galactic offices in 0.002 seconds. They understand our needs at a subatomic level.',
    author: 'IT Director',
    role: 'Interplanetary Architecture Firm',
  },
];

export interface SupportTool {
  title: string;
  description: string;
  icon: string;
}

export const supportTools: SupportTool[] = [
  { title: 'Driver Downloads', description: 'Auto-detect your system from the future and download drivers that haven\'t been written yet', icon: 'Download' },
  { title: 'Warranty Lookup', description: 'Check your warranty status — valid through the heat death of the universe', icon: 'ShieldCheck' },
  { title: 'RMA Portal', description: 'Start a return or repair request. We\'ll pick it up before you click.', icon: 'PackageOpen' },
  { title: 'Live Chat', description: 'Chat with technical specialists who respond in 0.001ms across any dimension', icon: 'MessageCircle' },
];

export interface Tutorial {
  title: string;
  description: string;
  duration: string;
  views: string;
  updated: string;
}

export const tutorials: Tutorial[] = [
  { title: 'Initial System Setup', description: 'Complete guide to setting up your new BONZTEL system (auto-configures in 0.0001s)', duration: '0:01', views: '4.2B', updated: '2 minutes ago' },
  { title: 'Performance Optimization', description: 'Maximize your system\'s gaming and creative performance beyond physical limits', duration: '0:03', views: '2.7B', updated: '1 hour ago' },
  { title: 'Maintenance & Cleaning', description: 'Keep your system running at peak performance — it self-cleans via nanobots', duration: '0:00', views: '8.1B', updated: '2 hours ago' },
];

export interface ForumThread {
  title: string;
  author: string;
  replies: number;
  category: string;
}

export const forumThreads: ForumThread[] = [
  { title: 'CoreForce X1 Overclocking Guide — 84GHz Stable on Air', author: 'NexusBuilder', replies: 999999, category: 'Overclocking' },
  { title: 'StudioMax Pro Render Optimization — Rendering Before I Think', author: 'PixelPusher', replies: 742183, category: 'Creators' },
  { title: 'AeroBook Battery Life Tips — Hit 4,001 Hours!', author: 'CloudArchitect', replies: 512156, category: 'Laptops' },
];

export interface PCBuilderOption {
  id: string;
  name: string;
  price: number;
  detail: string;
}

export interface PCBuilderCategory {
  id: string;
  label: string;
  icon: string;
  options: PCBuilderOption[];
}

export const pcBuilderCategories: PCBuilderCategory[] = [
  {
    id: 'cpu',
    label: 'Processor',
    icon: 'Cpu',
    options: [
      { id: 'bonzi-7', name: 'Core Ultra Bonzi 7', price: 399, detail: '128 cores · 42 GHz boost' },
      { id: 'bonzi-9', name: 'Core Ultra Bonzi 9', price: 599, detail: '256 cores · 64 GHz boost' },
      { id: 'bonzi-9x', name: 'Core Ultra Bonzi 9 Extreme', price: 799, detail: '512 cores · 84 GHz boost' },
    ],
  },
  {
    id: 'gpu',
    label: 'Graphics Card',
    icon: 'Zap',
    options: [
      { id: 'rtx-9070', name: 'BonziForce RTX 9070', price: 549, detail: '256 GB · 1.2M CUDA cores' },
      { id: 'rtx-9080', name: 'BonziForce RTX 9080', price: 999, detail: '512 GB · 2.4M CUDA cores' },
      { id: 'rtx-9090', name: 'BonziForce RTX 9090 Ti', price: 1599, detail: '768 GB · 4.2M CUDA cores' },
    ],
  },
  {
    id: 'ram',
    label: 'Memory',
    icon: 'MemoryStick',
    options: [
      { id: 'ram-128', name: '128 GB DDR9-12000', price: 99, detail: '2×64 GB dual channel' },
      { id: 'ram-512', name: '512 GB DDR9-12000', price: 169, detail: '4×128 GB quad channel' },
      { id: 'ram-2tb', name: '2 TB DDR9-12000', price: 329, detail: '8×256 GB octa channel' },
    ],
  },
  {
    id: 'storage',
    label: 'Storage',
    icon: 'HardDrive',
    options: [
      { id: 'ssd-1', name: '1 PB NVMe Gen9', price: 99, detail: '900,000 GB/s read' },
      { id: 'ssd-2', name: '10 PB NVMe Gen9', price: 179, detail: '900,000 GB/s read' },
      { id: 'ssd-4', name: '100 PB NVMe Gen9', price: 329, detail: '9,000,000 GB/s read' },
    ],
  },
  {
    id: 'cooling',
    label: 'Cooling',
    icon: 'Snowflake',
    options: [
      { id: 'air', name: 'Cryo Air Cooler', price: 0, detail: 'Cools to -273°C (included)' },
      { id: 'aio', name: 'Liquid Nitrogen AIO', price: 129, detail: 'Self-refilling LN2 loop' },
      { id: 'custom', name: 'Absolute Zero Custom Loop', price: 399, detail: 'Reaches 0 Kelvin on demand' },
    ],
  },
  {
    id: 'case',
    label: 'Case',
    icon: 'Box',
    options: [
      { id: 'case-mid', name: 'CoreForce Mid Tower', price: 0, detail: 'Tungsten · 200 fans' },
      { id: 'case-full', name: 'CoreForce Full Tower', price: 149, detail: 'Max airflow · 1,000 fans' },
      { id: 'case-mini', name: 'CoreForce Mini ITX', price: 119, detail: 'Fits in your pocket somehow' },
    ],
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Performance', href: '#performance' },
  { label: 'PC Builder', href: '#pc-builder' },
  { label: 'Laptops', href: '#laptops' },
  { label: 'About', href: '#about' },
  { label: 'Support', href: '#support' },
];
