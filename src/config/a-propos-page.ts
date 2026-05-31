/** Valeurs et positionnement de l'agence (page À propos / entité founder). */
export const agencyValues: readonly { title: string; description: string }[] = [
  {
    title: "Clarté avant jargon",
    description:
      "Explications en français simple, décisions documentées. Vous savez qui fait quoi et pourquoi.",
  },
  {
    title: "Sites rapides et visibles",
    description:
      "Des pages légères, faciles à trouver sur Google et conçues pour durer — pas de promesses magiques, des fondations solides.",
  },
  {
    title: "IA seulement si ça paie",
    description:
      "Culture data : on mesure l'intérêt d'une automation avant de l'ajouter à votre site.",
  },
  {
    title: "Un interlocuteur unique",
    description:
      "Du brief à la livraison : pas de file d'attente ni de compte manager fantôme chez Studio Lecart.",
  },
] as const;

/** Accroche hero : promesse client, sans répéter diplômes / métiers (détailés plus bas). */
export const aProposPageLead =
  "Des sites vitrines nets, rapides et faciles à faire évoluer — pour les indépendants et TPE qui veulent une présence pro sans devenir techniciens.";
