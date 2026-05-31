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
    featuredBadge: "Le plus demandé",
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
    tagline: "Automatisation, intégrations, parcours sur mesure.",
    bullets: [
      "Parcours sur mesure (prise de rendez-vous, qualification…)",
      "FAQ ou formulaires intelligents selon votre besoin",
      "Connexion à vos outils métiers (selon faisabilité)",
      "Évolutions e-commerce ou réservations : on cadrera plus tard",
      "Maintenance & évolutions en option mensuelle",
    ],
    ctaLabel: "Décrire mon besoin",
  },
] as const;

export const servicePillars = [
  {
    key: "vitrine",
    title: "Sites Vitrines Haute Performance",
    blurb:
      "Un site rapide et clair pour être trouvé sur Google et mobile, sans abonnement technique obligatoire.",
    primaryForfaitId: "pro" as const,
    secondaryForfaitIds: ["essentiel"] as const,
  },
  {
    key: "agents",
    title: "Réponses Automatiques & IA Utile",
    blurb:
      "Un assistant sur votre site qui répond aux questions fréquentes en s'appuyant sur vos informations.",
    primaryForfaitId: "sur-mesure" as const,
    secondaryForfaitIds: [] as const,
  },
  {
    key: "data",
    title: "Connexion de vos Outils Métiers",
    blurb:
      "Vos formulaires, e-mails et logiciels connectés pour éviter la double saisie.",
    primaryForfaitId: "sur-mesure" as const,
    secondaryForfaitIds: [] as const,
  },
] as const;

export function getPackageById(id: PackageId): PackageTier | undefined {
  return packages.find((p) => p.id === id);
}
