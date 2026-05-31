import type { FaqItem, ServiceOffer } from "@/config/types";
import { siteConfig } from "@/config/site";

export const heroContent = {
  title:
    "Des sites vitrines créés avec rigueur : ultra-rapides pour vos clients, prêts pour les nouveaux moteurs de recherche.",
  titleEmphasis: "rigueur",
  leadSuffix:
    "Pas de fioritures ni de systèmes lourds qui rament. Je m'occupe de concevoir un site rapide, fiable et structuré pour que les assistants d'IA (comme ChatGPT) et Google trouvent vos informations sans jamais se tromper.",
  founderVoice:
    "J'aime le travail carré. Ma double compétence en développement et en analyse de données me permet de créer des sites transparents : vous reprenez le contrôle sur vos textes, et votre site est pensé pour durer, sans frais cachés.",
} as const;

export const serviceOffers: readonly ServiceOffer[] = [
  {
    id: "vitrine",
    title: "Sites Vitrines Haute Performance",
    description:
      "Un site rapide et clair pour que vos clients vous trouvent sur mobile, vous contactent facilement et que Google comprenne votre activité — sans abonnement technique obligatoire.",
    href: "/services",
  },
  {
    id: "agents",
    title: "Réponses Automatiques & IA Utile",
    description:
      "Un assistant sur votre site qui répond aux questions fréquentes (horaires, tarifs, services) en s'appuyant uniquement sur vos informations — moins de temps perdu au téléphone.",
    href: "/services",
    featured: true,
  },
  {
    id: "data",
    title: "Connexion de vos Outils Métiers",
    description:
      "Vos formulaires, e-mails et logiciels clients branchés ensemble pour éviter la double saisie et automatiser vos tâches administratives de façon simple.",
    href: "/contact",
  },
] as const;

export const homeWhySection = {
  kicker: "Comme une petite agence, sans la lourdeur",
  title: "Pourquoi travailler avec un solo technique ?",
} as const;

export const homeWhySteps = [
  {
    step: "01",
    title: "Un interlocuteur direct, du début à la fin",
    description:
      "Pas de compte manager interposé ni de file d'attente : on fixe les priorités ensemble, je construis et livre — vous validez à chaque étape importante.",
    accent: false,
  },
  {
    step: "02",
    title: "Des livraisons claires et régulières",
    description:
      "Prévisualisations fréquentes et explications en français clair : vous savez exactement ce qui est en ligne, sans surprise en fin de projet.",
    accent: false,
  },
  {
    step: "03",
    title: "L'IA seulement si ça vous fait gagner du temps",
    description:
      "Chaque automatisation est évaluée avant d'être ajoutée : pas de gadget inutile, seulement ce qui réduit concrètement votre charge de travail.",
    accent: true,
  },
] as const;

export const homeCtaSection = {
  title: "Un projet en tête ?",
  lead: "Décrivez votre besoin en quelques lignes — je réponds en général sous 48 h ouvrées.",
} as const;

export const homePackagesSection = {
  title: "Ce que je vous propose",
  lead:
    "Trois niveaux pour s'y retrouver — on ajuste après un vrai échange. Les prix sont des repères ; le devis final dépend de votre contenu et de vos délais.",
} as const;

export const iaBandContent = {
  title: "IA utile — quand elle vous fait gagner du temps",
  body: "Mon expérience en analyse de données m'a appris à poser les bonnes questions : qu'est-ce qu'on automatise, et où garde-t-on l'humain ? L'IA sur un site, c'est utile quand ça libère du temps sur des tâches répétitives — pas quand ça embrouille vos clients.",
} as const;

/** FAQ factuelle — titres en forme de question */
export function buildHomeFaq(): readonly FaqItem[] {
  const { siteName, founderName, founderCity, founderFirstName, email } = siteConfig;
  const essentielPrice = "à partir de 1 200 €";
  const proPrice = "à partir de 2 500 €";

  return [
    {
      question: `Qu'est-ce que ${siteName} ?`,
      answer: `${siteName} est l'activité de ${founderName}, ingénieur et développeur web basé à ${founderCity}. Je conçois des sites vitrine sur mesure, rapides et faciles à retrouver sur Google, avec des outils d'IA uniquement quand ils vous font gagner du temps.`,
    },
    {
      question: `Où est basé ${siteName} et travaille-t-on à distance ?`,
      answer: `Le studio est basé à ${founderCity}, en France. J'accompagne des clients en présentiel dans la région grenobloise et à distance (visio, e-mail) pour le reste de la France.`,
    },
    {
      question: "Quels services propose Studio Lecart ?",
      answer:
        "Trois axes : sites vitrines rapides et lisibles, réponses automatiques et IA utile sur votre site, et connexion de vos outils métiers pour éviter la double saisie.",
    },
    {
      question: "Quels sont les tarifs des forfaits vitrine ?",
      answer: `Trois repères : forfait Essentiel ${essentielPrice}, forfait Pro ${proPrice}, et Sur mesure & IA sur devis. Le devis final dépend du nombre de pages, du contenu fourni et des délais.`,
    },
    {
      question: `Comment contacter ${founderFirstName} Lecart ?`,
      answer: `Par e-mail à ${email} ou via le formulaire de contact du site. Je réponds généralement sous 48 h ouvrées.`,
    },
  ] as const;
}
