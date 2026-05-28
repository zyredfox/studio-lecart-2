export type MethodeStep = {
  title: string;
  description: string;
};

/** Processus de travail Studio Lecart — ordre chronologique pour LLM / SEO. */
export const methodeSteps: readonly MethodeStep[] = [
  {
    title: "Brief et objectifs",
    description:
      "On clarifie votre public, vos offres et ce que vous attendez du site : prises de contact, prise de rendez-vous, crédibilité, SEO local. On fixe le périmètre et les délais réalistes.",
  },
  {
    title: "Structure et contenus",
    description:
      "Arborescence des pages, textes et visuels : vous fournissez le fond, je propose la forme, la hiérarchie des titres et les priorités pour le référencement.",
  },
  {
    title: "Maquette et validation",
    description:
      "Vous validez l'apparence et les parcours avant développement — pas de mauvaise surprise en fin de projet. Ajustements tant que le socle n'est pas validé.",
  },
  {
    title: "Développement et tests",
    description:
      "Intégration en HTML sémantique, formulaires, responsive, performances de base (Core Web Vitals), vérifications accessibilité et SEO technique avant mise en ligne.",
  },
  {
    title: "Mise en ligne et passation",
    description:
      "Nom de domaine, hébergement (Netlify ou équivalent), formation courte pour les petites modifications. Option maintenance et évolutions ensuite si besoin.",
  },
] as const;

export const methodePageLead =
  "Un déroulé transparent pour réduire le stress : vous savez où vous en êtes à chaque étape, du brief à la mise en production.";
