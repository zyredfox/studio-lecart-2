export type PackageTier = {
  id: string;
  name: string;
  featuredBadge?: string;
  priceLabel: string;
  tagline: string;
  bullets: readonly string[];
  ctaLabel: string;
};

export type PackageId = "essentiel" | "pro" | "sur-mesure";

export type CaseStudyId = "tata-carotte" | "sainte-barbe" | "atelier-lisa";

export type CaseStudy = {
  id: CaseStudyId;
  title: string;
  /** Courte ligne pour cartes accueil / hero */
  cardSummary: string;
  /** Client ou projet commanditaire */
  client: string;
  sector: string;
  /** Situation / besoin du client */
  problem: string;
  /** Ce qui a été livré (langage métier, pas stack) */
  solution: string;
  /** Bénéfices concrets pour le client */
  outcomes: readonly string[];
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
