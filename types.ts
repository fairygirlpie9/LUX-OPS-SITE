export interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
  children?: NavItem[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

export interface Industry {
  id: string;
  title: string;
  icon: string;
  description: string;
  path: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  date: string;
  author: string;
  image?: string;
}
