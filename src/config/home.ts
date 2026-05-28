import type { FaqItem, HomeBentoCell, HomeStat, ServiceOffer } from "@/config/types";
import { siteConfig } from "@/config/site";

export const heroContent = {
  title: "Un site vivant et pro — sans la complexité inutile",
  titleEmphasis: "vivant",
  leadSuffix:
    "Vous gardez le contrôle sur le fond ; je m'occupe du cadre technique, des délais — et des idées IA seulement quand ça vous fait gagner du temps.",
  founderVoice:
    "J'aime les projets où on peut expliquer simplement ce qu'on fait — côté client comme côté code. Si votre site doit aussi accueillir un chatbot ou un petit agent, on le fait proprement, avec des règles claires.",
} as const;

export const homeStats: readonly HomeStat[] = [
  {
    title: "Un interlocuteur",
    description:
      "Du cadrage à la mise en ligne, sans file d'attente ni « compte manager » fantôme.",
  },
  {
    title: `${siteConfig.founderCity} & distance`,
    description:
      "Point régulier comme vous préférez : visio, message, ou café si vous êtes dans les cimes.",
  },
  {
    title: "Sites tenables",
    description:
      "Vitesse, structure SEO de base, et un socle propre pour faire évoluer le site plus tard.",
  },
] as const;

export const serviceOffers: readonly ServiceOffer[] = [
  {
    id: "vitrine",
    title: "Sites vitrines haute performance",
    description:
      "Pages légères, Core Web Vitals au vert et structure HTML sémantique : votre site charge vite, se positionne mieux et rassure Google comme vos visiteurs.",
    href: "/services",
  },
  {
    id: "agents",
    title: "Automatisation & agents IA",
    description:
      "GPT et modèles open source intégrés à votre stack : réponses clients, qualification de demandes, synthèse de tickets — avec garde-fous et traçabilité.",
    href: "/services",
    featured: true,
  },
  {
    id: "data",
    title: "Architecture de données",
    description:
      "Schémas propres, pipelines clairs et interopérabilité : vos CRM, formulaires et outils métiers parlent la même langue, sans silos opaques.",
    href: "/contact",
  },
] as const;

export const homeBentoSection = {
  kicker: "Comme une petite agence, sans la lourdeur",
  title: "Pourquoi travailler avec un solo technique ?",
} as const;

export const homePackagesSection = {
  title: "Ce que je vous propose",
  lead:
    "Trois niveaux pour s'y retrouver — on ajuste après un vrai échange. Les prix sont des repères ; le devis final dépend de votre contenu et de vos délais.",
} as const;

export const homeBento: readonly HomeBentoCell[] = [
  {
    title: "Moins de couches, plus de clarté",
    description:
      "Pas d'équipe offshore ni de jargon pour cacher le vide : on décide ensemble des priorités, je code et documente, vous validez. Idéal si vous préférez savoir qui fait quoi et à quelle vitesse ça avance.",
    wide: true,
  },
  {
    title: "Livraisons visibles",
    description:
      "Prévisualisation régulière, explications en français clair — pas besoin d'être dev pour comprendre ce qui change.",
  },
  {
    title: "IA seulement si ça paie",
    description:
      "Culture data : on mesure si un chatbot ou une automation vaut le coup avant de l'ajouter, pour éviter les gadgets.",
    accent: true,
  },
] as const;

export const iaBandContent = {
  title: "IA utile — grâce au bagage data",
  body: "La formation en data scientist m'a appris à poser les bonnes questions : qu'est-ce qu'on mesure, qu'est-ce qu'on automatise, et où garde-t-on l'humain ? Un chatbot ou un assistant sur votre site, c'est utile quand ça décharge les mêmes questions toute la journée — pas quand ça embrouille vos clients.",
} as const;

/** FAQ factuelle GEO — titres en forme de question */
export function buildHomeFaq(): readonly FaqItem[] {
  const { siteName, founderName, founderCity, founderFirstName, email } = siteConfig;
  const essentielPrice = "à partir de 1 200 €";
  const proPrice = "à partir de 2 500 €";

  return [
    {
      question: `Qu'est-ce que ${siteName} ?`,
      answer: `${siteName} est l'activité de ${founderName}, ingénieur et développeur web basé à ${founderCity}. Je conçois des sites vitrine sur mesure, avec SEO de base et des briques IA uniquement quand elles apportent un gain mesurable.`,
    },
    {
      question: `Où est basé ${siteName} et travaille-t-on à distance ?`,
      answer: `Le studio est basé à ${founderCity}, en France. J'accompagne des clients en présentiel dans la région grenobloise et à distance (visio, e-mail) pour le reste de la France.`,
    },
    {
      question: "Quels services propose Studio Lecart ?",
      answer:
        "Trois axes : sites vitrines performants (HTML sémantique, vitesse, SEO), automatisation et agents IA (chatbots, workflows), et architecture de données (CRM, formulaires, intégrations).",
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
