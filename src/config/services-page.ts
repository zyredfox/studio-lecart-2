import type { PackageId } from "@/config/types";

export type ServiceDetailBlock = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  deliverables: string;
  notIncluded?: string;
  primaryForfaitId: PackageId;
  secondaryForfaitIds?: readonly PackageId[];
};

/** Blocs détaillés page /services (problème → solution → livrables). */
export const serviceDetailBlocks: readonly ServiceDetailBlock[] = [
  {
    id: "vitrine",
    title: "Sites Vitrines Haute Performance",
    problem:
      "Vos clients doivent vous trouver et vous contacter facilement, sans subir un site lent ou illisible sur mobile.",
    solution:
      "Un site rapide, léger et parfaitement structuré pour Google et les outils d'IA, sans abonnement technique obligatoire.",
    deliverables:
      "Pages validées avec vous, hébergement / domaine selon options, courte prise en main pour mettre à jour vos textes ou images simples si vous le souhaitez.",
    primaryForfaitId: "pro",
    secondaryForfaitIds: ["essentiel"],
  },
  {
    id: "agents",
    title: "Réponses Automatiques & IA Utile",
    problem:
      "Vous perdez trop de temps à répondre aux mêmes questions répétitives par e-mail ou au téléphone.",
    solution:
      "Un assistant intelligent sur votre site qui répond précisément à vos clients (horaires, tarifs, services) en se basant uniquement sur vos informations.",
    notIncluded:
      "Remplacer tout un service client ni vendre une IA sans périmètre clair et mesurable.",
    deliverables:
      "Scénario validé, intégration au site, brief pour ajuster après les premiers retours.",
    primaryForfaitId: "sur-mesure",
  },
  {
    id: "data",
    title: "Connexion de vos Outils Métiers",
    problem:
      "Vos formulaires, vos e-mails et vos logiciels clients ne communiquent pas entre eux, vous obligeant à tout recopier à la main.",
    solution:
      "Je branche vos outils ensemble pour automatiser vos tâches administratives de façon simple et transparente.",
    deliverables:
      "Cartographie courte, choix expliqués en français clair, premier branchement selon faisabilité — puis feuille de route pour la suite.",
    primaryForfaitId: "sur-mesure",
  },
] as const;
