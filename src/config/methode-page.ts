export type MethodeStep = {
  title: string;
  description: string;
};

/** Processus de travail Studio Lecart — ordre chronologique. */
export const methodeSteps: readonly MethodeStep[] = [
  {
    title: "Échange et définition des besoins",
    description: "On liste vos objectifs commerciaux.",
  },
  {
    title: "Structure et textes",
    description:
      "On organise vos contenus pour qu'ils soient clairs pour vos clients et les moteurs de recherche.",
  },
  {
    title: "Visualisation et validation",
    description: "Vous validez l'apparence du site avant sa construction.",
  },
  {
    title: "Développement et finitions",
    description:
      "Je code votre site sur mesure, proprement, en testant sa rapidité.",
  },
  {
    title: "Mise en ligne et prise en main",
    description:
      "Le site est publié, et je vous montre comment modifier vos textes en toute autonomie.",
  },
] as const;

export const methodePageLead =
  "Un déroulé transparent pour réduire le stress : vous savez où vous en êtes à chaque étape, du premier échange à la mise en ligne.";
