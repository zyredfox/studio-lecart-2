export type PackageTier = {
  id: string;
  name: string;
  priceLabel: string;
  tagline: string;
  bullets: readonly string[];
  ctaLabel: string;
};

export type PackageId = "essentiel" | "pro" | "sur-mesure";

export type CaseStudy = {
  id: string;
  title: string;
  /** Client ou projet commanditaire */
  client: string;
  sector: string;
  /** Problème initial */
  problem: string;
  /** Solution technique apportée par Studio Lecart */
  solution: string;
  /** Résultats factuels (performances, usage, ROI indicatif) */
  results: readonly string[];
  /** Stack technique principale */
  stack: readonly string[];
  /** URL du site en production (vide si non public) */
  resultUrl?: string;
};

export type NavItem = {
  href: string;
  label: string;
  /** Correspondance exacte pour l'accueil */
  end?: boolean;
};

export type ServiceOffer = {
  id: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

export type HomeStat = {
  title: string;
  description: string;
};

export type HomeBentoCell = {
  title: string;
  description: string;
  wide?: boolean;
  accent?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};
