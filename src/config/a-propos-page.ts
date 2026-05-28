import { siteConfig } from "@/config/site";

/** Valeurs et positionnement de l'agence (page À propos / entité founder). */
export const agencyValues: readonly { title: string; description: string }[] = [
  {
    title: "Clarté avant jargon",
    description:
      "Explications en français simple, décisions documentées. Vous savez qui fait quoi et pourquoi.",
  },
  {
    title: "Performance et SEO de base",
    description:
      "Sites légers, HTML sémantique, structure indexable — pas de promesses magiques, des fondations solides.",
  },
  {
    title: "IA seulement si ça paie",
    description:
      "Culture data : on mesure l'intérêt d'un chatbot ou d'une automation avant de l'ajouter à votre site.",
  },
  {
    title: "Un interlocuteur unique",
    description:
      "Du brief à la livraison : pas de file d'attente ni de compte manager fantôme chez Studio Lecart.",
  },
] as const;

export const aProposPageLead = `Ingénieur, développeur, avec une formation de data scientist — ${siteConfig.founderFirstName} crée des sites qui tiennent la route techniquement et qui restent humains à lire.`;
