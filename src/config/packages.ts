import type { PackageId, PackageTier } from "@/config/types";

export const packages: readonly PackageTier[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    priceLabel: "À partir de 1 200 €",
    tagline: "Vitrine claire, vite en ligne.",
    bullets: [
      "1 à 3 pages (accueil, services, contact)",
      "Design adapté mobile & tablette",
      "Formulaire de contact sécurisé",
      "Mise en ligne & nom de domaine (selon option)",
      "Mini formation pour mettre à jour vos textes",
    ],
    ctaLabel: "En parler",
  },
  {
    id: "pro",
    name: "Pro",
    priceLabel: "À partir de 2 500 €",
    tagline: "Plus de contenu, plus de visibilité.",
    bullets: [
      "Jusqu'à 8 pages ou blog / actualités",
      "SEO de base (titres, structure, vitesse)",
      "Composants sur mesure (sections, galeries…)",
      "Intégration réseaux & outils tiers simples",
      "Accompagnement renforcé à la livraison",
    ],
    ctaLabel: "Demander un devis",
  },
  {
    id: "sur-mesure",
    name: "Sur mesure & IA",
    priceLabel: "Sur devis",
    tagline: "Automatisation, chatbot, intégrations.",
    bullets: [
      "Parcours sur mesure (prise de rendez-vous, qualification…)",
      "Chatbot / FAQ intelligente sur votre site",
      "Agents ou workflows connectés à vos outils (selon faisabilité)",
      "Évolutions e-commerce ou réservations : on cadrera plus tard",
      "Maintenance & évolutions en option mensuelle",
    ],
    ctaLabel: "Décrire mon besoin",
  },
] as const;

export const servicePillars = [
  {
    key: "vitrine",
    title: "Sites vitrines haute performance",
    blurb:
      "Vitesse, Core Web Vitals, structure SEO et clarté pour vos visiteurs.",
    primaryForfaitId: "pro" as const,
    secondaryForfaitIds: ["essentiel"] as const,
  },
  {
    key: "agents",
    title: "Automatisation & agents IA",
    blurb:
      "LLM, chatbots et workflows reliés à vos outils, avec garde-fous.",
    primaryForfaitId: "sur-mesure" as const,
    secondaryForfaitIds: [] as const,
  },
  {
    key: "data",
    title: "Architecture de données",
    blurb:
      "CRM, formulaires et systèmes qui communiquent sans silos opaques.",
    primaryForfaitId: "sur-mesure" as const,
    secondaryForfaitIds: [] as const,
  },
] as const;

export function getPackageById(id: PackageId): PackageTier | undefined {
  return packages.find((p) => p.id === id);
}
