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
      "Vous devez être trouvé, expliquer votre activité et offrir un contact simple — sans site lent ou illisible sur mobile.",
    solution:
      "Pages structurées pour vos visiteurs, design cohérent, formulaire ou parcours clair ; performance (chargement rapide) et base SEO saine (titres, structure, pas de promesses magiques sur Google).",
    deliverables:
      "Pages validées avec vous, hébergement / domaine selon options, courte prise en main pour vos textes ou images simples si vous le souhaitez.",
    primaryForfaitId: "pro",
    secondaryForfaitIds: ["essentiel"],
  },
  {
    id: "agents",
    title: "IA, chatbots & automatisation",
    problem:
      "Vous répondez souvent aux mêmes questions ou vous voulez orienter les visiteurs sans friction vers le bon formulaire.",
    solution:
      "Assistant conversationnel calibré sur vos textes et règles (horaires, zones, tarifs indicatifs…). FAQ, qualification de demande ou proposition de rendez-vous selon ce qu'on cadrera.",
    notIncluded:
      "Remplacer tout un service client ni vendre une IA sans périmètre mesurable.",
    deliverables:
      "Scénario validé, intégration au site, brief pour ajuster après les premiers retours.",
    primaryForfaitId: "sur-mesure",
  },
  {
    id: "data",
    title: "Architecture de données",
    problem:
      "Vos outils (CRM, tableurs, formulaires) ne « parlent » pas entre eux : doublons, saisie manuelle, vision floue du client ou du dossier.",
    solution:
      "Schéma clair des flux, formats d'échange et intégrations ciblées pour que les données circulent proprement — sans usine à gaz invisible.",
    deliverables:
      "Cartographie courte, choix techniques expliqués, premier branchement ou POC selon faisabilité — puis feuille de route pour la suite.",
    primaryForfaitId: "sur-mesure",
  },
] as const;
