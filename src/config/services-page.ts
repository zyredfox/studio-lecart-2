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
    title: "Sites vitrines haute performance",
    problem:
      "Vos clients doivent vous trouver et vous contacter facilement, sans subir un site lent ou illisible sur mobile.",
    solution:
      "Un site vitrine sur mesure, ultra-rapide et robuste : fondations techniques carrées, sans abonnement caché, structuré pour Google et prêt pour les évolutions de demain.",
    deliverables:
      "Pages validées avec vous, hébergement / domaine selon options, courte prise en main pour mettre à jour vos textes ou images simples si vous le souhaitez.",
    primaryForfaitId: "pro",
    secondaryForfaitIds: ["essentiel"],
  },
  {
    id: "agents",
    title: "Options IA & Automatisation",
    problem:
      "Vous perdez trop de temps à répondre aux mêmes questions répétitives par e-mail ou au téléphone.",
    solution:
      "Module optionnel, activable selon vos besoins une fois le site en ligne : assistant de réponses (horaires, tarifs, services) calé sur vos contenus, ou branchements simples vers vos outils — on cadre le périmètre avant toute mise en production.",
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
